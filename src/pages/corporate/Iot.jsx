import LetsTalk from '@/components/commercial/contact/LetsTalk';
import Products from '@/components/commercial/home/Products';
import CollaborateMarquee from '@/components/shared/CollaborateMarquee';
import CorporateBanner from '@/components/shared/others/CorporateBanner';
import CustomerTestimonial from '@/components/shared/others/CustomerTestimonial';
import React from 'react';
import { useSelector } from 'react-redux';

const Iot = () => {

    const { contact, socialLinks } = useSelector((state) => state.contact);

    return (
        <div className="overflow-hidden w-full">
            <CorporateBanner
                pageTitle="IOT"
                description="Stay connected to your home, your family, and your business at all times through a single device! They are also designed to meet your unique needs, whether you are an individual or a business."
                featureList={[
                    "Size of Data", "Operator-specific", "Managing platform and Monitoring", "Single or Multiple Countries"
                ]}
                path='/view-more'
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

export default Iot;