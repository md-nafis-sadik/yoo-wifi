import Benefits from '@/components/corporate/commercial/Benefits';
import CorporateBanner from '@/components/shared/others/CorporateBanner';
import React, { Fragment } from 'react';

const Commercial = () => {
    return (
        <Fragment>
            <CorporateBanner
                isShowBannerBottom={false}
            />
            <Benefits />
        </Fragment>
    );
};

export default Commercial;