export const SocialMediaButtons = (props) => {
    return(
            
        <div className="socialMediaButton" >
            {/* <p>{props.social.name}</p> */}
            <a href={props.social.link} target="_blank">
                <img src={props.social.img} alt={props.social.name} />
            </a>
        </div>
                    
    )
}