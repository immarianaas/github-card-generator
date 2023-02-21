
function resetPage() {
    hide("error-msg");
    hide("css-copiedMsg");
    hide("html-copiedMsg");
    document.getElementById("codeSection").hidden = true;
}

function handleFormError() {
    show("error-msg");
}

function copyHTMLCode() {
    let codeElem = document.getElementById('html-code-block');
    navigator.clipboard.writeText(codeElem.textContent);

    hide("css-copiedMsg");
    show("html-copiedMsg");
}

function copyCSSCode() {
    let codeElem = document.getElementById('css-code-block');
    navigator.clipboard.writeText(codeElem.textContent);

    show("css-copiedMsg");
    hide("html-copiedMsg");
}


function showCodeSection() {
    hide("css-copiedMsg");
    hide("html-copiedMsg");
    document.getElementById("codeSection").hidden = false;
}


function hide(id) {
    document.getElementById(id).style.display = 'none';
}

function show(id) {
    document.getElementById(id).style.display = '';
}

let cssCode =
    `
#card {
    background-color: white;

    /* border & size */
    border: solid black 2px;
    border-radius: 10px;
    padding: 10px;
    width: 500px;

    /* center text */
    text-align: center;

    /* font */
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 15px;
    color: black;
}

#card:hover {
    background-color: #F6F8FA;
}

.pointer-cursor {
    cursor: pointer;
}

.icon {
    display: inline-block;
    vertical-align: middle;

    border-radius: 10px;
    margin: 5px;
}

#user-section {
    background-color: #F6F8FA;
    border-radius: 10px;

    display: inline-block;
    margin: 0 auto;
    padding-right: 10px;

    text-align: center;
    vertical-align: middle;
}

#user-section:hover {
    background-color: gainsboro;
}

#owner {
    display: inline-block;
    vertical-align: middle;
}

#repo-name {
    display: inline-block;
    vertical-align: middle;

    padding-left: 10px;

    font-size: 20px;
    font-weight: 600;
}

#topics span {
    display: inline-block;
    vertical-align: middle;

    margin: 2px;
    padding: 3px;

    background-color: #DDF4FF;
    border-radius: 7px;
    border: black solid 2px;
}

#additional-info {
    display: flex;
    width: 100%;
    justify-content: space-evenly;

    margin-top: 5px;
    color: gray;
}

.underline-hover:hover {
    text-decoration: underline;
}
`;
