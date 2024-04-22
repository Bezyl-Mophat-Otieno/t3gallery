"use client"

import { useRouter } from "next/navigation"

// import { SignedOut , SignedIn , UserButton , SignInButton } from "@clerk/nextjs"
// import UploadButton from "~/utils/uploadthing"

 export default function TopNav () {

    const router = useRouter()
    const onUploadedImage = ()=>{
        router.refresh()
    }
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
        <div  className="font-bold">Gallery</div>
        <div  className="font-bold">
            {/* <SignedOut> */}
                {/* <SignInButton/> */}
            {/* </SignedOut> */}
            {/* <SignedIn> */}
                {/* <UserButton/> */}
            {/* </SignedIn> */}
        </div>
        {/* <UploadButton endpoint="imageUploader" onClientUploadComplete = onUploadedImage*/}
    </nav>
  )
}