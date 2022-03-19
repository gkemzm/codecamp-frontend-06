function grade(score){
    if(score > 100 || score < 0){
      return "잘못된 점수입니다."
    } else if(score <= 100 && score >=90 ){
      return "A"
    } else if(score <=89 && score >=80){
      return "B"
    } else if(score <=79 && score >=70){
      return "C"
    } else if(score <=69 && score >=60){
      return "D"
    } else if(score <=59){
      return "F"
    }
    
  }
  
  grade(105);
  grade(99);
  grade(89);
  grade(79);
  grade(69);
  grade(50);
  grade(10);
  grade(-10);
  