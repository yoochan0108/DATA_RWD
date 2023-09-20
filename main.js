//외부 스크립트 파일을 head안쪽에서 defer방식으로 출력
//main.js 해석과 DOM 렌더링을 병렬식으로 동시에 실행
//해석은 동시에 하지만 실제 호출은 화면에 렌더링 완료시 호출
//type='modul'적용하면 위의 기능과 전역변수의 모듈화를 한번에 처리
const box = document.querySelector('article');
console.log(box);
