
//1.콜백함수
function main(value){
    value();
}

main(() => {
    console.log("i am sub");
})

//2.콜백함수의 활용
function repeat(count, callback){
    for(let idx =1; idx <= count; idx++){
        callback(idx);
    }
}

repeat(5, (idx) => {
    console.log(idx);
});

repeat(5, (idx) => {
    console.log(idx*2);
});

repeat(5, (idx) => {
    console.log(idx*3);
});

// 콜백 함수(Callback Function)는 다른 함수의 인자로 전달되어, 특정 시점에 실행되는 함수를 말합니다.
// 즉, **“내가 직접 실행하지 않고, 누군가 불러주기를 기다리는 함수”**라고 생각하면 이해하기 쉽습니다.