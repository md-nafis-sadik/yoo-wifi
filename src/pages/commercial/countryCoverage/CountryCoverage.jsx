import CountryList from '@/components/commercial/countryCoverage/CountryList';
import Products from '@/components/commercial/home/Products';
import CorporateBanner from '@/components/shared/others/CorporateBanner';
import CustomerTestimonial from '@/components/shared/others/CustomerTestimonial';
import React from 'react';

const CountryCoverage = () => {
    return (
        <div className="overflow-hidden w-full">
            <CorporateBanner
                isShowBannerBottom={false}
            />
            <CountryList />
            <Products />
            <CustomerTestimonial />
        </div>
    );
};

export default CountryCoverage;