import { useState } from 'react'

export default function CounterStatePage(){
    let count = 0
    const apple = 3

    function counter(){

        console.log(apple)

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


//7~13이 scope