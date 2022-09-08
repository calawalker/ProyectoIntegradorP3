import React from 'react';
import Albumes from '../../components/Albumes/Albumes'
import Podcasts from '../../components/Podcasts/Podcasts';
import Search from '../../components/Search/Search';


function Home() {

    return (
        <main>

            <Search/>
            <Albumes />
            <Podcasts />

        </main>
    );
}


export default Home