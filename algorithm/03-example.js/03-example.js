function makeNumber(num) {
	let str = '';
  
  for(i=0; i<=num; i++){
    if(i<num){
      str = str + i + "-"
    } else if(i=num){
      str = str + i
    }
  }
  
  console.log(str)
}



makeNumber(5) // 1-2-3-4-5
makeNumber(7) // 1-2-3-4-5-6-7