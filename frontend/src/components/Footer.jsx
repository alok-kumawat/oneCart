import React from 'react'
import logo from '../assets/logo.png'

const Footer = () => {
  return (
    <div className='w-[100%] md:h-[36vh] h-[21vh] mb-[77px] md:mb-[0px]'>
        <div className='w-[100%] md:h-[30vh] h-[15vh] md:mb-[0px] bg-[#dbfcfcec] flex items-center justify-center md:px-[50px] px-[5px]'>
            <div className='md:w-[30%] w-[35%] h-[100%] flex items-start justify-center flex-col gap-[5px]'>
                <div className='flex items-start justify-start gap-[5px] mt-[10px] md:mt-[40px]'>
                    <img src={logo} alt="" className='md:w-[40px] md:h-[40px] w-[30px] h-[30px]'/>
                    <p className='text-[19px] md:text-[20px] text-[black]'>OneCart</p>
                </div>
                <p className='text-[15px] text-[#1e2223] hidden md:block'>OneCart is your all-in-one shopping destination, offering top-quality products, unbeatable deals, and fast delivery-all backed by trusted services designed to make your life easier everyday.</p>
                <p className='text-[15px] text-[#1e2223] flex md:hidden'>Fast. Easy. Reliable.</p>
            </div>
            <div className='md:w-[25%] w-[30%] h-[100%] flex items-center justify-center flex-col text-center'>
                <div className='flex items-center justify-center gap-[5px] mt-[10px] md:mt-[40px]'>
                    <p className='text-[19px] md:text-[20px] text-[#1e2223] font-sans'>COMPANY</p>
                </div>
                <ul>
                    <li className='text-[15px] text-[#1e2223] hidden cursor-pointer md:block'>Home</li>
                    <li className='text-[15px] text-[#1e2223] cursor-pointer'>About us</li>
                    <li className='text-[15px] text-[#1e2223] hidden cursor-pointer md:block'>Delivery</li>
                    <li className='text-[15px] text-[#1e2223] cursor-pointer'>Privacy Policy</li>
                </ul>
            </div>
            <div className='md:w-[25%] w-[40%] h-[100%] flex items-center justify-center flex-col text-center'>
                <div className='flex items-center justify-center gap-[5px] mt-[10px] md:mt-[40px]'>
                    <p className='text-[19px] md:text-[20px] text-[#1e2223] font-sans'>GET IN TOUCH</p>
                </div>
                <ul>
                    <li className='text-[15px] text-[#1e2223] hidden cursor-pointer md:block'>+91-1234567890</li>
                    <li className='text-[15px] text-[#1e2223] cursor-pointer'>contact@onecart.com</li>
                    <li className='text-[15px] text-[#1e2223] hidden cursor-pointer md:block'>+1-111-222-3334</li>
                    <li className='text-[15px] text-[#1e2223] cursor-pointer'>admin@onecart.com</li>
                </ul>
            </div>
        </div>
        <div className='w-[100%] h-[1px] bg-slate-400'></div>
        <div className='w-[100%] h-[5vh] bg-[#dbfcfcec] flex items-center justify-center'>
            &copy; 2025 Developed by:Alok Kumawat
        </div>
    </div>
  )
}

export default Footer