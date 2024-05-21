import { useDispatch, useSelector } from "react-redux";
import { BagActions } from "../Store/bagSlice";
import { MdAddShoppingCart } from "react-icons/md";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
const HomeItem = ({item})=>{
 const BagItem =  useSelector(store=>store.Bag)
 const EleFound = BagItem.indexOf(item.id) >=0;
  const dispatch = useDispatch()
  const HandleOnAdd = ()=>{
    dispatch(BagActions.AddToBag(item.id))
  }
  const HandleOnDelete = ()=>{
dispatch(BagActions.RemoveToBag(item.id))
  }
  return(
    <>
        <div className="item-container">
      <img className="item-image" src={item.image} alt="item image"/>
      <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {EleFound ? <button className="btn-add-bag btn btn-danger " onClick={HandleOnDelete}> <MdOutlineRemoveShoppingCart /> Remove</button> :  <button className="btn-add-bag" onClick={HandleOnAdd} > <MdAddShoppingCart /> 
                   Add to Bag</button>
    }
    </div>
    </>
  )
}
export default HomeItem;