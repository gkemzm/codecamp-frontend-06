import * as S from '../07-quiz/07quiz.styles'

export default function QuizHTML(props){
    const FRUITS = [
        { number: 1, title: "레드향" },
        { number: 2, title: "샤인머스켓" },
        { number: 3, title: "산청딸기" },
        { number: 4, title: "한라봉" },
        { number: 5, title: "사과" },
        { number: 6, title: "애플망고" },
        { number: 7, title: "딸기" },
        { number: 8, title: "천혜향" },
        { number: 9, title: "과일선물세트" },
        { number: 10, title: "귤" },
      ];
      
      let a = FRUITS.filter((el) => (el.number%2 === 0))
   return(
    <>  
        <S.Wrapper>
        <S.ListTable>상품목록</S.ListTable>
            {props.data?.fetchProducts.map((el, index)=>(
                <S.Row key={el._id}> 
                    <S.Column><input type="checkbox"></input></S.Column>
                    <S.Column>{el.seller}</S.Column>
                    <S.Column>{el.name}</S.Column>
                    <S.Column>{el.detail}</S.Column>
                    <S.Column>{el.price}</S.Column>
                    <S.Column>
                        <button id={el._id} onClick={props.onClickDelete}>삭제</button>
                    </S.Column>
                </S.Row>))
            }
        </S.Wrapper>
    </>
   )
}