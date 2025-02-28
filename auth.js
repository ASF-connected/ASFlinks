const P = btoa("ASF-AfterService");

function PPP() {
    const PPP = document.getElementById("ASF-AfterService").value;
    const EP = btoa(PPP);

    if (EP === P) {
        sessionStorage.setItem("loggedIn", "true");
        window.location.href = "links.html";
    } else {
        alert("パスワードが違います"); 
    }
}
