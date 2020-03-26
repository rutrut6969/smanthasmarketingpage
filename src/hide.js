export const removeHide = () => {
  const overlay = document.querySelector('.overlay');
  const form = document.querySelector('.form');
  const appwrap = document.querySelector('.appwrap');
  appwrap.classList.add('hide');
  overlay.classList.remove('hide');
  form.classList.remove('hide');
};
export const addHide = () => {
  const overlay = document.querySelector('.overlay');
  const form = document.querySelector('.form');
  const appwrap = document.querySelector('.appwrap');
  appwrap.classList.remove('hide');
  overlay.classList.add('hide');
  form.classList.add('hide');
};
