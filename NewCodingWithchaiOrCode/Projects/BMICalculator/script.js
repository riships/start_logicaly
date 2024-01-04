const form = document.querySelector('form');
const warn_heit = document.querySelector('.warning-height');
const warn_weit = document.querySelector('.warning-weight');

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
});
