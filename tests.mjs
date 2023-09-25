
import { convertInchesToMeters,convertInchesToCentimeters,convertInchesToMillimeter } from "./convert.mjs";


let args = process.argv ;
  
console.log(args) ;
const shouldTest = args.some((item) => item === "-t") 

if (shouldTest){
  testconvertInchesToMeters();
  testConvertInchesToMillimeter();
  testConvertInchesToCentimeter();
}


function testconvertInchesToMeters(){
    if (convertInchesToMeters(1) === 0.0254) {
        console.log("Test meters Passed");
      } else {
        console.error("Test meters Failed");
      }
}

function testConvertInchesToCentimeter(){
    if (convertInchesToCentimeters(1) === 2.54) {
        console.log("Test cm Passed");
      } else {
        console.error("Test cm Failed");
      }
}

function testConvertInchesToMillimeter() {

    if (convertInchesToMillimeter(1) === 25.4) {
      console.log("Test mm Passed");
    } else {
      console.error("Test mm Failed");
    }
  }