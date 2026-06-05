import React, { useContext, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { DoctorContext } from '../../context/DoctorContext'

const DoctorResetPassword = () => {

  const { backendUrl } = useContext(DoctorContext)
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {

      setLoading(true)

      const { data } = await axios.post(
        backendUrl + '/api/doctor/reset-password',
        {
          email,
          otp,
          newPassword
        }
      )

      if (data.success) {

        toast.success('Password reset successful')

        setTimeout(() => {
          navigate('/')
        }, 1500)

      } else {
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='min-h-[80vh] flex items-center'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col gap-4 m-auto p-8 min-w-[340px] sm:min-w-96 border rounded-xl shadow-lg text-[#5E5E5E]'
      >
        <h2 className='text-2xl font-semibold text-center'>
          Reset Password
        </h2>

        <div>
          <p>Email</p>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border border-[#DADADA] rounded w-full p-2 mt-1'
            required
          />
        </div>

        <div>
          <p>OTP</p>
          <input
            type='text'
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className='border border-[#DADADA] rounded w-full p-2 mt-1'
            required
          />
        </div>

        <div>
          <p>New Password</p>
          <input
            type='password'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className='border border-[#DADADA] rounded w-full p-2 mt-1'
            required
          />
        </div>

        <button
          type='submit'
          disabled={loading}
          className={`text-white py-2 rounded-md ${
            loading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-primary'
          }`}
        >
          {loading ? 'Resetting...' : 'Reset Password'}
        </button>
      </form>
    </div>
  )
}

export default DoctorResetPassword