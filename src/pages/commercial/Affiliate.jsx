import CorporateBanner from '@/components/shared/others/CorporateBanner';
import React from 'react';

const Affiliate = () => {
    return (
        <div>
            <CorporateBanner
                isShowBannerBottom={false}
                bannerStyle2ColumnBased
                bannerStyle={2}
                pageTitle='AFFILIATE'
                description='If you have a question or doubt, simply fill in the form and we will get back to you soon!'
            />
        </div>
    );
};

export default Affiliate;