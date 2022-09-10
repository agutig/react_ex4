import React from 'react'
import {useState ,useEffect} from 'react'
import '../styles/clock.css'

function Clock(){

    const [date,getDate] = useState( new Date());
    
    const [activated,getActivated] = useState(true);

    useEffect(() => {
        setInterval(() => getDate(new Date()), 1000);
    }, []);

    function secondsVisualitation(){
        if(activated === true){ 
            return(<p className='seconds'> { ("0" + date.getSeconds()).slice(-2)} </p>)
        }else{ 
            return(<p className='seconds'> △ </p>)}
    }

    return(
        
        <div className='clockContainer'>
            <div className='clockBody'>
                <p className='hourMin'>{ ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2)}</p>
                <div className='secDiv'>
                    <button onClick={() => getActivated(!activated)} className='secButton'>Sec</button>
                    {secondsVisualitation()}
                </div>
            </div>
            <div className='clockConf'>
                <span>
                    <button  className='confButton' >Local</button>
                    <button className='confButton'>X</button>
                </span>
                <span>
                    <button className='confButton'>Japan</button>
                    <button className='confButton'>Germany</button>
                </span>
                <span>
                    <button className='confButton'>US</button>
                    <button className='confButton'>IND</button>
                </span>
                

            </div>
        </div>
    );

}


export default Clock;