import { Button } from '@/components/ui/button';
import { BreadcrumbIcon, CheckIcon } from '@/services';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CorporateBanner = ({
    pageTitle = "IOT", description = "", featureList = [], path = "#"
}) => {

    const navigate = useNavigate();
    const items = ['Portable Hotspot', 'eSim', 'SIM card'];

    return (
        <>
            <div className='pt-[16.5px] pb-[30px] lg:pt-20 lg:pb-[56px] bg-main-600  text-white cursor-default relative overflow-hidden'>
                <div className='containerHeader px-4 lg:px-0'>

                    <div className='relative z-10 flex flex-col lg:flex-row gap-y-[16.5px] lg:gap-y-0 gap-x-[88.5px]'>

                        <div>
                            <h1 className='text-[28px] lg:text-6xl font-bold leading-[110%] lg:leading-[140%] font-dmsans lg:font-sansPro'>
                                Travel Connected
                            </h1>

                            <ul className='flex gap-x-1 lg:gap-x-4 items-center text-xs lg:text-2xl leading-[120%]'>
                                {items.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <li>{item}</li>
                                        {index < items.length - 1 && <li className='w-2 h-2 rounded-full bg-white'></li>}
                                    </React.Fragment>
                                ))}
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

                            <Button
                                variant='secondary' size='lg'
                                className="text-sm lg:text-xl font-normal hover:!bg-secondary-400 rounded-[30px] px-[14.52px] py-[8.47px]"
                                navigate={`#`}
                            >
                                View More
                            </Button>
                        </div>
                    </div>
                </div>

                <div className='absolute right-0 top-0 z-0 w-[220px] h-[247px] lg:w-max lg:h-full'>
                    <BreadcrumbIcon />
                </div>

            </div>

            <div className='containerX '>
                <div className='flex gap-6 sec_common_80 lg:!px-0'>
                    <h2 className='text-6xl font-bold leading-[120%] text-black-900 w-[392px]'>
                        {pageTitle}
                    </h2>

                    <div className='flex-1'>
                        <p className='text-[18px] leading-[140%] text-black-600'>
                            {description}
                        </p>

                        <ul className='mt-6 mb-10 space-y-4'>
                            {featureList.map((item, index) => (
                                <li className='flex gap-2' key={index}>
                                    <CheckIcon />
                                    <span className='text-black-700 leading-[140%] text-[18px]'>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <Button size="lg" className="rounded-2xl" onClick={() => navigate(path)}>
                            <span className='w-[252px] font-semibold leading-[120%] text-base'>
                                Enquire Now
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CorporateBanner;