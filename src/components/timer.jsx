import React from 'react'
import {useState ,useEffect} from 'react'
import '../styles/timer.css'

function Timer(){


    const [count , setCount] = useState(0);
    const [timer , setTimer] = useState(0);

    const [format , setFormat] = useState({hour: "00" , minutes: "00" , seconds: "00"});

    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    let count_altern = 0;


    useEffect(() => {
        //console.log(hours +  ":" + minutes +  ":" + seconds +  ":" + count )
        console.log("time:" + timer)
        console.log("count:" + count)
        if(count !== 0){
            let interval = setInterval(() => { setCount(count - 1)},1000)
            secondsToFormat()
            
            return(() => {
                clearInterval(interval)
            })
        }

    },[count]);


    function formatToSeconds(hours, minutes, seconds){
        return (parseInt(hours)*3600 + parseInt(minutes)*60 + parseInt(seconds))
    }

    function secondsToFormat(){
        let hour = Math.trunc(count/3600)
        let minutes =  Math.trunc((count - hour*3600)/60)
        let seconds = Math.trunc((count - (hour*3600 + minutes*60))) 
        setFormat({hour: ("0"+hour).slice(-2) , minutes: ("0" + minutes).slice(-2) , seconds: ("0"+seconds).slice(-2)})
    }

    function startTimer( hours, minutes, seconds){
        let timeToStop = formatToSeconds(5,8,30)
        setTimer(timeToStop)
        setCount(timeToStop)
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
                <p className='clockText'>{format.hour + ":" + format.minutes + ":" + format.seconds}</p>
            </div>

            
        </div>
    );

}


export default Timer;