// showing loading
function displayLoading() {
  const loader = document.querySelector("#loading");
  const body = document.querySelector("body");
  loader.classList.add("display");
  body.classList.add("waiting");
  // to stop loading after some time
  setTimeout(() => {
    loader.classList.remove("display");
    body.classList.remove("waiting");
  }, 5000);
}

// hiding loading
function hideLoading() {
  const loader = document.querySelector("#loading");
  const body = document.querySelector("body");
  loader.classList.remove("display");
  body.classList.remove("waiting");
}

function displayErrors(errors) {
  const error = document.getElementById('error');
  const errorMessage = document.getElementById('error-message');

  if (errors.length === 0) {
    error.classList.add('d-none');
    errorMessage.innerText = '';
    return;
  }

  error.classList.remove('d-none');
  errorMessage.innerText = errors.join('\n');
}
