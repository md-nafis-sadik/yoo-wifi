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


                <div className='flex'>
                    <div>

                    </div>
                    <div>
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