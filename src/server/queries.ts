// import 'server-only'
// import {auth} from '@clerk/nextjs/server'

import { db } from "./db";
// const user = auth();
// if(!user.userId) throw new Error ("Unauthorized")

export async function MyImages (){
    const images = await db.query.images.findMany({
    // where : (model ,{ eq }) => eq(user.userId , model.userId),
    orderBy: (model, { asc }) => asc(model.id),
  });
  return images
}

export async function GetImage (userId:string) {
    // const user = auth ();

    // if(!user.userId) throw new Error("Unauthorized");

    const image = await db.query.images.findFirst({
        where:(model, { eq })=> eq (model.userId , userId)
    })
    if(!image) throw new Error("Image not Found")
    // if(image.userId !== user.userId ) throw new Error("Not Authorized")

    return image
}