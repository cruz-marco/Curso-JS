function print(...args){
    console.log(...args);
};

//Tribonacci
function tribonacci(signature, n){
    if (n < 3){
        return signature.slice(0,n);
    } else {
        while (signature.length < n){
            signature.push(signature.slice(-3).reduce(
                (acc, currValue) => acc+currValue,0
            ));
        };
        return signature;
    };
};

/*
const testarr = [0,1,1,2];
const n = 2;
n < 3 ? print(testarr.slice(0,n)) : print(testarr);
print(testarr.slice(-3).reduce((accumulator, currenValue) => accumulator + currenValue,0));
print(tribonacci([0,1,1], 0));
*/

//Longest string sorter
/*const str = 'aaabcdegfkiz';
print([... new Set(str.split(''))].sort().join(''))
*/

function longest(s1, s2){
    const str = s1+s2;
    return [... new Set(str.split(''))].sort().join('');
};

// return the odd
const arr = [1,2,2,3,3,3,4,3,3,3,2,2,1];
/*
const count = arr.reduce((accumulator, value) => {
    accumulator[value] = ++accumulator[value] || 1;
  
    return accumulator;
  }, {});
  */
/*
for (let key in count){
    if (count[key] % 2 !== 0){
        print(Number(key));
    }
}
*/

function findOdd(A){
    A = A.reduce((accumulator, value) => {
        accumulator[value] = ++accumulator[value] || 1;
      
        return accumulator;
      }, {});
    for(let key in A){
        if (A[key] % 2 !== 0 ){
            return Number(key);
        };
    };
};

//const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

//print(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))
  
/*
let str = 'AAAABBBCCDAABBB';

str = str.split('');
let newStr = [];
for (char of str){
    if (newStr.length === 0){
        newStr.push(char);
    } else {
        if(newStr.slice(-1)[0] !== char){
            newStr.push(char);
        }
    }
}*/

function uniqueInOrder(iterable){
    let newStr = [];
    if (typeof iterable === 'string'){
        iterable = iterable.split('')
    }
    for (char of iterable){
        if (newStr.length === 0){
            newStr.push(char);
        } else {
            if(newStr.slice(-1)[0] !== char){
                newStr.push(char);
            }
        }
    }
    return newStr
}

//print(uniqueInOrder('AAAABBBCCDAABBB'))

//const nomes = ['Marco', 'Marcelo', 'Ezio', 'Dulce'];

function likes(arrNome){
    if (arrNome.length === 0) {
        return 'no one likes this';
    } else {
        if (arrNome.length === 1){
            return `${arrNome[0]} likes this`;
        } else if (arrNome.length === 2) {
            return `${arrNome[0]} and ${arrNome[1]} like this`;
        } else if (arrNome.length === 3) {
            return `${arrNome[0]}, ${arrNome[1]} and ${arrNome[2]} like this`;
        } else {
            return `${arrNome[0]}, ${arrNome[1]} and ${arrNome.length - 2} others like this`;
        };
    };
};


function getCount(str){
    str = str.toLowerCase().split('');
    const vowels = 'aeiou'.split('');
    let counter = 0;
    for(let char of str){
        vowels.includes(char) ? counter++ : counter;
    };
    return counter;
};


//print(getCount('xangalabilongo'));
/*
let a = [1,2,3]

a[120] = 200

//print(a.length)


var x =10;
for (let i=1; i <= x; i++){
    if (i%2 ==0){
        print(i)
    }
}*/


  /*
  function decodeMorse(code) {
    const MORSE_CODE = {
        ".-": "A", "-...": "B", "-.-.": "C", "-..": "D", ".": "E", "..-.": "F", "--.": "G", "....": "H", "..": "I", ".---": "J", "-.-": "K", ".-..": "L", "--": "M", "-.": "N", "---": "O", ".--.": "P", "--.-": "Q", ".-.": "R", "...": "S", "-": "T", "..-": "U", "...-": "V", ".--": "W", "-..-": "X", "-.--": "Y", "--..": "Z",
        "-----": "0", ".----": "1", "..---": "2", "...--": "3", "....-": "4", ".....": "5", "-....": "6", "--...": "7", "---..": "8", "----.": "9"
      };
    return code
      .trim()
      .split("   ")
      .map(word => word.split(" ")
        .map(letter => MORSE_CODE[letter])
        .join("")
      )
      .join(" ");
  }

  const decodedMessage = decodeMorse('.... . -.--   .--- ..- -.. .');
console.log(decodedMessage); // Output: "HEY JUDE"*/
/*
function decodeMorse(code) {
    const MORSE_CODE = {
        '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E',
        '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J',
        '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O',
        '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T',
        '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y',
        '--..': 'Z', '-----': '0', '.----': '1', '..---': '2', '...--': '3',
        '....-': '4', '.....': '5', '-....': '6', '--...': '7', '---..': '8',
        '----.': '9', '···−−−···': 'SOS'
    };

    // Split the Morse code into words
    const words = code.trim().split('   ');

    // Decode each word
    const decodedWords = words.map(word => {
        // Split the word into Morse code characters
        const chars = word.split(' ');

        // Decode each Morse code character
        const decodedChars = chars.map(char => MORSE_CODE[char]);

        // Join the decoded characters to form a word
        return decodedChars.join('');
    });

    // Join the decoded words with spaces to form the final decoded message
    return decodedWords.join(' ');
}

// Example usage:
const morseCode = '.... . -.--   .--- ..- -.. .';
const decodedMessage = decodeMorse(morseCode);
console.log(decodedMessage);  // Output: "HEY JUDE"*/

let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

//let aux = varC;

/*
varC = varA;
varA = varB;
varB = aux;
*/

[varA, varB, varC] = [varB, varC, varA]

print(varA, varB, varC);

