const menuButton = document.querySelector('.menu_icon');
const mobileMenu = document.querySelector('#mobile_menu');
const closeMenu = document.querySelector('.btn-close');
const header = document.querySelector('.header');
const portfolioLink = document.querySelector('.portfolioLink');
const aboutLink = document.querySelector('.aboutLink');
const contactLink = document.querySelector('.contactLink');

menuButton.addEventListener('click', () => {
  mobileMenu.classList.replace('hide_menu', 'show_menu');
  header.classList.replace('show_menu', 'hide_menu');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.replace('show_menu', 'hide_menu');
  header.classList.replace('hide_menu', 'show_menu');
});

portfolioLink.addEventListener('click', () => {
  mobileMenu.classList.replace('show_menu', 'hide_menu');
  header.classList.replace('hide_menu', 'show_menu');
});

aboutLink.addEventListener('click', () => {
  mobileMenu.classList.replace('show_menu', 'hide_menu');
  header.classList.replace('hide_menu', 'show_menu');
});

contactLink.addEventListener('click', () => {
  mobileMenu.classList.replace('show_menu', 'hide_menu');
  header.classList.replace('hide_menu', 'show_menu');
});

// Array of project objects to load the content dynamically
const works = [
  {
    id: 'featureWork',
    name: 'Multi-Post Stories',
    description: `A daily selection of privately personalized reads; no accounts or
                  sign-ups required. has been the industry's standard dummy text
                  ever since the 1500s, when an unknown printer took a standard
                  dummy text.`,
    featImage: 'imgs/img-placeholder-fw.png',
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    liveLink: 'https://sonuengineer.github.io/MyPortfolio/',
    sourceLink: 'https://github.com/sonuengineer/MyPortfolio',
  },
  {
    id: 'work1',
    name: 'Profesional Art Printing Data',
    description: `A daily selection of privately personalized reads; no accounts or
                  sign-ups required. has been the industry's standard.`,
    featImage: './imgs/placeholder-img.png',
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveLink: 'https://sonuengineer.github.io/MyPortfolio/',
    sourceLink: 'https://github.com/sonuengineer/MyPortfolio',
  },
  {
    id: 'work2',
    name: 'Data Dashboard Healthcare',
    description: `A daily selection of privately personalized reads; no accounts or
                  sign-ups required. has been the industry's standard.`,
    featImage: './imgs/placeholder-img.png',
    technologies: ['html', 'javascript', 'css'],
    liveLink: 'https://sonuengineer.github.io/MyPortfolio/',
    sourceLink: 'https://github.com/sonuengineer/MyPortfolio',
  },
  {
    id: 'work3',
    name: 'Website Protfolio',
    description: `A daily selection of privately personalized reads; no accounts or
                  sign-ups required. has been the industry's standard.`,
    featImage: './imgs/placeholder-img.png',
    technologies: ['html', 'javascript', 'Ruby'],
    liveLink: 'https://sonuengineer.github.io/MyPortfolio/',
    sourceLink: 'https://github.com/sonuengineer/MyPortfolio',
  },
  {
    id: 'work4',
    name: 'Profesional Art Data Printing',
    description: `A daily selection of privately personalized reads; no accounts or
                  sign-ups required. has been the industry's standard.`,
    featImage: './imgs/placeholder-img.png',
    technologies: ['html', 'css', 'Ruby'],
    liveLink: 'https://sonuengineer.github.io/MyPortfolio/',
    sourceLink: 'https://github.com/sonuengineer/MyPortfolio',
  },
  {
    id: 'work5',
    name: 'Healthcare Data Dashboard',
    description: `A daily selection of privately personalized reads; no accounts or
                  sign-ups required. has been the industry's standard.`,
    featImage: './imgs/placeholder-img.png',
    technologies: ['html', 'javascript', 'bootstrap'],
    liveLink: 'https://sonuengineer.github.io/MyPortfolio/',
    sourceLink: 'https://github.com/sonuengineer/MyPortfolio',
  },
  {
    id: 'work6',
    name: 'My Website Portfolio',
    description: `A daily selection of privately personalized reads; no accounts or
                  sign-ups required. has been the industry's standard.`,
    featImage: './imgs/placeholder-img.png',
    technologies: ['html', 'css', 'bootstrap', 'Ruby'],
    liveLink: 'https://sonuengineer.github.io/MyPortfolio/',
    sourceLink: 'https://github.com/sonuengineer/MyPortfolio',
  },
];

// create li-tags for technologies in each card
function generateLiTags(technologies) {
  const liTagsList = document.createElement('ul');
  for (let i = 0; i < technologies.length; i += 1) {
    const liTag = document.createElement('li');
    liTag.className = 'tag';
    liTag.textContent = technologies[i];
    liTagsList.appendChild(liTag);
  }
  return liTagsList.innerHTML;
}

