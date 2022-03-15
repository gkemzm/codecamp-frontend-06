import { useState } from 'react'

export default function TokenStatePage(){
    const [auth, setAuth] = useState("000000")


    function sendauth(){
        setAuth(String(Math.floor(Math.random()*1000000)).padStart(6, "0"))
    }

    return(
        <div>
            <div>State Token</div><br></br>
            <div>{auth}</div>
            <button onClick = {sendauth}>인증번호 전송</button>
        </div>
    )

}