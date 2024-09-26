const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");
function sendEmail(){
    const bodyMessage = `Full name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;
    Email.send({
        Host : "smtp.gmail.com",
        Username : "carnavalgamesbrasil@gmail.com",
        Password : "7D4506E1FFBC980D32B74D8649EE3BBCA419",
        To : 'carnavalgamesbrasil@gmail.com',
        From : "carnavalgamesbrasil@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(message => alert(message)
    );
}

form.addEventListener("sibmit", (e) => {
    e.preventDefault();

    sendEmail();
});