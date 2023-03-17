import fs from "fs";

import escape from "escape-html"
console.log(escape("<script>csgsdgg /script>"))

const components = "public/components/"
const pagesRoot = "public/pages/"

function renderPage(page, config={}) {
    // Components
    const navbar = fs.readFileSync("./public/components/navbar/navbar.html").toString()
    .replace("$TAB_TITLE", config.tabTitle || "Upper")
    .replace("$CSS_LINK", config.cssLink || "");
    const footer = fs.readFileSync(`${components}footer/footer.html`).toString()
    .replace("$FOOTER_YEAR", `Copyright © ${new Date().getFullYear()}`)
    
    return navbar + page + footer
}

function readPage(pagePath){
return  fs.readFileSync(pagesRoot + pagePath).toString();
}

export default {
    renderPage,
    readPage
}