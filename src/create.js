import { supabase } from './connection.js'

const form = document.querySelector('#post-form')

form.addEventListener('submit', async (event) => {
  event.preventDefault()

  const formData = new FormData(form)
  const title = formData.get('title')
  const content = formData.get('content')
  const week = parseInt(formData.get('week')) //Make sure week is a number

  const { data } = await supabase
    .from('posts')
    .insert([{ title, content, week }])
    .select()
    .single()

  window.location.href = `post.html?id=${data.id}`
})