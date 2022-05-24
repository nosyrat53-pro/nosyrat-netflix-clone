import React,{ useState, useEffect } from 'react';
import axios from './axios';
import requests from './Requests';
import './Banner.css';

function Banner(props) {
    const [movie,setMovie] = useState([]);
    const [backdropimg,setBackdropImg] = useState('');

    useEffect(() => {
      
        async function fetchData() {
            const response = await axios.get(requests.fetchNeflixOriginals);
  
            setMovie( response.data.results[ Math.floor(Math.random() * response.data.results.length - 1)] )
            
        }

        fetchData();
     
    }, []);

    useEffect(() => {
        setBackdropImg(`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`)
    } , [movie]);


    const truncate = (str,num) => {
        return str?.length > num ? str.substr(0, num -1) + '...' : str ;
     }

  return (
    <header className='banner' style={{
        backgroundSize: 'cover',
        backgroundImage: `url(${backdropimg})`,
        backgroundPosition: 'center center',
        }}>
     

        <div className='banner__content'>
            <h1 className='banner__title'>
                {movie?.title || movie?.name || movie?.original_title}
            </h1>

            <div className='banner__buttons'>
                <button className='banner__button'>Play</button>
                <button className='banner__button'>My List</button>
            </div>

            <h1 className='banner__description'>
                {truncate(movie?.overview, 150)}
            </h1>
        </div>

        <div className='banner--fadeBottom' />

  
    </header>
  )
}

export default Banner;