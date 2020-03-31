export const removeHide = () => {
  const overlay = document.querySelector('.overlay');
  const form = document.querySelector('.form');
  const appwrap = document.querySelector('.appwrap');
  //   appwrap.classList.add('hide');
  overlay.classList.remove('hide');
  form.classList.remove('hide');
  overlay.classList.add('animIn');
  overlay.classList.remove('animOut');
  appwrap.classList.add('keepPos');
};
export const addHide = () => {
  const overlay = document.querySelector('.overlay');
  const form = document.querySelector('.form');
  const appwrap = document.querySelector('.appwrap');
  overlay.classList.add('animOut');
  overlay.classList.remove('animIn');
  //   appwrap.classList.remove('hide');
  setTimeout(function() {
    overlay.classList.add('hide');
    form.classList.add('hide');
    appwrap.classList.remove('keepPos');
  }, 1000);
};

export const name = document.querySelector('#name');
