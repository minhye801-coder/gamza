const generateBtn = document.getElementById('generate-btn');
const lottoNumbersContainer = document.getElementById('lotto-numbers');
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const themeText = document.getElementById('theme-text');

// 로또 번호 생성
generateBtn.addEventListener('click', generateLottoNumbers);

function generateLottoNumbers() {
    const numbers = [];
    while (numbers.length < 6) {
        const num = Math.floor(Math.random() * 45) + 1;
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    numbers.sort((a, b) => a - b);

    lottoNumbersContainer.innerHTML = '';
    numbers.forEach((num, index) => {
        const ball = document.createElement('div');
        ball.className = 'ball';
        ball.textContent = num;
        
        if (num <= 10) ball.style.backgroundColor = '#fbc400';
        else if (num <= 20) ball.style.backgroundColor = '#69c8f2';
        else if (num <= 30) ball.style.backgroundColor = '#ff7272';
        else if (num <= 40) ball.style.backgroundColor = '#aaaaaa';
        else ball.style.backgroundColor = '#b0d840';
        
        lottoNumbersContainer.appendChild(ball);
        setTimeout(() => {
            ball.classList.add('active');
        }, index * 100);
    });
}

// 테마 변경 로직
function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeText.textContent = '다크 모드';
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        themeText.textContent = '라이트 모드';
        localStorage.setItem('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

// 기존 테마 불러오기
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        themeText.textContent = '다크 모드';
    }
}
