const Newsletter = () => {

    return(
        <section className="newsletter">
            <div className="newsletter__wrapper">
                <p className="newsletter__title">Newsletter</p>
                <form className="form">
                    <fieldset className="form__field">
                        <label className="form__label" htmlFor={`form__input`}>Get timely updates from your favorite products.</label>
                        <div className="form__actions">
                            <input id={`form__input`} className="form__input" type={`email`}/>
                            <button className="form__btn" type={`button`}>Subscribe</button>
                        </div>
                    </fieldset>
                </form>                
            </div>
        </section>
    )
}

export default Newsletter;