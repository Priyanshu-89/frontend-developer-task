'use server'


import { DbConnect } from "@/app/db/DbConnect"
import User from "@/app/model/user"

import bcrypt from 'bcrypt'

export async function signupAction(formData) {
  try {
    await DbConnect()

    const { username, email, password } = formData

    if (!username || !email || !password) {
      return {
        success: false,
        message: "All fields are required",
      }
    }


    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return {
        success: false,
        message: "User already exists",
      }
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    await User.create({
      username,
      email,
      password: hashedPassword,
    })

 
    return {
      success: true,
      message: "Signup successful",
    }

  } catch (error) {
    console.error("Signup Error:", error)
    return {
      success: false,
      message: "Something went wrong",
    }
  }
}
