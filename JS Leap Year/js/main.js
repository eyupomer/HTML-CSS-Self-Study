const input = document.querySelector('input')

function entered() {
    let year = document.querySelector('input').value;
    if (year % 100 != 0 && year % 4 == 0) {
        alert(`Entered ${year} is a Leap Year`)
    } else if (year % 400 == 0) {
        alert(`Entered ${year} is a Leap Year`)
    } else {
        alert(`Your ${year} year is not a Leap Year`)
    }
};

input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        entered()
    };
});


