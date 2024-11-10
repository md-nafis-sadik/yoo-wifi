import SectionHeader from '@/components/shared/others/SectionHeader';
import VideoPlayer from '@/components/shared/others/VideoPlayer';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { rentWifiData } from '@/services';
import React from 'react';

const RentYooWifi = () => {
    return (
        <section className='containerX'>
            <div className='sec_common_80 xl:!px-0'>
                <SectionHeader
                    heading="Rent Yoowifi Pocket WiFi in 3 Easy Steps!"
                    subHeading="Choose your plan, collect your device, and stay connected effortlessly wherever you go!"
                />

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-[76px] mt-10'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-6 order-2 lg:order-1'>
                        {rentWifiData.map(({ step, title, description, buttonText, icon }, index) => (
                            <div key={index} className={cn(
                                'border border-neutral-300 rounded-xl md:rounded-3xl px-4 py-6 md:px-6', index === 0 && 'lg:col-span-2'
                            )}>
                                <div className='flex items-start justify-between'>
                                    <div>
                                        <p className='text-sm md:text-base font-semibold leading-[120%] text-main-600'>{step}</p>
                                        <h5 className='text-[18px] md:text-2xl font-semibold md:font-bold leading-[140%] mt-2 md:mt-4'>{title}</h5>
                                    </div>
                                    {buttonText && (
                                        <Button className="!w-[180px] !h-[40px] !text-sm !font-medium items-center gap-x-1 hidden md:flex">
                                            {buttonText}
                                            {icon()}
                                        </Button>
                                    )}
                                </div>

                                <p className='text-black-600 text-[18px] leading-[140%] mt-4'>{description}</p>

                                {buttonText && (
                                    <Button className="!w-[167px] !h-[32px] !text-sm !font-medium items-center gap-x-1 flex md:hidden mt-4">
                                        {buttonText}
                                        {icon()}
                                    </Button>
                                )}

                            </div>
                        ))}
                    </div>

                    <div className='order-1 lg:order-2'>
                        <VideoPlayer
                            videoUrl={'https://www.youtube.com/embed/Vr9WoWXkKeE?si=HhDVOC3LF3MK2DE7'}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RentYooWifi;