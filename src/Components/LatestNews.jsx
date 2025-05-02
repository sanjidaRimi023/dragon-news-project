import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex gap-4 items-center bg-base-200 p-4'>
            <p className='bg-secondary text-base-100 text-xl px-4 py-2'>Latest</p>
            <Marquee pauseOnHover={true}>
            <p className='font-bold'>Chief Adviser's Press Secretary Shafiqul Alam emphasized that the next seven months are crucial for Bangladesh's economy, highlighting an ambitious plan to expand the capacity of Chittagong Port sixfold.</p>

            </Marquee>
        </div>
    );
};

export default LatestNews;