export default function Portfolio() {
    return (
        <div id='main'>
            <section id="portfolio" className="two">
                <div className="container">

                    <header>
                        <h2>Portfolio</h2>
                    </header>

                    <p>Vitae natoque dictum etiam semper magnis enim feugiat convallis convallis
                        egestas rhoncus ridiculus in quis risus amet curabitur tempor orci penatibus.
                        Tellus erat mauris ipsum fermentum etiam vivamus eget. Nunc nibh morbi quis
                        fusce hendrerit lacus ridiculus.</p>

                    <div className="row">
                        <div className="col-4 col-12-mobile">
                            <article className="item">
                                <a href="#" className="image fit"><img src="images/pic02.jpg" alt="" /></a>
                                <header>
                                    <h3>Ipsum Feugiat</h3>
                                </header>
                            </article>
                            <article className="item">
                                <a href="#" className="image fit"><img src="images/pic03.jpg" alt="" /></a>
                                <header>
                                    <h3>Rhoncus Semper</h3>
                                </header>
                            </article>
                        </div>
                        <div className="col-4 col-12-mobile">
                            <article className="item">
                                <a href="#" className="image fit"><img src="images/pic04.jpg" alt="" /></a>
                                <header>
                                    <h3>Magna Nullam</h3>
                                </header>
                            </article>
                            <article className="item">
                                <a href="#" className="image fit"><img src="images/pic05.jpg" alt="" /></a>
                                <header>
                                    <h3>Natoque Vitae</h3>
                                </header>
                            </article>
                        </div>
                        <div className="col-4 col-12-mobile">
                            <article className="item">
                                <a href="#" className="image fit"><img src="images/pic06.jpg" alt="" /></a>
                                <header>
                                    <h3>Dolor Penatibus</h3>
                                </header>
                            </article>
                            <article className="item">
                                <a href="#" className="image fit"><img src="images/pic07.jpg" alt="" /></a>
                                <header>
                                    <h3>Orci Convallis</h3>
                                </header>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}