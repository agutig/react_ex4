import React from 'react'
import {useState ,useEffect} from 'react'
import '../styles/timer.css'
import sound from '../assets/sound_notification.mp3'

function Timer(){


    const [count , setCount] = useState(0);
    const [timer , setTimer] = useState(0);

    const [ hours , setHours] = useState(0);
    const [ minutes , setMinutes] = useState(0);
    const [ seconds , setSeconds] = useState(0);

    const [ stopCount , setStopCount] = useState(false);
    const [format , setFormat] = useState({hour: "00" , minutes: "00" , seconds: "00"});


    useEffect(() => {
        
        if(count >= 0 && !stopCount){
            let interval = setInterval(() => { setCount(count - 1)},1000)
            secondsToFormat()

            if (count === 0){
                new Audio(sound).play();
            }
            
            return(() => {
                clearInterval(interval)
            })

        }

    },[count , stopCount, hours, minutes,seconds]);


    function formatToSeconds(hours, minutes, seconds){
        return (parseInt(hours)*3600 + parseInt(minutes)*60 + parseInt(seconds))
    }

    function secondsToFormat(){
        let hour = Math.trunc(count/3600)
        let minutes =  Math.trunc((count - hour*3600)/60)
        let seconds = Math.trunc((count - (hour*3600 + minutes*60))) 
        setFormat({hour: ("0"+hour).slice(-2) , minutes: ("0" + minutes).slice(-2) , seconds: ("0"+seconds).slice(-2)})
    }

    function startTimer(){
        let timeToStop = formatToSeconds(hours,minutes,seconds)
        setTimer(timeToStop)
        setCount(timeToStop)
        secondsToFormat()
    }

    function stopTimer(){

        if (stopCount){
            return(<button onClick={() => setStopCount(!stopCount)}>Resume timer</button>);
        }else{
            return(<button onClick={() => setStopCount(!stopCount)}>Stop timer</button>);
        }
    }

    return(
        <div className='fullContainer'>

            <div className='inputTimeBox'>
                <div className='timeSelectorBox'>
                    <p className='timeSelectorText'>Hours</p>
                    <input type='number' min="0" placeholder='00' className='inputTime' onChange={ev => setHours(ev.target.value)}/>
                </div>

                <div className='timeSelectorBox'>
                    <p className='timeSelectorText'>Minutes</p>
                    <input type='number' min="0" placeholder='00' className='inputTime'  onChange={ev => setMinutes(ev.target.value)}/>
                </div>

                <div className='timeSelectorBox'>
                    <p className='timeSelectorText'>Seconds</p>
                    <input type='number' min="0" step="1" placeholder='00' className='inputTime'  onChange={ev => setSeconds(ev.target.value)}/>
                </div>

                <div className='buttonsBox'>
                    <button onClick={() => startTimer()}>Start timer</button>
                    {stopTimer()}
                    <button>X</button>
                </div>
                
            </div>

            <div className='timerContainer'>
                <p className='clockText'>{format.hour + ":" + format.minutes + ":" + format.seconds}</p>
            </div>

            
        </div>
    );

}


export default Timer;