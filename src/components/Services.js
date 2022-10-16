export const Services=()=>{
    return(
        <div id='services'>
            <h2>Services</h2>
            <div class="serviceBoxes">
                <div id='self'>
                    <h3>Individual<br/> Counseling</h3>
                    <div className='individualService'>
                        <img src='https://images.unsplash.com/photo-1573495804664-b1c0849525af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80' class='serviceImg' />
                        <p>Individual sessions are offered on a sliding scale. Rates starts at  $80/session and the highest is $100/session. Price will be determined after consultation.  Individual sessions are composed of grief counseling, and trauma focused counseling</p>
                        <br/>
                        <p>A healthier, happier you</p>
                    </div>
                </div>
                <div id='couple'>
                    <h3>Couple & Family<br/>Counseling</h3>
                    <div className='coupleService'>
                        <img src='https://images.unsplash.com/photo-1584473457493-17c4c24290c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80' class='serviceImg' />
                        <p>Couple and family sessions are also on a sliding scale, Rates start at $80/session and the highest is $100/session. Price will be determined after consultation</p>  
                    <br/>
                    <br/>
                    <p>Healthier, happier relationships</p> 
                    </div>
                </div>  
                <div id='team'>
                    <h3>Self Esteem Coaching<br/>Counseling</h3>
                    <div className='teamService'>
                        <img src='https://images.unsplash.com/photo-1571425046056-cfc17c664e57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' class='serviceImg' />
                        <p>Self esteem coaching are offered on a sliding scale.The lowest rate is $60/session and the highest is $80/session. Price will be determined after consultation. </p>
                        <br/>
                        <br/>
                        <p>Healthier, happier self love</p>
                    </div>
                </div>    
            </div>
        </div>
    )
}