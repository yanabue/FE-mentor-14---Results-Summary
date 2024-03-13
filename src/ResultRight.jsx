import Stat from './Stat'
import Data from './data.json'

export default function ResultRight(){
    return (
    <section className="right-result">
        <h3 className="summary">Summary</h3>
        <div className="stats">
            <Stat 
            imgSrc={Data[0].icon}
            imgAlt={Data[0].alt}
            className="reaction-stat"
            statTitle={Data[0].category}
            statScore={Data[0].score}
            />
            <Stat 
            imgSrc={Data[1].icon}
            imgAlt={Data[1].alt}
            className="memory-stat"
            statTitle={Data[1].category}
            statScore={Data[1].score}
            />
            <Stat 
            imgSrc={Data[2].icon}
            imgAlt={Data[2].alt}
            className="verbal-stat"
            statTitle={Data[2].category}
            statScore={Data[2].score}
            />
            <Stat 
            imgSrc={Data[3].icon}
            imgAlt={Data[3].alt}
            className="visual-stat"
            statTitle={Data[3].category}
            statScore={Data[3].score}
            />
        </div>
        <button className="continue-btn">
            Continue
        </button>
    </section>
    )
}
