import CountryList from '@/components/commercial/countryCoverage/CountryList';
import CorporateBanner from '@/components/shared/others/CorporateBanner';
import React from 'react';

const CountryCoverage = () => {
    return (
        <div>
            <CorporateBanner
                isShowBannerBottom={false}
            />
            <CountryList />
        </div>
    );
};

export default CountryCoverage;