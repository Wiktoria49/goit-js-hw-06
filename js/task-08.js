const form = document.querySelector('form.login-form');
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  if (
    event.currentTarget.elements.email.value === '' ||
    event.currentTarget.elements.password.value === ''
  ) {
    return alert('Wszystkie pola powinny zostać wypełnione');
  }
  const userData = {};
  formData.forEach((value, name) => {
    userData[name] = value;
  });
  console.log(userData);
  form.reset();
}
