
import {
  convertInchesToMeters,
  convertInchesToCentimeters,
  convertInchesToMillimeters,
  isRunningInBrowser,
  INCHES_TO_CENTIMETER,
  INCHES_TO_MILLIMETER,
  INCHES_TO_METER,
  convertValue
} from "./convert.mjs";

function testConvertValue() {
  if (convertValue(2, "-mm") === INCHES_TO_MILLIMETER * 2) {
    console.log("test convertvalue -mm passed")
  } else {
    console.log("test convertvalue -mm failed")
  }
  if (convertValue(2, "-cm") === INCHES_TO_CENTIMETER * 2) {
    console.log("test convertvalue -cm passed")
  } else {
    console.log("test convertvalue -cm failed")
  } if (convertValue(2, "-m") === INCHES_TO_METER * 2) {
    console.log("test convertvalue -m passed")
  } else {
    console.log("test convertvalue -m failed")
  }
}


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
  testconvertInchesToMeters();
  testConvertValue();
  testIsRunningInBrowser();// dokument eksisterer ikke i terminal, tester blir ikke vellykket (alltid false)
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


