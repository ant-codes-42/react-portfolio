import AnimatedSection from "../components/AnimatedSection";

export default function Contact() {
    return (
        <div id='main'>
            <AnimatedSection id="contact" className="four">
                <div className="container">

                    <header>
                        <h2>Contact Me</h2>
                    </header>

                    <p>You may fill out the form below to contact me. Additionally, please note my GitHub and Email buttons in the navigation bar
                        which are always great ways to reach out!
                    </p>

                    <form method="post" action="#">
                        <div className="row">
                            <div className="col-6 col-12-mobile"><input type="text" name="name" placeholder="Name" /></div>
                            <div className="col-6 col-12-mobile"><input type="text" name="email" placeholder="Email" /></div>
                            <div className="col-12">
                                <textarea name="message" placeholder="Message"></textarea>
                            </div>
                            <div className="col-12">
                                <input type="submit" value="Send Message" />
                            </div>
                        </div>
                    </form>

                </div>
            </AnimatedSection>
        </div>
    );
}