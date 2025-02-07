import tsIcon from '../assets/images/typescript-plain.svg'
import nJSIcon from '../assets/images/nodejs-plain-wordmark.svg'
import sqlIcon from '../assets/images/postgresql-plain.svg'
import reactIcon from '../assets/images/react-original.svg'
import expressIcon from '../assets/images/express-original.svg'
import jsIcon from '../assets/images/javascript-plain.svg'
import htmlIcon from '../assets/images/html5-plain.svg'
import cssIcon from '../assets/images/css3-plain.svg'

export default function Home() {

    return (
        <div id='main'>
            <section id="top" className="one dark cover">
                <div className="container">

                    <header>
                        <div className="row aln-center">
                            <article className="item">
                        <h2 className="alt"><strong>Hi! I'm Anthony Schwab, a software developer!</strong></h2>
                        <p>I also have a background in network engineering.<br />
                            I don't know what that makes me.<br />
                            I just love tech.</p>
                            </article>
                            </div>
                    </header>

                    <footer>
                    </footer>

                </div>
            </section>

            <section id="about" className="two">
                <div className="container">

                    <header>
                        <h2>About Me</h2>
                    </header>

                    <a href="#" className="image featured"><img src="images/pic08.jpg" alt="" /></a>

                    <p>I love outages. Yeah, I know. But I'm serious. In the moment they are a test of your patience,
                        your collected-ness under pressure. In the moment they are not fun. But they always reveal something
                        by the end. Something overlooked. Something that can be improved or made better. In the systems, in the process,
                        and in yourself. I believe the secret to thriving in tech is an insatiable desire to solve problems. Make it go.
                        Make it work. Make it work <strong>better.</strong> That's why I'm here anyway. I can't shake that desire.
                    </p>

                </div>
            </section>

            <section id="techstack" className="three">
                <div className="container">

                    <header>
                        <h2>Tech I Work With</h2>
                    </header>

                    <div className="row">
                        <div className="col-3">
                            <article className="item">
                                <header>
                                <img src={tsIcon} /><h3>TypeScript</h3>
                                </header>
                            </article>
                        </div>
                        <div className="col-3">
                            <article className="item">
                                <img src={nJSIcon} />
                                <header>
                                    <h3>NodeJS</h3>
                                </header>
                            </article>
                        </div>
                        <div className="col-3">
                            <article className="item">
                                <img src={reactIcon} />
                                <header>
                                    <h3>React</h3>
                                </header>
                            </article>
                        </div>
                        <div className="col-3">
                            <article className="item">
                                <img src={sqlIcon} />
                                <header>
                                    <h3>PostgreSQL</h3>
                                </header>
                            </article>
                        </div>
                        <div className="col-3">
                            <article className="item">
                                <img src={expressIcon} />
                                <header>
                                    <h3>Express</h3>
                                </header>
                            </article>
                        </div>
                        <div className="col-3">
                            <article className="item">
                                <img src={jsIcon} />
                                <header>
                                    <h3>JavaScript</h3>
                                </header>
                            </article>
                        </div>
                        <div className="col-3">
                            <article className="item">
                                <img src={htmlIcon} />
                                <header>
                                    <h3>HTML</h3>
                                </header>
                            </article>
                        </div>
                        <div className="col-3">
                            <article className="item">
                                <img src={cssIcon} />
                                <header>
                                    <h3>CSS</h3>
                                </header>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}