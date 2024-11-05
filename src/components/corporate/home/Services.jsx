import React from 'react';
import { useSelector } from 'react-redux';

const Services = () => {

    const { services } = useSelector((state) => state.pocketWifi);

    return (
        <div className='container3X bg-[#ECECEC] rounded-3xl'>
            <div className='containerX sec_common_80 px-0'>
                <div className='grid grid-cols-3 gap-4'>
                    {services.map((item, index) => (<article key={index} className='px-4 py-8 bg-white rounded-2xl flex flex-col items-center justify-center'>
                        {item.icon()}

                        <h6 className='text-[18px] mt-6 mb-4 text-center text-black-900'>
                            {item.title}
                        </h6>

                        <p className='text-center text-black-600 leading-[140%]'>
                            {item.content}
                        </p>
                    </article>))}
                </div>
            </div>
        </div>
    );
};

export default Services;