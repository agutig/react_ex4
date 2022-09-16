import React from 'react'
import Clock from './clock';
import Timer from './timer';
import {useState} from 'react'
import {v4 as uuidv4} from  'uuid'

function TimeManager(){

    const [timeManagerList ,setTimeManagerList] = useState([]);

    function clock(){
        return {timeZone : 0}
    }

    function timer(){
        return {hours : 0 , minutes:0 , seconds: 0}
    }

    function newComponent(type){

        if(type === "clock"){
            const component = {
                type: type,
                id: uuidv4(),
                component: clock()
            }
            setTimeManagerList(component,...timeManagerList)
        }else{
            const component = {
                type: type,
                id: uuidv4(),
                component: timer()
            }
            setTimeManagerList(component,...timeManagerList)
        }
    }

    return(
        <div>
            <h1>Time</h1>
            <div>
                <button onClick={() => newComponent("clock")}>Add Clock</button>
                <button onClick={() => newComponent("timer")}>Add Timer</button>
            </div>
            <div className='timeList'>
                
            </div>
        </div>
    );

}


export default TimeManager;