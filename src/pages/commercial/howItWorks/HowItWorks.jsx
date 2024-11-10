import DeliverCharge from '@/components/commercial/howItWorks/DeliverCharge';
import RentServices from '@/components/commercial/howItWorks/RentServices';
import RentYooWifi from '@/components/commercial/howItWorks/RentYooWifi';
import SelfReturn from '@/components/commercial/howItWorks/SelfReturn';
import TopUp from '@/components/commercial/howItWorks/TopUp';
import CorporateBanner from '@/components/shared/others/CorporateBanner';
import React, { Fragment } from 'react';

const HowItWorks = () => {
    return (
        <Fragment>
            <CorporateBanner isShowBannerBottom={false} />
            <RentYooWifi />
            <DeliverCharge />
            <RentServices />
            <SelfReturn />
            <TopUp />
        </Fragment>
    );
};

export default HowItWorks;