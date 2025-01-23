
function OtherSection(props) {
    return (
        <section>
            <h2>{props.title}</h2>
            {props.button ? <button>Sign Up</button>:<p className="sectionP">{props.text}</p>}
        </section>
    );
}

export default OtherSection