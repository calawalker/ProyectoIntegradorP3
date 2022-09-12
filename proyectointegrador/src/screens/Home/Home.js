import React from 'react';
import Albumes from '../../components/Albumes/Albumes'
import Podcasts from '../../components/Tracks/Tracks';


function Home() {

    return (
        <main>
            <Albumes />
            <Podcasts />
        </main>
    );
}


export default Home