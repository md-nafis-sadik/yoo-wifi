import React from 'react';
import { useSelector } from 'react-redux';

const WhatWeDoCorporate = () => {

    const { whatWeDo } = useSelector((state) => state.pocketWifi);

    return (
        <section className="sec_common_60 ">
            <div className="container2X ">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-6 lg:gap-x-10 gap-y-6'>
                    {whatWeDo.map((item, index) => (<article key={index} className='p-4 lg:p-6'>
                        <h4 className='text-xl lg:text-[28px] font-bold leading-[110%] text-black-900'>
                            {item.title}
                        </h4>
                        <div className='my-4 lg:my-6 border-b border-neutral-200'></div>
                        <p className='text-black-600 leading-[150%] text-sm lg:text-base'>
                            {item.content}
                        </p>
                    </article>))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDoCorporate;