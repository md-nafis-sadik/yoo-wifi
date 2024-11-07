import { images } from '@/services';
import React from 'react';

const StayConnectedEverywhere = () => {
    return (
        <section className='bg-main-600'>
            <div className='sec_common_80'>

                <div className='w-[200px]'>
                    <date-input date="{{date}}" timezone="[[timezone]]"></date-input>
                </div>



                <div className="containerX ">

                    <div className='grid grid-cols-3 gap-10'>
                        <div className='space-y-6 col-span-2'>
                            <h2 className='text-6xl text-white font-black leading-[120%] uppercase'>
                                Stay Connected Everywhere
                            </h2>
                            <h3 className='text-5xl leading-[120%] font-black uppercase text-status-alert'>
                                140+ Countries
                            </h3>
                            <h5 className='text-2xl text-white leading-normal max-w-[712px]'>
                                A world of worry-free WiFi in the palm of your hand. Connect to quality internet when you travel—no matter where your journey takes you.
                            </h5>
                        </div>

                        <div className='relative'>

                            <div className='w-[383px h-[383px]'>
                                <img src={images.rgbPocketWifi} alt="wifi" className='transform scale-x-[-1] w-full h-full' />
                            </div>


                            <div className='w-[231px] h-[231px] absolute bottom-6 -translate-x-[54px]'>
                                <img src={images.sim1} alt="sim" className='w-full h-full' />
                            </div>

                            <div className='w-[150px] h-[83px] absolute top-0 -translate-x-28 translate-y-16 animate-floating-cloud1'>
                                <img src={images.cloud} alt="cloud" className='w-full h-full' />
                            </div>

                            <div className='w-[112px] h-[53px] absolute top-0 translate-x-60 -translate-y-10 animate-floating-cloud2'>
                                <img src={images.cloud} alt="cloud" className='w-full h-full' />
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default StayConnectedEverywhere;