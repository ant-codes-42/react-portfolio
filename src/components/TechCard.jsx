// These are for the tech stack icons
export default function TechCard({ img, h3 }) {
    return (
        <div className="col-3 col-6-mobile">
            <article className="item">
                <img src={img} />
                <header>
                    <h3>{h3}</h3>
                </header>
            </article>
        </div>
    );
}