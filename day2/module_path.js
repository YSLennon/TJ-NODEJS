const path = require("path");

// 경로 결합
const filePath = path.join(__dirname, 'src', 'test.txt');
console.log(filePath);
// 파일 이름 추출
const fileName = path.basename(filePath);
console.log(fileName); // 'file.txt'
// 확장자 추출
const extName = path.extname(filePath);
console.log(extName); // '.txt'


var txtPath = path.join(__dirname, "src", "test.txt");
const location = path.dirname(txtPath);
//console.log(txtPath);
const onlyFileName = path.basename(filePath, extName);
console.log(onlyFileName);