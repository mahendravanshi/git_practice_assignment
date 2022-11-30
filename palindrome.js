let str = "racecar";

let bag = "";
for(let i=0;i<str.length;i++){
   
bag = str[i]+bag;
}

let x = bag!=str?"The str is a palindrome":"It is not a palindrome";

console.log(x);