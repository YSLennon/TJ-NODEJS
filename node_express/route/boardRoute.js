const express = require('express')
const router = express.Router();
const connection = require('../db');

router.route('/')
        .get((req, res) => {
            // res.send('get board');
            const query = 'SELECT * FROM TBL_BOARD';
            connection.query(query, (err, results) => {
                if (err) {
                    console.error('쿼리 실행 실패: ', err);
                    res.status(500).send('서버 오류');
                    return;
                }
                res.render('board', { list: results});
            })
            // var data = {
            //     list: [
            //         {'boardNo': 1,'title': 'java', 'userId': 'user01'},
            //         {'boardNo': 2,'title': 'kotlin', 'userId': 'user02'},
            //         {'boardNo': 3,'title': 'flutter', 'userId': 'user03'},
            //     ],
            //     message : 'success',
            //     result : true
            // }
            // res.render('board', data);
          })
        .post((req, res) => {
            //res.send('post board');
            var data = {
                list: [
                    {'boardNo': req.body.boardNo,'title': req.body.title, 'contents': req.body.contents},
                ],
                message : 'success',
                result : true
            }
            res.render('board', data);
          });

// router.route('/:boardNo')
//         .get(function (req, res){
//             res.send(`${req.params.boardNo}번 게시글 가져오기`);
//         })
//         .put(function (req, res){
//             res.send(`${req.params.boardNo}번 게시글 수정`);
//         })
//         .delete(function (req, res){
//             res.send(`${req.params.boardNo}번 게시글 삭제`);
//         })
    router.route('/insert')
        .get(function (req, res){
            res.render('board-insert')
        })
    
module.exports = router;