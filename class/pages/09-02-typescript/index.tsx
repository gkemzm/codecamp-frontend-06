export default function TypescriptPage(){
    // 타입추론
    let aaa = "안녕하세요"
    aaa = 3 // "aaa에 안녕하세요를 먼저 선언했기 때문에 숫자가 올 수 없다."
    
    // 타입명시
    let bbb: string = "반갑습니다"
    
    // 문자타입
    let ccc: string
    ccc = "3"  // 3은 위쪽에서 string로 명시 해줬기 때문에 안된다.

    // 숫자타입
    let ddd: number =10

    ddd = "qqwe" // ddd를 num으로 명시해줬기에 ""불가능

    //불린타입
    let eee: boolean = true // true false만 가능
    eee = "false" //true로 작동함

    //배열타입
    let fff: number[] = [1, 2, 3, 4, 5, "ddd"] //ddd불가
    let ggg: string[] = ["철수", "영희", "훈이", 13] //13불가
    let hhh: (number | string)[]  = [1, 2, 3, "안녕"]// typescript에선  | & 로 or and를 표시

    //객체타입
    interface IProFile {
        name: string
        age: string | number
        school: string
        hobby?: string //?는 있어도 좋고 없어도 좋다 나머진 필수
    }
    let profile: IproFile = {
        name: "철수",
        age: 8,
        school: "다람쥐초등학교"
    }

    profile.age = "ds" 

    // 함수타입
    const add = (money1: number, money2: number, unit: string): string => {
        return money1 + money2 + unit
    }
    const result = add(1000, 2000, "원") // <= string이됨

    return(
        <div>타입스크립트 연습하기!!!</div>
    )
}