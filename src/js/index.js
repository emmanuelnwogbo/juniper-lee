import '../scss/main.scss';
const aboutCheck = document.getElementById('about'),
  servicesCheck = document.getElementById('services'),
  workCheck = document.getElementById('work'),
  clientCheck = document.getElementById('clients'),
  blogCheck = document.getElementById('blog'),
  contactCheck = document.getElementById('contact'),
  aboutBtn = document.getElementById('about-btn'),
  servicesBtn = document.getElementById('services-btn'),
  workBtn = document.getElementById('work-btn'),
  clientBtn = document.getElementById('client-btn'),
  blogBtn = document.getElementById('blog-btn'),
  contactBtn = document.getElementById('contact-btn'),
  nameDiv = document.getElementById('name-div'),

  btns = [
    aboutBtn,
    servicesBtn,
    workBtn,
    clientBtn,
    blogBtn,
    contactBtn
  ],

  checkInputs = [
    aboutCheck,
    servicesCheck,
    workCheck,
    clientCheck,
    blogCheck,
    contactCheck
  ];

btns.forEach(btn => {
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    let link = this.childNodes,
      name = link[1].innerHTML;
    checkInputs.forEach(checkInput => {
      if (checkInput.id === name && !checkInput.checked) {
        checkInputs.forEach(checkInput => {
          if (checkInput.id !== name && checkInput.checked) {
            checkInput.checked = false;
          }
        })
        checkInput.checked = true
      }
    })
  })
});

nameDiv.addEventListener('click', function () {
  checkInputs.forEach(checkInput => {
    checkInput.checked = false;
  })
});