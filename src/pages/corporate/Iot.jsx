import CorporateBanner from '@/components/shared/others/CorporateBanner';
import React, { Fragment } from 'react';

const Iot = () => {
    return (
        <Fragment>
            <CorporateBanner
                pageTitle="IOT"
                description="Stay connected to your home, your family, and your business at all times through a single device! They are also designed to meet your unique needs, whether you are an individual or a business."
                featureList={[
                    "Size of Data", "Operator-specific", "Managing platform and Monitoring", "Single or Multiple Countries"
                ]}
                path='#'
            />
        </Fragment>
    );
};

export default Iot;