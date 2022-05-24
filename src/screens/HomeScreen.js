import React from 'react';
import './HomeScreen.css';
import Nav from '../Nav';
import Banner from '../Banner';
import Row from '../Row';
import requests from '../Requests';
import LoginFooter from '../LoginFooter';

const HomeScreen = (props) => {
    return (<div className='homeScreen'>
        <Nav />

        <Banner />

        <Row title="NETFLIX Originals" fetchURL={requests.fetchNeflixOriginals} isLargRow dragLeft/>
        <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
        <Row title="Actions Movies" fetchURL={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
        <Row title="War" fetchURL={requests.fetchWarMovies} />
        <Row title="Drama" fetchURL={requests.fetchDramaMovies} />
        <Row title="Animated" fetchURL={requests.fetchAnimatedMovies} />
        <Row title="Adventure" fetchURL={requests.fetchAdventureMovies} />
        <Row title="Histroy" fetchURL={requests.fetchHistoryMovies} />
        <Row title="Family" fetchURL={requests.fetchFamilyMovies} />
        <Row title="Mystery" fetchURL={requests.fetchMysteryMovies} />
        <Row title="Western" fetchURL={requests.fetchWesternMovies} />
        

        <LoginFooter />
    </div>);
};

export default HomeScreen;