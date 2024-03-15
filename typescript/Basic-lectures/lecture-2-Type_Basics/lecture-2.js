var myName = 'Veljko';
var age = 30;
var isBlackBelt = false;
// arrow function, takes diameter as parameter
var circle = function (diameter) {
    console.log('Math PI: ', Math.PI);
    console.log('Character: ', myName);
    return diameter * Math.PI;
};
console.log(circle(20.23));
