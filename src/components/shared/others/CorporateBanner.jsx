import { Button } from '@/components/ui/button';
import { BreadcrumbIcon } from '@/services';
import React from 'react';

const CorporateBanner = () => {
    return (
        <div className='pt-[16.5px] pb-[30px] lg:pt-20 lg:pb-[56px] bg-main-600  text-white cursor-default relative overflow-hidden'>
            <div className='containerHeader px-4 lg:px-0'>

                <div className='relative z-10 flex flex-col lg:flex-row gap-y-[16.5px] lg:gap-y-0 gap-x-[88.5px]'>

                    <div>
                        <h1 className='text-[28px] lg:text-6xl font-bold leading-[110%] lg:leading-[140%] font-dmsans lg:font-sansPro'>
                            Travel Connected
                        </h1>

                        <ul className='flex gap-x-1 lg:gap-x-4 items-center text-xs lg:text-2xl leading-[120%]'>
                            <li>Portable Hotspot</li>
                            <li className='w-2 h-2 rounded-full bg-white'></li>
                            <li>eSim</li>
                            <li className='w-2 h-2 rounded-full bg-white'></li>
                            <li>SIM card</li>
                        </ul>
                    </div>

                    <div className='flex-1 flex justify-between items-center lg:gap-6'>
                        <div>
                            <h3 className='text-base lg:text-[32px] font-bold leading-[140%] lg:leading-[120%] font-sansPro'>Unlimited Data</h3>
                            <h2 className='text-[18px] lg:text-[40px] font-black text-secondary-400 leading-[120%] font-sansPro'>
                                From
                                <span className='text-[32px] lg:text-[76px] leading-[120%]'> $1.90/day</span>
                            </h2>
                        </div>

                        <Button variant='secondary' size='lg' className="text-sm lg:text-xl font-normal hover:!bg-secondary-400 rounded-[30px] px-[14.52px] py-[8.47px]">
                            View More
                        </Button>
                    </div>
                </div>

            </div>

            <div className='absolute right-0 top-0 z-0 w-[220px] h-[247px] lg:w-max lg:h-full'>
                <BreadcrumbIcon />
            </div>

        </div>
    );
};

export default CorporateBanner;