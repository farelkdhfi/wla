import React from 'react';
import WlaImg from '../assets/logowla.png';
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

const Regist = () => {
    return (
        <section className='w-full relative bg-white overflow-hidden'>
            {/* Background particles */}
            <div className="falling-particles flex items-center">
                {Array.from({ length: 20 }).map((_, i) => (
                    <span key={i} className="particle"></span>
                ))}
            </div>

            <div className='flex flex-col justify-center items-center min-h-screen text-center p-5 relative z-10'>
                <img src={WlaImg} alt="" className='w-[200px]' />
                <h2 className='text-xl font-bold mt-5'>WEEKLY LEGENDS ARENA SEASON 1</h2>
                <h2 className='text-sm font-semibold'>MLBB ONLINE TOURNAMENT</h2>
                
                <button className='relative bg-[#060d2b] px-5 py-3 font-semibold text-xl mt-5 rounded-xl shadow-xl text-white w-full glow-animation'>
                    REGIST NOW
                    <span className="glow-border"></span>
                </button>

                <button className='bg-[#000] px-5 py-3 font-semibold text-xl mt-5 rounded-xl shadow-xl text-white w-full flex gap-2 justify-center items-center'>
                    <FaWhatsapp className='text-2xl' />+62 8786-3020-554
                </button>
                
                <div className='flex bg-black text-white gap-5 text-2xl px-5 py-3 font-semibold mt-5 rounded-xl shadow-xl justify-center items-center'>
                    <a href="">
                        <FaFacebook />
                    </a>
                    <a href="">
                        <FaInstagram className='text-2xl' />
                    </a>
                    <a href="">
                        <FaTiktok />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Regist;
