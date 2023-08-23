const Hero = () => {
    return (
        <>
            <section className='hero'>
                <div className='hero__img--bg'>
                    <img src='image-mockups.png' alt='Smartphones using easybank app' className='hero__img' />
                </div>
                <div className='hero__text--padding'>
                    <h1 className='hero__text--header'>Next generation digital banking</h1>
                    <p className='hero__text--content'>Take your financial life online. Your Easybank account will be a one-stop shop for spending, saving, budgeting, investing, and much more.</p>
                    <button className='hero__button'>Request Invite</button>
                </div>
            </section>
        </>
    )
}

export default Hero

