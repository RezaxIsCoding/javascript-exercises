const fibonacci = function(pos) {
    if (pos < 0){
        return "OOPS";
    }
let n1 = 0 , n2 = 1;
n = parseInt(pos);
if (n == 0){
    return 0;
}
else if(n == 1){
    return 1;
}
else{
    let nextTerm = 0;
    for(let i = 2 ; i <= n ; i++){
      nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return nextTerm;
}


};

// Do not edit below this line
module.exports = fibonacci;
