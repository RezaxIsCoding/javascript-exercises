const sumAll = function(a, b) {
    let sum = 0;
    if(typeof a === 'number' && typeof b === 'number'){
        if(a >= 0 && b >= 0 ){
            if (a <= b){
                for(let i = a ; i <= b ; i++){
                    sum = sum + i;
                 }
            }
            else{
                for(let i = b ; i <= a ; i++){
                    sum = sum + i;
                 }
            }
          return sum;
        }
        else{
            return 'ERROR';
        }
    }
    else {
        return 'ERROR';
    }
    
    
}
sumAll(1, 4);
sumAll(1, 4000);
sumAll(123, 1);
sumAll(-10, 4);
sumAll(10, "90");
sumAll(10, [90, 1]);
// Do not edit below this line
module.exports = sumAll;
