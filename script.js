let likeNumber = document.getElementById("skolko");
let text = document.getElementById("text");
let post = document.getElementById("firstPost");
let postsBox = document.getElementById("postsBox");
let comment = document.getElementById("comment");
let comments = document.getElementById("comments");
let pic = [
    "horror.jpg",
    "treatb.jpg",
    "tankodaniil.jpg"
];
let texty = [
    "I've been thinking, maybe you and I could partner up",
    "Ska-pa-dab-di-bab-di-doo-noo-do",
    "Zhestkiye tanki brawl stars vova nike"
];
for (let i = 0; i < 97; i++) {
    text.innerHTML = texty[i % 3];
    let newpost = post.cloneNode(true);
    let imgpost = newpost.getElementsByClassName("img")[0];
    imgpost.setAttribute("src", pic[i % 3]);
    postsBox.appendChild(newpost);
}
let c = 0;
function like() {
    c++;
    likeNumber.innerHTML = c;
}
function addcomment() {
        let input = comment.value;
        let addme = document.createElement("p");
        addme.innerHTML = "Anonymous: " + input;
        comments.appendChild(addme);
        comment.value = ""; 
     }
