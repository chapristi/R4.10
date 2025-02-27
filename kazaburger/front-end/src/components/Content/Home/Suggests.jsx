import SuggestItem from "../Suggests/SuggestItem.jsx";
import useFetch from "../../../services/useFecth.js";
import {shuffleArray} from "../../../services/arrayServices.js";

function Suggests() {
    const { data, loading, error } = useFetch("http://kazaburger.e-mingo.net/api/suggest");

    if (loading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const firstThreeItems = shuffleArray(data, 3);
    const genericImage = "src/assets/images/no-image-available.jpeg";

    return (
        <section className="suggests">
            <h2>Nos suggestions</h2>
            <div className="content">
                {firstThreeItems.map((item, i) => (
                    <SuggestItem
                        key={i}
                        image={item.product.pictures[0] || genericImage}
                        imageAlt={item.product.title}
                        price={item.product.price}
                        title={item.product.title}
                        description={item.description}
                    />
                ))}
            </div>
        </section>
    );
}

export default Suggests;
