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

//Promotional Images
import featuredWatches from "@/public/homePageIcons/featuredIcons/featuredWatches.png"
import featuredIpads from "@/public/homePageIcons/featuredIcons/featuresIpad.png"
import macbookFront from "@/public/homePageIcons/featuredIcons/macbookFront.png"
import samsung from "@/public/homePageIcons/featuredIcons/samsungBack&Front.png"

//Discounted Images
import maxBoring from "@/public/homePageIcons/featuredIcons/maxBoring.png"
import phoneBoring from "@/public/homePageIcons/featuredIcons/phoneBoring.png"
import phoneGold from "@/public/homePageIcons/featuredIcons/iphoneGold.png"
import watchBoring from "@/public/homePageIcons/featuredIcons/watchBoring.png"

//Mobile Responsive
import phoneMac from "@/public/mobileResponsive/phoneMac.png"
import phoneMax from "@/public/mobileResponsive/phoneAirmax.png"
import phoneVision from "@/public/mobileResponsive/phoneVision.png"
import pagination from "@/public/mobileResponsive/paginationpng.png"
class Product {
  name: string;
  description: string;
  price: number;
  hearted: boolean;
  imgSrc: StaticImageData | string;

  constructor(name: string, description: string, price: number, hearted: boolean, imgSrc: StaticImageData) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.hearted = hearted;
    this.imgSrc = imgSrc;
  }
}

//Footer Images
import footerBanner from "@/public/homePageIcons/footerImages/footerbanner.png"
import socialIcons from  "@/public/homePageIcons/footerImages/SocialIcons.png"
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

const promotional=[
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
  bg:"F9F9F9"
  },
    {
  title:"Samsung Galaxy",
  des:"iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use",
  imgSrc:samsung,
  bg:"EAEAEA"
  },
    {
  title:"Macbook Pro",
  des:"iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use",
  imgSrc:macbookFront,
  bg:"2C2C2C"
  }
]
const discounted:Product[]=[
  new Product("Apple iPhone 14 Pro 512GB ", "Gold (MQ233)", 1437, false, phoneGold),
  new Product("AirPods Max Silver ", "Starlight Aluminium", 549, false, maxBoring),
  new Product("Apple Watch Series 9 GPS ", "41mm Starlight Aluminium ", 399, false, watchBoring),
  new Product("Apple iPhone 14 Pro", " 1TB Gold (MQ2V3)", 1499, false, phoneBoring),
]



