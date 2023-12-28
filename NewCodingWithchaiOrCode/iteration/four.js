const myObj = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'ruby',
    py: 'python',
    ts: 'TypeScript'
}

// this is used in Object

for (const key in myObj) {
    // console.log(`${key} stands for ${myObj[key]}`);
}

let myNewArr = [1, 4, 5, 6, 7, 8];

for (const myVal in myNewArr) {
    console.log(myNewArr[myVal]);
}



