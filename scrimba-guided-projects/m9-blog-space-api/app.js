import { clearElementChildren } from './utils.js'

let blogsArray = []

function getBlogData() {
    fetch('https://apis.scrimba.com/jsonplaceholder/posts')
        .then(response => response.json())
        .then(data => {
            blogsArray = data.slice(0, 5)
            setBlogHtml()
        })
}

function postBlogData(formData) {
    fetch('https://apis.scrimba.com/jsonplaceholder/posts', {
        method: "POST",
        body: formData,
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => {
            blogsArray.unshift(data)
            setBlogHtml()
        })

}

function setBlogHtml() {
    let blogTemplate = document.createElement('template')

    clearElementChildren(document.getElementById('blog-post-container'))

    blogsArray.forEach(blog => {
        blogTemplate.innerHTML += `<div class='blog-post-item'>
                <h3>${blog.title}</h3>
                <p>${blog.body}</p>
            </div>`
    })
    document.getElementById('blog-post-container').append(blogTemplate.content)
}

function handlePostButton(e) {
    e.preventDefault()
    const blogFormData = new FormData(document.getElementById('blog-form'))
    postBlogData(JSON.stringify({
        title: blogFormData.get('title'),
        body: blogFormData.get('body')
    }))

    document.getElementById('blog-form').reset()
}

getBlogData()

document.getElementById('new-blog-button').addEventListener('click', () => document.getElementById('blog-form').classList.toggle('display-form'))

document.getElementById('blog-form').addEventListener('submit', handlePostButton)


