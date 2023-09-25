
const inches = 4
const millimeters = convertInchesToMillimeter(inches);

function convertInchesToMillimeter(inches){
return inches * 25.4// 1 mm er 25,2 inches

}

function convertInchesToMillimeterTester() {

    if (convertInchesToMillimeter(1) === 25,4) {
      console.log("Test Passed");
    } else {
      console.error(" Test Failed");
    }
  }

  function convertToCentimeters(inches) {
    return inches * 2.54;
  }

 convertInchesToMillimeterTester();
 console.log(millimeters)
