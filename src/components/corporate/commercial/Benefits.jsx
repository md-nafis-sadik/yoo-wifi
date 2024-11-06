import SectionHeader from '@/components/shared/others/SectionHeader';
import React from 'react';
import { useSelector } from 'react-redux';

const Benefits = () => {

    const { benefitsData } = useSelector((state) => state.pocketWifi);

    return (
        <div className='containerX sec_common_80'>
            <SectionHeader
                heading="Benefits"
                subHeading="Don’t let slow internet tie you down! Switch to our portable solutions to experience connectivity without boundaries."
            />

            <div>

            </div>
        </div>
    );
};

export default Benefits;