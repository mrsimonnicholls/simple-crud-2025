import { supabase } from './connection.js'

const pageID = new URLSearchParams(window.location.search).get('id')
console.log(pageID);

const { data: post, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', pageID)  //this is equivalent to WHERE 'id' = id  
    .single()  // we expect only one post.. single() says to return   
// only one item

document.querySelector('#post').innerHTML = `
    <h1>${post.title}</h1>
    <p>${post.content}</p>
    <h6>Week ${post.week}, ${new Date(post.created_at).toLocaleString('en-NZ', {
    dateStyle: 'full'
})}</h6>
  `


const nav = document.querySelector('#nav-links')


const { data: posts } = await supabase
    .from('posts')
    .select('*') // Corrected

posts.forEach(post => {
    const li = document.createElement('li')
    console.log(post.id)
    if (post.id == pageID) {
        const p = document.createElement('p')
        p.textContent = `Week ${post.week}` // Backticks for interpolation
        li.appendChild(p)

    } else {
        const a = document.createElement('a')
        a.href = `posts.html?id=${post.id}`
        a.textContent = `Week ${post.week}` // Backticks for interpolation
        li.appendChild(a)
    }

    nav.appendChild(li)
})

