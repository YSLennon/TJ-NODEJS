// promise (pending, fulfilled, rejected)

var promise = new Promise((resolve, reject) => {
    let flg = false;
    setTimeout(() => {
        //대강 1초 실행됨    
        if (flg) {
            resolve('성공');
        } else {
            reject('실패');
        }
    }, 1000);
    // resolve = ()=> {console.log('성공')};
    // reject = ()=> {console.log('실패')};
});

// promise
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((err) => {
//         console.log(err);
//     })
//     .finally(() => {
//         console.log("끝")
//     })


promise
    .then((data) => {
        console.log(data);
    }, (err) => {
        console.log(err);
    })
    .finally(() => {
        console.log("끝")
    })