import React from 'react';
import * as H from './styles';

const Home: React.FC = () => {


    return (

        <>
            <H.GlobalContainer>
                <H.Title href='/Smurfs'>SMURF</H.Title>
                <H.Title href='/Boost'>BOOST</H.Title>
            </H.GlobalContainer>
            
        </>

    );
};

export default Home;