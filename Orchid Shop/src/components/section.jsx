
function Section(props) {
    return (
        <section>
            <h3>{props.title}</h3>

            <div>
                <p>
                    {props.text1}
                </p>

                <p>
                    {props.text2}
                </p>
            </div>
        </section>
    );
}

export default Section