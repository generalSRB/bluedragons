import React from 'react';
import SingleNews from '../SingleNews/SingleNews';
import NewsFeed from '../NewsFeed/NewsFeed';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Nav from 'react-bootstrap/Nav'


const AllNews = (props) => {
    
    const renderNews = () => (
        props.data.map((item, i) => {
            if (i < 1) {
                return (
                    <SingleNews item={item} key={i} showNews={props.showNews}/>
                )
            } 
        })
    );

    const renderNewsFeed = () => (
        props.data.map((item, i) => {
            return (
                    <NewsFeed item={item} key={i}/>
                )
        })
    );

    return (
        <div className="container">
            <div className='row py-5'>
                <div className='col-md-8'>
                    {renderNews()}
                </div>
                <div className='col-md-4'>
                    <Jumbotron className='bg-light'>
                    <Nav variant="tabs" defaultActiveKey="/home">
                        <Nav.Item>
                            <Nav.Link href="/home">News Feed</Nav.Link>
                        </Nav.Item>
                    </Nav>
                        {renderNewsFeed()}
                    </Jumbotron>
                </div>
            </div>
        </div>
    )
};
 
export default AllNews;