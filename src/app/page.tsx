import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const images = [
    "https://utfs.io/f/53c498e1-4451-4b79-a996-d02d1cc06543-fou6pp.E.png",
    "https://utfs.io/f/270f6801-1926-4ca9-b8a0-d53706b4cdca-htogjw.E.png",
  ]

  const mockedImages = images.map((image, index) => (
    {
      id:index,
      url: image,
    }
  ));


  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#050505] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-10 px-4 py-16 ">
        Hello From T3Gallery
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {[...mockedImages,...mockedImages, ...mockedImages].flat().map((image) => (
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
