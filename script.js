

    const titleElement = document.getElementById('title');
    const textElement = document.getElementById('text');   
    const btnContainer = document.getElementById('buttons');
    let cardElement = document.querySelector('.card')
    let currentThought = ""
    let currentBg = ""
  
 
    function mainTextanim(){
        textElement.classList.remove('fade-in')
        void textElement.offsetWidth
        textElement.classList.add('fade-in')
    }
        
    function sayHellotoKarina() {

    titleElement.innerText = "Рад, знакомству Карина"; 
    textElement.innerHTML = "Вижу, теперь улыбаешься😁";
    currentThought = "Если есть человек который движет тобой, то это не про тонкий лёд, а кристалл твердой породы."
    currentBg = "#e3f2fd"
    mainTextanim()
    showThoughtButton()
}

    function sayHellotoMalvina() {

    titleElement.innerText = "Рад, знакомству Мальвина"; 
    textElement.innerHTML = "Тебе подошел бы Буратино😁"; 
    currentThought = "Совместимость не определяется статистикой и цифрами, а определяется временем."
    mainTextanim()
    showThoughtButton()
    currentBg = "#ff18"

}
    function sayHellotoCheater() {

    titleElement.innerText = "Надо на проверку👽"; 
    textElement.innerHTML = "Мага, не квакай!!!🤢"; 
    currentThought = "Иногда мы читерим, для того чтобы казаться хорошими, но ценность заложена в самом человеке."
    mainTextanim()
    showThoughtButton()
    currentBg = "#3445"
}

    function showBackButton() { //back
    btnContainer.innerHTML = `<button onclick="resetCard()">Назад ↩️</button>`;
}
    function showThought(){
    mainTextanim()
    void textElement.offsetWidth;
    cardElement.style.background = currentBg
    titleElement.innerText = "О главном.."
    textElement.innerText = currentThought
    btnContainer.innerHTML = `<button onclick="resetCard()">Назад ↩</button>`

}

    function showThoughtButton() {
        btnContainer.innerHTML = `<button onclick="showThought()">Мысль дня 💎</button>`;
    }
    function resetCard() { //returnisback
    cardElement.style.background = "rgb(228, 214, 214)";   
    void textElement.offsetWidth 
    mainTextanim()

    titleElement.innerText = "Мы вернулись чтобы делать вместе";
    textElement.innerText = "Найди себя😄";
    btnContainer.innerHTML = `
            <button onclick="sayHellotoKarina()">Karina 😂</button>
            <button onclick="sayHellotoMalvina()">Mal'vina 🐷</button>
            <button onclick="sayHellotoCheater()">Cheat-girl 😎</button>
        `;
    }
