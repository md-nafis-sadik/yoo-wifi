import LetsTalk from '@/components/commercial/contact/LetsTalk';
import Products from '@/components/commercial/home/Products';
import CollaborateMarquee from '@/components/shared/CollaborateMarquee';
import CorporateBanner from '@/components/shared/others/CorporateBanner';
import CustomerTestimonial from '@/components/shared/others/CustomerTestimonial';
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

const TravelAgency = () => {

    const { contact, socialLinks } = useSelector((state) => state.contact);

    return (
        <div className="overflow-hidden w-full">
            <CorporateBanner
                pageTitle="TRAVEL AGENCY"
                description="Draw up information for your clients at the speed of lightning through our WiFi solutions. Communicate effectively with partners and avoid the frustration of a weak connection or an unreliable signal strength."
                featureList={[
                    "Size of Data", "Operator-specific", "Managing platform and Monitoring", "Single or Multiple Countries"
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

export default TravelAgency;