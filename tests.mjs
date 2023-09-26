
import {
  convertInchesToMeters,
  convertInchesToCentimeters,
  convertInchesToMillimeters,
  isRunningInBrowser,
  INCHES_TO_CENTIMETER,
  INCHES_TO_MILLIMETER,
  INCHES_TO_METER
} from "./convert.mjs";


function testIsRunningInBrowser() {
  if (isRunningInBrowser()) {
    console.log("Is running in browser test true");
  } else {
    console.error("is running in browser test false");
  }
}

export function testing() {
  testConvertInchesToMillimeter();
  testConvertInchesToCentimeter();
  testconvertInchesToMeters()
  testIsRunningInBrowser();// hvis dokument eksisterer, alltid retunerer false
}

function testConvertInchesToMillimeter() {

  if (convertInchesToMillimeters(1) === INCHES_TO_MILLIMETER) {
    console.log("Test mm Passed");
  } else {
    console.error("Test mm Failed");
  }
}
function testConvertInchesToCentimeter() {
  if (convertInchesToCentimeters(1) === INCHES_TO_CENTIMETER) {
    console.log("Test cm Passed");
  } else {
    console.error("Test cm Failed");
  }
}
function testconvertInchesToMeters() {
  if (convertInchesToMeters(1) === INCHES_TO_METER) {
    console.log("Test meters Passed");
  } else {
    console.error("Test meters Failed");
  }
}


