'use client'

import Image from 'next/image'
import Link from "next/link";
import Button from "@/components/Button";
import heroImage from '../public/images/hero2.jpg'
import prisma from "@/lib/prisma";
import MasonryGrid from "@/components/MasonryGrid";
import Modal from "@/components/Modal/Modal";
import {useEffect, useState} from "react";
import {Prisma} from "@prisma/client";
import {IoMdClose} from "react-icons/io";


export default function Home() {

  const [products, setProducts] = useState<Prisma.productsCreateInput[]>([]);
  const [modalImage, setModalImage] = useState('');
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  useEffect(() => {
    const getData = async () => {
      return await fetch('/api/products')
    }
    getData().then(res => res.json()).then(data => setProducts(data.products))
  }, [])
  
  return (
    <main>
      <div className='relative h-[550px] mb-7'>
        <Image priority  placeholder="blur" className='w-full h-full object-cover' src={heroImage} alt="Wood background"/>
        <div className='text-white text-center w-full max-w-[1640px] h-full p-1 z-10 flex flex-col items-center absolute top-0 left-1/2 -translate-x-1/2 justify-evenly'>
          <div className='flex flex-wrap justify-around w-full'>
            <h1 className='text-4xl md:text-5xl  text-shadow m-4'>Handmade Furniture.</h1>
            <h1 className='text-4xl md:text-5xl  text-shadow m-4'>Professional Quality.</h1>
            <h1 className='text-4xl md:text-5xl  text-shadow m-4'>Raleigh Local.</h1></div>
          <Link href='contact' passHref><Button className='text-2xl'>Get A Custom Quote</Button></Link>
          <h3 className='text-2xl md:text-3xl text-shadow'>Custom whiskey barrel furniture, farmhouse tables, coffee tables, headboards, benches, and more.</h3>
        </div>
      </div>
      <MasonryGrid items={products} onClick={(item: Prisma.productsCreateInput) => {setModalImage(item.image); setIsDetailModalOpen(true)}}/>
      <Modal className='relative' isOpen={isDetailModalOpen} setIsOpen={setIsDetailModalOpen}>
        <Image className='w-full max-h-screen' width={1080} height={1080} src={modalImage} alt={''}/>
        <button className='absolute top-4 right-4 p-2 bg-white rounded-full text-black hover:opacity-80' onClick={() => setIsDetailModalOpen(false)}>
          <IoMdClose/>
        </button>
      </Modal>
    </main>
  )
}
