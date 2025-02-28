const P = btoa("ASF-AfterService");

function PPP() {
    const PP = document.getElementById("ASF-AfterService").value;
    const EP = btoa(PP);

    if (EP === P) {
        sessionStorage.setItem("loggedIn", "true");
        window.location.href = "links.html";
    } else {
        alert("パスワードが違います");
    }
}
