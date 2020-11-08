import './styles.css';

const refs = {
    days: document.querySelector('span[data-value="days"]'),
    hours: document.querySelector('span[data-value="hours"]'),
    mins: document.querySelector('span[data-value="mins"]'),
    secs: document.querySelector('span[data-value="secs"]'),
    currentDate: document.querySelector('.js-target-date'),
}

class Timer {
    constructor({ selector, targetDate, onTick}) {
        // this.intervalid = null;
        // this.isActive = false;
        this.onTick = onTick;
        this.selector = selector;
        this.targetDate = targetDate;
        this.init();
        // this.render();
        // this.run();
    }

    init() {
        const time = this.getTimeComponents(0);
        this.onTick(time);
    }

    start() {
        if (this.isActive) {
            return;
        }
        //----------------        
        const startTime = Date.now();
        this.isActive = true;

        this.intervalid = setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            const time = this.getTimeComponents(deltaTime);
            console.log(time);

            this.onTick(time);
            //updateClockface(time);
        }, 1000);
    }
    //-----для кнопки STOP------
    stop() {
        clearInterval(this.intervalId)
        this.isActive = falce;
        const time = this.getTimeComponents(0);
        this.onTick(time);
//-----------------------------
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
    targetDate: new Date('Jul 12, 2021'),
    onTick: updateClockface
});

timer.start();

function updateClockface({ days, hours, mins, secs }) {
    refs.days.textContent = `${days}`;
    refs.hours.textContent = `${hours}`;
    refs.mins.textContent = `${mins}`;
    refs.secs.textContent = `${secs}`;
};


// class CountdownTimer {
//     constructor({ selector, targetDate })
//     {
//         this.selector = selector;
//         this.date = targetDate;
//         this.render();
//         this.run();
//     };

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 12, 2021'),
// });



//console.log(currentTime - startTime);

