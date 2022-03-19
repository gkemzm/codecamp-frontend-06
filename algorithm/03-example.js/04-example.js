function makeOdd(num){ 
	let str = '';
	for(i=0; i<=num; i++){
    if(i % 2 === 1){
      str = str + i
    }
  }
	console.log(str)
}



makeOdd(5) // 135
makeOdd(7) // 1357



function makeOdd(num){
  let answer = "";
  
  for(let i = 1; i <= num; i++){
    if(i % 2 !== 0){
      answer += i;
    }
  }
  return answer;
}

makeOdd(9);