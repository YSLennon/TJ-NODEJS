const fs = require('fs');

// fs.readdir('./', (err, files) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(files);
    
// });

// fs.readFile('./fs.txt', (err, data) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     // console.log(data.toString());
    
// })

// fs.readFile('./fs.txt','utf8', (err, data) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     // console.log(data.toString());
//     // console.log(data);
//     fs.writeFile('fs2.txt',data, (err) => {
//         if(err){
//             console.log(err);
//             return;
//         }
//         console.log('성공');
//     });  
// })

// 이런 양식은 안되나? -> 되는구나? ㅋㅋ
const fs2 = require('fs').promises;

async function fsRead(){
    try{
        const result = await fs2.readFile('./fs.txt', 'utf8');
        await fs2.writeFile('fs3.txt', result)
        console.log('성공');
    } catch(err){
        console.log(err);
    }
}
fsRead();