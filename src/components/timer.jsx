import React from 'react'
import {useState ,useEffect} from 'react'
import '../styles/timer.css'

function Timer(){

    const [count , setCount] = useState(0);

    const [timer , setTimer] = useState(0);

    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    let count_altern = 0;

    function addSecond(){

        count_altern++;
        console.log(count_altern)
        setCount(count_altern);
    }


    useEffect(() => {
        //console.log(hours +  ":" + minutes +  ":" + seconds +  ":" + count )
        
        setInterval(() =>  addSecond(), 1000);
        
        
    },[]);

    function formatToSeconds(hours, minutes, seconds){
              
        return (parseInt(hours)*3600 + parseInt(minutes)*60 + parseInt(seconds))
    }

    function startTimer( hours, minutes, seconds){
        //let timeToStop = formatToSeconds(hours,minutes,seconds)
        setTimer(0,0,0)
    }

    return(
        <div className='fullContainer'>

            <div className='inputBox'>
                <div className='timeSelectorBox'>
                    <p>Hours</p>
                    <input type='number' placeholder='00' className='inputTime' onChange={ev => hours = ev.target.value}/>
                </div>

                <div className='timeSelectorBox'>
                    <p>Minutes</p>
                    <input type='number' placeholder='00' className='inputTime'  onChange={ev => minutes = ev.target.value}/>
                </div>

                <div className='timeSelectorBox'>
                    <p>Seconds</p>
                    <input type='number' placeholder='00' className='inputTime'  onChange={ev => seconds = ev.target.value}/>
                </div>

                <div className='buttonsBox'>
                    <button onClick={() => startTimer(hours,minutes ,seconds)}>Start timer</button>
                    <button>Stop timer</button>
                </div>
                
            </div>

            <div className='timerContainer'>
                <p className='clockText'>{count}</p>
            </div>
        </div>
    );

}


export default Timer;