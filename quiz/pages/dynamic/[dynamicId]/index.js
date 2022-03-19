import { useRouter } from 'next/router'
import { useQuery,gql } from '@apollo/client'
const FETCH_PRODUCT = gql`
    query fetchProduct($productId: ID){
        fetchProduct(productId: $productId){
            seller
            name
            detail
            price
        }
    }
`
export default function FetchProductPage(){
    const router = useRouter()
    const { data } = useQuery(FETCH_PRODUCT, {
        variables:{productId: router.query.dynamicId}//router.query.변수
    })
    
    const MoveMainpage = () => {
       router.push("/dynamic") 
    }
    //console.log(router.query) 한번 확인
    return(
        <>
        {data ?  <div>
            <div>판매자: {data?.fetchProduct.seller}</div>
            <div>상품명: {data?.fetchProduct.name}</div>
            <div>내용: {data?.fetchProduct.detail}</div>
            <div>가격: {data?.fetchProduct.price}</div>
            <button onClick={MoveMainpage}>돌아가기</button>
        </div> : <div>Loading</div>}
        </>
    )
}