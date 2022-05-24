import React, {useRef, useEffect, useState} from 'react';
import './LoginScreen.css';
import rightArrow from '../assets/rightarrow.svg';
import SignUpScreen from './SignUpScreen';
import DropDownItem from '../DropDownItem';
import LoginFooter from '../LoginFooter';

const LoginScreen = (props) => {
    const [signIn,setSignIn] = useState(false);
    const placeholderRef = useRef();
    const inputRef = useRef();


    // this use effect care about the placeholder and set it when the user get into the website using mobile
    useEffect( () => {
        
        const handlePlaceHolder = (e) => {
      
            if(window.innerWidth <= 768){
                inputRef.current.setAttribute('placeholder','Email Address');
            }else{
                inputRef.current.setAttribute('placeholder','');
            } 
        }

        handlePlaceHolder();

        window.addEventListener('resize',(e) =>  handlePlaceHolder(e));

        return () => {
            window.removeEventListener('resize',(e) =>  handlePlaceHolder(e));
        };

    },[])

    const handleFocus = () => {
  

        placeholderRef.current.classList.remove('loginScreen__focus');
        placeholderRef.current.classList.remove('loginScreen__blur');

        placeholderRef.current.classList.add('loginScreen__focus');
    };

    const handleBlur = (e) => {

        if(e.target.value == ""){
         
            placeholderRef.current.style.display= 'block';
            placeholderRef.current.classList.remove('loginScreen__blur');
            placeholderRef.current.classList.remove('loginScreen__blur');
            placeholderRef.current.classList.add('loginScreen__blur');
        }else {
            placeholderRef.current.style.display= 'none';
          
        }
    };  

    const handleChange = (e) => {
        if(e.target.value == "") {
            placeholderRef.current.style.display= 'block';
        } 
    };

    const handleSubimit = (e) => {
        e.preventDefault();
    };

    return <div className='loginScreen'>
        <div className='loginScreen__content_1'>
        <div className='loginScreen__background'>
            <img 
            className='loginScrren__logo'
            src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' 
            alt='loginScrren__logo' 
            />

            <button
            onClick={() => setSignIn(true)}
            className='loginScreen__singInButton'
            >
            Sing In
            </button>

            <div className='loginScreen__gradiant'></div>
        </div>
        
            {signIn ? 
            <SignUpScreen />
            : 
            <div className='loginScreen__body'>
            <h1 className='loginScreen__bodyTitle'>
            Unlimited films, TV programmes and more.
            </h1>

            <h2 className='loginScreen__bodySubTtitle'>
            Watch anywhere. Cancel at any time.
            </h2>

            <div className='loginScreen__bodyAsk'>Ready to watch? Enter your email to create or restart your membership.</div>
        
            <form onSubmit={(e) => handleSubimit(e)} className='loginScreen__form'>

                <div className='loginScreen__formContent'>

                    <div className='loginScreen__fromInput'>
                        <div ref={placeholderRef} className='placeholder'>Email address</div>

                        <input 
                        type='email' 
                        onBlur={(e) => handleBlur(e)} 
                        onFocus={(e) => handleFocus(e)}
                        onChange={(e) => handleChange(e)}
                        ref={inputRef}
                        />

                    </div>

                    <button
                    onClick={() => setSignIn(true)}
                    className='loginScreen__formButton'
                    >
                        Get Started
                        <img src={rightArrow} alt="" />
                    </button>

                </div>

            </form>
        </div>}
        </div>

        <div className='loginScreen__content_2'>
                <div className='content'>
                    <div className='loginScreen__ourStoryText'>
                        <h1>Enjoy on your TV.</h1>

                        <h2>
                            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
                        </h2>
                    </div>

                    <div className='loginScreen__ourStoryVid'>
                        <img 
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                        alt="our story netflix"
                        />
                        <div className='loginScreen__vidCon'>
                        <video 
                        class="our-story-card-video" 
                        autoPlay
                        muted
                        loop>
                            <source 
                            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" 
                            type="video/mp4"/>
                            </video>
                        </div>
                    </div>
                </div>
        </div>

        <div className='loginScreen__content_2'>
                <div className='content'>

                <div className='loginScreen__ourStoryVid cardContainer'>
                        <img 
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                        alt="our story netflix"
                        />
                        <div className='loginScreen__vidCon loginScreen__cardPo' >
                            <img 
                            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                            alt="netflix"
                            />

                            <div className='loginScreen__download'>
                                <h5>Stranger Things</h5>
                                <p>DownLoading...</p>
                            </div>

                            <img 
                            className='downloadingGif'
                            src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                            alt="netflix"
                            />
                        </div>
                </div>

                    <div className='loginScreen__ourStoryText'>
                        <h1>Download your shows to watch offline.</h1>

                        <h2>
                        Save your favorites easily and always have something to watch.
                        </h2>
                    </div>

                    
                </div>
        </div>

        <div className='loginScreen__content_2'>
                <div className='content'>

                <div className='loginScreen__ourStoryText'>
                        <h1>Download your shows to watch offline.</h1>

                        <h2>
                        Save your favorites easily and always have something to watch.
                        </h2>
                    </div>

                <div className='loginScreen__ourStoryVid cardContainer'>
                        <img 
                        src="https://occ-0-3934-3933.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd"
                        alt="our story netflix"
                        />

                </div>



                    
                </div>
        </div>

        <div className='loginScreen__content_2'>
            <h1 className='loginScreen__content__2Ttile'>Frequently Asked Questions</h1>
                
            <div className='loginScreen__dropDown'>

                <DropDownItem 
                title="What is the Netflix ?" 
                description="Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
                />

                <DropDownItem 
                title="How much Netflix cost ?" 
                description="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $9.99 to $19.99 a month. No extra costs, no contracts."
                />

                <DropDownItem 
                title="Where can I watch ?" 
                description="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

                You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
                />

                <DropDownItem 
                title="How do I cancel ?" 
                description="Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
                />

                <DropDownItem 
                title="What can I watch on Netflix ?" 
                description="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
                />

                <DropDownItem 
                title="Is Netflix good for kids ?" 
                description="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.

                Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
                />

            </div>
        </div>

        <LoginFooter />

        </div>;
};

export default LoginScreen;