const init = () => {
    const inputForm = document.querySelector("form");
  
    inputForm.addEventListener("submit", (event) => {
      event.preventDefault();
      fetch("http://localhost:3000/movies")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // LOG: (3) [{…}, {…}, {…}]

      });
    });
  };
  
  document.addEventListener("DOMContentLoaded", init);
