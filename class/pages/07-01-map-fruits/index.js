//리렌더링되도 새로 안만들어짐
export default function mapFruitsPage(){
    // const aaa = [<div>1 레드향</div>, <div>2 샤인머스켓</div>, <div>3 산청딸기</div>]

    // const bbb = ["나의레드향", "나의샤인머스켓", "나의산청딸기"]
    // bbb.map((el)=>(<div>{el}</div>))
    // return(bbb)
    const FRUITS = [
        { number: 1, title: "레드향" },
        { number: 2, title: "샤인머스켓" },
        { number: 3, title: "산청딸기" },
        { number: 4, title: "한라봉" },
        { number: 5, title: "사과" },
        { number: 6, title: "애플망고" },
        { number: 7, title: "딸기" },
        { number: 8, title: "천혜향" },
        { number: 9, title: "과일선물세트" },
        { number: 10, title: "귤" },
      ];
      
    // const ccc = FRUITS.map((el)=>(<div>{el.number} {el.title}</div>))
    const a = FRUITS.filter((el) => (el.number%2 === 0))
    return (
      
    <div>
        <div>{FRUITS.map((el)=>(<div>{el.number} {el.title}</div>))}</div>
        <div>위는 map 아래는 map+filter</div>
        <div>{a.map((el)=>(<div>{el.number}{el.title}</div>))}</div>
    </div>
    )

    //실무에선 return에 바로 식을 입력해주는게 많이 쓰인다.
}