// for loop

for (let i = 1; i <= 10; i++) {
    const element = i;
    // console.log(element);
}


// another example  for loop
for (let i = 1; i <= 10; i++) {
    // console.log(`This is outer loop ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`This is inner loop ${j} and the outer loop is ${i}`);
    }
}


// loop with break keyword

// for (let i = 1; i < 20; i++) {
//     if (i === 5) {
//         console.log(`${i} is detected to loop exited here`);
//         break;
//     }
//     console.log(`The value of i is ${i}`);
// }


// loop with continue keyword

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log(`${i} is detected still loop will continue`);
        continue;
    }
    console.log(`The value of i is ${i}`);
}