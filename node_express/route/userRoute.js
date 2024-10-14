const express = require('express');
const router = express.Router();
const connection = require('../db');

router.route('/')
    .get((req, res) => {
        const query = 'SELECT * FROM TBL_USER';
        connection.query(query, (err, results) => {
            if(err){
                console.error('쿼리 실행 실패: ', err);
                res.status(500).send('서버 오류');
                return;
            }
            // res.status(200).render('user', {list: results});

            res.render('user', {list: results});
        })
    })
    .post((req, res) => {
        var user = req.body;
        const query = 'INSERT INTO TBL_USER VALUES (?,?,?,?)';
        connection.query(query, [user.id, user.pwd, user.name, user.gender], (err, results) => {
            if(err){
                console.error('failed user insert: ' + err);
                res.status(500).send('failed user insert: ' + err);
                return;
            }
            res.redirect(303,'/user');
        })
        // const query = `INSERT INTO TBL_USER VALUES ('${req.body.id}', '${req.body.pwd}', '${req.body.name}', '${req.body.gender}')`
        // connection.query(query, (err, results) => {
        //     if(err){
        //         console.error('failed user insert: ' + err);
        //         res.status(500).send('failed user insert: ' + err);
        //         return;
        //     }
        //     res.redirect(303,'/user');
        // })
    })
    .put((req, res) => {
        const query = 'UPDATE TBL_USER SET ID = ?, PWD = ?, NAME = ?, GENDER = ? WHERE ID = ?'
        const user = req.body;
        console.log(user);

        connection.query(query, [user.id, user.pwd, user.name, user.gender, user.id], (err, results) => {
            if(err){
                console.error('udpate exceptino: ' + err);
                res.status(500).send('udpate exceptino: ' + err);
                return;
            }
            res.redirect('/user');

        })
    })

router.route('/:id')
    .get((req, res) => {
        const query = 'SELECT * FROM TBL_USER WHERE ID = ?'
        connection.query(query, [req.params.id], (err, results) => {
            if(err){
                console.error('userId error: ' + err);
                res.status(500).send('userId Error : ' + err);
                return;
            }
            res.render('user-update', {user: results[0]});
        })
    })
    .delete((req, res) => {
        const query = 'DELETE FROM TBL_USER WHERE ID = ?'
        console.log('delete')
        connection.query(query, [req.params.id], (err, results) => {
            if(err){
                console.error('delete exceptino: ' + err);
                res.status(500).send('delete exceptino: ' + err);
                return;
            }
            res.redirect('/user');

        })
    })

router.route('/insert')
    .get((req, res) => {
        res.render('user-insert');
    })

module.exports = router;