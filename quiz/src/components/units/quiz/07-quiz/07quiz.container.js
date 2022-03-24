import { useRouter } from 'next/router'
import { useQuery, useMutation } from '@apollo/client'
import QuizHTML from './07quiz.pressenter'
import { DELETE_PRODUCT, FETCH_PRODUCTS } from './07quiz.qurey'


export default function QuizFunction(){
   const router = useRouter()
   const [deleteProduct] = useMutation(DELETE_PRODUCT)
   const { data } = useQuery(FETCH_PRODUCTS)

   const onClickDelete = (event) =>{
       deleteProduct({
           variables: {productId: event.target.id},
           refetchQueries: [{query: FETCH_PRODUCTS}]
       })
   }
   
   console.log(data)
   return(
       <QuizHTML
       data={data}
       onClickDelete={onClickDelete}
       ></QuizHTML>
   )
}