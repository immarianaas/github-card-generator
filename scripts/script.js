// This is an empty javascript file. Delete this line and insert your JS!
// import { Octokit } from "https://cdn.skypack.dev/octokit";


// import { Octokit } from "@octokit/rest";



function copyCode() {
    let codeElem = document.getElementById('staticcodeblock');
    navigator.clipboard.writeText(codeElem.textContent);


    document.getElementById("copiedMsg").hidden = false;
}




