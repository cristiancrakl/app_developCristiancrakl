document.getElementById("formLogin").addEventListener("submit", function (e) {


    e.preventDefault();
    const email = document.getElementById("Email").value;
    const password = document.getElementById("Password").value;

    let alertType = ""
    let message = ""

    if (email === "" || password === "") {
        alertType = "warning"
        message = "inicio de sesion extitoso"

    } else if (email === 'moralescadenac@gmail.com' && password === '123456') {

        alertType = "success"
        message = "inicio de sesion extitoso"

    } else {
        alertType = "danger"
        message = "contraseña o correo incorrectas"
    }

    let alert = `
    
    <div class="alert alert-${alertType} alert-dismissible fade show" role="alert">
  ${message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>

    `;
    document.getElementById("alert").innerHTML = alert;

})


function login(email, password) {
    fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({email,password})
    })
    .then(
        
    )
}