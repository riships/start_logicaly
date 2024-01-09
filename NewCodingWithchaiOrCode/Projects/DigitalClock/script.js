const clock = document.getElementById('digitalClock');
// console.log(clock);


setInterval(() => {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
    // console.log(date.toLocaleTimeString());
}, 1000)