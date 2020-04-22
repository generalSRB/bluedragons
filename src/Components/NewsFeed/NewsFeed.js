import React from 'react';





const NewsFeed = (props) => {
    
    return (
        <a href="/" className="d-block text-dark py-2 m-0.5">{props.item.title}</a>
    )
};

export default NewsFeed;