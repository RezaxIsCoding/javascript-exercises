const repeatString = function(str, num) {
    if(num >= 0){
        return str.repeat(num);
    }
   else{
    return 'ERROR';
   }
};
repeatString('hey',3);
repeatString('hey',10);
repeatString('hey',1)
repeatString('hey',0);
repeatString('hey',-1);
repeatString('hey', 1).match(/(hey)/g).length;
repeatString('', 10);
// Do not edit below this line
module.exports = repeatString;
