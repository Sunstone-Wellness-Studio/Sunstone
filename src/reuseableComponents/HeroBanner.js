import {BsArrowLeftCircle,BsArrowRightCircle} from 'react-icons/bs';
import { useState } from 'react';
import '../styles/HeroBanner.less';

export const HeroBanner = (props) => {
    const[current, setCurrent]=useState(0);
    const length=props.bannerImgs.length
    const nextSlide =()=>{
        setCurrent(current===length-1?0:current+1)
    }
    const prevSlide =()=>{
        setCurrent(current===0?length-1:current-1)
    }
    setTimeout(() => {
        nextSlide()
      }, 4000);
    console.log(props.bannerImgs);
    if (!Array.isArray(props.bannerImgs) || props.bannerImgs.length<=0){
        return null
    }
    return(
        <div>
            <div className='container'>
                {props.bannerImgs.map((bannerImg,i)=>{
                    return(
                        <div key={i} className={i === current ? 'slideActive' : 'slide'} style={i === current ? { "--img": `url(${bannerImg.img})` } : {}}>
                            {i === current && <div className="container"></div>}
                        </div>   
                    )
                })}
            </div>
            <div className='centered'>
                <div>
                    <p>Sometimes we don’t have it all together and that’s okay. Sometimes one needs an healing space- free of judgment, and full of acceptance. I want to support and guide you on your journey to find and embrace your potential as you heal, energize, and become aware of your inner strengths- doing it all With Grace</p>
                </div>
                <div>
                    <button>Book a free consultation</button>
                </div>
            </div>
        </div> 
        
    )
}