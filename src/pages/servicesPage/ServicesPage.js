export const Services = (props) => {
    //Todo use props to access data
    return (
        <div className='whiteBackOliveText'>
            <div>
                <h2>Our Services</h2>
            </div>
            <div className="serviceBoxes">
                {props.services.map((service,i)=>{
                    return(
                        <div key={i} className="serviceBox lightOliveBackOliveText">
                            <img src={service.serviceImg}/>
                            <div className="serviceDescriptions">
                                <p>{service.description}</p>
                                <br/>
                                <h3>{service.service}</h3>
                            </div>
                        </div>
                    )
                })}
                {/* <div className="serviceBox lightOliveBackOliveText">
                        <img src='https://images.unsplash.com/photo-1573495804664-b1c0849525af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80' class='serviceImg' />
                        <img src='https://static.wixstatic.com/media/11062b_918f77d49c6e47d395addb2e5dcef03c~mv2.jpg/v1/fill/w_620,h_564,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Therapy%20Session.jpg' class='serviceImg' />
                        <div className="serviceDescriptions">
                            <p>At our counseling center, we provide individual therapy sessions to help individuals work through their unique challenges. Our safe and welcoming space allows clients to explore their thoughts and feelings, heal from past experiences, and challenge themselves to grow and become more self-aware. We strive to create an environment of acceptance and understanding to support our clients on their journey.</p>
                        <br/>
                        <p>A healthier, happier you</p>
                        <br/>
                        <h3>Individual Therapy</h3></div>
                </div> */}
                {/* <div className="serviceBox lightOliveBackOliveText">
                        <img src='https://images.unsplash.com/photo-1584473457493-17c4c24290c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80' class='serviceImg' />
                        <img src='https://static.wixstatic.com/media/11062b_832c5fda0a8445a6ba40576ce16b9c0d~mv2.jpg/v1/crop/x_731,y_0,w_4010,h_3648/fill/w_620,h_564,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Family%20with%20Tablet.jpg' class='serviceImg' />
                        <div className="serviceDescriptions">
                            <p>Family therapy is an excellent way to help families resolve conflicts as a unit. It provides a safe and secure environment for family members to communicate openly and honestly with one another, which can lead to a deeper understanding of each other's perspectives. Family therapy also helps to strengthen family bonds and promote a healthier, more harmonious living environment.</p>
                        <br/>
                        <h3>Family and Couple Therapy</h3>
                        </div>
                </div> */}
                {/* <div id='team'>
                    <h3>Self Esteem Coaching<br/>Counseling</h3>
                    <div className='teamService'>
                        <img src='https://images.unsplash.com/photo-1571425046056-cfc17c664e57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80' class='serviceImg' />
                        <p>Self esteem coaching are offered on a sliding scale.The lowest rate is $60/session and the highest is $80/session. Price will be determined after consultation. </p>
                        <br/>
                        <br/>
                        <p>Healthier, happier self love</p>
                    </div>
                </div>     */}
                {/* <div className="serviceBox lightOliveBackOliveText">
                            <img src='https://static.wixstatic.com/media/11062b_938d4c49eaa04cd5ac225719e9d98bb4~mv2.jpeg/v1/fill/w_620,h_564,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Supportive%20Friend.jpeg' class='serviceImg' />
                        <div className="serviceDescriptions">
                            <p>Our DEI and Mental Health Workshop provides companies and individuals with comprehensive training that integrates both diversity, equity, and inclusion (DEI) and mental health. We strive to create an inclusive workplace by providing education and resources that help organizations implement real change in the workforce. Our workshop focuses on best practices for creating a safe, welcoming, and respectful environment for all employees.</p>
                        <br/>
                        <h3>DEI & Mental Health <br />Workshops</h3>
                        </div>
                </div> */}
                {/* <div className="serviceBox lightOliveBackOliveText">
                            <img src='https://static.wixstatic.com/media/11062b_406353fea8454b308bcd6bc8850a8f90~mv2.jpeg/v1/fill/w_620,h_564,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Happy%20Friends.jpeg' class='serviceImg' />
                        <div className="serviceDescriptions">
                            <p>These supportive gatherings address common topics within our community, fostering guided conversations that encourage active listening and the sharing of experiences. These circles provide a safe space to discuss and learn from one another, led by a clinical  therapists </p>
                        <br/>
                        <h3>Therapy Circles</h3>
                        </div>
                </div> */}
            </div>
        </div>
    )
}