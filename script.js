let likeNumber = document.getElementById("skolko") 
let text = document.getElementById("text"); 
let post = document.getElementById("firstPost");  
let postsBox = document.getElementById("postsBox")  
let comment = document.getElementById("comment")  
let comments = document.getElementById("comments")  
let pic = [  
    "horror.jpg", 
    "treatb.jpg",
    "tankodaniil.jpg"  
]  
let texty = [  
    "I`ve been thinking, maybe you and i could partner up", 
    "Ska-pa-dab-di-bab-di-doo-noo-do", 
    "Zhestkiye tanki brawl stars vova nike"
]  
for(let a = 1; a < 97; a++){   
    text.innerHTML = texty[i%3]
    console.log(texty[i%3]) 
    newpost = post.cloneNode(true);  
    imgpost = newpost.getElementsByClassName("img")[0]  
    imgpost.setAttribute("src", pic[i%3])  
    postsBox.appendChild(newpost);  
} 
let c=0;
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
