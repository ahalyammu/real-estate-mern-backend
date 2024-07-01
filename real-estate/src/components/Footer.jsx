import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
<footer
  class="text-center lg:text-left">
  <div class="flex items-center justify-center border-b-2 border-neutral-200 p-6 lg:justify-between">
    <div class="mx-auto">
      <span style={{color:'rgb(148 163 184'}}>Get connected with us on social networks:</span>
    </div>
    <div class="flex justify-center mx-auto">
      <a href="https://www.facebook.com/"><i class="fa-brands fa-facebook-f me-6"></i></a>
      <a href="https://x.com/"><i class="fa-brands fa-x-twitter me-6"></i></a>
      <a href="https://www.google.com/"><i class="fa-brands fa-google me-6"></i></a>
      <a href="https://www.instagram.com/"><i class="fa-brands fa-instagram me-6"></i></a>
      <a href="https://in.linkedin.com/"><i class="fa-brands fa-linkedin-in me-6"></i></a>
      <a href="https://github.com/"><i class="fa-brands fa-github me-6"></i></a>
    </div>
  </div>
  <div class="mx-6 mt-3 text-center md:text-left">
    <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      <div>
        <h6
          class="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start" style={{color:'rgb(148 163 184'}}>
          <i class="fa-solid fa-house me-3"></i>
          Harmony Homes Hub
        </h6>
        <p>
        Harmony Homes Hub will help you find your home fast,easy and comfortable.
        Our expert support are always available.
        </p>
      </div>
      <div class="mx-16">
        <h6
          class="mb-4 flex justify-center font-semibold uppercase md:justify-start" style={{color:'rgb(148 163 184'}}>
          Useful links
        </h6>
        <p class="mb-4">
          <Link to={'/'}>Home</Link>
        </p>
        <p class="mb-4">
            <Link to={'/about'}>About</Link>
        </p>
        <p class="mb-4">
            <Link to={'/sign-in'}>Sign In</Link>
        </p>
        <p class="mb-4">
            <Link to={'/sign-up'}>Sign Up</Link>
        </p>
      </div>
      <div>
        <h6
          class="mb-4 flex justify-center font-semibold uppercase md:justify-start" style={{color:'rgb(148 163 184'}}>
          Contact
        </h6>
        <p class="mb-4 flex items-center justify-center md:justify-start">
        <i class="fa-solid fa-house me-3"></i>
          Mumbai, 400001, India
        </p>
        <p class="mb-4 flex items-center justify-center md:justify-start">
        <i class="fa-solid fa-envelope me-3"></i>
          info@example.com
        </p>
        <p class="mb-4 flex items-center justify-center md:justify-start">
        <i class="fa-solid fa-phone me-3"></i>
          + 01 234 567 88
        </p>
        <p class="flex items-center justify-center md:justify-start">
        <i class="fa-solid fa-print me-3"></i>
          + 01 234 567 89
        </p>
      </div>
      <div>
      <h6 class="flex justify-center font-semibold uppercase md:justify-start" style={{color:'rgb(148 163 184'}}>Subscribe</h6>
          <div className='d-flex mb-2'>
            <input type="email" className='border p-3 rounded-sm' placeholder='Enter your Email ID' />
            <button className='bg-red-600 text-white p-3 rounded-sm uppercase font-semibold ms-2'>Submit</button>
          </div>
          </div>
    </div>
  </div>

  <div class="bg-black/5 p-6 text-center">
    <span>© 2024 Copyright:</span>
    <a class="font-semibold" href=""
      >HarmonyHomesHub.com</a>
  </div>
</footer>
  )
}

export default Footer