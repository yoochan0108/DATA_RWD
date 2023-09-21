const [hr, m, s] = document.querySelectorAll('h1 span');

/*
  객체를 셍성하는 방법
  -객체리터럴을 통한 생성
  -생성자함수를 통한 생성 (new 키워드를 이용해서 동일한 구조의 객체를 복사할때 주로 사용)
  -생성자 함수를 통해서 생성된 객체 : 인스턴스
  -인스턴스 객체에는 prototype이라는 공통의 저장공간이 포함되어 있어서 자주쓰는 함수를 등록후
  자유롭게 호출가능
*/

const now = new Date();
console.dir(now);

const months = [
	'January',
	'February',
	'March',
	'Apil',
	'May',
	'June',
	'july',
	'August',
	'September',
	'Otober',
	'November',
	'December',
];

const days = ['Sunday', 'Monday', 'Tuseday', 'Wendesday', 'Thursday', 'Friday', 'Saturday'];

const year = now.getFullYear();
console.log(year);
const month = now.getMonth(); //순번을 반환
const date = now.getDate();
const day = now.getDay();
const hours = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();

hr.innerText = setNumbers(setHours(hours));
m.innerText = setNumbers(min);
s.innerText = setNumbers(sec);

console.log(setNumbers(hours));

function setNumbers(num) {
	/*
	if (num < 10) num = '0' + num;
	*/
	//조건식 ? true일 때 실행할 구문 : false일 때 실행할 구문
	//삼항연산자 구문안에는 대입연산자가 들어올 수 없기 때문에 괄호로 묶어서 표현식으로 변경
	//특정값이 else일때 굳이 실행할 필요가 없다면 &&연산자 활용
	//num < 10 ? (result = '0' + num) : (result = num);
	num < 10 && (num = '0' + num);
	return num;
}

function setHours(num) {
	if (num > 12) num = num - 12;
	return num;
}

/*
let newHr = 0;

if (hours > 12) {
	newHr = hours - 12;
	if (newHr < 10) {
		newHr = '0' + newHr + 'pm';
	} else {
		newHr = newHr + 'pm';
	}
} else {
	newHr = hours;
	if (newHr < 10) {
		newHr = '0' + newHr + 'am';
	} else {
		newHr = newHr + 'am';
	}
}

console.log(newHr);
*/
//12까지 1~12 '앞에 am붙여서 출력'
//13~24 14=> '2pm'

//현재시간값에서 한자리 시간값이이면 앞에 0을 붙여서 출력
