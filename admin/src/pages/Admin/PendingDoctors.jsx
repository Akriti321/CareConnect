import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

const PendingDoctors = () => {

    const [doctors, setDoctors] = useState([])

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const fetchPendingDoctors = async () => {
        try {

            const aToken = localStorage.getItem('aToken')

            const { data } = await axios.get(
                `${backendUrl}/api/admin/pending-doctors`,
                {
                    headers: { aToken }
                }
            )

            if (data.success) {
                setDoctors(data.doctors)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
        const { data } = await axios.get(
    backendUrl + '/api/admin/pending-doctors',
    {
        headers: { aToken }
    }
)

console.log(data)
    }

    const approveDoctor = async (doctorId) => {
        try {

            const aToken = localStorage.getItem('aToken')

            const { data } = await axios.post(
                `${backendUrl}/api/admin/approve-doctor`,
                { doctorId },
                {
                    headers: { aToken }
                }
            )

            if (data.success) {
                toast.success(data.message)
                fetchPendingDoctors()
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    const rejectDoctor = async (doctorId) => {
        try {

            const aToken = localStorage.getItem('aToken')

            const { data } = await axios.post(
                `${backendUrl}/api/admin/reject-doctor`,
                {
                    doctorId,
                    rejectionReason: 'Rejected by admin'
                },
                {
                    headers: { aToken }
                }
            )

            if (data.success) {
                toast.success(data.message)
                fetchPendingDoctors()
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        fetchPendingDoctors()
    }, [])

    return (
        <div className='w-full m-5'>

            <h1 className='text-2xl font-semibold mb-5'>
                Pending Doctor Requests
            </h1>

            {doctors.length === 0 ? (
                <p>No pending doctor requests.</p>
            ) : (
                doctors.map((doctor) => (
                    <div
                        key={doctor._id}
                        className='border rounded-lg p-4 mb-4 bg-white shadow-sm flex justify-between items-center'
                    >
                        <div>
                            <p className='font-semibold text-lg'>
                                {doctor.name}
                            </p>

                            <p>{doctor.email}</p>
                            <p>{doctor.degree}</p>
                            <p>{doctor.speciality}</p>

                            <p className='text-sm text-gray-500'>
                                Status: {doctor.verificationStatus}
                            </p>
                        </div>

                        <div className='flex gap-3'>
                            <button
                                onClick={() => approveDoctor(doctor._id)}
                                className='bg-green-500 text-white px-4 py-2 rounded'
                            >
                                Approve
                            </button>

                            <button
                                onClick={() => rejectDoctor(doctor._id)}
                                className='bg-red-500 text-white px-4 py-2 rounded'
                            >
                                Reject
                            </button>
                        </div>
                    </div>
                ))
            )}

        </div>
    )
}

export default PendingDoctors