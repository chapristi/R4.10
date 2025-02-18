function Rating(props) {
    const stars = [];

    const max = 5;

    for (let i = 0; i < max ; i++) {
        stars.push(
            <i
                key={i}
                className={`fa-solid fa-star ${i < props.rating ? "text-amber-300" : ""}`}

            ></i>
        );
    }

    return <>{stars}</>;
}

export default Rating;