// Create Work Cards Dynamically
const worksList = document.querySelector('#portfolio .works');

for (let i = 0; i < works.length; i += 1) {
  if (works[i].id === 'featureWork') {
    const featWorkTemplate = `
      <div class="featured-work">
      <img
          src="${works[i].featImage}"
          alt="Featured Project Screenshot"
          />

        <div class="right-block">
          <h3 class="title-post">${works[i].name}</h3>
          <p class="text-post">
            ${works[i].description}
          </p>
          <ul class="tags">
          ${generateLiTags(works[i].technologies)}
          </ul>

          <div class="action">
          <a class="btn" onclick="showPopUp('${works[i].id}');">See Project</a>
          </div>
        </div>
      </div>
    `;
    worksList.innerHTML += featWorkTemplate;
  } else {
    const cardWorkTemplate = `
      <div class="card-works" style=
      "background:
         linear-gradient(
         180.45deg,
         rgba(38, 38, 38, 0) 0.75%,
         rgba(255, 165, 00, 0.9) 61.94%
        ),
        url(${works[i].featImage});">
      <div class="right-block">
      <h3 class="title-post">${works[i].name}</h3>
          <p class="text-post">
            ${works[i].description}
          </p>
          <ul class="tags">
          ${generateLiTags(works[i].technologies)}
          </ul>
        </div>

        <div class="action">
          <a class="btn" onclick="showPopUp('${works[i].id}');">See Project</a>
        </div>
      </div>
    `;
    worksList.innerHTML += cardWorkTemplate;
  }
}

function getWork(id) {
  for (let i = 0; i < works.length; i += 1) {
    if (works[i].id === id) {
      return works[i];
    }
  }
  return false;
}
// generar pop-up windows
function showPopUp(id = null) {
  if (id !== null) {
    const work = getWork(id);
    const popuptemplate = `
      <div class="popup-card" id="${work.id}">
        <div class="popup-card-header">
          <h3 class="popup-card-title">
            ${work.name}
            <a class="popup-card-close" onclick="closepopup('${work.id}');">
            <img src="imgs/close_icon.png" alt="close popup window"></a>
          </h3>
          <ul class="popup-card-tags">
           ${generateLiTags(work.technologies)}
          </ul>
        </div>
        <div class="popup-card-body">
          <div class="popup-card-img" style="background-image:
          url('${work.featImage}')"></div>
          <div class="popup-card-footer">
            <p>${work.description}</p>
            <div class="popup-card-links">
              <ul>
                <li>
                  <a href="${work.liveLink}">See Live</a>
                  <img src="imgs/live-pop-icon.png" alt="live project icon">
                </li>
                <li>
                  <a href="${work.sourceLink}">See Source</a>
                  <img src="imgs/gh-pop-icon.png" alt="github repository icon">
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>`;

    const popUpList = document.querySelector('body article');
    popUpList.innerHTML += popuptemplate;
    popUpList.classList.replace('hide_menu', 'show_menu');
  }
}
showPopUp();

// create event for close 'x' buttons of popups
function closepopup(id = null) {
  if (id !== null) {
    const popUpList = document.querySelector('body #popup-window');
    const popUpCard = document.querySelector('body #popup-window .popup-card');
    popUpList.classList.replace('show_menu', 'hide_menu');
    popUpCard.parentNode.removeChild(popUpCard);
  }
}
closepopup();

// Form validation: email must be in lowercase
const contactForm = document.querySelector('.form');
const emailField = document.getElementById('email');
const errorField = contactForm.querySelector('.error');

const isValid = (email) => email.toLowerCase() === email;

emailField.addEventListener('input', () => {
  if (isValid(emailField.value)) {
    errorField.textContent = '';
    errorField.className = 'error';
  } else {
    errorField.textContent = 'Just lowecase letters allowed in email';
    errorField.className = 'error active';
  }
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  if (isValid(emailField.value)) {
    errorField.textContent = '';
    errorField.className = 'error';
    contactForm.submit();
  }
});

// Store data in localStorage
const fullName = document.getElementById('full_name');
const message = document.getElementById('message');
const email = document.getElementById('email');

function changeHandler() {
  const field = {
    name: fullName.value,
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('user', JSON.stringify(field));
}

if (localStorage.getItem('user') === null) {
  email.value = '';
  fullName.value = '';
  message.value = '';
} else {
  const user = JSON.parse(localStorage.getItem('user'));
  email.value = user.email;
  fullName.value = user.name;
  message.value = user.message;
}
changeHandler();
