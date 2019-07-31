// Boolean
var myBoolean;
myBoolean = true;
myBoolean = false;
myBoolean = null;
myBoolean = undefined;
// Number
var myNum;
myNum = 3232;
myNum = -3232;
myNum = 3232.2121;
myNum = 0x3232;
myNum = 1690;
myNum = 170;
myNum = null;
myNum = undefined;
// String
var myString;
myString = 'dsad';
myString = "fsdfdsf";
myString = function () {
    return 'ssfdfdf';
}();
myString = 'sdfg'.slice(0, 1);
myString = null;
myString = undefined;
// Function
function logToConsole() {
    console.log("sdfdsfd");
}
// Array
var myArray;
myArray = ['rw3434', "tggfgf"];
myArray = null;
myArray = undefined;
var myGenericArray = ['werwet', 213213];
var myOtherGenericArray = ['werwet', 213213];
// Any
var myAny;
myAny = 'rtrtt';
myAny = true;
myAny = 546546;
myAny = ['fdgfdgf', 4534543];
// Enum
var Days;
(function (Days) {
    Days[Days["MONDAY"] = 1] = "MONDAY";
    Days[Days["TUESDAY"] = 2] = "TUESDAY";
    Days[Days["WEDNESDAY"] = 3] = "WEDNESDAY";
})(Days || (Days = {}));
var dayToday = Days.MONDAY;
// Tuple
var myTuple = ['string', 343242343];
