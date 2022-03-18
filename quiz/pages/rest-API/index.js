// import axios from 'axios'
// import {usestate} from 'react'

// const RestGetPage = async() => {
//     const [data, setData] =useState("")

//     const callRestApi = async() => {
//         const result = await axios.get("https://koreanjson.com/posts/1")
//         console.log(result)
//         console.log(result.data.title)
//         setData(result.data.title)
//     }

//     return(
//         <>
//             <div>{data}</div>
//             <button onClick={callRestApi}>REST-API 요청</button>

//         </>
//     )
// }

// export default RestGetPage

import  axios from 'axios'
import  {useState} from 'react'

export default function RestGetPage(){
    const [id, setId] =useState("")
    const [name, setName] =useState("")
    const [username, setUsername] =useState("")
    const [email, setEmail] =useState("")
    const [phone, setPhone] =useState("")

    const callRestApi = async() => {
        const result = await axios.get("https://koreanjson.com/users/1")
        console.log(result)
        setId(result.data.id)
        setName(result.data.name)
        setUsername(result.data.username)
        setEmail(result.data.email)
        setPhone(result.data.phone)
    }

    return(
        <>
            <div>{id}.{name}</div>
            <div>닉네임: {username}</div>
            <div>이메일: {email}</div>
            <div>휴대폰: {phone}</div>
            <button onClick={callRestApi}>REST-API</button>
            <div></div>
        </>
    )
}