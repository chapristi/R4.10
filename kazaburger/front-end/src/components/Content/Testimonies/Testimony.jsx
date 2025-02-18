import Rating from "./Rating.jsx";

function Testimony(props){
return(
    <div>
        <img src={props.image} />
        <h3>{props.name}</h3>
        <span>
            <Rating rating={props.rating}/>
        </span>
        <div>
            {props.description}
        </div>
    </div>
)
}

export default Testimony;