

export default function ResultLeft(){
    return (
        <section className="left-result">
            <h4 className="left-title">Your Result</h4>
            <div className="result-circle">
                <h1 className="final-grade">76</h1>
                <p className="out-of">of 100</p>
            </div>
            <div className="left-description">
                <h3 className="grade-attribute">Great</h3>
                <p className="scored-higher">
                    You scored higher than 65% of the people 
                    who have taken these tests.
                </p>
            </div>
        </section>
    )
}