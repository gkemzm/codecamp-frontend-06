// 여기는 컨테이너 컴포넌트
import Quiz08UI from "./quiz08Pressenter"
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useRouter } from "next/router"
import { CREATE_PRODUCT, UPDATE_PRODUCT } from "./quiz08Query"


export default function Quiz08Function(props){
    const router = useRouter()
    const [isActive, setIsActive] = useState(false)

    const [myseller, setMySeller] = useState("")
    const [myname, setMyName] = useState("")
    const [mydetail, setMyDetail] = useState("")
    const [myprice, setMyPrice] = useState("")

    const [callApi] = useMutation(CREATE_PRODUCT)
    const [updateProduct] = useMutation(UPDATE_PRODUCT)

    const onClickUpdate = async() =>{
       const result = await updateProduct({
            variables:{ productId: router.query.myid,
                seller: myseller, updateProductInput:{
                    name: myname, 
                    detail: mydetail,
                    price: Number(myprice)
                    } 
                }
       })
       router.push(`/08-quiz/${router.query.myid}`)
        alert("상품정보 수정에 성공하였습니다.!!!")
    }

    const callGraphqlApi = async() => {
        const result = await callApi({
            variables:{
                seller: myseller, createProductInput:{
                name: myname, 
                detail: mydetail,
                price: Number(myprice)
                }
            }
        })
        router.push(`/08-quiz/${result.data.createProduct._id}`)
        alert("상품 등록에 성공하였습니다.!!!")
    }

    const onChangeSeller = (event) =>{
        setMySeller(event.target.value)

        if(event.target.value !== "" && myname !== "" && mydetail !== "" && myprice !== ""){
            setIsActive(true)
        } else(
            setIsActive(false)
        )
    }

    const onChangeName = (event) =>{
        setMyName(event.target.value)

        if(myseller !== "" && event.target.value !== "" && mydetail !== "" && myprice !== "" ){
            setIsActive(true)
        } else(
            setIsActive(false)
        )
    }

    const onChangeDetail = (event) =>{
        setMyDetail(event.target.value)

        if(myseller !== "" && myname !== "" && event.target.value !== "" && myprice !== ""){
            setIsActive(true)
        } else(
            setIsActive(false)
        )
    }

    const onChangePrice = (event) =>{
        setMyPrice(event.target.value)

        if(myseller !== "" && myname !== "" && event.target.value !== "" && myprice !== ""){
            setIsActive(true)
        } else(
            setIsActive(false)
        )
    }
    
    return(
        <Quiz08UI 
        onChangeSeller={onChangeSeller}
        onChangeName={onChangeName} 
        onChangeDetail={onChangeDetail} 
        onChangePrice={onChangePrice}
        callGraphqlApi={callGraphqlApi}
        isActive={isActive}
        isEdit={props.isEdit}
        onClickUpdate={onClickUpdate}>
        </Quiz08UI> //props(속성)들 aaa가 키 ={}가 value
    )
}



