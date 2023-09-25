

if (!isRunningInTerminal()) {
  // I nettleseren
  const bt = document.getElementById("convertButton");
  const select = documnet.getElementById("selectConversion")
  bt.onclick = () => {
  };
}

function isRunningInTerminal() {
  try {
    if (document) {
      return false;
    }
  } catch (error) {
    return true;
  }

  return true;
}
if (isRunningInTerminal) {
  TerminalApp()
}

function TerminalApp() {
  let args = process.argv;

  const isMillimeter = args.some((item) => item === "-mm")
  const isCentmeter = args.some((item) => item === "-cm")
  const isMeter = args.some((item) => item === "-m")
  const number = parseFloat(args[2])
  //args.find((item ) => typeof (item * 1) === "number")
  //console.log(number)

  if (isMillimeter) {
    console.log(convertInchesToMillimeter(number))
  } else if (isCentmeter) {
    console.log(convertInchesToCentimeters(number))
  } else if (isMeter) {
    console.log(convertInchesToMeters(number))
  }
}


export function convertInchesToMeters(inches) {
  return inches * 0.0254
}

//kanksje konvertere dette til en  ternary operation for og gjøre det lettere og lese
export function convertInchesToMillimeter(inches) {
  return inches * 25.4// inch mm er 25,4 mm
}

export function convertInchesToCentimeters(inches) {
  return inches * 2.54;
}
