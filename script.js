let likeNumber = document.getElementById("howmany") 
let post = document.getElementById("firstPost");  
let postsBox = document.getElementById("postsBox")  
let text = document.getElementById("text"); 
let comment = document.getElementById("comment")  
let comments = document.getElementById("comments")  
let c=0; 
let imgurls = [  
    "horror.jpg", 
    "treatb.jpg",
    "tankodaniil.jpg"  
]  
let textIT = [  
    "I`ve been thinking, maybe you and i could partner up", 
    "Ska-pa-dab-di-bab-di-doo-noo-do", 
    "Zhestkiye tanki brawl stars vova nike"
]  

for(let i = 1; i < 100; i++){  
    newtext = textIT[i%3] 
    text.innerHTML = newtext 
    console.log(textIT[i%3]) 
 
    newpost = post.cloneNode(true);  
    imgpost = newpost.getElementsByClassName("img")[0]  
    text.innerHTML = textIT[i%3] 
    imgpost.setAttribute("src", imgurls[i%3])  
 
 
    postsBox.appendChild(newpost);  
 
} 
 
function like(){ 
    c++ 
    likeNumber.innerHTML = c 
} 
 
function addcomment(){ 
    let input = comment.value  
    let addme = document.createElement("p") 
    addme.innerHTML = "Anonimus:" + input 
    comments.appendChild(addme) 
}