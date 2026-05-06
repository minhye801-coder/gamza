document.getElementById('generate-btn').addEventListener('click', generateLottoNumbers);

function generateLottoNumbers() {
    const container = document.getElementById('lotto-numbers');
    const numbers = [];

    // 1~45 사이의 중복되지 않는 6개 숫자 생성
    while (numbers.length < 6) {
        const num = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }

    // 오름차순 정렬
    numbers.sort((a, b) => a - b);

    // 화면 업데이트
    container.innerHTML = '';
    numbers.forEach((num, index) => {
        const ball = document.createElement('div');
        ball.className = 'ball';
        ball.textContent = num;

        // 번호 대역별 색상 지정
        if (num <= 10) ball.style.backgroundColor = '#fbc400'; // 노랑
        else if (num <= 20) ball.style.backgroundColor = '#69c8f2'; // 파랑
        else if (num <= 30) ball.style.backgroundColor = '#ff7272'; // 빨강
        else if (num <= 40) ball.style.backgroundColor = '#aaaaaa'; // 회색
        else ball.style.backgroundColor = '#b0d840'; // 초록

        container.appendChild(ball);

        // 애니메이션 효과
        setTimeout(() => {
            ball.classList.add('active');
        }, index * 100);
    });
}