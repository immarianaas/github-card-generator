// This is an empty javascript file. Delete this line and insert your JS!
// import { Octokit } from "https://cdn.skypack.dev/octokit";


// import { Octokit } from "@octokit/rest";

window.onload = function () {
    let username = "immarianaas";
    document.getElementById('username').innerHTML = username;

    let repName = "rep-name-1";
    document.getElementById('repname').innerHTML = repName;

    let description = "decsription asoudhasç foisajpoisajfojk a fsoijsfoj fsa+oijofsij saoi+jsoif";
    document.getElementById('description').innerHTML = description;

    let topic_code = '<span class="description topic"> {{help}} </span>';
    topic_code += '<span class="description topic"> {{help}} </span>';
    document.getElementById('topics').innerHTML = topic_code;

    /*

    let octokit = new Octokit({});
    let owner = "immarianaas";
    let repo = "c-quiz-language";

    let answer = octokit.request('GET /repos/' + owner + '/' + repo, {
        owner: owner,
        repo: repo
    });

    answer.then(result => {
        console.log(result);
    });
    */



 


}