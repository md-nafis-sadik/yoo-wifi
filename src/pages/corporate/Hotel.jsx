import LetsTalk from '@/components/commercial/contact/LetsTalk';
import Products from '@/components/commercial/home/Products';
import CollaborateMarquee from '@/components/shared/CollaborateMarquee';
import CorporateBanner from '@/components/shared/others/CorporateBanner';
import CustomerTestimonial from '@/components/shared/others/CustomerTestimonial';
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

const Hotel = () => {

    const { contact, socialLinks } = useSelector((state) => state.contact);

    return (
        <div className="overflow-hidden w-full">
            <CorporateBanner
                pageTitle="HOTEL"
                description="Turn your hotel into a home away from home with our top-speed internet connectivity! Your guests can remain productive no matter where they are, and your business can stand out from the competition."
                featureList={[
                    "Stay connected when operation is disrupted", "Fast deployment", "Customized solution to keep your team globally connected"
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
        </div>
    );
};

export default Hotel;