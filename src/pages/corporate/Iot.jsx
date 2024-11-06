import CorporateBanner from '@/components/shared/others/CorporateBanner';
import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';

const Iot = () => {

    const { iotFeatureList } = useSelector((state) => state.pocketWifi);

    return (
        <Fragment>
            <CorporateBanner
                pageTitle="IOT"
                description="Stay connected to your home, your family, and your business at all times through a single device! They are also designed to meet your unique needs, whether you are an individual or a business."
                featureList={iotFeatureList}
            />
        </Fragment>

    );
};

export default Iot;