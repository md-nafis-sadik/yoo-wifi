import CorporateBanner from '@/components/shared/others/CorporateBanner';
import React, { Fragment } from 'react';

const Office = () => {
    return (
        <Fragment>
            <CorporateBanner
                pageTitle="OFFICE/ ROADSHOW EVENTS"
                description="Wherever you go, stay connected with our WiFi solutions! Be it in the office or hosting a roadshow, enjoy seamless and lightning-quick access to the internet. Don’t let anything disrupt your workday with us at Yoowifi!"
                featureList={[
                    "Fast and reliable connectivity", "Dedicated support", "Reasonable cost or Sponsorship"
                ]}
                path='#'
            />
        </Fragment>
    );
};

export default Office;