export const SocialMediaButtons = (props) => {
    return(
            
        <div >
            
            <a href={props.social.link} target="_blank" >
                <img src={props.social.img} alt={props.social.name} className="socialMediaButton"/>
                {/* <p>{props.social.name}</p> */}
            </a>

        </div>
                    
    )
}