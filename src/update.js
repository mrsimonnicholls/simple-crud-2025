import { supabase } from './connection.js'

const postID = new URLSearchParams(window.location.search).get('id')

const form = document.querySelector('#post-form')
const titleInput = form.querySelector('input[name="title"]')
const contentInput = form.querySelector('textarea[name="content"]')
const weekInput = form.querySelector('input[name="week"]')

// Load post and fill form
const { data: post } = await supabase
  .from('posts')
  .select('*')
  .eq('id', postID)
  .single()

titleInput.value = post.title
contentInput.value = post.content
weekInput.value = post.week

// Update on submit
form.addEventListener('submit', async (event) => {
  event.preventDefault()

  await supabase
    .from('posts')
    .update({
      title: titleInput.value,
      content: contentInput.value,
      week: parseInt(weekInput.value)
    })
    .eq('id', postID)

  window.location.href = `post.html?id=${postID}`
})