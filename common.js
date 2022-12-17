function addFooter() {
    let footer = document.createElement("footer");
    footer.innerHTML =
        "<div><h1>Links</h1>" +
        "<a class=\"footerAndHeaderText\" href=\"https://www.uclansu.co.uk/\">Student's Union</a>" +
        "<h1>Contact</h1>" +
        "<p class=\"footerAndHeaderText\">Email: suinformation@uclan.ac.uk</p>" +
        "<p class=\"footerAndHeaderText\">Phone: 01772 89 3000</p></div>" +
        "<div><h1>Location</h1>" +
        "<p class=\"footerAndHeaderText\">University of Central Lancashire Students' Union, " +
        "<br>Fylde Road, Preston, PR1 7BY <br>Registered in England " +
        "<br>Company Number: 7623917 " +
        "<br>Registered Charity Number: 1142616</p></div>";
    document.body.appendChild(footer);
}

function addHeader() {
    let header = document.createElement("header");
    header.innerHTML =
        "<img src='resources/images/logo.svg' width='200px'>" +
        "<div><h1>Student Shop</h1></div>" +
        "<div><a class=\"footerAndHeaderText\" href=\"index.html\">Home</a>" +
        "<a class=\"footerAndHeaderText\" href=\"products.html\">Products</a>" +
        "<a class=\"footerAndHeaderText\" href=\"cart.html\">Cart</a></div>";
    document.body.appendChild(header);
}