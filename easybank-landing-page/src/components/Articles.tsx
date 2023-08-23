const Articles = () => {
    return (
        <section className='article'>
            <div>
                <h2 className='article__text--header'>Latest Articles</h2>
            </div>
            <div className='article__grid'>
                <div className='article__card'>
                    <img src="article-images/image-currency.jpg" alt="Image Currency" className='article__card--img' />

                    <div className='article__card--text--box'>
                        <p className='article__card--author'>By Claire Robinson</p>
                        <h4 className='article__card--title'>Receive money in any currency with no fees</h4>
                        <p className='article__card--text--content'>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                    </div>
                </div>
                <div className='article__card'>
                    <img src="article-images/image-restaurant.jpg" alt="Image Restaurant" className='article__card--img' />

                    <div className='article__card--text--box'>
                        <p className='article__card--author'>By Wilson Hutton</p>
                        <h4 className='article__card--title'>Treat yourself without worrying about money</h4>
                        <p className='article__card--text--content'>Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you ....</p>
                    </div>
                </div>
                <div className='article__card'>
                    <img src="article-images/image-plane.jpg" alt="Image Plane" className='article__card--img' />

                    <div className='article__card--text--box'>
                        <p className='article__card--author'>By Wilson Hutton</p>
                        <h4 className='article__card--title'>Take your Easybank card wherever you go</h4>
                        <p className='article__card--text--content'>We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you ...</p>
                    </div>
                </div>
                <div className='article__card'>
                    <img src="article-images/image-confetti.jpg" alt="Image Confetti" className='article__card--img' />

                    <div className='article__card--text--box'>
                        <p className='article__card--author'>By Claire Robinson</p>
                        <h4 className='article__card--title'>Our invite-only Beta accounts are now live!</h4>
                        <p className='article__card--text--content'>After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site ...</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Articles