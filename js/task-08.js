const form = document.querySelector(".login-form");

form.addEventListener("submit", submitBtn);

function submitBtn(event) {
  event.preventDefault();
  const data = new Object();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  data.email = email.value;
  data.password = password.value;
  //const formData = {email, password}
  console.log(data);
  // console.log(formData)
  event.currentTarget.reset();
}
