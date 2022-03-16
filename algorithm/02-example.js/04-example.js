function days(month) {
	if(month <= 7 && month % 2 === 1 ) {
		console.log(31)
  } else if (month === 2){
    console.log(28)
  } else if (month >= 8 && month % 2 === 0 ){
    console.log(31)
  }else{
    console.log(30)
  }
}

days(1)
days(2)
days(4)


function days2(month2) {
	if(month2 <= 7 && month2 % 2 === 1 || month2 >=8 && month2 % 2 ===0 ) {
		console.log(31)
  } else if (month2 === 2){
    console.log(28)
  } else{
    console.log(30)
  }
}

days2(1)
days2(2)
days2(4)




















