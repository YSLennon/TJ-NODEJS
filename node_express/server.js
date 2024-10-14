const express = require('express');
const app = express();
const methodOverride = require('method-override');

// 확장자 및 경로 설정
app.set('view engine', 'ejs');
app.set('views', './template');



app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 주소 관리를 외부로 분리함
app.use(methodOverride('_method'));
app.use('/board', require('./route/boardRoute'));
app.use('/user', require('./route/userRoute'));
app.use('/student', require('./route/studentRoute'))




// // 호출한 메서드에 따라서 다른걸 불러온다
// router.route('/test')
//         .get((req, res) => {
//             res.send('get Test');
//           })
//         .post((req, res) => {
//             res.send('post Test');
//           });

// app.get('/', function (req, res) {
//   res.send('Hello World');
// })

// router.route('/board/:boardNo')
//         .get(function (req, res){
//             res.send(`${req.params.boardNo}번 게시글 가져오기`);
//         })
//         .put(function (req, res){
//             res.send(`${req.params.boardNo}번 게시글 수정`);
//         })
//         .delete(function (req, res){
//             res.send(`${req.params.boardNo}번 게시글 삭제`);
//         })
// // 데이터 가져오기
// app.get('/board/:boardNo', function (req, res){
//     res.send(`${req.params.boardNo}번 게시글 가져오기`);
// })

// // 데이터 수정
// app.put('/board/:boardNo', function (req, res){
//     res.send(`${req.params.boardNo}번 게시글 수정`);
// })
// // 데이터 삭제
// app.delete('/board/:boardNo', function (req, res){
//     res.send(`${req.params.boardNo}번 게시글 삭제`);
// })


app.listen(3000, () => {
    console.log('-------------------------------------------------------------------------------------------------------------------------------------------------------------------------');
})
