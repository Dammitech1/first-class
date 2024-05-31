function circleArea(radius) {
  return Math.PI * radius**2;
}

function cylinderArea(radius, height) {
  return circleArea(radius) *2* height;
}

function squareArea(side) {
  return side**2;
}

let radius = 10
let height = 5
let side = 4

let cArea = circleArea(radius)
let cyArea = cylinderArea(radius, height)
let sArea = squareArea(side)

console.log("the area of a circle of radius ", radius, " is ", cArea, " and the area of a cylinder of radius thesame radius and height ", height, " is ", cyArea)
console.log("the area of a circle of radius ", radius, " is ", Math.ceil(cArea), " and the area of a cylinder of radius thesame radius and height ", height, " is ", Math.ceil(cyArea))
console.log("the area of a circle of radius ", radius, " is ", Math.round(cArea), " and the area of a cylinder of radius thesame radius and height ", height, " is ", Math.round(cyArea))
console.log("the area of a circle of radius "+radius+ " is "+ Math.round(cArea)+ " and the area of a cylinder of radius thesame radius and height "+ height+" is "+ Math.round(cyArea))
console.log(`the area of a circle of radius ${radius} is ${Math.round(cArea)} and the area of a cylinder of radius thesame radius and height ${height} is ${Math.round(cyArea)}`)
console.log(`

the area of a circle of radius
  ${radius} is ${Math.round(cArea)}
  and the area of a cylinder of radius thesame radius and height
  ${height} is ${Math.round(cyArea)}
`)
console.log("the area of a square of side ", side, " is ", sArea)

// COMMENTING IN JAVASCRIPT
//1. single line comment
  // this is a single line comment in javascript initiated by two forward slashes
  // single line comments only affect the line they are written on
  // and they affect the line from the point they are written to the end of the line
  // although they still can be used to acheive multiline comments by writing them on multiple lines
  // as we did use it in this explanation
  // but this is not the best practice

//2. multiline comment
  /*
    this is a multiline comment in javascript initiated by a forward slash and an asterisk
    multiline comments can span multiple lines
    and they can be used to comment out multiple lines of code
    multiline comments are best used for commenting out multiple lines of code
    and not for writing long explanations like we did in the single line comment
    this is the best practice for multiline comments
  */


    // function in javascript

    /*
    the name in variable is the identifier assigned to it 
    which allow the programmers to reference and manipulate the data store within the container
    the name act as label or reference point to the data
    and make it easier to work with the code
    */

    
    /*
    parameter variable are flexible and cnba be use to pass any type of value for the function
    such as string,array,number,objert or even other the function
    */


    /*
    function in javascript are the fundamental building blocks in javascript programming
    and allow to encapsulate a piece of code thst csn be called and executed in any point of program
    */
   

   // variable in javascript

   //1. var in variable is the primary keyword use to declare variable 
   //2. let in variable allow us to declare block-scope variable 
   //3. const variable use to declare variable that cannot be change 

   
   
   



