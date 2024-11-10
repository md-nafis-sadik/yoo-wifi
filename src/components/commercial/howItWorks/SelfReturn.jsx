import SectionHeader from '@/components/shared/others/SectionHeader';
import VideoPlayer from '@/components/shared/others/VideoPlayer';
import { Button } from '@/components/ui/button';
import { selfReturnData } from '@/services';
import React from 'react';

const SelfReturn = () => {
    return (
        <section className='containerX'>
            <div className='sec_common_60'>
                <SectionHeader
                    heading="Simple Self-Return In less than a minute"
                    subHeading="With Yoowifi, easily pick up your device at any designated location and return it at one of 20+ drop-off points across the island. Enjoy a hassle-free experience and stay connected wherever your travels take you!"
                />

                <div className='mt-10 grid grid-cols-2 gap-[76px]'>
                    <VideoPlayer
                        videoUrl={'https://www.youtube.com/embed/Vr9WoWXkKeE?si=HhDVOC3LF3MK2DE7'}
                    />

                    <div>
                        <div className='space-y-6'>
                            {selfReturnData.map((item, index) => (<article key={index} className='flex items-center gap-8'>
                                <div className='shirnk-0 w-10 h-10 rounded-[100px] border border-neutral-300 flex items-center justify-center font-semibold text-main-600'>
                                    {index + 1}
                                </div>

                                <div className='border border-neutral-300 rounded-3xl p-6 space-y-3 flex-1'>
                                    <h5 className='text-2xl font-bold text-black-900 leading-[140%]'>
                                        {item.title}
                                    </h5>

                                    <p className='text-black-600 text-[18px] leading-[140%]'>
                                        {item.description}
                                    </p>
                                </div>
                            </article>))}
                        </div>

                        <div className='mt-8 flex gap-x-4 ml-[72px]'>
                            <Button className="!h-[52px] flex-1">
                                Drop Off Locations
                            </Button>
                            <Button variant="secondary" className="!h-[52px] flex-1">
                                Contact Us
                            </Button>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default SelfReturn;