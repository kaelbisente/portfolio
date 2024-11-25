window.onscroll = function () {
    headerShadow();
};

function headerShadow() {
    const navHeader = document.getElementById("navHeader");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "60px";
        navHeader.querySelector('.navbar-brand img')
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.querySelector('.navbar-brand img');
    }
}

// transition para don sa burger
document.addEventListener('DOMContentLoaded', function () {
    const navbarCollapse = document.getElementById('navbarNav');
    navbarCollapse.addEventListener('show.bs.collapse', function () {
        navbarCollapse.classList.add('showing');
    });
    navbarCollapse.addEventListener('hidden.bs.collapse', function () {
        navbarCollapse.classList.remove('hiding');
    });
});

// sarado burger kapag na click yung link

document.addEventListener('DOMContentLoaded', function () {
    const navbarCollapse = document.getElementById('navbarNav');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (navbarCollapse.classList.contains('show')) {
                bsCollapse.hide();
            }
        });
    });
});



const cardContainer = document.querySelector('.cardContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const specificIDs = [0, 2, 3, 4, 8, 9, 11, 12, 14];
let currentIndex = 0;


function getCardsPerView() {
    if (window.innerWidth >= 992) return 4;
    if (window.innerWidth >= 768) return 3;
    if (window.innerWidth >= 425) return 1;
    return 1; // Small screens
}


async function fetchThronesData() {
    try {
        const response = await fetch('https://thronesapi.com/api/v2/Characters');
        const data = await response.json();

        //thanks gpt, first time ko gawin to kaya di ko alam 
        const filteredData = data.filter((_, index) => specificIDs.includes(index));
        renderCards(filteredData);
        setupNavigation(filteredData);
    } catch (error) {
        console.error('Error fetching Thrones API:', error);
    }
}

//thanks gpt, first time ko gawin to kaya di ko alam 
function renderCards(data) {
    const cardsPerView = getCardsPerView();
    const visibleCards = data.slice(currentIndex, currentIndex + cardsPerView);

    cardContainer.innerHTML = visibleCards
        .map(
            (character) => `
<div class="col-12 col-md-4 col-lg-3 card-wrapper">
  <div class="card mx-2" style="width: 14rem;">
    <div class="imgContainer"> 
        <img src="${character.imageUrl}" class="card-img-top img-fluid" alt="${character.fullName}" style="max-height: 250px; object-fit: cover;">
    </div>
    <div class=" card-body d-flex justify-content-center align-items-center flex-column">
        <h5 class="cardName">${character.fullName}</h5>
        <p class="cardHouse">${character.family}</p>
     </div>
  </div>
</div>
  
`
        )
        .join('');
}

//thanks gpt, first time ko gawin to kaya di ko alam 
function setupNavigation(data) {
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            renderWithSmoothTransition(data, 'prev');
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex + getCardsPerView() < data.length) {
            currentIndex++;
            renderWithSmoothTransition(data, 'next');
        }
    });
}

//lalo na to di ko to gamay masya
function renderWithSmoothTransition(data, direction) {
    const cardsPerView = getCardsPerView();
    const visibleCards = data.slice(currentIndex, currentIndex + cardsPerView);

    const newCard =
        direction === 'next' ?
        data[currentIndex + cardsPerView - 1] :
        data[currentIndex];

    const newCardHTML = `
        <div class="col-12 col-md-4 col-lg-3  card-wrapper">
        <div class="card  mx-auto" style="width: 14rem;">
        <div class="imgContainer">
            <img src="${newCard.imageUrl}" class="card-img-top img-fluid" alt="${newCard.fullName}" style="max-height: 250px; object-fit: cover;">
        </div>       
        <div class="card-body d-flex justify-content-center align-items-center flex-column">
        <h5 class="cardName">${newCard.fullName}</h5>
        <p class="cardHouse">${newCard.family}</p>
        </div>
        </div>
        </div>
        `;

    if (direction === 'next') {
        cardContainer.insertAdjacentHTML('beforeend', newCardHTML);
        const firstCard = cardContainer.firstElementChild;
        firstCard.classList.add('slide-out-left');
        setTimeout(() => firstCard.remove());
    } else {
        cardContainer.insertAdjacentHTML('afterbegin', newCardHTML);
        const lastCard = cardContainer.lastElementChild;
        lastCard.classList.add('slide-out-right');
        setTimeout(() => lastCard.remove());
    }

    applyCardTransitions();
}

function applyCardTransitions() {
    const cardWrappers = document.querySelectorAll('.card-wrapper');
    cardWrappers.forEach((card) => {
        card.style.transition = 'transform 0.5s ease-in-out';
    });
}
window.addEventListener('resize', () => {
    fetchThronesData();
});

fetchThronesData();


// scroll animation

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});

// scroll home

sr.reveal('.vidcontainer', {delay: 100})
sr.reveal('.mainvidCont', {delay: 200})
sr.reveal('.soundtrackDiv', {delay: 300})
sr.reveal('.featuredHotd', {delay: 200})
sr.reveal('.hotdimgCon', {delay: 200})
sr.reveal('.hotdgimgTxt', {delay: 500})


//  scroll about and contact
const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
});


srLeft.reveal('.secondVid', {delay: 100})
srLeft.reveal('.featuredTxt', {delay: 200})

srLeft.reveal('.cardContainer', {delay: 100})
srLeft.reveal('.btncardContainer', {delay: 200})
srLeft.reveal('.vidcontainer2', {delay: 200})
srLeft.reveal('.vidcontainer2Txt', {delay: 500})


