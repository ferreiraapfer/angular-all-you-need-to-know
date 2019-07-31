var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var myNumbersArray = [1, 2, 3];
var myOtherNumbersArray = myNumbersArray.concat([4, 5, 6]);
console.log(myOtherNumbersArray);
var userName = { firstName: 'John', lastName: 'Doe' };
var userDetails = __assign({ address: '123 NE ST.', mobile: '332434324', email: 'john@email.com' }, userName);
console.log(userDetails);
function sum(a, b, c) {
    return a + b + c;
}
console.log(sum.apply(void 0, myNumbersArray));
console.log("Got the user with details - Address: " + userDetails.address + ", Mobile: " + userDetails.mobile);
// Gets the firstname property from the username object and assign to the (newly created) firstname object
var firstName = userName.firstName;
console.log(firstName);
var a = myNumbersArray[0];
console.log(a);
var x = myOtherNumbersArray[0], y = myOtherNumbersArray[1], z = myOtherNumbersArray.slice(2);
console.log(x, y, z);
