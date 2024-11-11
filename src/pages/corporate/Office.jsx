import LetsTalk from '@/components/commercial/contact/LetsTalk';
import Products from '@/components/commercial/home/Products';
import CollaborateMarquee from '@/components/shared/CollaborateMarquee';
import CorporateBanner from '@/components/shared/others/CorporateBanner';
import CustomerTestimonial from '@/components/shared/others/CustomerTestimonial';
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

const Office = () => {

    const { contact, socialLinks } = useSelector((state) => state.contact);

    return (
        <div className="overflow-hidden w-full">
            <CorporateBanner
                pageTitle="OFFICE/ ROADSHOW EVENTS"
                description="Wherever you go, stay connected with our WiFi solutions! Be it in the office or hosting a roadshow, enjoy seamless and lightning-quick access to the internet. Don’t let anything disrupt your workday with us at Yoowifi!"
                featureList={[
                    "Fast and reliable connectivity", "Dedicated support", "Reasonable cost or Sponsorship"
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

export default Office;