const images = "http://localhost:3000/images";
const comments = "http://localhost:3000/comments";
const cardImage = document.getElementById('card-image')
const likesBttn = document.getElementById('like-button')
const commentForm = document.getElementById('comment-form')
const commentsList = document.getElementById('comments-list')




fetch(images)
    .then((res) => res.json())
    .then(displayImage)
    

fetch(comments)
    .then((res) => res.json())
    .then(displayComments)

function displayComments(commentsArray){

}

function displayImage(imageArray){
    const dogImage = document.createElement("img");
    dogImage.src = imageArray.image;
    cardImage.append(dogImage);
}

