const form = document.querySelector('form');
const warn_heit = document.querySelector('.warning-height');
const warn_weit = document.querySelector('.warning-weight');
const result = document.querySelector('.result');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);

    if (height === '' || isNaN(height) || height <= 0) {
        warn_heit.style.display = 'block';
        warn_heit.innerHTML = 'Please enter a valid height';
    } else {
        warn_heit.style.display = 'none';
    }

    if (weight === '' || isNaN(weight) || weight <= 0) {
        warn_weit.style.display = 'block';
        warn_weit.innerHTML = 'Please enter a valid weight';
    } else {
        warn_weit.style.display = 'none';
    }

    // Hide warnings if both height and weight are valid
    if (height > 0 && weight > 0) {
        warn_heit.style.display = 'none';
        warn_weit.style.display = 'none';
    }

    let BMICal = (weight / (height / 100) ** 2)
    let convertTwoDec = BMICal.toFixed(2);
    // console.log(convertTwoDec);
    switch (true) {
        case convertTwoDec < 18.5:
            result.className = 'underweight-color'
            result.innerHTML = (`<b>Your BMI is:</b> ${convertTwoDec}, You are considered underweight. It's important to maintain a healthy weight for your well-being. Consult with a healthcare professional for guidance.`);
            break;
        case convertTwoDec >= 18.5 && convertTwoDec < 24.9:
            result.className = 'normal-weight-color'
            result.innerHTML = (`<b>Your BMI is:</b> ${convertTwoDec}, Your weight is within the normal range.`);
            break;
        case convertTwoDec >= 25 && convertTwoDec < 29.9:
            result.className = 'overweight-color'
            result.innerHTML = (`<b>Your BMI is:</b> ${convertTwoDec}, You are considered overweight. It's important to maintain a healthy weight for your well-being. Consult with a healthcare professional for guidance.`);
            break;
        case convertTwoDec >= 30:
            result.className = 'obese-color'
            result.innerHTML = (`<b>Your BMI is:</b> ${convertTwoDec}, You are considered obese. It's important to maintain a healthy weight for your well-being. Consult with a healthcare professional for guidance.`);
            break;
        default:
            result.className = 'invalid-color'
            result.innerHTML = (`Invalid BMI value.`)
            break;
    }

});