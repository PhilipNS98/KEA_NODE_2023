// in the footer display the year and a copyright symbol © Copyright 

const footerCopyrightP = document.getElementById("copyright-year")
const year = new Date().getFullYear();
footerCopyrightP.innerText = `Copyright © ${year}`;