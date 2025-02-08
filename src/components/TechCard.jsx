export default function TechCard({ img, h3 }) {
    return (
        <div className="col-3">
            <article className="item">
                <img src={img} />
                <header>
                    <h3>{h3}</h3>
                </header>
            </article>
        </div>
    );
}