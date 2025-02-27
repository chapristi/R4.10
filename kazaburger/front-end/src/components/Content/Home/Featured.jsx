import { useRef, useState, useEffect } from "react";
import useFetch from "../../../services/useFecth.js";

function Featured() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const featuredSection = useRef(null);
    const { data, loading, error } = useFetch("http://kazaburger.e-mingo.net/api/featured");

    const nextSlide = () => {
        if (data && data.length > 0) {
            setCurrentIndex((prev) => (prev + 1) % data.length);
        }
    };

    const prevSlide = () => {
        if (data && data.length > 0) {
            setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
        }
    };

    const slideOver = () => setIsPlaying(false);
    const slideStart = () => setIsPlaying(true);

    useEffect(() => {
        if (featuredSection.current && data && data.length > 0) {
            const product = data[currentIndex]?.product;
            const backgroundUrl = product?.pictures?.[0] || "https://via.placeholder.com/1200x600";
            featuredSection.current.style.backgroundImage = `url(${backgroundUrl})`;
            featuredSection.current.style.backgroundSize = "cover";
            featuredSection.current.style.backgroundPosition = "center";
            featuredSection.current.style.backgroundRepeat = "no-repeat";
        }
    }, [currentIndex, data]);

    useEffect(() => {
        if (isPlaying && data && data.length > 0) {
            const interval = setInterval(() => {
                nextSlide();
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [isPlaying, data]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!data || data.length === 0) return <div>Aucun produit en vedette.</div>;

    const product = data[currentIndex]?.product;

    return (
        <section
            ref={featuredSection}
            onMouseEnter={slideOver}
            onMouseLeave={slideStart}
            className="featured"
        >
            <div className="slide">
                <button className="prev" onClick={prevSlide}>&#10094;</button>
                <button className="next" onClick={nextSlide}>&#10095;</button>

                <div className="content">
                    <h1 className="text-white">{product?.title || "Produit inconnu"}</h1>
                    <p className="price">{product?.price ? `${product.price} €` : "Prix inconnu"}</p>
                    <p>
                        <a href="#" className="btn-lg">
                            Commander
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Featured;
