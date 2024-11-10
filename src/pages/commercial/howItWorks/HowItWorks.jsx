import DeliverCharge from '@/components/commercial/howItWorks/DeliverCharge';
import RentServices from '@/components/commercial/howItWorks/RentServices';
import RentYooWifi from '@/components/commercial/howItWorks/RentYooWifi';
import SelfReturn from '@/components/commercial/howItWorks/SelfReturn';
import CorporateBanner from '@/components/shared/others/CorporateBanner';
import React from 'react';

const HowItWorks = () => {
    return (
        <div>
            <CorporateBanner isShowBannerBottom={false} />
            <RentYooWifi />
            <DeliverCharge />
            <RentServices />
            <SelfReturn />
        </div>
    );
};

export default HowItWorks;