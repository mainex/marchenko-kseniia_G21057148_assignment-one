function addFooter() {
    let footer = document.createElement("footer");
    footer.innerHTML =
        "<div><h1 class=\"footerAndHeaderText\">Links</h1>" +
        "<a class=\"footerAndHeaderText\" href=\"https://www.uclansu.co.uk/\">Student's Union</a></div>" +
        "<div style='margin-left: auto;margin-right: auto;'><h1 class=\"footerAndHeaderText\">Contact</h1>" +
        "<p class=\"footerAndHeaderText\">Email: suinformation@uclan.ac.uk</p>" +
        "<p class=\"footerAndHeaderText\">Phone: 01772 89 3000</p></div>" +
        "<div style='margin-left: auto;margin-right: 50px;'><h1 class=\"footerAndHeaderText\">Location</h1>" +
        "<p class=\"footerAndHeaderText\">University of Central Lancashire Students' Union, " +
        "<br>Fylde Road, Preston, PR1 7BY <br>Registered in England " +
        "<br>Company Number: 7623917 " +
        "<br>Registered Charity Number: 1142616</p></div>";
    document.body.appendChild(footer);
}

function addHeader() {
    let header = document.createElement("header");
    let headerInput =
        "<img src='resources/images/logo.svg' width='200px'>" +
        "<div style=\"margin-left: 10%\"><h1 class=\"footerAndHeaderText\">  Student Shop</h1></div>" +
        "<div style=\"margin-right: 10px;margin-left: auto;\">" +
        "<a class=\"footerAndHeaderText\" href=\"index.html\">Home</a>" +
        "<a class=\"footerAndHeaderText\" href=\"products.html\">Products</a>" +
        "<a class=\"footerAndHeaderText\" href=\"cart.php\">Cart</a>" +
        "</div>";
    if (isSignUp()) {
        headerInput += "<a class=\"footerAndHeaderText\" href=\"signup.html\">Sign up</a>";
    } else {
        headerInput += "<a class=\"footerAndHeaderText\" href=\"signup.html\">Log out</a>";
    }
    headerInput += "</div>";
    header.innerHTML = headerInput;
    document.body.appendChild(header);
}

function isSignUp() { // TODO
    return true;
}