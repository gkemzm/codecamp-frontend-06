export default function TokenDocumentPage(){

    function sendauth(){
        let token = String(Math.floor(Math.random()*1000000)).padStart(6, "0")
        document.getElementById("authnum").innerText = token
    }

    return(
        <div>
            <div>Document Token</div><br></br>
            <div id="authnum">000000</div>
            <button onClick = {sendauth}>인증번호전송</button>
        </div>
    )

}