import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'> CareConnect is a modern healthcare platform that connects patients with trusted medical professionals. We simplify the appointment booking process by allowing users to discover specialists, view doctor profiles, and schedule consultations online. Our goal is to make quality healthcare more accessible, convenient, and efficient for everyone.
</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
  <li>
    <Link
  to="/"
  onClick={() => window.scrollTo(0, 0)}
>
  Home
</Link>
  </li>
  <li>
    <Link
  to="/about"
  onClick={() => window.scrollTo(0, 0)}
>
  About Us
</Link>
  </li>
  <li><Link
  to="/contact"
  onClick={() => window.scrollTo(0, 0)}
>
  Contact Us
</Link></li>
  <li><Link
  to="/"
  onClick={() => window.scrollTo(0, 0)}
>
  Privacy Policy
</Link></li>
</ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+91-9131369842</li>
            <li>CareConnect@gmail.com</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2026 @CareConnect.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
