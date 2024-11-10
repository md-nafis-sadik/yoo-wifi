import AffiliateService from '@/components/commercial/affiliate/AffiliateService';
import CorporateBanner from '@/components/shared/others/CorporateBanner';
import SectionHeader from '@/components/shared/others/SectionHeader';
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

            <section className='containerX'>
                <div className='sec_common_80 xl:!px-0'>
                    <SectionHeader
                        heading="Join the YooWander Program"
                        midHeading="Explore the World and Stay Connected!"
                        subHeading="Are you a travel-loving influencer who values staying connected and sharing adventures with your followers? Join the Yoowifi Affiliate Yoo Wander program for an exciting partnership. We’re here to support your authentic travel content and keep you connected with FREE global data."
                    />
                </div>
            </section>

            <AffiliateService />
        </div>
    );
};

export default Affiliate;