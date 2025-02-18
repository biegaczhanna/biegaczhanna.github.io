import React, {useState, useRef} from "react";
import './Kartka.css';
import muzyka from './../components/happy_birthday_piano.mp3'

export default function Kartka(){
    const [isOpen, setIsOpen] = useState(false);
    const [isIn, setIsIn] = useState("no-animation")
    const [showHearts, setShowHearts] = useState(false);
    const [noAnimation, setNoAnimation] = useState(false);
    const [isFirstRender, setIsFirstRender] = useState(true);
    const audioRef = useRef(new Audio(muzyka));


    const handleClick = () => {
            if (isOpen) { //było otwarte, więc zamykamy
                setShowHearts(false);
                setIsOpen((prevState) => !prevState);
                stop()
            }
            else { //przypadek kiedy było zamknięte, więc otwieramy
                setIsOpen((prevState) => !prevState);
                setShowHearts(true)
                play()
            }
        setIsFirstRender(false);
    };


    function play(){
        const audio = audioRef.current;
        audio.loop = true;
        audio.volume = 0.2;
        audio.currentTime = 8.4;
        audio.play();
    }
    function stop() {
        const audio = audioRef.current;
        audio.volume = 0.18;
        setTimeout(() => {
            audio.volume = 0.16;
        }, 100);
        setTimeout(() => {
            audio.volume = 0.14;
        }, 200);
        setTimeout(() => {
            audio.volume = 0.12;
        }, 300);
        setTimeout(() => {
            audio.volume = 0.1;
        }, 400);
        setTimeout(() => {
            audio.volume = 0.08;
        }, 500);
        setTimeout(() => {
            audio.volume = 0.06;
        }, 600);
        setTimeout(() => {
            audio.volume = 0.04;
        }, 700);
        setTimeout(() => {
            audio.volume = 0.02;
        }, 800);
        setTimeout(() => {
            audio.volume = 0.01;
        }, 900);
        setTimeout(() => {
        audio.pause();
        }, 1000);
    }

    return(
        <div className="container"  
            >
            <div className="walentynki">

            <div 
            className={`koperta ${isOpen ? "otwarta" : isFirstRender ? "bez-animacji" : "zamknieta"}`} 
            onClick={handleClick}
            >

            {/* <div className="otworz"> Otwórz mnie</div> */}
                        <div 
                        className={`kartka ${(noAnimation || isFirstRender)? "brak-animacji" : isIn ? "in" : "out"}`}>
                            <div className="tekst">
                                <div className="tytul">Wszystkiego Najlepszego!</div> 
                                Kocham Cię bardzo mocno i chciałabym Ci życzyć wszystkiego co dobre!
                                Żebyś był zdrowy i pełen energii, 
                                żebyś mógł zobaczyć wszystkie kontynenty i cuda świata.
                                Abyś osiągnął wszystko to co sobie postanowisz, a nawet więcej.
                                A także, życzę Ci byś czuł się szczęśliwy, kochany i spełniony w życiu.
                                <div className="podpis"> Kocham Cię, <br/> Hania </div>
                            </div>
                        </div>
                </div>
                {showHearts && (
        <div className="serduszka">
            <div className="serce"></div>
            <div className="serce"></div>
            <div className="serce"></div>
            <div className="serce"></div>
            <div className="serce"></div>
            <div className="serce"></div>
            <div className="serce"></div>
            <div className="serce"></div>
            <div className="serce"></div>
            <div className="serce"></div>

          </div>
        )}
                <div className="przod"
                onMouseEnter={() => {if (isOpen) {setIsIn(false)}}} 
                onMouseLeave={() => {setIsIn(true)}}></div>
            </div>
            <div className="cień"></div>
            <div class="tooltip-container">
        {/* <div class="tooltip-element">Najedź na mnie!</div> */}
        <div class="tooltip-text">To jest wiadomość koło kursora!</div>
        </div>

        </div>

    );
}