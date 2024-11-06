import CorporateBanner from '@/components/shared/others/CorporateBanner';
import React, { Fragment } from 'react';

const Commercial = () => {
    return (
        <Fragment>
            <CorporateBanner
                isShowBannerBottom={false}
            />
        </Fragment>
    );
};

export default Commercial;