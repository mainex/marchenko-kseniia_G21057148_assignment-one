function addFooter() {
    let footer = document.createElement("footer");
    footer.innerHTML =
        "<h1>Links</h1>" +
        "<a href=\"https://www.uclansu.co.uk/\">Student's Union</a>" +
        "<h1>Contact</h1>" +
        "<p>Email: suinformation@uclan.ac.uk</p>" +
        "<p>Phone: 01772 89 3000</p><h1>Location</h1>" +
        "<p>University of Central Lancashire Students' Union, " +
        "<br>Fylde Road, Preston, PR1 7BY <br>Registered in England " +
        "<br>Company Number: 7623917 " +
        "<br>Registered Charity Number: 1142616</p> ";
    document.body.appendChild(footer);
}

function addHeader() {
    let header = document.createElement("header");
    header.innerHTML =
        "<h1>Student Shop</h1>" +
        "<a href=\"index.html\">Home</a>" +
        "<a href=\"products.html\">Products</a>" +
        "<a href=\"cart.html\">Cart</a>";
    document.body.appendChild(header);
}