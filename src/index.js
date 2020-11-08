import './styles.css';

const refs = {
    days: document.querySelector('span[data-value="days"]'),
    hours: document.querySelector('span[data-value="hours"]'),
    mins: document.querySelector('span[data-value="mins"]'),
    secs: document.querySelector('span[data-value="secs"]'),
    currentDate: document.querySelector('.js-target-date'),
}

const timer = {
    start() {
        const startTime = Date.now();
        setInterval(() => {
            const currentTime = Date.now();
            const deltaTime = currentTime - startTime;
            // const { days, hours, mins, secs } = getTimeComponents(deltaTime);
            // console.log(`${days}:${hours}:${mins}:${secs}`);
            const time = getTimeComponents(deltaTime);
            console.log(time);
            

            updateClockface(time);
            // const timeComponents = getTimeComponents(deltaTime)
            // console.log(startTime);                            
            // console.log(currentTime);                            
        }, 1000);
    },
};

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

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 12, 2021'),
});

function pad(value) {
    return String(value).padStart(2, '0');
}

//console.log(currentTime - startTime);

function getTimeComponents(time) {
const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
}