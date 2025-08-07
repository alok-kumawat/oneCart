import React from 'react'
import bg1 from "../assets/bg1.jpg"
import bg2 from "../assets/bg2.jpg"
import bg3 from "../assets/bg3.jpg"
import bg4 from "../assets/bg4.jpg"

const Background = ({heroCount}) => {
    if(heroCount === 0){
        return <img src={bg2} alt="" className='w-[100%] h-[100%] float-left overflow-auto object-cover'/>
    }
    else if(heroCount === 1){
        return <img src={bg1} alt="" className='w-[100%] h-[100%] float-left overflow-auto object-cover'/>
    }
    else if(heroCount === 2){
        return <img src={bg3} alt="" className='w-[100%] h-[100%] float-left overflow-auto object-cover'/>
    }
    else if(heroCount === 3){
        return <img src={bg4} alt="" className='w-[100%] h-[100%] float-left overflow-auto object-cover'/>
    }
    else{
        return <img src="" alt="" />
    }

}

export default Background