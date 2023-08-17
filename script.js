
const checkbox = document.getElementById('checkbox');
const body = document.body;
const cards = document.querySelectorAll('section');

const darkTheme = () => {
  localStorage.setItem("theme", "dark");
  body.classList.add('dark-body');
  cards.forEach(card => {
    card.classList.add(`${card.classList[0]}_night`);
  });
}

const lightTheme = () => {
  localStorage.setItem("theme", "light");
  body.classList.remove('dark-body');
  cards.forEach(card => {
    card.classList.remove(`${card.classList[0]}_night`);
  });
}

checkbox.onchange = () => {
  if (checkbox.checked) {
    darkTheme();
    return;
  }
  lightTheme();
}

const applyTheme = () => {
  const theme = localStorage.getItem("theme");
  if(theme === 'dark') {
    darkTheme();
  }
}

applyTheme();