import { useState } from 'react'

export default function CounterStatePage(){
    let count = 0

    function counter(){
        count = count + 1
        console.log(count)
    }

    return (
        <div>
            <div>{count}</div>
            <button onClick={counter}>카운트 올리기!!!</button>
        </div>
    )
}

//let이 안되는 이유 React에선 let이 화면에 반영이 안된다.!