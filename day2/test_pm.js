// 1

async function fnPrint(){
    try{
        await setTimeout(()=>console.log('첫번째'), 1000);
        await setTimeout(()=>console.log('두번째'), 1000);
    } catch(error){
        console.log(error);
    }
}

// 2

function func1(callback, x, y){
    callback(x,y);
}

// 3

function func2(name, age, callback){
    callback(name,age);
}

function func3(name, age){
    console.log(`${name}님의 나이는 ${age}입니다`);
}

// 4

const {sum, minus} = require('./test_pm_module');

fnPrint();

func1((x,y)=>console.log(x+y), 1, 2);

func2('홍길동', '30', func3);

console.log(sum(3,1));
console.log(minus(3,1));

