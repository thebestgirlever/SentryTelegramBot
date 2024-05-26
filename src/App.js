import './App.css';
import React from 'react';
import bg from './images/bg.png';
import mnPic from './images/main.png';
import logot from './images/logot.png';
import instruction from './images/instruction.png'


function App() {
  return (
    <div className='body'>
      <div className='sentry'>
      <img className='bg' src={window.location.origin + bg} alt='bg'></img>
        <img className='mn-pic' src={window.location.origin + mnPic} alt='telegram'></img>
        <div className='hd-content'>
          <img className='logo' src={window.location.origin + logot} alt="logo"></img>
          <p className='hd-text'>SentryTaaaaaaaelegramBot</p>
          <div className='hd-navigation'>How it Works</div>
          <button className='hd-button'><a className="hd-link" href='https://t.me/SentryTelegramBot' target="_blank" rel="noopener noreferrer">Open @SentryTelegramBot</a></button>
        </div>
        <div className='main'>
          <div className='mn-title'>Receive notifications from Sentry to Telegram</div>
          <div className='mn-text'>To get your webhook URL, add @SentryTelegramBot to your chat<br />and type /getwebhookurl@SentryTelegramBot.</div>
          <button className='mn-button'><a className='mn-link' href='https://t.me/SentryTelegramBot' target="_blank" rel="noopener noreferrer">Open @SentryTelegramBot</a></button>
          <div className='howItWorks'>
            <div className='works-title'>How it works</div>
            <div className='step'>
              <div className='step-title'>Step 1</div>
              <div className='step-block'>
                <div className='step-text1'>Add <a className="link-step" href='https://t.me/SentryTelegramBot' target="_blank" rel="noopener noreferrer">@SentryTelegramBot</a> to your group or channel</div>
                <div className='step-text2'>Follow the instructions</div>
              </div>
            </div>
            <div className='step'>
              <div className='step-title'>Step 2</div>
              <div className='step-block'>
                <div className='step-text1'>Go to Sentry - Settings - Projects - [YOUR PROJECT] - WebHooks and paste the webhook url you received in step 1. Save changes and enable plugin.</div>
                <div className='step-text2'>Repeat it for each your project</div>
              </div>
            </div>
            <div className='step'>
              <div className='step-title'>Step 3</div>
              <div className='step-block'>
                <div className='step-text1'>Edit the Alert rule on page Alerts. Add a «Send notification via WebHooks» action as you can see on the image below</div>
                <img className='instruction' src={window.location.origin + instruction} alt="instructiom" />
                <div className='step-text2'>Try to send test notification. If all is well, repeat this for each project.</div>
              </div>
            </div>
          </div>
        </div>
        <div className='footer'>
          <div className='footer-text'>SentryTelegramBot ®</div>
          <div className='footer-text'>Text me @renatabdusalamov</div>
        </div>
      </div>
    </div>
  );
}

export default App;
