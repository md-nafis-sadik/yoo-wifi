import CorporateBanner from '@/components/shared/others/CorporateBanner';
import React, { Fragment } from 'react';

const MaritimeInternet = () => {
    return (
        <Fragment>
            <CorporateBanner
                pageTitle="MARITIME INTERNET"
                description="Let us navigate your internet needs on the high seas. We can keep your crew connected and business afloat with our solutions. Therefore, no matter where the vessel roams, you can enjoy broadband without borders."
                featureList={[
                    "Single or Multiple Countries", "Fast deployment", "Customized solution to keep your team globally connected"
                ]}
                path='#'
            />
        </Fragment>
    );
};

export default MaritimeInternet;