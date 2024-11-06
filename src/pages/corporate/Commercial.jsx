import Benefits from '@/components/corporate/commercial/Benefits';
import CorporateBanner from '@/components/shared/others/CorporateBanner';
import React, { Fragment } from 'react';

const Commercial = () => {
    return (
        <Fragment>
            <CorporateBanner
                isShowBannerBottom={false}
                pageTitle="Commercial"
                description='Take your productivity to the next level with our seamless connectivity! We provide a gateway to the digital world that will make your day as smooth as possible.'
            />
            <Benefits />
        </Fragment>
    );
};

export default Commercial;