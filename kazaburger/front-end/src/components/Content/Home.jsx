import Featured from "./Home/Featured.jsx";
import KazaNews from "./Home/KazaNews.jsx";
import Testimonies from "./Home/Testimonies.jsx";
import Suggests from "./Home/Suggests.jsx";

function Home(){
    return (
        <>
            <Featured/>
            <Suggests/>
            <KazaNews/>
            <Testimonies/>
        </>
    )
}
export default Home;