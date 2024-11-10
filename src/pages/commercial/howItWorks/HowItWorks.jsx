import DeliverCharge from '@/components/commercial/howItWorks/DeliverCharge';
import RentYooWifi from '@/components/commercial/howItWorks/RentYooWifi';
import CorporateBanner from '@/components/shared/others/CorporateBanner';
import React from 'react';

const HowItWorks = () => {
    return (
        <div>
            <CorporateBanner isShowBannerBottom={false} />
            <RentYooWifi />
            <DeliverCharge />
        </div>
    );
};

export default HowItWorks;