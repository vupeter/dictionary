const fs = require('fs');

const dictionaryObject = function(){
    let words = fs.readFileSync(`${__dirname}/dictionary/english.txt`).toString('utf-8');
    let wordsArray = words.split('\n');
    let wordsObject = wordsArray.reduce( (acc,val)=>{
        acc[val] = 1;  
        return acc;
    },{})
    return wordsObject;
}

module.exports = dictionaryObject();