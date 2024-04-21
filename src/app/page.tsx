import Link from "next/link";
import Image from "next/image";
import { db } from "~/server/db";

// making the page dynamic from next js
// export const dynamic = "force-dynamic";

export default async function HomePage() {


  const images = await db.query.images.findMany({
    orderBy: (model, order) => order.asc(model.id),
  });




  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#050505] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-10 px-4 py-16 ">
        <h1 className="text-4xl font-bold">Welcome to T3 Gallery</h1>
        <p className="text-lg">This is a simple image gallery</p>
        <p className="text-lg">Click on an image to view it</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {[...images,...images, ...images].flat().map((image) => (
            <Link key={image.id} href={`/image/${image.id}`}>
              <div className="relative w-full h-64 md:h-80 lg:h-96">
                <Image
                  src={image.url}
                  alt="image"
                  width={"150"}
                  height={"150"}
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </Link>
          ))}
        </div>
       </div>
    </main>
  );
}
