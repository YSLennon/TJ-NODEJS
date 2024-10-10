const c = require('ansi-colors');

console.log(c.red('This is a red string!'));
console.log(c.green('This is a red string!'));
console.log(c.cyan('This is a cyan string!'));
console.log(c.yellow('This is a yellow string!'));
asConsole('맞아요 이렇게 사용할 수 있답니다?');

console.log(__dirname);
console.log(__filename);

function asConsole(str){
    console.log(c.yellow(str));

}
