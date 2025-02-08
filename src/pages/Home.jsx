import TechCard from '../components/TechCard';

import tsIcon from '../assets/images/typescript-plain.svg';
import nJSIcon from '../assets/images/nodejs-plain-wordmark.svg';
import sqlIcon from '../assets/images/postgresql-plain.svg';
import reactIcon from '../assets/images/react-original.svg';
import expressIcon from '../assets/images/express-original.svg';
import jsIcon from '../assets/images/javascript-plain.svg';
import htmlIcon from '../assets/images/html5-plain.svg';
import cssIcon from '../assets/images/css3-plain.svg';
import portrait from '../assets/images/portrait.jpeg';

export default function Home() {

    return (
        <div id='main'>
            <section id="top" className="one cover">
                <div className="container">

                    
                        <div className="row aln-center">
                            <article className="item">
                                <header>
                                <h2 className='title'><strong>Hi! I'm Anthony Schwab, a software developer!</strong></h2>
                                <p>I also have a background in network engineering.<br />
                                    I love tech.</p>
                                </header>
                            </article>
                        </div>
                    

                    <footer>
                    </footer>

                </div>
            </section>

            <section id="about" className="two">
                <div className="container">

                    <header>
                        <h2>About Me</h2>
                    </header>

                    <a href="#" className="image"><img src={portrait} alt="Portrait of Anthony" /></a>

                    <p>I also love outages. Yeah, I know. But I'm serious. Not about causing them, but about resolving them. In the moment 
                        they are a test of your patience, your collected-ness under pressure. In the moment they are not always fun. But they 
                        always reveal something by the end. Something overlooked. Something that can be improved or made better. In the systems, 
                        in the process, and in yourself. I believe the secret to thriving in tech is an insatiable desire to solve problems. Make it go.
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
                        <TechCard img={tsIcon} h3={'TypeScript'} />
                        <TechCard img={nJSIcon} h3={'NodeJS'} />
                        <TechCard img={reactIcon} h3={'React'} />
                        <TechCard img={sqlIcon} h3={'PostgreSQL'} />
                        <TechCard img={expressIcon} h3={'Express'} />
                        <TechCard img={jsIcon} h3={'JavaScript'} />
                        <TechCard img={htmlIcon} h3={'HTML5'} />
                        <TechCard img={cssIcon} h3={'CSS3'} />
                    </div>
                </div>
            </section>
        </div>
    );
}