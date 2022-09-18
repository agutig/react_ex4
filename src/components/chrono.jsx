import React from 'react'
import {useState ,useEffect} from 'react'
import '../styles/chrono.css'

function Chrono(props){


    const [count , setCount] = useState(0);

    const [ stopCount , setStopCount] = useState(true);
    const [format , setFormat] = useState({hour: "00" , minutes: "00" , seconds: "00" ,mSeconds:"00"});


    useEffect(() => {
        
        if(!stopCount){
            let interval = setInterval(() => { setCount(count + 1)},100)
            secondsToFormat()
            
            return(() => {
                clearInterval(interval)
            })

        }

    },[count , stopCount]);


    function secondsToFormat(){
        let hour = Math.trunc(count/36000)
        let minutes =  Math.trunc((count - hour*36000)/600)
        let seconds = Math.trunc((count - (hour*3600 + minutes*600))/10) 
        let mSeconds = Math.trunc((count - (hour*3600 + minutes*60 + seconds*10))) 
        setFormat({hour: ("0"+hour).slice(-2) , minutes: ("0" + minutes).slice(-2) , seconds: ("0"+seconds).slice(-2) , mSeconds: ("0"+ mSeconds).slice(-2)})
    }


    function stopChrono(){

        if (stopCount){
            return(<button className='chronoButton' onClick={() => setStopCount(!stopCount)}>▶</button>);
        }else{
            return(<button className='chronoButton' onClick={() => setStopCount(!stopCount)}>| |</button>);
        }
    }

    
    function closeChrono(){
        let refreshedList = props.list.filter( listClock => listClock.id !== props.component.id)
        props.refresh( refreshedList)
    }
    

    return(
        <div className='chronoBox'>
                <p className='chonoText'>{format.hour + ":" + format.minutes + ":" + format.seconds + ":" + format.mSeconds}</p>
                {stopChrono()}
                <button className='chronoButton' onClick={() => setCount(0)}>◼</button>
                <button className='chronoButton' onClick={() =>  closeChrono()}>X</button>
        </div>
    );

}


export default Chrono;