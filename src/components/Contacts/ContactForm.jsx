import DOMPurify from 'dompurify'
import { useState } from 'preact/hooks'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    comment: '',
  })
  const disabled = !formData.name.length || !formData.email.length
  const [error, setError] = useState('')
  // Handles form input changes
  function handleChange(setter) {
    return function (e) {
      setFormData(() => {
        return { ...formData, [setter]: e.target.value }
      })
    }
  }

  function submit() {
    if (!validate(formData.name, formData.email, formData.website)) return
    // validating the form
    setError('')
    setFormData({
      name: '',
      email: '',
      website: '',
      comment: '',
    })
    // Avoids xss
    const purifiedData = {
      name: DOMPurify.sanitize(formData.name),
      email: DOMPurify.sanitize(formData.email),
      website: DOMPurify.sanitize(formData.website),
      comment: DOMPurify.sanitize(formData.comment),
    }
  }

  // validation with regexp
  function validate(name, email, website) {
    const nameRegex = /^[a-zA-Z]{3,}$/ // At least three alphabetical characters
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ // Email format
    const websiteRegex =
      /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-zA-Z0-9]+([-.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,5}(:[0-9]{1,5})?(\/.*)?$/ // Website format

    let isValid = true

    // Validate name
    if (!nameRegex.test(name)) {
      isValid = false
      setError(
        'Please enter a valid name (at least three alphabetical characters)'
      )
    }

    // Validate email
    if (!emailRegex.test(email)) {
      isValid = false
      setError('Please enter a valid email address')
    }

    // Validate website (optional)
    if (website.trim() !== '' && !websiteRegex.test(website)) {
      isValid = false
      setError('Please enter a valid website URL')
    }

    return isValid
  }

  return (
    <article class="flex gap-3 bg-primary w-[90vw] sm:w-[80vw] lg:w-[75vw] max-w-[1200px]  p-10 flex-col ">
      <strong class="text-2xl font-oswaldBold">DROP US A LINE</strong>
      <p
        class={`font-oswaldLight mb-4 sm:w-[300px] rounded-md ${
          !error
            ? ''
            : 'text-primary bg-secondary font-oswaldBold flex justify-center p-2'
        }`}
      >
        {!error ? (
          'Your email address will not be published required inputs are marked *'
        ) : (
          <>
            <i class={'bi bi-shield-exclamation mr-2'}></i>{' '}
            <span> {error} </span>{' '}
          </>
        )}
      </p>
      {/* Form start */}
      <form class="flex flex-col gap-6 font-oswaldLight">
        <div class="flex sm:gap-10 flex-col sm:flex-row gap-6">
          <input
            type="text"
            placeholder="*Your name"
            required
            class="flex-1 bg-transparent placeholder-current p-2 pl-0 border-current border-b outline-none focus:text-secondary text-[rgba(255,255,255,0.5)]"
            minLength={3}
            maxLength={255}
            name={'name'}
            style={{ letterSpacing: '1px' }}
            value={formData.name}
            onChange={handleChange('name')}
          />
          <input
            type="email"
            placeholder="*Your email"
            required
            class="flex-1 bg-transparent placeholder-current p-2 pl-0 border-current border-b outline-none focus:text-secondary text-[rgba(255,255,255,0.5)]"
            name={'email'}
            maxLength={255}
            style={{ letterSpacing: '1px' }}
            value={formData.email}
            onChange={handleChange('email')}
          />
        </div>
        <input
          type="url"
          placeholder="Website"
          class="flex-1 bg-transparent placeholder-current p-2 pl-0 border-current border-b outline-none focus:text-secondary text-[rgba(255,255,255,0.5)]"
          maxLength={255}
          name={'website'}
          style={{ letterSpacing: '1px' }}
          value={formData.website}
          onChange={handleChange('website')}
        />
        <div>
          <textarea
            class=" placeholder-current p-2 pl-0 border-current border-b outline-none focus:text-secondary text-[rgba(255,255,255,0.5)] resize-none h-20 bg-transparent focus:outline-none mb-3 w-full"
            rows={4}
            name={'comment'}
            placeholder="Your comment"
            value={formData.comment}
            onChange={handleChange('comment')}
          ></textarea>
        </div>

        <div>
          <button
            class="text-[.7rem] uppercase bg-secondary text-sixth font-oswaldBold py-4 px-6 hover:bg-sixth hover:text-secondary transition-colors disabled:hover:bg-secondary disabled:hover:text-sixth disabled:opacity-85"
            disabled={disabled}
            style={{ letterSpacing: '1px' }}
            type="button"
            onClick={submit}
          >
            SEND A MESSAGE
          </button>
        </div>
      </form>
      {/* Form end */}
    </article>
  )
}
// // Get form inputs
// const nameInput = document.querySelector('input[name="name"]');
// const emailInput = document.querySelector('input[name="email"]');
// const websiteInput = document.querySelector('input[name="website"]');

// // Regular expressions for validation
// const nameRegex = /^[a-zA-Z]{3,}$/; // At least three alphabetical characters
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email format
// const websiteRegex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-zA-Z0-9]+([-.]{1}[a-zA-Z0-9]+)*\.[a-zA-Z]{2,5}(:[0-9]{1,5})?(\/.*)?$/; // Website format

// // Function to validate inputs
// function validateInputs() {
//     let isValid = true;

//     // Validate name
//     if (!nameRegex.test(nameInput.value)) {
//         isValid = false;
//         alert('Please enter a valid name (at least three alphabetical characters)');
//     }

//     // Validate email
//     if (!emailRegex.test(emailInput.value)) {
//         isValid = false;
//         alert('Please enter a valid email address');
//     }

//     // Validate website (optional)
//     if (websiteInput.value.trim() !== '' && !websiteRegex.test(websiteInput.value)) {
//         isValid = false;
//         alert('Please enter a valid website URL');
//     }

//     return isValid;
// }

// // Add event listener to form submission
// document.querySelector('form').addEventListener('submit', function(event) {
//     if (!validateInputs()) {
//         event.preventDefault(); // Prevent form submission if inputs are not valid
//     }
// });
