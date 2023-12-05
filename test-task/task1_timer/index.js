const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
    const seconds_array = ["секунда", "секунды", "секунд"];
    const minutes_array = ["минута", "минуты", "минут"];
    const hours_array = ["час", "часа", "часов"];

    function declOfNum(n, text_forms) {
        n = Math.abs(n) % 100;
        const n1 = n % 10;
        if (n > 10 && n < 20) {
            return text_forms[2];
        }
        if (n1 > 1 && n1 < 5) {
            return text_forms[1];
        }
        if (n1 === 1) {
            return text_forms[0];
        }
        return text_forms[2];
    }

    return (seconds) => {
        setInterval(() => {
            let sec = seconds % 60;
            let min = seconds / 60 % 60 | 0;
            let hours = seconds / 60 / 60 % 60 | 0;

            sec = ("0" + sec).slice(-2);
            min = ("0" + min).slice(-2);
            hours = ("0" + hours).slice(-2);

            if (seconds <= 0) {
                return clearInterval(animateTimer);
            } else {
                timerEl.innerHTML = `${hours}:${min}:${sec} - ${hours} ${declOfNum(hours, hours_array)}, ${min} ${declOfNum(min, minutes_array)}, ${sec} ${declOfNum(sec, seconds_array)}.`;
            }
            --seconds;
        }, 1000);
    };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
    // Очистите input так, чтобы в значении
    // оставались только числа
    e.target.value = e.target.value.replace(/[^\d.]/g, '');
});

buttonEl.addEventListener('click', () => {
    const seconds = Number(inputEl.value);

    if (seconds) animateTimer(seconds);

    inputEl.value = '';
});
