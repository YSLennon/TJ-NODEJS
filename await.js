function delay(time){
    return new Promise(
        (resolve) => {
            
            setTimeout(resolve, time);
            // const str = '성공'
            // resolve(str);
        });
    
}
async function run(){
    await delay(1000);
    console.log(1);
    await delay(1000);
    console.log(1);
    await delay(1000);
    console.log(1);
}


run()