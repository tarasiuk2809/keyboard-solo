const allWords = ['apple', 'people', 'dekstop', 'script', 'keyboard', 'flashlight', 'bookmark', 'colleague', 'analyst', 'conditioner'];
const word = document.querySelector('.word');

function getRandomWord() {
    const spanTags = word.querySelectorAll('span');
    spanTags.forEach((el) => el.remove());
    const randomIndex = Math.floor(Math.random() * allWords.length);
    const randomWord = allWords[randomIndex];
    const fragment = new DocumentFragment();

    for (let i = 0; i < randomWord.length; i++) {
        const span = document.createElement('span');
        span.innerHTML = randomWord[i];
        fragment.append(span);
    }
    word.append(fragment);
}

function takeCurrentWord(){
    let currentWord = word.querySelectorAll('span');
    currentWord = Array.from(currentWord);
    return currentWord;
}

getRandomWord();
let currentWord = takeCurrentWord();

let indx = 0;

document.addEventListener('keydown', function (event) {
    if (event.key === currentWord[indx].innerHTML) {
        currentWord[indx].classList.remove('w');
        currentWord[indx].classList.add('c');
        indx++;
    }
    else {
        currentWord[indx].classList.add('w');
    }
    if(indx===currentWord.length) {
        indx=0;
        getRandomWord();
        currentWord = takeCurrentWord();
    }

});
