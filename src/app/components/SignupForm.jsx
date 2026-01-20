'use client'

import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { FaRegUserCircle } from 'react-icons/fa'
import { IoMdLogIn } from 'react-icons/io'
import { MdOutlineMailLock } from "react-icons/md"
import { TbLockPassword } from 'react-icons/tb'
import { signupAction } from './action/SignupAction'
import { toast } from 'react-toastify'
import { useRouter } from 'next/navigation'

const SignupForm = () => {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const res = await signupAction(data)

      if (res?.success) {
        toast.success('Signup successful! Please login.')
        reset()

       
        setTimeout(() => {
          router.push('/login')
        }, 1500)
      } else {
        toast.error(res?.message || 'Signup failed')
      }
    } catch (error) {
      toast.error('Something went wrong')
    }
  }

  return (
    <div className='max-w-sm mx-auto mt-20 border-2 border-slate-100 rounded-md shadow-md'>
      <form onSubmit={handleSubmit(onSubmit)} className='p-2'>

        {/* Username */}
        <fieldset className='flex flex-col gap-2 p-2'>
          <label className='text-white flex items-center gap-1'>
            <FaRegUserCircle /> Username
          </label>
          <input
            type="text"
            placeholder='john'
            {...register('username', { required: true })}
            className='border py-2 px-2 rounded-md'
          />
          {errors.username && (
            <p className='text-orange-500'>Username Required</p>
          )}
        </fieldset>

        {/* Email */}
        <fieldset className='flex flex-col gap-2 p-2'>
          <label className='text-white flex items-center gap-1'>
            <MdOutlineMailLock size={20} /> Email
          </label>
          <input
            type="email"
            placeholder='john@gmail.com'
            {...register('email', { required: true })}
            className='border py-2 px-2 rounded-md'
          />
          {errors.email && (
            <p className='text-orange-500'>Email Required</p>
          )}
        </fieldset>

        {/* Password */}
        <fieldset className='flex flex-col gap-2 p-2'>
          <label className='text-white flex items-center gap-1'>
            <TbLockPassword size={20} /> Password
          </label>
          <input
            type="password"
            placeholder='********'
            {...register('password', { required: true, minLength: 6 })}
            className='border py-2 px-2 rounded-md'
          />
          {errors.password && (
            <p className='text-orange-500'>
              Password must be at least 6 characters
            </p>
          )}
        </fieldset>

        {/* Submit */}
        <fieldset className="px-4 py-3">
          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded-md flex items-center gap-1"
          >
            <IoMdLogIn /> Register
          </button>
        </fieldset>

        <div className='text-center'>
          <p className='text-yellow-400'>
            Already Registered?{' '}
            <Link
              className='text-blue-500 underline font-medium'
              href='/login'
            >
              Login
            </Link>
          </p>
        </div>

      </form>
    </div>
  )
}

export default SignupForm
