import Testimony from "../Testimonies/Testimony.jsx";
import useFetch from "../../../services/useFecth.js";
import {shuffleArray} from "../../../services/arrayServices.js";

function Testimonies(){

    const { data, loading, error } = useFetch("http://kazaburger.e-mingo.net/api/testimony");

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const firstFourItems = shuffleArray(data, 4);
    const profilePicture = "https://i.pravatar.cc/150?img=";

    return(
        <section className="testimony">
            <h2>Nos clients témoignent</h2>
            <div className="content">
                {firstFourItems.map((item,i)=>
                    <Testimony
                        key={i}
                        image={profilePicture+i+1}
                        name={item.user}
                        rating={item.rating}
                        review={item.review}
                    />
                )  }
            </div>
        </section>
    )
}

export default Testimonies;