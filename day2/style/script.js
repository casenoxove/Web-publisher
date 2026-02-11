/* =========================================
Day 2 - Bento Box Interaction
========================================= */

// 1. [Day 1 복습] 연락처 버튼 클릭 이벤트
const contactBtn = document.querySelector('.item-wide button')

contactBtn.addEventListener('click', function() {
    alert('환영합니다! 멋진 프로젝트를 함께 만들어봐요!');
});

// -------------------------------------------------------------------

// 2. [Day 2 심화] 여러 개의 상자 한꺼번에 다루기
// querySelector'All'을 쓰면 조건에 맞는 모든 녀석을 '목록(배열)으로 가져옵니다.
const allBoxes = document.querySelectorAll('.bento-item');

// forEach: 목록에 있는 상자들을 '하나씩(box)' 꺼내서 똑같은 명령을 반복해 줍니다.
allBoxes.forEach(function(box) {

    // 각각의 상자 (box)에 클릭 감시자를 붙입니다.
    box.addEventListener('click', function() {

        // 클릭된 상자의 투명도를 JS로 직접 조절해볼까요?
        box.style.opacity = '0.5';
        console.log('상자가 클릭되어 투명해졌습니다!');

        // setTimeout: 정해진 시간이 지나면 실행되는 '타이머 마법'
        // 0.3초 (300밀리초) 뒤에 다시 원래 투명도 (1)로 돌려놓습니다.
        setTimeout(function() {
            box.style.opacity = '1';
        }, 300);
    });
});