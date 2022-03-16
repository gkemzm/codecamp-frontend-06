function evenOdd(num) {
      num > 0
      if(num === 0) {
            console.log("Zero")
      } else if(num % 2 === 0){
            console.log("Even")
      } else if(num % 2 === 1){
            console.log("Odd")
      } else{
                    console.log("올바른 값을 입력하세요")
      }
    }
    
    evenOdd(0)
    evenOdd(12) 
    evenOdd(15)
    