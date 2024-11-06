import SectionHeader from '@/components/shared/others/SectionHeader';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const CountryList = () => {

    const { regionList, countries } = useSelector(state => state.country);

    const [currentRegion, setCurrentRegion] = useState(regionList[0]);

    // Filter countries by region
    const filteredCountries = countries.filter(country => country.region.toLowerCase() === currentRegion.name.toLowerCase());

    return (
        <section className="containerX">
            <div className='sec_common_80 xl:!px-0'>

                <SectionHeader
                    heading='Country Coverage'
                    subHeading='Roam the world with confidence! Stay connected and data-ready, anytime, anywhere!'
                />

                <div className='my-4 lg:my-15 flex bg-neutral-200 rounded-[14px] py-2 px-2 overflow-x-auto'>
                    {regionList.map((region, index) => (<button
                        key={index}
                        className={cn(
                            "flex-1 transition-all duration-300 ease-in-out py-3 md:py-4 px-4 md:px-0 text-sm md:text-base",
                            region.name === currentRegion.name ? " text-white bg-main-600 rounded-[8px] font-semibold" : "bg-neutral-200 text-neutral-700 font-normal"
                        )}
                        onClick={() => setCurrentRegion(region)}
                    >
                        {region.name}
                    </button>))}
                </div>

                {filteredCountries.length < 1 ? (<p className='text-center text-neutral-700 text-sm lg:text-base'>
                    No countries found in this region
                </p>) : (
                    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-5'>
                        {filteredCountries.map((country, index) => (<div
                            key={index}
                            className='p-3 bg-neutral-100 rounded-xl flex gap-2 items-center'
                        >
                            <img src={country.image} alt={country.name} className='w-12 h-8 md:w-20 md:h-14 object-contain' />
                            <p className='text-sm lg:text-[18px] font-semibold'>
                                {country.name}
                            </p>
                        </div>))}
                    </div>
                )}

            </div>
        </section>
    );
};

export default CountryList;