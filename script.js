function setMood(mood){

document.getElementById("hasil").innerHTML =
`
Mood Hari Ini:
<br><br>
${mood}
`;

function login(){

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user === "admin" && pass === "12345"){
        localStorage.setItem("login","true");
        window.location.href = "index.html";
    } else {
        alert("Username atau Password salah!");
    }
}

}