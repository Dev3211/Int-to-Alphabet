function num_ways(data){
let arr = []
let temp = []

let inta = {
1: 'a',
2: 'b',
3: 'c',
4: 'd',
5: 'e',
6: 'f',
7: 'g',
8: 'h',
9: 'i',
10: 'j',
11: 'k',
12: 'l',
13: 'm',
14: 'n',
15: 'o',
16: 'p',
17: 'q',
18: 'r',
19: 's',
20: 't',
21: 'u',
22: 'v',
23: 'w',
24: 'x',
25: 'y',
26: 'z'
}

let split = data.split(',');
let s = data.length - split.length
const newArray = split.map(string => string.trim())

if(split.length == 0) return 'did you even input anything?'
if(data[s] == '0') return 'I wonder if 0 exists in the alphabet index'

Object.keys(inta).forEach(function(key, index) {
if(inta.hasOwnProperty(newArray[index])){
temp.push(inta[newArray[index]])
}
});

return temp
}


var test = num_ways('1, 2, 3, 26') //[a, b, c, z]
console.log(test)
