import InternetPackageCard from '@/components/shared/cards/InternetPackageCard';
import SectionHeader from '@/components/shared/others/SectionHeader';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { HorizontalLineIcon } from '@/services';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const PackageFilterList = () => {

    const { packages } = useSelector(state => state.country);

    const [selectedRegions, setSelectedRegions] = useState([]);
    const [selectedCountries, setSelectedCountries] = useState([]);

    return (
        <section className="containerX">
            <div className='sec_common_80 xl:!px-0'>

                <SectionHeader
                    heading='Country Coverage'
                    subHeading='Roam the world with confidence! Stay connected and data-ready, anytime, anywhere!'
                />


                <div className='flex gap-8 mt-10'>

                    <FilterSidebar
                        className="w-[304px] "
                        selectedRegions={selectedRegions} setSelectedRegions={setSelectedRegions}
                        selectedCountries={selectedCountries} setSelectedCountries={setSelectedCountries}
                    />

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


const FilterSidebar = ({
    className, selectedRegions, setSelectedRegions, selectedCountries, setSelectedCountries
}) => {

    const { regionList, countries } = useSelector(state => state.country);

    const [isRegionListOpen, setIsRegionListOpen] = useState(true);
    const [isCountryListOpen, setIsCountryListOpen] = useState(true);

    return (
        <div className={cn('p-6 border border-neutral-200 rounded-2xl', className)}>
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

            <div className='flex flex-col gap-12'>

                <FilterList
                    title="Region"
                    isOpen={isRegionListOpen}
                    setIsOpen={setIsRegionListOpen}
                    datas={regionList}
                    selected={selectedRegions}
                    setSelected={setSelectedRegions}
                />

                <FilterList
                    title="Country"
                    isOpen={isCountryListOpen}
                    setIsOpen={setIsCountryListOpen}
                    datas={countries}
                    selected={selectedCountries}
                    setSelected={setSelectedCountries}
                />
            </div>
        </div>
    )
}

const FilterList = ({
    isOpen, setIsOpen, datas, title, selected, setSelected
}) => {

    // Toggle list
    const toggle = (paramName, setSelected) => {
        setSelected((prevSelected) =>
            prevSelected.includes(paramName)
                ? prevSelected.filter((name) => name !== paramName)
                : [...prevSelected, paramName]
        );
    };

    return (
        <div className='flex flex-col gap-4'>
            <div className='flex justify-between gap-4'>
                <p className='text-black-900 text-[18px] leading-[140%] font-semibold'>
                    {title}:
                </p>

                <button onClick={() => setIsOpen(!isOpen)}>
                    <HorizontalLineIcon />
                </button>

            </div>

            <div className='border-b border-[#EEE]'></div>

            <ul className={cn(
                "space-y-4 transition-all duration-300 ",
                isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            )}>
                {datas.map((data, index) => (
                    <li key={index} className="text-black-700 flex gap-2 items-center">
                        <Checkbox
                            type="checkbox"
                            checked={selected.includes(data.name)}
                            onCheckedChange={() => toggle(data.name, setSelected)}
                        />
                        <span onClick={() => toggle(data.name, setSelected)} className='cursor-pointer'>
                            {data.name}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}