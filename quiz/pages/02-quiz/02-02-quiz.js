import { useState } from 'react'

export default function HelloStatePage(){
    const [hello, setHello] = useState("안녕하세요")


    function hi(){
        
        setHello("반갑습니다.")
        
    }

    return(
        <div>
            <div>State</div>
            <button onClick = {hi}>{hello}</button>
        </div>
    )

}