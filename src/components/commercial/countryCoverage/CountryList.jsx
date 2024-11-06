import SectionHeader from '@/components/shared/others/SectionHeader';
import { cn } from '@/lib/utils';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const CountryList = () => {

    const { regionList } = useSelector(state => state.country);

    const [currentRegion, setCurrentRegion] = useState(regionList[0]);

    return (
        <section className="containerX">
            <div className='sec_common_80 xl:!px-0'>

                <SectionHeader
                    heading='Country Coverage'
                    subHeading='Roam the world with confidence! Stay connected and data-ready, anytime, anywhere!'
                />

                <div className='my-15 flex bg-neutral-200 rounded-[14px] py-2 px-2'>
                    {regionList.map((region, index) => (<button
                        key={index}
                        className={cn(
                            "flex-1 transition-all duration-300 ease-in-out py-4 ",
                            region.name === currentRegion.name ? " text-white bg-main-600 rounded-[8px] font-semibold" : "bg-neutral-200 text-neutral-700 font-normal"
                        )}
                        onClick={() => setCurrentRegion(region)}
                    >
                        {region.name}
                    </button>))}
                </div>

            </div>
        </section>
    );
};

export default CountryList;