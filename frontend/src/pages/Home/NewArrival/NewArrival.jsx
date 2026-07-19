import { newArrival } from "../../../data/newArrivalData";
import NewArrivalCard from "./NewArrivalCard";

export default function NewArrival() {
    return (
        <div className="mt-25 max-w-7xl mx-auto">
            <h2 className="text-[#191919] text-3xl font-semibold">New Arrival</h2>
            <div className="mt-14 flex flex-wrap items-center gap-9">
                {newArrival.map((item) => (
                    <NewArrivalCard
                        key={item.id}
                        image={item.image}
                        title={item.title}
                        path={item.path}
                    />
                ))}
            </div>
        </div>
    );
}
