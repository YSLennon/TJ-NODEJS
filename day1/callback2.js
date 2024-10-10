

function printFunc(param){
    param(2, 5);
}

printFunc(function(x, y){
    console.log(x+y);
});

printFunc((x, y)=>{
    console.log(x*y);
});

