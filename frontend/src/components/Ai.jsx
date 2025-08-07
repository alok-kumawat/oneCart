import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ai from '../assets/ai.png';

const Ai = () => {
  const [transcript, setTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const navigate = useNavigate();

  const speak = (message) => {
    const utterance = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(utterance);
  };

  const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const recognition = new speechRecognition();
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onresult = (event) => {
    const speechResult = event.results[0][0].transcript.toLowerCase();
    console.log('Transcript:', speechResult);
    setTranscript(speechResult);

    // Navigation with voice
    if (speechResult.includes('home')) {
      speak("opening home page");
      navigate('/');
    } else if (
      speechResult.includes('collection') ||
      speechResult.includes('collections') ||
      speechResult.includes('product') ||
      speechResult.includes('products')
    ) {
      speak("opening collections page");
      navigate('/collection');
    } else if (speechResult.includes('about')) {
      speak("opening about page");
      navigate('/about');
    } else if (speechResult.includes('contact')) {
      speak("opening contact page");
      navigate('/contact');
    } else if (
      speechResult.includes('cart') ||
      speechResult.includes('card') ||
      speechResult.includes('kaat') ||
      speechResult.includes('caat')
    ) {
      speak("opening your cart");
      navigate('/cart');
    } else if (
      speechResult.includes('order') ||
      speechResult.includes('orders') ||
      speechResult.includes('myorder') ||
      speechResult.includes('myorders')
    ) {
      speak("opening orders page");
      navigate('/order');
    } else {
      speak("Sorry, I didn't understand that.");
    }

    // Hide transcript & reset size
    setTimeout(() => {
      setTranscript('');
      setIsListening(false);
    }, 3000);
  };

  recognition.onerror = (e) => {
    console.error('Speech Recognition Error:', e);
    setIsListening(false);
  };

  const handleClick = () => {
    try {
      setIsListening(true);
      recognition.start();
      console.log('Listening...');

      setTimeout(() => {
        recognition.stop();
        console.log('Stopped listening');
        setIsListening(false);
      }, 5000);
    } catch (error) {
      console.error('Recognition already started or error:', error);
      setIsListening(false);
    }
  };

  return (
    <div>
      <div
        className='fixed lg:bottom-[10px] md:bottom-[40px] bottom-[80px] left-[2%]'
        onClick={handleClick}
      >
        <img
          src={ai}
          alt="AI"
          className={`w-[50px] cursor-pointer transition-transform duration-300 ${
            isListening ? 'scale-125' : 'scale-100'
          }`}
        />
      </div>
      {transcript && (
        <div className='fixed bottom-17 left-[5%] bg-transparent px-4 py-2 rounded shadow text-white font-medium'>
          {transcript}
        </div>
      )}
    </div>
  );
};

export default Ai;
