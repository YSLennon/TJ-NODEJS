const express = require('express');
const router = express.Router();
const connection = require('../db');

router.route('/')
    .get((req, res) => {
        const query = 'SELECT * FROM TBL_STUDENT'
        connection.query(query,(err, results) => {
            if(err){
                console.error('student select error: ' + err);
                res.status(500).send('student select error: ' + err);
                return;
            }
            res.render('student', {list: results});
        })
    })

router.route('/:stuNo')
    .get((req, res) => {
        const query = `SELECT * FROM TBL_STUDENT WHERE STUNO = ${req.params.stuNo}`;
        connection.query(query, (err, results) => {
            if(err){
                console.error('specific student select error: ' + err);
                res.status(500).send('specific student select error: ' + err);
                return;
            }
            res.render('student-modify', {student: results[0]});
        })
    })
    .put((req, res) => {
        const query = `UPDATE TBL_STUDENT SET STUNO = ?, STUNAME = ?, STUDEPT = ?, STUGRADE = ? WHERE STUNO = ${req.params.stuNo}`;
        const student = req.body;
        connection.query(query, [ student.stuNo, student.stuName, student.stuDept, student.stuGrade ], (err, results) => {
            if(err){
                console.error('specific student update error: ' + err);
                res.status(500).send('specific student update error: ' + err);
                return;
            }
            res.redirect('/student');
        })
    })
    .delete((req, res) => {
        const query = `DELETE FROM TBL_STUDENT WHERE STUNO = ${req.params.stuNo}`;
        const student = req.body;
        connection.query(query, (err, results) => {
            if(err){
                console.error('specific student delete error: ' + err);
                res.status(500).send('specific student delete error: ' + err);
                return;
            }
            res.redirect('/student');
        })
    })

module.exports = router;