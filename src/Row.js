import axios from './axios';
import React, { useState , useEffect , useRef} from 'react';
import './Row.css';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';
import ra from './assets/rightarrow.svg';
import dragToLeftImg from './assets/dragtoleft.gif';

function Row({title,fetchURL,isLargRow,dragLeft}) {
  const [movies,setMovies] = useState([]);
  const [allLoaded, setAllLoaded] = useState(false);
  const [loaded,setLoaded] = useState([
    false,false,false,false,false,false,false,false,false,false,
    false,false,false,false,false,false,false,false,false,false
  ]);
  const [baseURL,setBaseURL] = useState("https://image.tmdb.org/t/p/w500");
  const [thereIsRight,setThereIsRight] = useState(true);
  const [thereIsLeft,setThereIsLeft] = useState(false);
  const [innerWidth,setInnerWidth] = useState(0);


  const rowPostersRef = useRef(null);

  // useEffect(() => {
  //   // set the innerwidth for the first time while the component render
  //   setInnerWidth(window.innerWidth);

  //   const handlersize = () => { 
  //     setInnerWidth(currstate => currstate = window.innerWidth)
  //   }
  //   // set event listener for the window to set the new innerwidth vale while the user resizing the window
  //   window.addEventListener('resize', handlersize);

  //   // remove the event listener when the component die
  //   return () => {
  //     window.removeEventListener('resize', handlersize)
  //   }
    
  // },[]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(fetchURL);
      setMovies(response.data.results);
      return response;
    }
    fetchData();
    console.log(title,movies);
  }, [fetchURL]);

  useEffect(() => {
    setAllLoaded(true);
  } ,[movies]);

  const setSpecificLoaded  = (index) => {
    const copyLoaded = loaded;
    copyLoaded[index] = true;
    setLoaded(copyLoaded);
  }

  function eventFire(el, etype){
    if (el.fireEvent) {
      el.fireEvent('on' + etype);
    } else {
      var evObj = document.createEvent('Events');
      evObj.initEvent(etype, true, false);
      el.dispatchEvent(evObj);
    }
  }

  const handleRightScrool = (e) => {
    e.stopPropagation();
    setThereIsLeft(true);
    // const previousScrollValue = rowPostersRef.current.scrollLeft;
    rowPostersRef.current.scrollLeft += 30;

    // if(rowPostersRef.current.scrollLeft == previousScrollValue) {
    //   setThereIsLeft(true);
    //   setThereIsRight(false);
    // }

  }

  const handleLeftScrool = (e) => {
    e.stopPropagation();

    setThereIsRight(true);
    rowPostersRef.current.scrollLeft -= 30;

    if(rowPostersRef.current.scrollLeft == 0) {
      setThereIsLeft(false);
      setThereIsRight(true);
    }
    console.log('ref',rowPostersRef.current.scrollLeft)
  } 

  return (
    <div className='row'>
      <h1 className='row__title'>{title}</h1>
    <div className='row__postersContainer'>
      {/* {
        dragLeft && 
        <div className='dragleftContainer'>
          <div className='circle'></div>
          <img className='dragToLeft' src={dragToLeftImg} alt='drag to left' />
        </div>
        } */}
    {/* <div className={`row__postersRightArrow ${thereIsRight ? '' : 'notactive'}`} onClick={(e) => handleRightScrool(e)}>
          <img src={ra} />
        </div>
        <div className={`row__postersLeftArrow ${thereIsLeft ? '' : 'notactive'}`}  onClick={(e) => handleLeftScrool(e)}>
        <img src={ra} />
        </div>
        </div> */}
      <div className='row__posters' ref={rowPostersRef}>
      
        {
          // !allLoaded ? 
          // [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map(skelton => {
          //   return  <Box
          //           key={skelton}
          //           sx={{
          //             bgcolor: '#121212',
          //             marginRight: 2,
          //             width: '100%',
          //             display: 'flex',
          //             justifyContent: 'center',
          //           }}
          //           >
          //           <Skeleton
          //             sx={{ bgcolor: 'grey.900' }}
          //             variant="rectangular"
          //             width={210}
          //             height={100}
          //           />
          //         </Box>
          // })
          // : 
          movies.map((movie,id) => {

            return  <div key={id} className={`row__poster__Container ${isLargRow && 'row__LargPoster__container'}`}>
            {loaded[id] ? null :
              // <Box
              //   data-index={id}
              //   key={movie.id}
              //   sx={{
              //     bgcolor: '#121212',
              //     marginRight: 2,
              //     width: '100%',
              //     display: `${loaded[id] ? 'none' : 'flex'}`,
              //     justifyContent: 'center',
              //   }}
              //   >
               !movie.poster_path && !movie.backdrop_path ? null : 
              <div className='row__poster__skelton' style={{display: `${loaded[id] ? 'none' : 'block'}`}}>
                <Skeleton
                  sx={{ 
                    bgcolor: 'grey.900',
                    display: `${loaded[id] ? 'none' : 'block'}`,
                  }}
                  animation="pulse"
                  variant="rectangular"
                  width={190}
                  height={ isLargRow ?  260 : 215}
                />
                </div>
              // {/* </Box> */}
            }
            {
              !movie.poster_path && !movie.backdrop_path ? null :
            <img
              data-index={id}
              key={id}
              style={!loaded[id] ? {display: 'block'} : {display: 'none'}}
              className={`row__poster ${isLargRow && "row__posterLarge"}`}
              src={`${baseURL}${movie.poster_path}`} 
              alt={movie.title} 
              title={movie.title}
              loading="lazy"
              onLoad={() => setSpecificLoaded(id)}
              width={190}
              height={isLargRow ? 260 : 215}
            />
          }
          </div>
    

          //   return loaded[id] ?  <img 
          //   style={{display: `${loaded[id] ? 'none' : 'block'}`}}
          //   className={`row__poster ${isLargRow&& "row__posterLarge"}`}
          //   key={id}
          //   src={`${baseURL}${movie.isLargRow ? movie.poster_path : movie.backdrop_path}`} 
          //   alt={movie.title} 
          //   loading="lazy"
          //   onLoad={() => setSpecificLoaded(id)}
          //   /> : 
          //   <Box
          //   key={id}
          //   sx={{
              
          //     bgcolor: '#121212',
          //     marginRight: 2,
          //     width: '100%',
          //     display: `${loaded[id] ? 'none' : 'flex'}`,
          //     justifyContent: 'center',
          //   }}
          //   >
          //   <Skeleton
          //     sx={{ bgcolor: 'grey.900' }}
          //     variant="rectangular"
          //     width={210}
          //     height={100}
          //   />
          // </Box>

          //   console.log('index is => ',id);
          //   return loaded[id] ? <img 
          //   className={`row__poster ${isLargRow&& "row__posterLarge"}`}
          //   key={id}
          //   src={`${baseURL}${movie.isLargRow ? movie.poster_path : movie.backdrop_path}`} 
          //   alt={movie.title} 
          //   loading="lazy"
          //   onLoad={() => setSpecificLoaded(id)}
          //   /> : <Box
          //   key={id}
          //   sx={{
          //     bgcolor: '#121212',
          //     marginRight: 2,
          //     width: '100%',
          //     display: 'flex',
          //     justifyContent: 'center',
          //   }}
          //   >
          //   <Skeleton
          //     sx={{ bgcolor: 'grey.900' }}
          //     variant="rectangular"
          //     width={210}
          //     height={100}
          //   />
          // </Box>
          })
        }

      </div>
    
      </div>

    </div>
  )
}

export default Row;