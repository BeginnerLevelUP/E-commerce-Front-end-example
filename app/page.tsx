import Image from "next/image";
//Banner Images
import IphoneImage from "@/public/homePageIcons/Iphone.png"
import P5 from "@/public/homePageIcons/p5.png"
import airpodMax from "@/public/homePageIcons/airpodMax.png"
import visionPro from "@/public/homePageIcons/visionPro.png"
import macbookAir from "@/public/homePageIcons/macbookAir.png"
//Catergory Nav Icons
import arrows from "@/public/homePageIcons/Arrows.png"
import camera from  "@/public/homePageIcons/Cameras.png"
import watch from  "@/public/homePageIcons/SmartWatches.png"
import computer from  "@/public/homePageIcons/Computers.png"
import gaming from  "@/public/homePageIcons/Gaming.png"
import headphone from  "@/public/homePageIcons/Headphones.png"
import phone from  "@/public/homePageIcons/Phones.png"

export default function Home() {
  return (
    <>
    {/* Container */}
    <div className="w-screen h-screen">
      {/*Banners */}
      <section className="bg-[#211C24]">
        {/*  Banner */}
        <div className="flex justify-evenly">
          {/* Text Div */}
            <div className="flex-col content-center text-[#FFFFFF]">
              {/* Top Text */}
              <p className="opacity-40 text-[32px]">Pro.Beyond.</p>
              {/* Main Text */}
              <p className="text-[72px] font-thin">IPHONE 14<span className=" ml-5 font-bold">Pro</span></p>
              <p className="opacity-40 text-[24px]">Created to change everything for the better. For everyone</p>

              <p className="border border-red w-[191px] h-[56px] text-center py-3 my-6 rounded-md">Shop Now</p>  
            </div>
            <Image src={IphoneImage} alt='Image of iphone'></Image> 
        </div>

        {/* Banner #2 */}


        <div className="grid grid-cols-7 grid-rows-4 gap-0">
            <div className="col-span-4 row-span-2 bg-white flex justify-between ">
              <Image src={P5} alt='Playstation 5'></Image> 
              {/* Text Div */}
              <div className="flex-col my-auto mr-36">
                <p className="text-[40px]">Playstation 5</p>
                <p className="text-[#909090] w-[338px]">Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
              </div>
            </div>

            <div className="col-span-2 row-span-2 col-start-1 row-start-3  bg-[#EDEDED]  flex justify-between">
              <Image src={airpodMax} alt='Airpod Max'></Image> 
              {/* Text Div */}
              <div className="flex-col my-auto mr-16">
              <ul className="list-none text-[40px] font-thin">
                <li>Apple</li>
                <li>Airpods</li>
                <li className="font-semibold text-black block">Max</li>
              </ul>
               <p className="text-[#909090]">Computational audio. Listen, it&apos;s powerful</p>
              </div>
            </div>

            <div className="col-span-2 row-span-2 col-start-3 row-start-3   bg-[#353535]  text-white flex justify-between">
              <Image src={visionPro} alt='Viion Pro'></Image> 
              {/* Text Div */}
              <div className="flex-col my-auto mr-6">
              <ul className="list-none text-[40px] font-thin">
                <li>Apple</li>
                <li>Airpods</li>
                <li className="font-semibold  block">Max</li>
              </ul>
                <p className="text-[#909090]">An immersive way to experience entertainment</p>
              </div>
            </div>
            
            <div className="col-span-3 row-span-4 col-start-5 row-start-1 flex justify-between bg-[#EDEDED] text-black">       
            {/* Text Div */}
            <div className="flex-col content-center ml-4">
              {/* Main Text */}
              <p className="text-[72px] font-thin">Macbook<span className=" ml-5 font-bold">Air</span></p>
              <p className="opacity-40 text-[24px]">The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>

              <p className="border border-black w-[191px] h-[56px] text-center py-3 my-6 rounded-md">Shop Now</p>  
            </div>
            <Image src={macbookAir} alt='Macbook Air'></Image> 
            </div>
        </div>
    
    
      </section>

      {/* Catergory Nav */}
      <section className="bg-[#FAFAFA]">
      <div className="flex justify-between py-12 px-36">
        <p>Browse By Catergory</p>
        <Image src={arrows} alt='Navigation Arrows'></Image>
      </div>

      <nav className="list-none flex  px-36 ">
        <li className=" h-[128px] bg-[#EDEDED] rounded-xl flex-col py-8 px-9 mx-10" >
          <Image className="mx-3" src={phone} alt="Phone" width={48} height={48}></Image>
          <p className="text-[24px]">Phones</p>
        </li>
        <li className="h-[128px] bg-[#EDEDED] rounded-xl flex-col py-8 px-9  mx-10">
          <Image className="mx-5" src={watch} alt="watch" width={48} height={48}></Image>
          <p className="text-[24px]">Watches</p>
        </li>
        <li className="h-[128px] bg-[#EDEDED] rounded-xl flex-col py-8 px-9  mx-10">
          <Image className="mx-5" src={camera} alt='camera' width={48} height={48}></Image>
          <p className="text-[24px]">Cameras</p>
        </li>
        <li className=" h-[128px] bg-[#EDEDED] rounded-xl flex-col py-8 px-9  mx-10 w-fit">
          <Image className="mx-10" src={headphone} alt="headphone" width={48} height={48}></Image>
          <p className="text-[24px]">Headphones</p>
        </li>
        <li className=" h-[128px] bg-[#EDEDED] rounded-xl flex-col py-8 px-9  mx-10 w-fit">
          <Image className="mx-10" src={computer} alt="computer" width={48} height={48}></Image>
          <p className="text-[24px]">Computers</p>
        </li>
        <li className=" h-[128px] bg-[#EDEDED] rounded-xl flex-col py-8 px-9  mx-10">
          <Image className="mx-3" src={gaming} alt="gaming" width={48} height={48}></Image>
          <p className="text-[24px]">Gaming</p>
        </li>
      </nav>
      </section>


      {/* Results */}
      <section>
        <nav>

        </nav>
        <div>

        </div>
      </section>

      {/* Promotional */}
      <section>
        <div>

        </div>
      </section>


      {/* Discounted */}
      <section>
        <div>

        </div>
      </section>

      {/* Footer */}
      <footer>

      </footer>
    </div>

  </>
  );
}
