import CorporateBanner from '@/components/shared/others/CorporateBanner';
import React, { Fragment } from 'react';

const TravelAgency = () => {
    return (
        <Fragment>
            <CorporateBanner
                pageTitle="TRAVEL AGENCY"
                description="Draw up information for your clients at the speed of lightning through our WiFi solutions. Communicate effectively with partners and avoid the frustration of a weak connection or an unreliable signal strength."
                featureList={[
                    "Size of Data", "Operator-specific", "Managing platform and Monitoring", "Single or Multiple Countries"
                ]}
                path='#'
            />
        </Fragment>
    );
};

export default TravelAgency;