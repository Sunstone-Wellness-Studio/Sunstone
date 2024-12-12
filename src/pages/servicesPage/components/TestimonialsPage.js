import {BsArrowLeftCircle,BsArrowRightCircle} from 'react-icons/bs';
import { useState } from 'react';
import '../styles/TestimonialsPage.less';

export const Reviews=(props)=>{
    const[current, setCurrent]=useState(0);
    const length=props.reviews.length
    const nextSlide =()=>{
        setCurrent(current===length-1?0:current+1)
    }
    const prevSlide =()=>{
        setCurrent(current===0?length-1:current-1)
    }
    setTimeout(() => {
        nextSlide()
      }, 20000);
    console.log(props.reviews);
    if (!Array.isArray(props.reviews) || props.reviews.length<=0){
        return null
    }
    return(
        <div className='reviews'>
        <h2>Testimonials</h2>
        <BsArrowLeftCircle className='leftArrow' onClick={prevSlide}/>
            <BsArrowRightCircle className='rightArrow' onClick={nextSlide}/>
        {/*carousel of reviews. set timeout for next review but also allow button click for next review*/}
         <div className='reviewsBox'>
            
            {props.reviews.map((review,i)=>{
                return(
                    <div key={i} className={i === current ? 'slideActive': 'slide'}>
                    {i===current&&(
                        <div className='review'> 
                            {/* {setTimeout} */}
                            <p>{review.review}</p>
                            <p>{review.author}</p>
                        </div>
                    )}
                    </div>   
                )
            })}
        </div> 
        <p id="closingQuote">“She told them that the only grace they could have was the grace they could imagine.That if they could not see it, they would not have it”.<br/>- Toni Morrison</p>
        {/* <form className='reviewForm'>
            <input 
                type='text'
                placeholder='Name' 
                name='reviewer' 
                id='nameInput' 
                // error={errors}
                // value={formState.email} 
                // onChange={inputChange}
            />
            <textarea
                type='text'
                placeholder='Review' 
                name='review' 
                id='reviewInput' 
                // error={errors}
                // value={formState.email} 
                // onChange={inputChange}
            />
                            
            <button>Submit</button>
        </form> */}
        </div>
    )
}