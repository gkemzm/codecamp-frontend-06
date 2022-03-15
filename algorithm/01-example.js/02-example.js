let fruits = ["사과", "바나나", "파인애플"]
let newFruits = []
newFruits.push(fruits[fruits.length-1])


console.log(newFruits)

//배열에 요소가 추가되면 인덱스값(fruits[2])으로 했을경우 고정적으로 
//2번째 인덱스가 오게 된다. 

//동적으로 가져오기위해서 length-1을 통해 배열이 변동해도 마지막을 불러오게 할 수 있다.