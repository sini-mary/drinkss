let navLines = document.querySelector(".nav-lines");
navLines.addEventListener("click", () => {
    let navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
})
const box = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = window.innerHeight / 5 * 4;
  
  box.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    
    if(boxTop < triggerBottom) {
      box.classList.add('show');
    } else {
      box.classList.remove('show');
    }
  })
}