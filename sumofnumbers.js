let testNum = [1,2,3,4];

function sumFor(num){
let total1 = 0;
for( let i of num){
  total1 += i;
  }
  return total1;
}

function sumWhile(num){
let total2 = 0;
let i = 0;
while(i<num.length){
  total2 +=num[i];
  i++;
}
return total2;
}

function sumRecursion(num){
  if(num.length === 0){
    return 0;
  }
    return num[0] + sumRecursion(num.slice(1,num.length));
}

function sumTheSimpleWay(num){
let total4 =  _.reduce(num,function(memo, nums){return memo+nums;},0);
return total4;
}

console.log(sumFor(testNum));
console.log(sumWhile(testNum));
console.log(sumRecursion(testNum));
console.log(sumTheSimpleWay(testNum));