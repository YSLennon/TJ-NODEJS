const http = require('http');

const server = http.createServer((req, res) => {
    const {method, url} = req;
    console.log(method);
    console.log(url);

    //res.setHeader("Content-Type", "text/plain");
    res.writeHeader(200, {"Content-Type": "text/plain; charset=utf-8"});
    res.write('ㅇㅇ');
    if(url == '/main'){
        res.end('main');
    } else if(url == '/hi'){
        res.end('hi');
    } else{
        res.end('끝남');
    }
    
});

server.listen(8080, () => {
        console.log('서버 대기 중 ㅎㅇ?');
    });
    