

var b = 10;

// a();

console.log("Printing b in global scope: ", b);


function e(){
    var d = 50;
    function a() {
    
        function c() {
           /**
            * When the execution is at this line of code, 
            * the value of b is searched first in the scope of function c
            * Since it is not present in local scope of function c, the program then searches for 
            * b in the scope of function a
            * 
            * Further since it is not present in the local scope of a, it further accesses the value of 
            * variable b from the global scope where it has been defined as 10
            * 
            * This is because of the concept of 'scope chaining' in JS
            */
           console.log("Printing b inside function c: ", b);
           console.log("Printing d inside function c: ", d);
    
           /**
            * Since function C is enclosed by function a, while the execution is present within function c
            * In the scope, we have an object called as a closure, this is basically the variables present in the
            * local execution context of function a
            * 
            */
        }
    
        var b = 100;
    
        c();
    }
    a();

    f();
}
e();

function f() {
    
    function c() {

       console.log("Printing b inside function c: ", b);
       try{
        console.log("Printing d inside function c: ", d)
       }
       catch(err){
           /**
            * Since function f is not lexically present inside function e, we will not have access to 
            * the variable 'd'
            */
        console.log("d not accesible here inside function f");
       }
       
    }

    var b = 100;

    c();
}


/**
 * A function has access to a closure only if it is lexically present inside a parent function. 
 * The closure does not come to picture if a function is not defined inside a function where it is called
 * 
 * Closure basically allows propogation of variable values to child functions that are directly defined in
 * the parent function's body
 */