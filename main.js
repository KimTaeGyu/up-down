//랜덤번호 지정
//유저가 번호를 입력한다 그리고 go 라는 버튼을 누른다
//만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
// 랜덤번호가 < 유저번호 Down!!
// 랜덤번호가 > 유저번호 up!!
// Reset 버튼을 누르면 게임이 리셋된다
// 5번의 기회를 다쓰면 게임이 끝난다 (더이상 추측 불가, 버튼이 disable)
//유저가 1~100 범위 밖에 숫자를 입력하면 알려주고 기회를 깍지 않는다
// 유저가 이미 입력한 숫자를 또 입력하면, 알려준다, 기회를 깍지 않는다

let computerNum =0; //랜덤으로 정하는 숫자
let playbutton = document.getElementById("play-button"); //버튼을 눌렀을때 이벤트
console.log(playbutton);
let userInput = document.getElementById("user-input"); //유저가 입력했을때 
let resultArea = document.getElementById("result-area");
let resetbutton = document.getElementById("reset-button");
let chances = 5
let gameOver = false
let chanceArea = document.getElementById("chance-area");
let histroy=[]

playbutton.addEventListener("click",play) //버튼눌렀을때 입벤트
resetbutton.addEventListener("click",reset)

userInput.addEventListener("focus",function()
{userInput.value="";});


//Math.floor 소수점을 버리는 함수? 
//랜덤값으로 컴퓨터에 숫자를 지정
function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100+1);
    console.log("정답", computerNum)
}

function play(){
    let userValue = userInput.value;

    if(userValue<1 || userValue>100){
        resultArea.textContent = "1과 100사이 숫자만 입력할수있습니다!"
        return;
    }

    if(histroy.includes(userValue)){
        resultArea.textContent="이미 입력한 숫자입니다 다른 숫자를 입력해주세요"
        return;
    }

    chances -- ;
    chanceArea.textContent =`남은기회는 ${chances}번`
    console.log("chance", chances);

    if(userValue < computerNum){
        resultArea.textContent ="UP!!!!"
    }else if(userValue > computerNum){
        resultArea.textContent ="Down!!!"
    }else{
        resultArea.textContent="맞췄습니당ㅇ"
        gameOver=true;
    }

    histroy.push(userValue)
    console.log(histroy)

    if(chances <1){
        gameOver=true
    }

    if (gameOver == true){
        playbutton.disabled = true;
    }
}

function reset(){
    // user input창이 정리가되고
    userInput.value =""
    //새로운 번호가 생성이되고
    pickRandomNum()
    resultArea.textContent="결과값이 여기 나옵니다!";
}
pickRandomNum();
