import  { useState } from 'react'
import  { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'

const SIGN_PRODUCT = gql`
    mutation newProduct($seller: String, $createProductInput: CreateProductInput!) {
        createProduct(seller: $seller, createProductInput: $createProductInput){
            _id
            number
            message
        }
    }
`
export default function DynamicPage(){
    const router = useRouter()

    const [seller, setSeller] = useState("")
    const [product, setProduct] = useState("")
    const [contents, setContents] = useState("")
    const [price, setPrice] = useState("")

    const [callApi] =useMutation(SIGN_PRODUCT)

    const onSignProduct = async() => {
        try{ 
            const result = await callApi({
                variables:{
                    seller: seller,
                    createProductInput:{
                        name: product,
                        detail: contents,
                        price: price
                    }
                }
            })
            console.log(result)
            router.push(`/dynamic/${result.data.createProduct._id}`)
        } catch(error){
            alert(error.message)
        }
    }

    const onChangeSeller = (event) =>{
        setSeller(event.target.value)
    }

    const onChangeProduct = (event) =>{
        setProduct(event.target.value)
    }

    const onChangeContents = (event) =>{
        setContents(event.target.value)
    }

    const onChangePrice = (event) =>{
        setPrice(Number(event.target.value))
    }

    return(
        <div>
            판매자:<input type="text" onChange={onChangeSeller}/><br />
            상품명:<input type="text" onChange={onChangeProduct}/><br />
            상품내용:<input type="text" onChange={onChangeContents}/><br />
            상품가격:<input type="text" onChange={onChangePrice}/><br />
            <button onClick={onSignProduct}>상품등록하기</button>
        </div>
    )
}