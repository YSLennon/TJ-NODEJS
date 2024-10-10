const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World');
})

// 데이터 가져오기
app.get('/board/:boardNo', function (req, res){
    res.send(`${req.params.boardNo}번 게시글 가져오기`);
})

// 데이터 수정
app.put('/board/:boardNo', function (req, res){
    res.send(`${req.params.boardNo}번 게시글 수정`);
})
// 데이터 삭제
app.delete('/board/:boardNo', function (req, res){
    res.send(`${req.params.boardNo}번 게시글 삭제`);
})

// postman?
app.post('/what', function (req, res){
    res.send('post what?');
})

app.listen(3000, () => {
    console.log('-------------------------------------------------------------------------------------------------------------------------------------------------------------------------');

})
