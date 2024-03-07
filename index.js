const toggleEl = document.getElementById('darkmode-toggle');

function toggleDarkMode() {
    const toggle = document.getElementById('toggle');
    const body = document.body;
    const isDarkMode = body.classList.contains('dark-mode');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');

    function setMode() {
        if (isDarkMode) {
            body.classList.add('dark-mode');
            toggle.style.transform = 'translateX(200%)'; // Move toggle to dark mode position
            sunIcon.classList.add('hidden'); // Hide sun icon
            moonIcon.classList.remove('hidden'); // Show moon icon
        } else {
            body.classList.remove('dark-mode');
            toggle.style.transform = 'translateX(0%)'; // Move toggle to light mode position
            sunIcon.classList.remove('hidden'); // Show sun icon
            moonIcon.classList.add('hidden'); // Hide moon icon
        }
    }

    setMode();

    if (isDarkMode) {
        // Toggle to light mode
        body.classList.remove('dark-mode');
        toggle.style.transform = 'translateX(0%)'; // Move toggle to light mode position
    } else {
        // Toggle to dark mode
        body.classList.add('dark-mode');
        toggle.style.transform = 'translateX(200%)'; // Move toggle to dark mode position
    }
}

toggleEl.addEventListener('click', toggleDarkMode);

let generatePassBtn = document.getElementById('generate-pass-btn');
let passContOne = document.getElementById('generated-pass-container-one');
let passContTwo = document.getElementById('generated-pass-container-two');

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

function generateRandPass(){
    let password = "";
    for(let i = 0; i < 8; i++) {
        let randomInt = Math.floor(Math.random() * characters.length);
        password += characters[randomInt];
    }
    return password;
}


generatePassBtn.addEventListener('click', () => {
    passContOne.textContent = generateRandPass();
    passContTwo.textContent = generateRandPass();
})
