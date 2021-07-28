const timer = (id, deadline ) => {
    const getTimeRemainding = (endtime) => {
        const t = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((t/1000) % 60);
        const minutes = Math.floor((t/(1000 / 60) % 60));
        const hours = Math.floor((t/(1000 * 60 * 60) % 24));
        const days = Math.floor((t/(1000 * 60 * 60 * 24)));

        return {
            'total': t,
            'seconds': seconds,
            'minutes': minutes,
            'hours': hours,
            'days': days
        };
    };

    const setTimeRemainding = (selector, endtime) => {
        const timerSelector = document.querySelector(selector),
        seconds = timerSelector.querySelector('#seconds'),
        minutes = timerSelector.querySelector('#minutes'),
        hours = timerSelector.querySelector('#hours'),
        days = timerSelector.querySelector('#days');
    const timeInterval = setInterval(upDateClock, 1000);

    upDateClock();
    function upDateClock() {
        const t = getTimeRemainding(endtime);
        seconds.textContent = getZoro(t.seconds);
        minutes.textContent = getZoro(t.minutes);
        hours.textContent = getZoro(t.hours);
        days.textContent = getZoro(t.days);

        if (t.total <= 0) {
           seconds.textContent = '00';
           minutes.textContent = '00';
           hours.textContent = '00';
           days.textContent = '00';

           clearInterval(timeInterval);
        }
    }
    };
    function getZoro(num) {
        if (num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }
    setTimeRemainding(id, deadline);
};

export default timer;