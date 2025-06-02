import { supabase } from './connection.js'

const list = document.querySelector('#post-list')

const { data: posts } = await supabase
  .from('posts')
  .select('*')
  .order('created_at', { ascending: false })

posts.forEach(post => {
  const li = document.createElement('li')
  li.innerHTML = `<strong class="title">${post.title}</strong>`

  const updateBtn = document.createElement('button')
  updateBtn.textContent = 'Update'
  updateBtn.addEventListener('click', () => {
    window.location.href = `update.html?id=${post.id}`
  })

  const deleteBtn = document.createElement('button')
  deleteBtn.textContent = 'Delete'
  deleteBtn.addEventListener('click', () => {
    supabase
      .from('posts')
      .delete()
      .eq('id', post.id)
    li.remove()
  })

  li.appendChild(updateBtn)
  li.appendChild(deleteBtn)
  list.appendChild(li)
})