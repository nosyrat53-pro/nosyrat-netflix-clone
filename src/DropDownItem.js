import React, { useState } from 'react';
import './DropDownItem.css';

function DropDownItem({title,description,onClick}) {
    const [open,setOpen] = useState(false);

    const ToggleDropDown = (e) => {
   
        if(e && e.stopPropagation) e.stopPropagation();     
        setOpen(!open);
    }

    return (
    <div className='dropdown'  >

    
        <div className='dropdown__title' onClick={(e) => ToggleDropDown(e)}>

            <div className='dropdown__title__itself'>
            {title}
            </div>

            <div className={`dropdown__title__expandShape ${open ? 'openExpandShape__animation' : 'closeExpandShape__animation'}`}></div>

        </div>


        <div className={`drowdown__description ${open ? 'descOpen__ani' : 'descClose__ani'}`}>
            <div className='decContent'>
            Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
            You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
            </div>
        </div>
     


    </div>
  )
}

export default DropDownItem