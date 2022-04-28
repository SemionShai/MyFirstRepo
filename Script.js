//let height = 184; //in cm 

//if(height > 200){
    //console.log("You cant ride");
//}else if(height>=150){
    //console.log("you can ride");
//}else{
   // console.log("not allow");
//}

///////////////////////////////////////////////

//function greet(){
    //console.log("Wellcome to JS ");
//}
//greet();

//////////////////////////////////////////////////

// function sayHi(firstname, lastName){
// console.log("Hi " + firstname + " " lastName);
// }
// sayHi("Simon","Shai");

//////////////////////////////////////////////////

// function sum(num1,num2){
//  console.log(num1 + num2);
// }

// sum(10,20);

///////////////////////////////////////////////////

// function doSomthing(){
//     return 10;
// }
// let result = doSomthing()
// console.log(result)

///////////////////////////////////////////////////////

// "function doSomthing(){
//     return 10;
// }
// console.log(doSomthing);"

/////////////////////////////////////////////////////////

function bmiCalculator(weight, height){
    return(weight /(height * height));
}

function bodyMassIndex(){
    const bmi = bmiCalculator(70,1.7)
if (bmi < 18.5){
    console.log("You are Under weight")
}else if( bmi < 24.9){
    console.log(NOrmal);
}else if( bmi <29.9){
    console.log(Over weight);
}else if( bmi < 24.9){
    console.log(NOrmal);

}
    }
}