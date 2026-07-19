import Header from "../../components/Header/Header";
import Category from "./Categories/Category";
import HeroBanner from "./HeroBanner";
import NewArrival from "./NewArrival/NewArrival";
import { womenCategories, menCategories } from "../../data/categoryData";

export default function Home() {
    return (
        <>
            <HeroBanner />
            <NewArrival />
            <Category title="Women's Categories" womenCategories={womenCategories} />
            <Category title="Men's Categories" womenCategories={menCategories} />
        </>
    );
}
