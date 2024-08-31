import { Link } from "react-router-dom";

export function ItemContainer({ item }) {
    return (
        <Link to={`/item/${item.id}`} className="block p-4 max-w-xs mx-auto bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="flex flex-col items-center">
                <img src={item.image} alt={item.title} className="" />
                <h3 className="text-lg font-semibold mb-2 text-gray-800" >{item.category}</h3>
                <h1 className="text-lg font-semibold mb-2 text-gray-800">{item.title}</h1>
                <p className="text-md text-gray-600">{item.price}</p>
            </div>
        </Link>
    );
}
