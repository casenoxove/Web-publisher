/* =========================================
Day 1 - Interaction Logic
========================================= */

// 1. [선택] html에서 우리가 원하는 버튼을 찾아 변수(이름표)에 담는다.
// document(문서)에서 .nav-utils 안에 있는 button을 찾아라!
const contactBtn = document.querySelector('.nav-utils button');

// 2. [감시] 버튼이 '클릭' 당하는지 지켜보는 감시자(Listener)를 붙인다.
contactBtn.addEventListener('click', function() {

    // 3. [행동] 클릭되면 실행할 명령들
    alert('반갑습니다! 👋 \n아직은 준비 중인 페이지입니다.\n 내일 더 멋진 기능을 만들어봐요!');

    // 콘솔 (검사창)에도 기록을 남겨보자 (개발자만 볼 수 있는 비밀 메시지)
    console.log('버튼이 정상적으로 클릭되었습니다.');
})