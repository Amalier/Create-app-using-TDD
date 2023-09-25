
const inches = 4
const millimeters = convertInchesToMillimeter(inches);
const centimeters = convertInchesToCentimeters(inches)
const meters = convertInchesToMeters(inches)


console.log(meters)
console.log(millimeters)
console.log(centimeters)

testconvertInchesToMeters();
testConvertInchesToMillimeter();
testConvertInchesToCentimeter();

function testconvertInchesToMeters(){
    if (convertInchesToMeters(1) === 0.0254) {
        console.log("Test meters Passed");
      } else {
        console.error("Test meters Failed");
      }
}
function convertInchesToMeters(inches){
    return inches * 0.0254
}


function testConvertInchesToCentimeter(){
    if (convertInchesToCentimeters(1) === 2.54) {
        console.log("Test cm Passed");
      } else {
        console.error("Test cm Failed");
      }
}

//kanksje konvertere dette til en  ternary operation for og gjøre det lettere og lese
function convertInchesToMillimeter(inches){
    return inches * 25.4// inch mm er 25,4 mm
    
    }
function testConvertInchesToMillimeter() {

    if (convertInchesToMillimeter(1) === 25.4) {
      console.log("Test mm Passed");
    } else {
      console.error("Test mm Failed");
    }
  }
  

  function convertInchesToCentimeters(inches) {
    return inches * 2.54;
  }


 