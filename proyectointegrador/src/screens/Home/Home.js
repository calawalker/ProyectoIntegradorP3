import React, { Component } from 'react';
import Albumes from '../../components/Albumes/Albumes'
import Podcasts from '../../components/Tracks/Tracks'
import Search from "../../components/Search/Search"



class Home  extends Component {



    render() {
    return (
        <main>
            <Albumes />
            <Podcasts />
        </main>
    );
}}


export default Home