import React from 'react';
import './LoginFooter.css';

const LoginFooter = (props) => {
    return <div className='loginfooter'>
        <div className='loginfooter__title'>Questions? Call 0800-022-5173</div>

        <div className='loginfooter__content'>


            {/* first content from the left side */}
            <div className='content1'>
                <div className='content'>
                    <a href='/'>FAQ</a>
                </div>

                <div className='content'>
                    <a href='/'>Investor Relations</a>
                </div>

                <div className='content'>
                    <a href='/'>Ways to Watch</a>
                </div>

                <div className='content'>
                    <a href='/'>Corporate Information</a>
                </div>

                <div className='content'>
                    <a href='/'>Only on Netflix</a>
                </div>
            </div>


           {/* Second content from the left side */}
            <div className='content2'>
            <div className='content'>
                    <a href='/'>Help Centre</a>
                </div>

                <div className='content'>
                    <a href='/'>Jobs</a>
                </div>

                <div className='content'>
                    <a href='/'>Terms of Use</a>
                </div>

                <div className='content'>
                    <a href='/'>Contact Us</a>
                </div>

            </div>

           {/* Third content from the left side */}
            <div className='content3'>
            <div className='content'>
                    <a href='/'>Account</a>
                </div>

                <div className='content'>
                    <a href='/'>Redeem gift cards</a>
                </div>

                <div className='content'>
                    <a href='/'>Privacy</a>
                </div>

                <div className='content'>
                    <a href='/'>Speed Test</a>
                </div>
            </div>

            {/* Fourth content from the left side */}
            <div className='content4'>
            <div className='content'>
                    <a href='/'>Media Centre</a>
                </div>

                <div className='content'>
                    <a href='/'>Buy gift cards</a>
                </div>

                <div className='content'>
                    <a href='/'>Cookie Preferences</a>
                </div>

                <div className='content'>
                    <a href='/'>Legal Notices</a>
                </div>
            </div>

        </div>

        <div className="itsMe">
            Netflix clone directed by Mohammed Al-Nosyrat 😎🔥
        </div>
    </div>
};

export default LoginFooter;