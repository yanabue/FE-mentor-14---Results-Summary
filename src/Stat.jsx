/* eslint-disable react/prop-types */
export default function Stat(props) {
  return (
    <div className={`stat ${props.className}`}>
      <div className="left-stat">
        <img src={props.imgSrc} alt={props.imgAlt}/>
        <h5 className="stat-title">{props.statTitle}</h5>
      </div>
      <div className="score-right">
        <p className="stat-score">{props.statScore}<span className="hundred"> / 100</span></p>
      </div>
    </div>
  );
}
