// Setting initial count
let count = 0;

// select variables

const value = document.getElementById('value');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
       const styles = e.currentTarget.classList;

       if (styles.contains('decrease')){
           count--;
       } else if (styles.contains('increase')){
           count++;
       } else {
           count = 0;
       }
       value.textContent = count;
    });
});

