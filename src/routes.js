// import ComicDetails from "./components/NftShop/ComicSliders/ComicDetails";
import ComicSliderDetails from "./components/NftShop/ComicSliders/ComicSliderDetails";
// import FullPageImageGallery from "./components/NftShop/ComicSliders/FullPageImageGallery";
import Details from "./pages/Details";
import Gallery from "./pages/Gallery";
import LandingPage from "./pages/LandingPage";
import News from "./pages/News"
import NewsDetail from "./pages/NewsDetail"
import NewsGameUpdates from "./pages/NewsGameUpdates";
import NFTShop from "./pages/NFTShop";

const routes = [
    {
        path: "/",
        component: <LandingPage/>
    },
    {
        path: "/gallery",
        component: <Gallery/>
    },
    {
        path:"/gallery/detailpage",
        component:<Details/>
    },
    {
        path: "/news",
        component: <News/>
    },
    {
        path: "/news/:id",
        component: <NewsDetail/>
    },
    {
        path: "/news/game-updates/:id",
        component: <NewsGameUpdates/>
    },
    {
        path: "/nftshop",
        component: <NFTShop />
    },
    {
        path: "/comic/:comicName",
        component: <ComicSliderDetails />
    },
    // {
    //     path: "/fullPageGallery/:comicName",
    //     component: <FullPageImageGallery />
    // }

]

export default routes