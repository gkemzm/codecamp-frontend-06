// const fruits = [
// 		{ number:  1, title: "레드향"　　　　},
// 		{ number:  2, title: "샤인머스켓"　　},
// 		{ number:  3, title: "산청딸기"　　　},
// 		{ number:  4, title: "한라봉"　　　　},
// 		{ number:  5, title: "사과"　　　　　},
// 		{ number:  6, title: "애플망고"　　　},
// 		{ number:  7, title: "딸기"　　　　　},
// 		{ number:  8, title: "천혜향"　　　　},
// 		{ number:  9, title: "과일선물세트"　},
// 		{ number: 10, title: "귤"　　　　　 },
// ]

// for(let i = 0; i<fruits.length; i++){
//   console.log(fruits[i].title)
//   console.log("현재" + fruits[i].number + "위 과일은" + fruits[i].tiitle + "입니다.")
// }

const myShopping = [
    { category: "과일", price: 12000　},
    { category: "의류", price:10000　 },
    { category: "의류", price: 20000　},
    { category: "장난감", price: 9000 },
    { category: "과일", price: 5000　 },
    { category: "의류", price: 10000  },
    { category: "과일", price: 8000　　},
    { category: "의류", price: 7000　　},
    { category: "장난감", price: 5000  },
    { category: "의류", price: 10000　 },
]


function myPage() {
let count = 0;
let amount = 0;
let grade = "";

//   for( let data of myShopping){
//     console.log(data)
//   }
for(let i = 0; i < myShopping.length; i++){
// console.log(i, myShopping[i].category)
if(myShopping[i].category === "의류"){
  count++;
  amount += myShopping[i].price;
}
}

if(count >= 5){
grade = "Gold";
}else if(count >= 3){
grade ="Sliver"
} else{
grade = "Bronze"
}
// return "의류를 구매한 횟수는 총" + count + "회 금액은" + amount + "원이며 등급은 " + grade +"입니다."
return `의류를 구매한 횟수는 ${count}회 금액은 ${amount}원이며 등급은 ${grade}입니다.`
}

myPage();




















