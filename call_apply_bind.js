let name = {
    firstName: "Vandana",
    lastName: "Gupta",
    printName: function() {
        console.log(this.firstName + this.lastName);          //Here this is pointing to name object
    }
}

name.printName();

let name2 = {
    firstName: "Aravind",
    lastName: "Dinakaran"
}
// Now I want to use printname function instead of writing it inside name2 object again, we can borrow the function and here call 
// method will come into picture
// We can borrow functions from other objects and use it with the data of some other object
// Each and every method in js has access to this method -> call

name.printName.call(name2);  // name2 where we want this to be pointed

//-------------------------------------------------------------------------------------------------------------------

//Generally we dont keep our methods into objects like we did above

let name3 = {
    firstName: "Vandana",
    lastName: "Gupta",
};

let printName1 = function() {
    console.log(this.firstName + this.lastName);
}

printName1.call(name3); //first argument will always reference to 'this'.

//----------------------------------------------------------------------------------------------------------------------

let name4 = {
    firstName: "Vandana",
    lastName: "Gupta",
};

let printName2 = function(homeTown) {       // funcion has its own argument
    console.log(this.firstName + this.lastName + " from " + homeTown); 
}

printName2.call(name4, "Mohali");


//....................................Apply............................................................................

// The difference between call and apply method is the way we pass arguments
//Second argument will be list of arguments which we have to pass to the function

let name5 = {
    firstName: "Vandana",
    lastName: "Gupta",
};

let printName3 = function(homeTown, state) {       // funcion has its own argument
    console.log(this.firstName + this.lastName + " from " + homeTown + " , " + state); 
}

printName3.apply(name4, ["Mohali", "Punjab"]);  // Passing in array list



//............................Bind........................................................
//It looks same as call method.

let printMyName = printName2.bind(name4, "Mohali");
// It will create a copy of printName2 and bind that to name4 object and will return a function which can be called later.

console.log("aaaaaaaaaa",printMyName);
printMyName();

