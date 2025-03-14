const crypto = require("crypto");

let input = "Shravan";
let hash = "";
function GenKey(inputStr) {
  hash = crypto.createHash("sha256").update(inputStr).digest("hex");
  return hash;
}

// finding  a nonce
// 00000 = inputStr
// generate aa nonce which staarts with a given number of prefix zeros 
function POW(prefix) {
  let input = 0;

  while (true) {
    let inputStr = input.toString();
    let hash = GenKey(inputStr);
    if (hash.startsWith(prefix)) {
      console.log("Hash: ", hash);
      return inputStr;
    }
    input++;
  }
}
// const startTime = new Date().getTime();
// console.log(POW("00000000"));
// const endTime = new Date().getTime();
// console.log("Time taken: ", endTime - startTime);

// here daataa = shravan nonce=0000
function generateNonce(data, nonce){
    let input=0;
    while(true){
        let inputStr = data+input.toString();
        // shravan1234
        let hash = GenKey(inputStr);
        if(hash.startsWith(nonce)){
            console.log("Hash: ", hash);
            return inputStr;
        }
        input++;
    }

}

function verify shit

console.log(generateNonce("Shravan => kumar | 200", "00000"));