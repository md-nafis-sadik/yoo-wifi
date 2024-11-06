import LetsTalk from '@/components/commercial/contact/LetsTalk';
import Products from '@/components/commercial/home/Products';
import CollaborateMarquee from '@/components/shared/CollaborateMarquee';
import CorporateBanner from '@/components/shared/others/CorporateBanner';
import CustomerTestimonial from '@/components/shared/others/CustomerTestimonial';
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

const MaritimeInternet = () => {

    const { contact, socialLinks } = useSelector((state) => state.contact);

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
            <Products />
            <CustomerTestimonial />
            <CollaborateMarquee />
            <LetsTalk
                data={contact}
                socialLinks={socialLinks}
            />
        </Fragment>
    );
};

export default MaritimeInternet;