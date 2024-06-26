import Image from "next/image";
import type { StaticImageData } from "next/image";
//Banner Images
import IphoneImage from "@/public/homePageIcons/Iphone.png"
import P5 from "@/public/homePageIcons/p5.png"
import airpodMax from "@/public/homePageIcons/airpodMax.png"
import visionPro from "@/public/homePageIcons/visionPro.png"
import macbookAir from "@/public/homePageIcons/macbookAir.png"

//Catergory Nav Icons
import arrowLeft from "@/public/homePageIcons/arrowLeft.png"
import arrowRight from "@/public/homePageIcons/arrowRight.png"
import camera from  "@/public/homePageIcons/Cameras.png"
import watch from  "@/public/homePageIcons/SmartWatches.png"
import computer from  "@/public/homePageIcons/Computers.png"
import gaming from  "@/public/homePageIcons/Gaming.png"
import headphone from  "@/public/homePageIcons/Headphones.png"
import phone from  "@/public/homePageIcons/Phones.png"

//Featured Images
import cannonCamera from "@/public/homePageIcons/featuredIcons/cannonCamera.png";
import Iphone1pro from "@/public/homePageIcons/featuredIcons/Iphone1 pro.png";
import appleWatch from "@/public/homePageIcons/featuredIcons/appleWatch.png";
import airpodsMax from "@/public/homePageIcons/featuredIcons/airpodsMax.png";
import galaxyWatch from "@/public/homePageIcons/featuredIcons/galaxyWatch.png";
import galaxyFold from "@/public/homePageIcons/featuredIcons/galaxyFold.png";
import galaxyBuds from "@/public/homePageIcons/featuredIcons/galaxyBuds.png";
import appleIpad from "@/public/homePageIcons/featuredIcons/appleIpad.png";
import favBlank from "@/public/homePageIcons/featuredIcons/favBlank.png";
import favFull from "@/public/homePageIcons/featuredIcons/favFull.png";

//Feature#2 Images
import featuredWatches from "@/public/homePageIcons/featuredIcons/featuredWatches.png"
import featuredIpads from "@/public/homePageIcons/featuredIcons/featuresIpad.png"
import macbookFront from "@/public/homePageIcons/featuredIcons/macbookFront.png"
import samsung from "@/public/homePageIcons/featuredIcons/samsungBack&Front.png"

class Product {
  name: string;
  description: string;
  price?: number;
  hearted?: boolean;
  imgSrc?: StaticImageData;

  constructor(name: string, description: string, price?: number, hearted?: boolean, imgSrc?: StaticImageData) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.hearted = hearted;
    this.imgSrc = imgSrc;
  }
}

// Create instances of the Product class
const featuredProducts:Product[] = [
  new Product("Apple iPhone 14 Pro Max", "128GB Deep Purple", 900, false, Iphone1pro),
  new Product("Blackmagic Pocket Cinema", "Camera 6k", 2535, false, cannonCamera),
  new Product("Apple Watch Series 9 GPS", "128GB Deep Purple", 900, false, appleWatch),
  new Product("AirPods Max Silver", "Starlight Aluminium", 549, false, airpodsMax),
  new Product("Samsung Galaxy Watch6", "128GB Deep Purple", 900, false, galaxyWatch),
  new Product("Galaxy Z Fold5 Unlocked", "256GB | Phantom Black", 1799, true, galaxyFold),
  new Product("Galaxy Buds FE", "Graphite", 99.99, false, galaxyBuds),
  new Product("Apple iPad 9 10.2 64GB Wi-Fi", "Silver (MK2L3) 2021", 398, false, appleIpad)
];

