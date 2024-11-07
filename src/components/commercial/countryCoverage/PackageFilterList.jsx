import InternetPackageCard from '@/components/shared/cards/InternetPackageCard';
import SectionHeader from '@/components/shared/others/SectionHeader';
import React from 'react';
import { useSelector } from 'react-redux';

const PackageFilterList = () => {

    const { packages } = useSelector(state => state.country);

    return (
        <section className="containerX">
            <div className='sec_common_80 xl:!px-0'>

                <SectionHeader
                    heading='Country Coverage'
                    subHeading='Roam the world with confidence! Stay connected and data-ready, anytime, anywhere!'
                />


                <div className='flex gap-8 mt-10'>
                    <div className='w-[304px] p-6 border border-neutral-200 rounded-2xl'>
                        <h4 className='text-black-900 text-[28px] font-extrabold leading-[120%]'>
                            Filters
                        </h4>

                        <div className='my-8'>
                            <input
                                type="text"
                                placeholder='Search anything...'
                                className='w-full p-4 rounded-xl border border-neutral-300 outline-none bg-neutral-100 placeholder:text-black-600 text-black-900'
                            />
                        </div>
                    </div>
                    <div className='flex-1 grid grid-cols-2 gap-x-5 gap-y-4'>
                        {packages.map((data, index) => (
                            <InternetPackageCard
                                key={index}
                                data={data}
                                type={2}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default PackageFilterList;