const correctAns = ['B', 'B', 'B', 'B'];

const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const userAns = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];
    let score = 0;
    userAns.forEach((answer, index) => {
        if (answer === correctAns[index]) {
            score += 25;
        }
    })
    
    result.querySelector('span').textContent = `${score}%`;
    result.classList.remove('d-none');
    
})
