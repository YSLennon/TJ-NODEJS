
function print1(str, a){
    console.log('첫 번째 출력');
    console.log(a);
    console.log(str);
}


// setTimeout(print1, 3000, '안녕', 1)
// setTimeout(function(a, str){
//     console.log('첫 번째 출력');
//     console.log(a);
//     console.log(str);
// }, 2000, '안녕', 2)

// setTimeout((a, str) => {
//     console.log('첫 번째 출력');
//     console.log(a);
//     console.log(str);
// }, 1000, '안녕', 3);
// console.log(0);
// setTimeout(()=>console.log(1), 2000);
// console.log(2);

// setTimeout(()=>{
//     console.log('콜백지옥 첫번째')
//     setTimeout(()=>{
//         console.log('콜백지옥 두번째')
//         setTimeout(()=>{
//             console.log('콜백지옥 세번째')
//         }, 1000)
//     }, 1000)
// }, 1000);

function hellCallBack(a,fn){
    if(a != 4){
        console.log('콜백지옥 ' + a + '번째');
        a += 1;
        setTimeout(hellCallBack, 1000, a);
    } else {
        return;
    }
}
setTimeout(hellCallBack, 1000, 1);


