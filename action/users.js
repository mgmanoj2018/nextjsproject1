"use server"

import { auth } from "@clerk/nextjs/server"
import {} from '@/lib/'
export async function updateUser(username) {

    // get userid and check it is exsit or not 
    const {userId}  = auth()
    if(!userId){
        throw new Error("Unauthorized")
    }
    // check the userid is exist in data base
    const existingUsername = await db

}