import './styles.css';

const refs = {
    days: document.querySelector('span[data-value="days"]'),
    hours: document.querySelector('span[data-value="hours"]'),
    mins: document.querySelector('span[data-value="mins"]'),
    secs: document.querySelector('span[data-value="secs"]'),
}

class Timer {
    constructor({ selector, targetDate, onTick}) {
        this.onTick = onTick;
        this.selector = selector;
        this.targetDate = targetDate;
        this.init();
    }

    init() {
        const time = this.getTimeComponents(0);
        this.onTick(time);
    }

    start() {
        if (this.isActive) {
            return;
        }
        
        this.isActive = true;

        this.intervalid = setInterval(() => {
            const startTime = Date.now();
            const targetTime = timer.targetDate;
            const deltaTime = targetTime - startTime;
            const time = this.getTimeComponents(deltaTime);
            console.log(time);

            this.onTick(time);
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId)
        this.isActive = falce;
        const time = this.getTimeComponents(0);
        this.onTick(time);
    }

    getTimeComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
    }

    pad(value) {
    return String(value).padStart(2, '0');
    }
}

const timer = new Timer({
    selector: '#timer-1',
    targetDate: new Date('Jun 1, 2021'),
    onTick: updateClockface
});

timer.start();

function updateClockface({ days, hours, mins, secs }) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
};


