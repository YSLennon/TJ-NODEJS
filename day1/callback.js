// callback함수

function sum(x, y){
    console.log(x+y);
    return x + y;
}
function mul(x, y){
    console.log(x*y)
    return x*y
}
function printFunc(param){
    param(3,2)
}

print(mul);


