// Date

const myDate = new Date();

// console.log(myDate.toJSON());
// console.log(myDate.toDateString());

// console.log(typeof myDate);  // output : object


console.log(
    myDate.toLocaleString('default', {
    weekday: 'long',
})
);

