/*
	특정 시간을 주기로 코드를 반복할 때
	setInterval(반복실행할 함수, 반복간격시간(ms))
*/
const [hr, m, s] = document.querySelectorAll('h1 span');
setInterval(setTime, 1000);

//함수추가
//원하는 시간마다 body에 morning, afternoon, evening, night
// if(hours >=6 && hours< 11) document.body.classList.add('morning')
//주의점 밤은 특정이상 혹은 일정시간 이하 (&&가 아닌 ||로 표현가능)
function changeClass(hr) {
	if (hr >= 6 && hr < 12) document.body.classList.add('morning');
	if (hr >= 12 && hr < 16) document.body.classList.add('afternoon');
	if (hr >= 16 && hr < 20) document.body.classList.add('evening');
	if (hr >= 20 || hr < 6) document.body.classList.add('night');
}
function setTime() {
	const now = new Date();
	const hours = now.getHours();
	const min = now.getMinutes();
	const sec = now.getSeconds();
	hr.innerText = setNumbers(setHours(hours));
	m.innerText = setNumbers(min);
	s.innerText = setNumbers(sec);
	changeClass(hours);
}

/*
  객체를 셍성하는 방법
  -객체리터럴을 통한 생성
  -생성자함수를 통한 생성 (new 키워드를 이용해서 동일한 구조의 객체를 복사할때 주로 사용)
  -생성자 함수를 통해서 생성된 객체 : 인스턴스
  -인스턴스 객체에는 prototype이라는 공통의 저장공간이 포함되어 있어서 자주쓰는 함수를 등록후
  자유롭게 호출가능
*/

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

//다음과 같이 코드를 줄일 수 있음
// const values = [setHours(hours), min, sec];
// spans.forEach((el, idx) => {
// 	el.innerText = setNumbers(idx);
// });

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
