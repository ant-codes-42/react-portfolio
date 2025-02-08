import TechCard from "../components/TechCard";

import tsIcon from '../assets/images/typescript-plain.svg';
import nJSIcon from '../assets/images/nodejs-plain-wordmark.svg';
import sqlIcon from '../assets/images/postgresql-plain.svg';
import reactIcon from '../assets/images/react-original.svg';
import expressIcon from '../assets/images/express-original.svg';
import jsIcon from '../assets/images/javascript-plain.svg';
import htmlIcon from '../assets/images/html5-plain.svg';
import cssIcon from '../assets/images/css3-plain.svg';

export default function Resume() {
    return (
        <div id='main'>
            <section id="resume-top" className="five dark">
                <div className="container">
                    <header>
                        <h2>Resume</h2>
                    </header>

                    <p>Please see below for the tech I work with followed by my specific work history. You may also download a copy of my resume.</p>
                    <div className="row">
                        <div className="col-12">
                            <input type="button" value="Download Resume" />
                        </div>
                    </div>

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
            <section id="workexp" className="three">
                <div className="container">
                    <header>
                        <h2>Work Experience</h2>
                    </header>

                    <div className="row">
                        <div className="col-12">
                            <article className="item">
                                <header>
                                    <h2>Senior Collaboration Consultant</h2>
                                    <h3>Burwood Group Inc. | May 2023 to June 2024</h3>
                                </header>
                            </article>
                        </div>
                        <div className="col-12">
                            <article className="item">
                                <header>
                                    <p>Completed UCaaS assessment for migration from on-premises UC services to Microsoft Teams and
                                    Cisco Webex, including demos, gap analysis, and RFP documentation</p>
                                    <p>Developed design for migrating large public sector client from distributed PRI circuits to centralized
                                    SIP circuits with redundancy</p>
                                    <p>Deployed Microsoft Teams for a healthcare organization as part of a Microsoft Exchange 365 services
                                    migration, integrating Teams, Exchange, and SharePoint</p>
                                    <p>Conducted pre-sales assessment for Microsoft Teams Calling deployment, gathering information and
                                    estimating project plans and costs</p>
                                    <p>Deployed Microsoft Teams in a Direct Routing deployment alongside existing Cisco infrastructure,
                                    and developed solution designs through design sessions</p>
                                    <p>Implemented dynamic E911 policies for Microsoft Teams Direct Routing deployment, managing
                                    project end-to-end</p>
                                    <p>Designed and deployed centralized IM&P cluster integrating three CUCM clusters for a large hospital
                                    network, and provided training for engineering staff</p>
                                </header>
                            </article>
                        </div>
                        <div className="col-12">
                            <article className="item">
                                <header>
                                    <h2>Senior Collaboration Engineer</h2>
                                    <h3>Independent / Self-employed | July 2022 to December 2022</h3>
                                </header>
                            </article>
                        </div>
                        <div className="col-12">
                            <article className="item">
                                <header>
                                    <p>Collaborated to document 16-cluster CUCM/SME architecture, automating data collection and
                                    defining design standards</p>
                                    <p>Automated new site creation using Python, covering Device Pools, Regions, CSS, and Partitions</p>
                                    <p>Integrated APAC clusters into existing ILS/GDPR SME network; collected data using automation and
                                    verified / remediated any potential dial plan overlap using E.164 alternate numbers.</p>
                                    <p>Represented the voice engineering team in Network Security Vulnerability meetings, assessing and
                                    resolving CVEs</p>
                                    <p>Designed and provided migration strategy documentation from legacy Mitel PBX to Cisco CUCM for
                                    existing segment of acquired business</p>
                                    <p>Led roadmap and project planning discussion for telephony, collaboration, and contact center
                                    technologies, advising on long-term strategy for best practices and growth</p>
                                    <p>Developed contact center call flow best practices and consolidation strategies as well as
                                    recommendations for call flow management</p>
                                </header>
                            </article>
                        </div>
                        <div className="col-12">
                            <article className="item">
                                <header>
                                    <h2>Senior Voice Engineer</h2>
                                    <h3>Dorsey & Whitney LLP | December 2017 to January 2022</h3>
                                </header>
                            </article>
                        </div>
                        <div className="col-12">
                            <article className="item">
                                <header>
                                    <p>Migrated all offices from PRI circuits to AT&T IP Flex SIP platform</p>
                                    <p>Conducted POC of Microsoft Teams Phone System with direct routing, call queues, and auto
                                    attendants</p>
                                    <p>Led infrastructure migration from H.323 / MGCP to SIP signaling protocols</p>
                                    <p>Provided VOIP infrastructure recommendations and design, including +E.164 dial plan and cluster
                                    consolidation</p>
                                    <p>Planned and executed major and minor upgrades for VOIP applications (Unity Connection, CUCM,
                                        IM&P, Expressway)</p>
                                    <p>Managed and resolved site outages, interacting with vendors and adjacent tech departments as
                                    necessary</p>
                                </header>
                            </article>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}