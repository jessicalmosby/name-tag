const nameDisplay = document.getElementById('name-display');
console.log(nameDisplay);


nameDisplay.classList.add('purple');

const updateBtn = document.getElementById('update-btn');
updateBtn.addEventListener('click', () => {
    console.log('i am clicking the button');
    const nameInput = document.getElementById('name-input');
    nameDisplay.textContent = nameInput.value; 
});