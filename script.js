const signupModal = document.getElementById('signupModal');
const signupButtons = document.querySelectorAll('.open-signup');
const signupForm = document.getElementById('signupForm');
const closeBtn = document.querySelector('.close');

signupButtons.forEach(btn=>{
  btn.addEventListener('click',()=>{
    signupModal.classList.add('open');
  });
});

closeBtn.addEventListener('click', closeSignup);

function closeSignup(){
  signupModal.classList.remove('open');
  signupForm.reset();
}

window.addEventListener('click',(e)=>{
  if(e.target === signupModal){
    closeSignup();
  }
});

/* HAMBURGER MENU */
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navbar.classList.toggle("expanded");
});
