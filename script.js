window.addEventListener("scroll", function(){
    let scroll = document.querySelector(".upward");
    scroll.classList.toggle("active", window.scrollY>500)
})
  
function scrollTopTop() {
      window.scrollTo({
        top:0,
        behavior:"smooth"
      })
}

async function sendForm(form) {
    let response = await fetch("contact.obr.php", {
    method: "POST",
    body: new FormData(form),
    });
    let result = await response.text();
    if (result == "ok") {
     $("#myModal").modal("show");
     setTimeout(() => {
       location.href = "/";
     }, 1000);
    }
}


// Очищение инпута в оформе обратной связи
// window.onload=function() {
//   let btn = document.getElementById("btn");

//   btn.addEventListener("click", function handleClick(event) {
//     // 👇️ if you are submitting a form (prevents page reload)
//     event.preventDefault();

//     let firstNameInput = document.getElementById("first_name");

//     let lastNameInput = document.getElementById("last_name");

//     let emailInput = document.getElementById("email");

//     let messageInput = document.getElementById("message");

//     console.log(firstNameInput.value);
//     console.log(lastNameInput.value);
//     console.log(emailInput.value);
//     console.log(messageInput.value);

//     firstNameInput.value = "";
//     lastNameInput.value = "";
//     emailInput.value = "";
//     messageInput.value = "";
//     });
//   }

