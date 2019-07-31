let myLetVariable: number;
myLetVariable = 234234;
myLetVariable = 233432432;
myLetVariable = 2343423;

function logMyLetVar() {
    let myLetVariable;
    myLetVariable = 2;
    console.log(myLetVariable);
}

console.log(myLetVariable);

logMyLetVar();

const myConstVariable: boolean = true;
const myOtherConstVariable: any = { foo: 'bar', baz: 'boo' };
myOtherConstVariable.foo = 'abc';