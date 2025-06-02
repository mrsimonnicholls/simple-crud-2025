import { supabase } from './connection.js'

const { data: posts } = await supabase
    .from('posts')
    .select('id, title, created_at')
    .order('created_at', { ascending: false })

document.querySelector('#posts').innerHTML = posts.map(post => `
  <article>
    <h2>
      <a href="post.html?id=${post.id}">${post.title}</a>
    </h2>
    <p>${new Date(post.created_at).toLocaleDateString()}</p>
  </article>
`).join('')