
import { testing } from "./tests.mjs";

export const INCHES_TO_METER = 0.0254;
export const INCHES_TO_CENTIMETER = 2.54;
export const INCHES_TO_MILLIMETER = 25.4;


if (isRunningInBrowser()) {

  const clearBtn = document.getElementById("clear");
  clearBtn.onclick = () => {
    const outputTextElement = document.getElementById("outputtext");
    outputTextElement.innerHTML = ""
  }

  const bt = document.getElementById("convertButton");
  bt.onclick = () => {
    const value = parseFloat(document.getElementById('inputNumber').value);
    const unit = document.getElementById('selectConversion').value;
    const result = convertValue(value, unit);

    const outputTextElement = document.getElementById("outputtext");
    const li = document.createElement("li");

    li.innerHTML = `Result: ${result} ${unit}`;
    outputTextElement.appendChild(li);

  }
} else {
  const args = process.argv;
  const shouldTest = args.some((item) => item === "-t")
  if (!shouldTest) {
    const value = parseFloat(args[2])
    const unit = args[3]
    const result = convertValue(value, unit)
    console.log(`${result} ${unit}`)
  } else {
    testing();
  }
}

export function convertValue(value, unit) {

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

export function convertInchesToMillimeters(inches) {
  return inches * INCHES_TO_MILLIMETER
}

export function convertInchesToCentimeters(inches) {
  return inches * INCHES_TO_CENTIMETER
}
export function convertInchesToMeters(inches) {
  return inches * INCHES_TO_METER
}