const featured2Products=[
  {
  title:"Popular Products",
  des:"iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use",
  imgSrc:featuredWatches,
  bg:"white"
  },
    {
  title:"Ipad Pro",
  des:"iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
  imgSrc:featuredIpads,
  bg:"#F9F9F9"
  },
    {
  title:"Samsung Galaxy",
  des:"iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use",
  imgSrc:samsung,
  bg:"#EAEAEA"
  },
    {
  title:"Macbook Pro",
  des:"iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use",
  imgSrc:macbookFront,
  bg:"#2C2C2C"
  }
]


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
      <section className="bg-[#FAFAFA] h-[352px]">
      <div className="flex justify-between py-12 px-36 text-[24px]">
        <p>Browse By Catergory</p>
        <div className="flex">
           <Image className='mx-4' src={arrowLeft} alt='Navigation Arrows' width={24} height={24}></Image>
          <Image className='mx-4' src={arrowRight} alt='Navigation Arrows' width={24} height={24}></Image>
        </div>
      </div>

      <nav className="list-none flex justify-center">
        <li className=" h-[128px] bg-[#EDEDED] rounded-xl flex-col py-8 px-9 mx-10" >
          <Image className="mx-1" src={phone} alt="Phone" width={48} height={48}></Image>
          <p className="text-[16px]">Phones</p>
        </li>
        <li className="h-[128px] bg-[#EDEDED] rounded-xl flex-col py-8 px-9  mx-10">
          <Image className="mx-2" src={watch} alt="watch" width={48} height={48}></Image>
          <p className="text-[16px]">Watches</p>
        </li>
        <li className="h-[128px] bg-[#EDEDED] rounded-xl flex-col py-8 px-9  mx-10">
          <Image className="mx-3" src={camera} alt='camera' width={48} height={48}></Image>
          <p className="text-[16px]">Cameras</p>
        </li>
        <li className=" h-[128px] bg-[#EDEDED] rounded-xl flex-col py-8 px-9  mx-10 w-fit">
          <Image className="mx-4" src={headphone} alt="headphone" width={48} height={48}></Image>
          <p className="text-[16px]">Headphones</p>
        </li>
        <li className=" h-[128px] bg-[#EDEDED] rounded-xl flex-col py-8 px-9  mx-10 w-fit">
          <Image className="mx-4" src={computer} alt="computer" width={48} height={48}></Image>
          <p className="text-[16px]">Computers</p>
        </li>
        <li className=" h-[128px] bg-[#EDEDED] rounded-xl flex-col py-8 px-9  mx-10">
          <Image className="mx-2" src={gaming} alt="gaming" width={48} height={48}></Image>
          <p className="text-[16px]">Gaming</p>
        </li>
      </nav>
      </section>


      {/* Results */}
      <section>
        <nav className="flex list-none  py-12 text-[18px] mx-auto  w-[1120px]">
          <li className="mx-2 border-b-[3px] border-black">New Arrival</li>
          <li className="mx-2 text-[#8B8B8B]" >Bestseller</li>
          <li className="mx-2 text-[#8B8B8B]" >Feature Products</li>
        </nav>

        <div className="grid grid-cols-4 grid-rows-2 gap-2 w-[1120px] mx-auto">
          {featuredProducts.map((product, index) => (
                <div className='bg-[#F6F6F6] flex-col mx-auto my-auto p-8 w-[268px] h-[432px]' key={index}>
                 <Image src={product.hearted ? favFull : favBlank} alt='favorite icon' height={32} width={32} className=""/>
                  <Image className="mx-auto " src={product.imgSrc} alt={product.name} height={160} width={160} />
                  <p className="text-[16px] text-center">{product.name}</p>
                  <p className="text-[16px] text-center ">{product.description}</p>
                  <p className="text-[24px] font-bold text-center">${product.price}</p>
                  <button className="border border-black bg-black text-white rounded-md text-[14px] px-10 py-2 w-[188px] mx-auto ">Buy Now</button>
                </div>
              ))}
        </div>
      </section>

      {/* Promotional */}
      <section>
        <div className="flex justify-center">
            {
              featured2Products.map((product,index)=>(
               <div key={index} className={`bg-[${product.bg}] w-[360px]`}>
                  <Image src={product.imgSrc} alt='promotional image' width={360} height={366}></Image>
                  <p className={`text-[33px] ${index==3?"text-white":"text-black"}`}>{product.title}</p>
                  <p className="text-[14px] text-[#909090] w-[296px] h-[72px] text-center">{product.des}</p>
                  <button className={`border  rounded-md text-[14px] px-12 py-4 ${index==3?"text-white border-white":"text-black border-black"}`}>Shop Now</button>
                </div>
              ))
            }
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
