import Head from 'next/head';
import Image from "next/image";
import contactImage from "@/public/images/contact-image.jpeg"
import ContactForm from "@/app/contact/ContactForm";

const Contact = () => {

  return (
    <>
      <Head>
        <title>Contact | Martin Woodworking</title>
      </Head>
      <div className='relative h-[calc(100vh-80px)]'>
        <Image priority placeholder="blur" className='w-full h-full object-cover' src={contactImage} alt="Wood background"/>
        <div className='w-full max-w-[1640px] h-full p-1 z-10 flex flex-col items-center absolute top-0 left-1/2 -translate-x-1/2 '>
            <h1 className='text-3xl md:text-5xl font-light my-8 text-shadow text-white text-center'>Get a Custom Quote</h1>
            <h2 className='text-xl md:text-4xl text-shadow text-white text-center'>martinwoodworksnc@hotmail.com</h2>
            <div className='flex justify-center flex-wrap p-4 m-4 w-full bg-white border border-black rounded-md max-w-[700px] mt-8 mb-4 shadow-custom'>
              <h3 className='text-3xl md:text-4xl mb-6 text-center'>Request a Quote Online</h3>
              <p className='mb-8'>
                Please note that built-in projects are not accepted. Projects have a 4 - 6 week lead time.
                Venmo, checks, and cash accepted. 50% deposit required. Final payment upon delivery or pick up. Delivery charges may apply.
              </p>
              <ContactForm/>
          </div>
         </div>
      </div>
    </>
  )
}

export default Contact