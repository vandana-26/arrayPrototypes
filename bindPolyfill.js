let name =  {
    firstName: "Vandana",
    lastName: "Gupta"
}

let printName = function () {
    console.log(this.firstName + " " +this.lastName);
}

let printMyName = printName.bind(name); //name as reference to this variable inside printName method.
printMyName();

//.......................................................................................................................

// Task is to write myBind function which will behave exactly like this bind method here.

Function.prototype.myBind = function(thisArgs) {
    let obj = this;
 return function() {
    obj.call(thisArgs);   // we somehow need to access the name variable and pass it 
 }   
}

let printMyName1 = printName.myBind(name);
printMyName1();

// ..................................................................................................................................
// Now in printName method we have another arguments as well like hometown
let printName1 = function (hometown) {
    console.log(this.firstName + " " +this.lastName + " " + hometown);
}

let printMyName2 = printName1.bind(name, "Mohali");
printMyName2();

//We need to handle these Arguments as well in myBind method otherwise it will come as undefined.

let printName2 = function (hometown, state) {
    console.log(this.firstName + " " +this.lastName + " " + hometown + "," + state);
}

Function.prototype.myBind1 = function(...thisArgs) {
    let obj = this;
    params = thisArgs.slice(1);
    return function(...thisArgs2) {
        obj.apply(thisArgs[0], [...params,...thisArgs2])
    }
}

let printMyname3 = printName2.myBind1(name, "Mohali");
printMyname3("Punjab");
