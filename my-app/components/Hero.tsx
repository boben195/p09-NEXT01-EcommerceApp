import Link from "next/link";

const Hero = () => {
  return (
      <div className="min-h-[70vh] md:min-h-[60vh] lg:min-h-[90vh] flex flex-col
     md:flex-row justify-center items-center bg-white px-4 md:px-12">
          <div>
              <h1>Timeless Elegance On Your Wrist</h1>
              <p>Discover our curated collection of premium watches,
                  crafted for those who appreciate sophistication and precision.</p>
              <Link href="#product">
                    <button>Shop the Collection</button>
              </Link>
          </div>
     </div>
  )
}

export default Hero