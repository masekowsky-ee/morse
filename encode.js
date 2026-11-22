import getCode from "./morseAlphabet.js";
import soundGen from "./soundGen.js"

export default function encode(e) {
    e.preventDefault();
    let input = document.getElementById("input")
        .value.replace(/_/g, "_")
        .replace(/\s+/g, "_");
    console.log(input);

    let output = "";
    for (let i = 0; i < input.length; i++) {
        output += getCode(input[i]) + "+";
    }

    let binaryOutput = "";
    output.split(" ").forEach((code) => {
        for (let i = 0; i < code.length; i++) {
            if (code[i] === ".") {
                binaryOutput += "0";
            } else if (code[i] === "-") {
                binaryOutput += "1";
            } else if (code[i] === "_") {
                binaryOutput += "_";
            } else if (code[i] === "+") {
                binaryOutput += "+";
            }
        }
    });

    soundGen(binaryOutput);

    output = output
        .replace(/_/g, " _ ")
        .replace(/\+/g, " ");
    document.getElementById("output").textContent = output;

    binaryOutput = binaryOutput
        .replace(/_/g, " _ ")
        .replace(/\+/g, " ");
    document.getElementById("binaryOutput").textContent = binaryOutput;
}