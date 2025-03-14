# Why Blockchains?

- Inflating currencies
- No trust(The big short )
- SVB scam
- Bailouts
- currenciies inflation

# Intro to hasing

## hasing is the process of encrypting the messaage into some randome gibbrism

`input="shravan",
hash(input)
output=e7d6r5df76gr5fd7gt6refd7gb6trf7g6r`

its irrereversable its deterministic , Fast computation
eg : sha 256

```
const crypto=require("crypto")
function Hash(input){
    let hash=crypto.createHash("sha256").update(input).digest("hex")
    return hash;
}
console.log(Hash("Shravan"))
```


now for every input we can generate an Hash like this now 
now POW means Prood of work 
in which for the same thing
###### the next part is the nonce
in which we use an input number we basically find a 256 hash code which starts wiith 00000 
by iincrementing the iinput


```
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
console.log(generateNonce("shravan sent raman 200 rs ", "0000"));
```

this just takes in a vaalue transaction attaches and the goaal iis to find aa hash like some gibbrish the goal cannot be acheved with static shit so just add some dynamiic element 
shravan 1 hash starts with 000?
shravan 2 hash starts with 000?
like that you keep iterating the integer vaalue until you find a vlue 
like 
shravan 23432 generates a hash which starts with 000
now 23432 is the nonce 

what if we could do the same thing for transactioong

*Shravan -> Kumar 200*
---
``
Hash:  00000f7de7bcfa28530a657bfd5bc0abd4bdd52b77a99b21d2ed0164ae2e7796
Shravan => kumar | 200443655
``