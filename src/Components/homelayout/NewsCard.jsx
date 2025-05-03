import React from 'react';

const NewsCard = ({news}) => {
    return (
        <div className='border my-10 p-10'>
            <h1>{ news.title}</h1>
            <img src={news.image_url} alt="" />
        </div>
    );
};

export default NewsCard;