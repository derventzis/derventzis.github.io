const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text");


toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})


function toggleDark() {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    localStorage.setItem("theme", "light");
    modeText.innerText = "Dark Mode";
  } else {
    body.classList.add('dark');
    localStorage.setItem("theme", "dark");
    modeText.innerText = "Light Mode";
  }
}

if (localStorage.getItem("theme") === "dark") {
  body.classList.add('dark');
  modeText.innerText = "Light Mode";
}

body.querySelector('.toggle-switch').addEventListener('click', toggleDark);
