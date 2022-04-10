import React from 'react';
import Features from '../../Components/Features/Features';
import NavigationBar from '../../Components/NavigationBar/NavigationBar';

const Home = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Features></Features>
        </div>
    );
};

export default Home;