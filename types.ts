// Boolean
let myBoolean: boolean;
myBoolean = true;
myBoolean = false;
myBoolean = null;
myBoolean = undefined;

// Number
let myNum: number;
myNum = 3232;
myNum = -3232;
myNum = 3232.2121;
myNum = 0x3232;
myNum = 0o3232;
myNum = 0b10101010;
myNum = null;
myNum = undefined;

// String
let myString: string;
myString = 'dsad';
myString = "fsdfdsf";
myString = function () {
    return 'ssfdfdf';
}();
myString = 'sdfg'.slice(0, 1);
myString = null;
myString = undefined;

// Function
function logToConsole(): void {
    console.log("sdfdsfd");
}

// Array
let myArray: string[];
myArray = ['rw3434', "tggfgf"];
myArray = null;
myArray = undefined;

let myGenericArray: (string | number)[] = ['werwet', 213213];
let myOtherGenericArray: Array<string | number> = ['werwet', 213213];

// Any
let myAny: any;
myAny = 'rtrtt';
myAny = true;
myAny = 546546;
myAny = ['fdgfdgf', 4534543];

// Enum
enum Days {
    MONDAY = 1, TUESDAY = 2, WEDNESDAY = 3
}
let dayToday: Days = Days.MONDAY;

// Tuple
let myTuple: [string, number] = ['string', 343242343];