export default function Home() {
  return (
    <>
    {/* Container */}
    <div className="lg:w-screen w-[1120px] h-screen">
      {/*Banners */}
      <section className="bg-[#211C24]">
        {/*  Banner */}
        <div className="flex lg:flex-row flex-col lg:justify-evenly items-center ">
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
        <div className="lg:grid lg:grid-cols-7 lg:grid-rows-4 lg:gap-0 flex flex-col ">
            <div className="lg:col-span-4 lg:row-span-2 bg-white flex flex-col lg:flex-row justify-between items-center h-fit py-10 lg:py-0">
              <Image src={P5} alt='Playstation 5'></Image> 
              {/* Text Div */}
              <div className="flex-col my-auto mr-36">
                <p className="text-[40px]">Playstation 5</p>
                <p className="text-[#909090] w-[338px]">Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
              </div>
            </div>

            <div className="lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-3  bg-[#EDEDED]  flex lg:flex-row flex-col justify-between items-center lg:h-full h-fit py-10 lg:py-0" >
              <div>
                <Image src={airpodMax} alt='Airpod Max' className="lg:flex hidden"></Image> 
                <Image src={phoneMax} alt='Airpod Max' className="lg:hidden flex"></Image> 
              </div>
              
              {/* Text Div */}
              <div className="flex-col my-auto mr-16">
              <ul className="list-none text-[40px] font-thin flex lg:block">
                <li className="mx-2 lg:mx-0">Apple</li>
                <li className="mx-2 lg:mx-0">Airpods</li>
                <li className="font-semibold text-black block mx-2 lg:mx-2">Max</li>
              </ul>
               <p className="text-[#909090]">Computational audio. Listen, it&apos;s powerful</p>
              </div>
            </div>

            <div className="lg:col-span-2 lg:row-span-2 lg:col-start-3 lg:row-start-3   bg-[#353535]  text-white flex lg:flex-row flex-col justify-between items-center lg:h-full h-fit py-10 lg:py-0">
              <div>
                <Image src={visionPro} alt='Vision Pro' className="lg:flex hidden"></Image> 
                <Image src={phoneVision} alt='Vision Pro' className="lg:hidden flex"></Image> 
              </div>
              
              {/* Text Div */}
              <div className="flex-col my-auto mr-6">
              <ul className="list-none text-[40px] font-thin flex">
                <li  className="mx-2 lg:mx-0">Apple</li>
                <li className="lg:mx-0 mx-2">Vision</li>
                <li className="font-semibold  block lg:mx-0 mx-2">Pro</li>
              </ul>
                <p className="text-[#909090]">An immersive way to experience entertainment</p>
              </div>
            </div>
            
            <div className="lg:col-span-3 lg:row-span-4 lg:col-start-5 lg:row-start-1 flex lg:flex-row flex-col-reverse justify-between bg-[#EDEDED] text-black items-center lg:h-full h-fit py-10 lg:py-0">       
            {/* Text Div */}
            <div className="flex-col content-center ml-4 lg:w-full w-[343px] text-center">
              {/* Main Text */}
              <p className="text-[72px] font-thin">Macbook<span className=" ml-5 font-bold">Air</span></p>
              <p className="opacity-40 text-[24px]">The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>

              <p className="border border-black w-[191px] h-[56px] text-center py-3 my-6 rounded-md ml-16">Shop Now</p>  
            </div>
            <Image src={phoneMac} alt="Macbook Air" className="lg:hidden flex"></Image>
            <Image src={macbookAir} alt='Macbook Air' className="lg:flex hidden"></Image> 
            </div>
        </div>
    
    
      </section>

      {/* Catergory Nav */}
      <section className="bg-[#FAFAFA] lg:h-[352px] h-fit">
      <div className="flex justify-between py-6 px-16 my-10 lg:mt-0 lg:py-12 lg:px-36 text-[24px]">
        <p>Browse By Catergory</p>
        <div className="flex">
           <Image className='mx-4' src={arrowLeft} alt='Navigation Arrows' width={24} height={24}></Image>
          <Image className='mx-4' src={arrowRight} alt='Navigation Arrows' width={24} height={24}></Image>
        </div>
      </div>

      <nav className="list-none lg:flex lg:justify-center grid grid-cols-2 grid-rows-3 gap-6 mb-48 lg:w-screen w-fit mx-auto lg:mx-0">
        <li className=" h-[128x] w-[164px] lg:w-fit bg-[#EDEDED] rounded-xl  py-8 px-9 lg:mx-10 " >
          <Image className="mx-1" src={phone} alt="Phone" width={48} height={48}></Image>
          <p className="text-[16px]">Phones</p>
        </li>

        <li className="h-[128x] w-[164px] lg:w-fit bg-[#EDEDED] rounded-xl flex-col py-8 px-9  lg:mx-10 ">
          <Image className="mx-2" src={watch} alt="watch" width={48} height={48}></Image>
          <p className="text-[16px]">Watches</p>
        </li>

        <li className="h-[128x] w-[164px] lg:w-fit bg-[#EDEDED] rounded-xl  py-8 px-9  lg:mx-10 mx-auto row-start-2">
          <Image className="mx-3" src={camera} alt='camera' width={48} height={48}></Image>
          <p className="text-[16px]">Cameras</p>
        </li>
        <li className="h-[128x] w-[164px] lg:w-fit bg-[#EDEDED] rounded-xl flex-col py-8 px-9  lg:mx-10 mx-auto row-start-2">
          <Image className="mx-4" src={headphone} alt="headphone" width={48} height={48}></Image>
          <p className="text-[16px]">Headphones</p>
        </li>
        <li className=" h-[128x] w-[164px] lg:w-fit bg-[#EDEDED] rounded-xl flex-col py-8 px-9  lg:mx-10 mx-auto  row-start-3">
          <Image className="mx-4" src={computer} alt="computer" width={48} height={48}></Image>
          <p className="text-[16px]">Computers</p>
        </li>
        <li className=" h-[128x] w-[164px] lg:w-fit bg-[#EDEDED] rounded-xl flex-col py-8 px-9  lg:mx-10 mx-auto row-start-3">
          <Image className="mx-2" src={gaming} alt="gaming" width={48} height={48}></Image>
          <p className="text-[16px]">Gaming</p>
        </li>
      </nav>
      </section>


      {/* Results */}
      <section className="mt-48">
        <nav className="flex justify-center list-none  lg:py-12 text-[18px] lg:mx-auto  w-[1120px] my-8">
          <li className="mx-2 border-b-[3px] border-black">New Arrival</li>
          <li className="mx-2 text-[#8B8B8B]" >Bestseller</li>
          <li className="mx-2 text-[#8B8B8B]" >Feature Products</li>
        </nav>
<div className="grid lg:grid-cols-4 grid-cols-2 gap-4 mx-auto w-full max-w-[1120px] p-4">
  {featuredProducts.map((product, index) => (
    <div className="bg-[#F6F6F6] flex flex-col p-6 rounded-md shadow-lg" key={index}>
      <Image src={product.hearted ? favFull : favBlank} alt="favorite icon" height={32} width={32} className="self-end mb-2" />
      <Image className="mx-auto mb-4" src={product?.imgSrc} alt={product.name} height={180} width={160} />
      <p className="text-[16px] text-center mb-2">{product.name}</p>
      <p className="text-[16px] text-center mb-2">{product.description}</p>
      <p className="text-[24px] font-bold text-center mb-4">${product.price}</p>
      <button className="border border-black bg-black text-white rounded-md text-[14px] px-10 py-2 mx-auto">Buy Now</button>
    </div>
  ))}
</div>
      </section>

      {/* Promotional */}
      <section>
          <div className="flex flex-col justify-center items-center">
            {promotional.map((product, index) => (
              <div
                key={index}
                style={{ backgroundColor: `#${product.bg}` }}
                className= {`my-10 flex lg:flex-col justify-center items-center lg:w-screen w-full h-[640px] ${index===1 ? "flex-col" : "hidden"}`}
              >
                <Image
                  className="mx-auto text-center"
                  src={product.imgSrc}
                  alt="promotional image"
                  width={400}
                  height={400}
                />
                <p className={`text-[33px] ${index == 3 ? "text-white" : "text-black"}`}>
                  {product.title}
                </p>
                <p className="text-[14px] text-[#909090] w-[296px] h-[72px] text-center ">
                  {product.des}
                </p>
                <button
                  className={`border rounded-md text-[14px] px-12 py-4 mx-auto ${
                    index == 3 ? "text-white border-white" : "text-black border-black"
                  }`}
                >
                  Shop Now
                </button>
                <Image src={pagination} alt='pagination' className="lg:hidden flex justify-center my-10"></Image>
              </div>
            ))}
          </div>

      </section>


      {/* Discounted */}
      <section>
        <p className=" m-8 text-[24px]">Discounts up to -50%</p>
        <div className="grid lg:grid-cols-4 lg:grid-rows-2 gap-4 w-[1120px] mx-auto grid-cols-2 grid-rows-2 ">
          {discounted.map((product, index) => (
                <div className='bg-[#F6F6F6] flex-col mx-auto my-auto p-8 w-full h-fit ' key={index}>
                 <Image src={product.hearted ? favFull : favBlank} alt='favorite icon' height={32} width={32} className=""/>
                  <Image className="mx-auto" src={product.imgSrc} alt={product.name} height={160} width={160} />
                  <p className="text-[16px] text-center">{product.name}</p>
                  <p className="text-[16px] text-center ">{product.description}</p>
                  <p className="text-[24px] font-bold text-center">${product.price}</p>
                  <button className="border border-black bg-black text-white rounded-md text-[14px] px-10 py-2 w-[188px] lg:ml-0 ml-36">Buy Now</button>
                </div>
              ))}
        </div>
      </section>

    
      <section className="lg:w-screen w-[1120px] mt-10 lg:mt-0 lg:relative lg:bottom-72">
      {/* Bottom Banner */}
      <Image src={footerBanner} alt='footerBanner' className="w-full"></Image>
      {/* Footer */}
      <footer className="bg-black text-white">
        {/* Top Half */}
        <section className="lg:p-24 p-6 flex lg:flex-row flex-col justify-center lg:justify-evenly items-center">
        {/* Left Text */}
        <div className="flex flex-col">
          <p className="text-[16px] font-bold mb-6">Company</p>
          <p className="w-[384px] text-[#CFCFCF]">We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
        </div>

        {/* Middle Text */}
        <div>
          <p className="text-[16px] font-bold mb-6">Services</p>
          <ul className=" text-[#CFCFCF]">
            <li className="my-4">Bonus program</li>
            <li className="my-4">Gift cards</li>
            <li className="my-4">Credit and payment</li>
            <li className="my-4">Service contracts</li>
            <li className="my-4">Non-cash account</li>
            <li className="my-4">Payment</li>
          </ul>
        </div>

        {/* Right Text */}
        <div>
          <p className="text-[16px] font-bold mb-6">Assistance to the buyer</p>
          <ul className="text-[#CFCFCF]">
            <li className="my-4">Find an order</li>
            <li className="my-4">Terms of delivery</li>
            <li className="my-4">Exchange and return of goods</li>
            <li className="my-4">Guarantee</li>
            <li className="my-4">Frequently asked questions</li>
            <li className="my-4">Terms of use of the site</li>
          </ul>
        </div>
        </section>

        {/* Second Half */}
        <section className="lg:relative lg:bottom-10 lg:left-10 flex justify-center">
            <Image src={socialIcons} alt='social icons' width={200} height={200}></Image>
        </section>

      </footer>
      </section>






    </div>

  </>
  );
}
