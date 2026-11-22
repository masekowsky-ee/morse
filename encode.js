import getCode from "./morseAlphabet.js";
import soundGen from "./soundGen.js"

export default function encode(e) {
    e.preventDefault();
    let input = document.getElementById("input")
        .value.replace(/\s+/g, "");
    console.log(input);

    let output = "";
    for (let i = 0; i < input.length; i++) {
        output += getCode(input[i]) + "     ";
    }

    document.getElementById("output").textContent = output;

    let binaryOutput = "";
    output.split(" ").forEach((code) => {
        for (let i = 0; i < code.length; i++) {
            if (code[i] === ".") {
                binaryOutput += "0";
            } else if (code[i] === "-") {
                binaryOutput += "1";
            }
        }
    });
    document.getElementById("binaryOutput").textContent = binaryOutput;
    soundGen(binaryOutput);
}