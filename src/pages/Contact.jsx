import Form from "../components/Form";

export default function Contact() {
    return (
        <div id='main'>
            <section id="contact" className="four">
                <div className="container">

                    <header>
                        <h2>Contact Me</h2>
                    </header>

                    <p>You may fill out the form below to contact me. Additionally, please note my GitHub and Email buttons in the navigation bar
                        which are always great ways to reach out!
                    </p>

                    <Form />

                </div>
            </section>
        </div>
    );
}