import cardcrush from '../assets/images/card-crush.jpeg';
import readme from '../assets/images/readme-gen.jpeg';
import empmanage from '../assets/images/emp-manage.jpg';

export default function Portfolio() {
    return (
        <div id='main'>
            <section id="portfolio" className="two">
                <div className="container">

                    <header>
                        <h2>Portfolio</h2>
                    </header>

                    <p>In addition to this very website, you will find below a selection of projects that showcase my skillset in the short time I have been
                        coding since December of 2024!
                    </p>

                    <div className="row">
                        <div className="col-4 col-12-mobile">
                            <article className="item">
                                <a href="https://ant-codes-42.github.io/card-crush/" className="image"><img src={cardcrush} alt="" /></a>
                                <header>
                                    <h3>Card Crush</h3>
                                    <p>My first collaborative project. A flashcard application built with JS, HTML, and CSS.</p>
                                </header>
                            </article>
                            <article className="item">
                                <a href="#" className="image fit"><img src="images/pic07.jpg" alt="" /></a>
                                <header>
                                    <h3>Coming soon...</h3>
                                </header>
                            </article>
                        </div>
                        <div className="col-4 col-12-mobile">
                            <article className="item">
                                <a href="https://github.com/ant-codes-42/employee-manage" className="image"><img src={empmanage} alt="" /></a>
                                <header>
                                    <h3>Employee Manage</h3>
                                    <p>A TypeScript and PostgreSQL CLI application for managing an employee database.</p>
                                </header>
                            </article>
                            <article className="item">
                                <a href="#" className="image fit"><img src="images/pic07.jpg" alt="" /></a>
                                <header>
                                    <h3>Coming soon...</h3>
                                </header>
                            </article>
                        </div>
                        <div className="col-4 col-12-mobile">
                            <article className="item">
                                <a href="https://github.com/ant-codes-42/readme-generator" className="image"><img src={readme} alt="" /></a>
                                <header>
                                    <h3>Readme Generator</h3>
                                    <p>A JS and NodeJS CLI ReadMe generator application.</p>
                                </header>
                            </article>
                            <article className="item">
                                <a href="#" className="image fit"><img src="images/pic07.jpg" alt="" /></a>
                                <header>
                                    <h3>Coming soon...</h3>
                                </header>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}