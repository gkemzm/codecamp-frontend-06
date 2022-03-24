//물품 상세보기
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { FETCH_PRODUCT } from '../../../src/components/units/quiz/08-quiz/quiz08Query'


export default function  Quiz08DetailPage(){
    const router = useRouter()
    const { data } = useQuery(FETCH_PRODUCT, {
        variables:{productId: router.query.myid}
    })


    const onClickMove = () =>{
        router.push(`/08-quiz/${router.query.myid}/edit`)

    }
    
    console.log(data)
    return(
        <div>
            <div>아이디: {data?.fetchProduct._id}</div>
            <div>판매자: {data?.fetchProduct.seller}</div>
            <div>물품명: {data?.fetchProduct.name}</div>
            <div>설명: {data?.fetchProduct.detail}</div>
            <div>가격: {data?.fetchProduct.price}</div>
            <button onClick= {onClickMove}>수정하러 이동하기.</button>
        </div>
    )
}