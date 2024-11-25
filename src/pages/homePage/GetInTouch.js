export const GetInTouchSection = () => {
    return (
        <section >
            <div>
                <div className='oliveBackWhiteText'>
                    <div>
                        <h2>Get in Touch</h2>
                    </div>
                    <div>
                        <p>Schedule your free phone consultation </p>
                    </div>
                </div>
                <div className='whiteBackOliveText'>
                    <form>
                        <div>
                            <div>
                                <label>First Name</label>
                                <div>
                                    <input type="text" name="firstName"></input>
                                </div>
                            </div>
                            <div>
                                <label>Last Name</label>
                                <div>
                                    <input type="text" name="lastName"></input>
                                </div>
                            </div>
                            <div>
                                <label>Email</label>
                                <div>
                                    <input type="text" name="email" required></input>
                                </div>
                            </div>
                            <div>
                                <label>Message</label>
                                <textarea type="text" name="message" ></textarea>
                            </div>
                            <div>
                                <button>Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

