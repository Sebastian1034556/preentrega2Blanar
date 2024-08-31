import { useParams } from "react-router-dom"
export function ItemDetail({itemList}){
    const {itemId} = useParams()
    const item = itemList.find(i => i.id == itemId)
    return (
        <div className=" flex flex-col justify-between items-center">
            <img src={item.image} alt={item.title} className="" />
            <h1 className="text-xl font-bold">{item.title}</h1>
            <p className="text-sm text-gray-500">{item.price}</p>
        </div>
    )
}

