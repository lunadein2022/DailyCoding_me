//동호는 내년에 초등학교를 입학한다. 그래서 동호 어머니느 ㄴ수학 선행 합ㄱ습을 위해 쉽게 푸는 문제를 동호에게 주었다. 이 문제는 다음과 같다. 1을 한 번, 2를 두 번, 3을 세 번, 이런 식으로 12233344445..이런 수열을 만들고 어느 일정한 구간을 주면 그 구간의 합을 구하는 것이다. 하지만 동호는 현재 더 어려운 문제르 ㄹ푸느라 바쁘기에 우리가 동호를 도와주자
//1 22 333 4444 55555 666666 7777777
//n의 제곱을 for문을 돌려 배열에 넣어준다. //n의 제곱을 넣어주면 안되고 n의 수만큼 더해주도록 for문 돌리기.
//인덱스 값을 구해 더해준다.
let result = [];
let n = 7;

for(let i=1; i<= n; i++){
    result = result.push(i)
    return result
}

console.log(result);
