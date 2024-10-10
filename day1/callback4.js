// 콜백지옥

function func(numb, callback, limit){
    if(numb != limit){
        setTimeout(()=> {
            console.log(numb);
            callback(numb+1, callback, limit);
        },1000)
    } else {
        setTimeout(()=> {
            console.log('끝');
        },1000)
        
    }
}

// function func1(callback, callback2, callback3){
//     setTimeout(()=> {
//         console.log(1);
//         callback(callback2, callback3);
//     },1000)
    
// }
// function func2(callback, callback2){
//     setTimeout(()=> {
//         console.log(2);
//         callback(callback2);
//     },1000)
// }
// function func3(callback){
//     setTimeout(()=> {
//         console.log(3);
//         callback();
//     },1000)
// }
// function func4(){
//     setTimeout(()=> {
//         console.log(4);
//     },1000)
// }

function func1(callback){
    setTimeout(()=> {
        console.log(1);
        callback();
    },1000)
    
}
function func2(callback){
    setTimeout(()=> {
        console.log(2);
        callback();
    },1000)
}
function func3(callback){
    setTimeout(()=> {
        console.log(3);
        callback();
    },1000)
}
function func4(callback){
    setTimeout(()=> {
        console.log(4);
        callback();
    },1000)
}


// 실행구문
//func(1, func, 5)

//func1(func2, func3, func4)
// func1(()=>{
//     func2(()=>{
//         func3(()=>{
//             func4(()=>{
//                 setTimeout(()=>{
//                     console.log('끝')
//                 },1000);
//             })
//         })
//     })
// })

