let n = 5;
let count = 0;
for(let i=1;i<=n;i++){
  if(n%i==0){count++;}
}

let x = count==1?"Number is Prime":"Number is not Prime";

console.log(x);