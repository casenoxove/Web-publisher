
// 클릭 버튼 이벤트

const clickBtn = document.querySelector('.top-header button');
clickBtn.addEventListener('click', function() {
    alert('피와 쇠의 머릴 밟아 세상의 끝을 겨눈대도\n나의 품 안에서 너는 절대 부서질 일이 없을 거야');
});

// 영상 썸네일 버튼 이벤트

const allCard = document.querySelectorAll('.album-card img');
allCard.forEach(function(thumbnail) {
    thumbnail.addEventListener('click', function() {
        const videoPlay = confirm('이 영상을 재생하시겠습니까?');

        if (videoPlay === true) {
            alert('재생을 시작합니다.');
        } else {
            console.log('재생을 취소합니다.');
        }
        
    });
});
