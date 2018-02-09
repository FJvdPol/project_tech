var a, b, value, othervalue; value = 3; othervalue = 5;
// a                  variable
// 2                  literal value
// *, /, =, +, -    operators
// a = b * 2;     statement
// a = b;           assignement expression
// b * 2;           ahritmetic expression, also, expression statement
// 2;                 literal value expression
// a;                 variable expression
a = b * 2; // contains all four forms of expression

a = "2";
b = Number(a); // (explicit) coercion

// ========= block ===========
{
    a = 100;
    a = a*2;
}


// ======= conditionals ========
if (value < othervalue){
    // run code
}
else if(value > 100){
    // run code
}
else {
    // run code
}

// ========= Loops ===========
while (value < othervalue){
    // run code again and again untill break of while loop
}

value = 3;
for (var i = 0; i < value; i++){
    // run code over and over again amount of times equal to value
    // in this case, run the code 3 times, since value = 3
}

// ============ Functions ========
function name(){
    // code
}
function othername(argument){
    // code making use of value of argument
    return argument * 3; // triples the put in value of argument
}
name(); // call name
value = othername(3); // call othername with value 3
console.log(value) // prints 9, since argument is 3 and it gets tripled in othername


// ============ Objects =================
// stores different properties (variables) and methods (functions)
var newobject = {
    a: "hi",
    b: 0,
    c: value,
    d: function(){
        console.log("fired newobject function")
    }
}
console.log(newobject.a, newobject.b, newobject.c) // logs: "hi" 0 3
newobject.d(); // fires the function sitting in property "d" within newobject

// ------------- Arrays --------------------
var newarray = [10, 20, 30, 40];
console.log(newarray[0], newarray[1]); // logs 10 20 (array indexes start at 0);


/*==-/|\-==*/
