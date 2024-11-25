import { Link} from 'react-router-dom';
export const ButtonBox=()=>{
    return(
    <div id='buttonBox'>
        <Link to='/services/#counseling'className='destination'>
            <div className='buttons' id='tan'>
            <p >Individual Counseling</p>
            </div>
        </Link>
        <Link to='/services/#session'className='destination'><div className='buttons' id='tan'>
            <p >Couple & Family Session</p>
        </div></Link>
        <Link to='/services/#coaching'className='destination'><div className='buttons' id='tan'>
            <p >Self Esteem Coaching</p>
        </div>
        </Link>
    </div>)
}