let myNumbersArray: number[] = [1, 2, 3];
let myOtherNumbersArray: Array<number> = [...myNumbersArray, 4, 5, 6];

console.log(myOtherNumbersArray);

let userName: any = { firstName: 'John', lastName: 'Doe' };
let userDetails: any = { address: '123 NE ST.', mobile: '332434324', email: 'john@email.com', ...userName }

console.log(userDetails);


function sum(a?, b?, c?): number {
    return a + b + c;
}

console.log(sum(...myNumbersArray));


console.log(`Got the user with details - Address: ${userDetails.address}, Mobile: ${userDetails.mobile}`);

// Gets the firstname property from the username object and assign to the (newly created) firstname object
let { firstName } = userName;
console.log(firstName);

let [ a ] = myNumbersArray;
console.log(a);

let [x,y, ...z] = myOtherNumbersArray;
console.log(x, y, z);