import {BsArrowLeftCircle,BsArrowRightCircle} from 'react-icons/bs';
import { useState } from 'react';
import '../styles/HeroBanner.less';
import { HashLink } from "react-router-hash-link";
import strings from "../assets/strings.json";

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
        <section id="heroHomeSection">
            <div className='heroSectionContainer'>
                {props.bannerImgs.map((bannerImg,i)=>{
                    return(
                        <div key={i} className={i === current ? 'slideActive' : 'slide'} style={i === current ? { "--img": `url(${bannerImg.img})` } : {}}>
                            {i === current && <div className="heroSectionContainer"></div>}
                        </div>   
                    )
                })}
            </div>
            <div className='heroSectionCenteredText'>
                <div>
                    <p>Sometimes we don’t have it all together and that’s okay. Sometimes one needs an healing space- free of judgment, and full of acceptance. I want to support and guide you on your journey to find and embrace your potential as you heal, energize, and become aware of your inner strengths- doing it all With Grace</p>
                </div>
                <div>
                <button className="homeSectionButton">
          <HashLink smooth to="/#consultation">
            {strings.reuseableStrings.freeConsultButton}
          </HashLink>
        </button>
                </div>
            </div>
        </section> 
        
    )
}