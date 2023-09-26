
import { testing } from "./tests.mjs";

export const INCHES_TO_METER = 0.0254;
export const INCHES_TO_CENTIMETER = 25.4;
export const INCHES_TO_MILLIMETER = 2.54;


if (isRunningInBrowser()) {
  const bt = document.getElementById("convertButton");
  bt.onclick = () => {
    const result = convertValue()

    const outputTextElement = document.getElementById("outputtext");
    outputTextElement.innerHTML = `Result: ${result}`;

  }
} else {

  let args = process.argv;
  const shouldTest = args.some((item) => item === "-t")
  if (shouldTest) {
    testing();
  } else {
    const result = convertValue()
    console.log(`${result}${unit}`)
  }
}

function convertValue() {
  let value;
  let unit;

  if (isRunningInBrowser()) {
    value = parseFloat(document.getElementById('inputNumber').value);
    unit = document.getElementById('selectConversion').value;

  } else {
    let args = process.argv;
    value = parseFloat(args[2])
    unit = args[3]
  }
  if (unit === "-mm") {
    return convertInchesToMillimeters(value);
  } else if (unit === "-cm") {
    return convertInchesToCentimeters(value);
  } else if (unit === "-m") {
    return convertInchesToMeters(value);
  } else {

    return convertInchesToMillimeters(value);

  }

}

export function isRunningInBrowser() {
  try {
    if (document) {
      return true;
    }
  } catch (error) {
    return false;
  }

  return false;
}


//kanksje konvertere dette til en  ternary operation for og gjøre det lettere og lese
export function convertInchesToMillimeters(inches) {
  return inches * INCHES_TO_MILLIMETER
}

export function convertInchesToCentimeters(inches) {
  return inches * INCHES_TO_CENTIMETER
}
export function convertInchesToMeters(inches) {
  return inches * INCHES_TO_METER
}
