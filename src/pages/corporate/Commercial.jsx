import LetsTalk from '@/components/commercial/contact/LetsTalk';
import Products from '@/components/commercial/home/Products';
import Benefits from '@/components/corporate/commercial/Benefits';
import CollaborateMarquee from '@/components/shared/CollaborateMarquee';
import CorporateBanner from '@/components/shared/others/CorporateBanner';
import CustomerTestimonial from '@/components/shared/others/CustomerTestimonial';
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

const Commercial = () => {

    const { contact, socialLinks } = useSelector((state) => state.contact);

    return (
        <Fragment>
            <CorporateBanner
                isShowBannerBottom={false}
                pageTitle="Commercial"
                description='Take your productivity to the next level with our seamless connectivity! We provide a gateway to the digital world that will make your day as smooth as possible.'
                bannerStyle={2}
            />
            <Benefits />
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

export default Commercial;