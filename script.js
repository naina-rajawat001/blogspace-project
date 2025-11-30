let divContent = document.getElementById("content")
let titleInput = document.getElementById("title")
let textareaInput = document.getElementById("body")
let submitBtn = document.getElementById("submit")
let form = document.getElementById("form")




let postsArray = []
function renderPosts () {
    let html = ""
    for (post of postsArray) {
       html+=  `<h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr></hr>`
    }
    divContent.innerHTML = html
}




form.addEventListener("submit",(e) => {
    e.preventDefault()
    let postTitle = titleInput.value;
    let postBody = textareaInput.value;
    let formContent = {
        title: postTitle,
        body: postBody
    }
    let options = {
                method: "POST",
                body: JSON.stringify((formContent)),
                headers: {
                    "content-Type": "application/json"
                }
    }
    fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
    .then(res=> res.json())
    .then(data => {
        postsArray.unshift(data)
        renderPosts()
        form.reset();
    })
})




let url = "https://apis.scrimba.com/jsonplaceholder/posts"
fetch(url)
.then(res => res.json())
.then(data => {
    postsArray = data.slice(0,5)
    renderPosts()
})
.catch(err => err)