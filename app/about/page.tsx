import Image from "next/image";
import computerImage from "@/public/images/about/computer.png"
import tabletopImage from "@/public/images/about/tabletop.jpg"
import table1Image from "@/public/images/about/table1.jpg"
import finishedTable from "@/public/images/home/table.jpg"
import heroImage from '@/public/images/hero3.jpg'

const aboutData = [
  {
    src: computerImage,
    title: "Engineered Precision",
    text: "We design each project using professional drafting software to make certain your new furniture fits your needs exactly.",
  },
  {
    src: tabletopImage,
    title: "Incredible Detail",
    text: "Every project is handcrafted to create a unique piece to complement the character of your home.",
  },
  {
    src: table1Image,
    title: "Quality Construction",
    text: "Each piece of furniture is meticulously pieced together, resulting in solid workmanship that will last for generations.",
  },
  {
    src: finishedTable,
    title: "Professional Finish",
    text: "After being carefully assembled, your new furniture is topped off with professional grade wood finishes, protecting against staining and damage for years.",
  },
]

const About = () => {
  return (
    <>
      <header className='relative overflow-auto min-h-[200px] h-[200px]'>
        <div className='top-0 left-0 h-full w-full z-0'>
          <Image priority objectFit='cover' placeholder="blur" layout="fill" src={heroImage} alt="Wood background"/>
        </div>
        <header className='text-center absolute flex flex-col items-center top-0 left-1/2 -translate-x-1/2 justify-evenly text-white w-full max-width-[1640px] h-full p-1 z-10'>
          <h1 className='text-5xl md:text-6xl leading-none text-shadow'>We Stand By Our Work</h1>
        </header>
      </header>
      <div className='flex flex-col items-center '>
        <div className='flex flex-col relative top-0 max-w-full w-[1640px] p-4'>
          {aboutData.map((item, index) =>
            <div key={item.title} className={`flex  flex-col-reverse ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
              <div className='flex-1'>
                <Image className='w-full h-full shadow-xl rounded-xl' src={item.src} alt={item.title}/>
              </div>
              <div className='flex-1 flex flex-col items-center min-h-full justify-center px-4 lg:px-8 py-12'>
                <h1 className='text-4xl md:text-5xl font-light leading-none mb-8' style={{paddingBottom: "2rem"}}>
                  {item.title}
                </h1>
                <h2 className='text-xl md:text-2xl text-center lg:text-3xl '>
                  {item.text}
                </h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default About