const leapYears = function(year) {
 if((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
    return true;
 }
 else{
    return false;
 }
};
leapYears(1996);
leapYears(1997);
leapYears(34992);
leapYears(1900);
leapYears(1600);
leapYears(700);


// Do not edit below this line
module.exports = leapYears;
