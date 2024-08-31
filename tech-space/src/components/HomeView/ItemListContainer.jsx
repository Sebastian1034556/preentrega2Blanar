import { ItemContainer } from "./ItemContainer"
export function ItemListContainer({itemList}){
    return itemList.map(i => <ItemContainer key={i.id} item={i} />)
}