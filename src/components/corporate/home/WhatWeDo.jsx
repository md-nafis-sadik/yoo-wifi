import React from 'react';
import { useSelector } from 'react-redux';

const WhatWeDoCorporate = () => {

    const { whatWeDo } = useSelector((state) => state.pocketWifi);

    return (
        <section className="sec_common_60 ">
            <div className="container2X ">

            </div>
        </section>
    );
};

export default WhatWeDoCorporate;