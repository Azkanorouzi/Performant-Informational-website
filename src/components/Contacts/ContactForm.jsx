import { useState } from 'preact/hooks'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    password: '',
  })
  const [error, setError] = useState('')

  return (
    <article class="flex gap-3">
      <strong>DROP US A LINE</strong>
      <p>
        {error ||
          'Your email address will not be published required inputs are marked *'}
      </p>
      {/* Form start */}
      <form>
        <input type="text" placeholder="*Your name" required />
        <input type="text" placeholder="*Your email" required />
        <input type="text" placeholder="Website" />
        <textArea></textArea>
        <button class="text-xl">SEND A MESSAGE</button>
      </form>
      {/* Form end */}
    </article>
  )
}
