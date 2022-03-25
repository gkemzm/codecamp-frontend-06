import { type } from "os"

export default function TypescriptPage(){

    interface IProfile{
        name: string
        age: number
        school: string
        hobby?: string
    }
    //선택
    type Mytypel = Pick<IProfile, "name" | "age">
    //제외
    type Mytype2 = Omit<IProfile, "school">
    // ?추가
    type Mytype3 = Partial<IProfile>
    // 필수로
    type Mytype4 = Required<IProfile>
    //Record타입
    type ZZZ = "aaa" | "qqq" | "rrr" //(유니온타입) 합집합   "aaa" & "qqq" & "rrr" 교집합

    // let apple: ZZZ
    // apple ="qqq"

    type Mytype5 = Record<ZZZ, IProfile>


    // ================추가(선언병합) -type과 interface 차이점 (추가선언이 가능하다.)==================
    interface IProfile {
        candy: number
    }

    let profile: IProfile
    profile = {
        candy: 3,
        age: 10,
        hobby: "asdf"

    }

    return(
        <div>타임스크립트 연습하기!!!</div>
    )
}