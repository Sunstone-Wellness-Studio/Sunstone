import {NavLink} from 'react-router-dom';
import '../styles/DropDownNavLink.less'

export const DropDownNavLink = (props) =>{
    return(
        <div className='dropDown'>
            <NavLink to={props.navLink.route}>{props.navLink.page}</NavLink>
            <div class="dropDown-content">
                {props.navLink.subRoutes.map((navLink, i) => {
                    return (
                        <div key={i}>
                            <NavLink to={navLink.route}>{navLink.page}</NavLink>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}