// Log the form submission

// Select the form element from the HTML
const form = document.querySelector("form"); // "document" basically is the HTML document. The querySelector basically goes through the HTML document and returns the first selector that matches the thing searched.

form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(event.target.username.value);
  console.log(event.target.password.value);
  console.log(event.target.saveUsernameCheckbox.checked);
  const submission = Object.fromEntries(new FormData(event.target));
  console.log(submission);
});
