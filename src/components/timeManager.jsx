import React from 'react'
import Clock from './clock';
import Timer from './timer';
import {useState} from 'react'
import {v4 as uuidv4} from  'uuid'
import '../styles/timeManager.css'

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
                data: clock()
            }
            setTimeManagerList([component , ...timeManagerList])
        }else{
            const component = {
                type: type,
                id: uuidv4(),
                data: timer()
            }
            setTimeManagerList([component,...timeManagerList])
        }
    }

    function createComponent(component){
        if (component.type == "clock"){
                return (<Clock component={component}  list={timeManagerList} refresh={setTimeManagerList} />)
            }else{
                return <Timer component={component}  list={timeManagerList} refresh={setTimeManagerList}/>
            }
        
    }

    return(
        <div className='timeManager'>
            <div className='timeManagerTittle'>
                <p className='timeManagerTittleText' >Time</p>
                <button className='timeManagerTittleButton' onClick={() => newComponent("clock")}>🕒</button>
                <p>_</p>
                <button className='timeManagerTittleButton' onClick={() => newComponent("timer")}>⌛</button>
                <p>_</p>
                <button className='timeManagerTittleButton' onClick={() => newComponent("timer")}>⏱️</button>
            </div>
            <div className='timeList'>
                {timeManagerList.map( (componente)  => createComponent(componente) )  }
            </div>
        </div>
    );

}


export default TimeManager;