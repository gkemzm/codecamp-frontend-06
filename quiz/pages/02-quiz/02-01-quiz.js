export default function HelloDocumentPage(){

    function hi(){
        document.getElementById("hello").innerText = "반갑습니다."
    }

    return(
        <div>
            <div>Document hello</div>
            <button id ="hello" onClick = {hi}>안녕하세요</button>
        </div>
    )

}

