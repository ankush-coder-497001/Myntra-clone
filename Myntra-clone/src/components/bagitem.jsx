import { useDispatch, useSelector } from "react-redux";
import { BagActions } from "../Store/bagSlice";
import { AiFillDelete } from "react-icons/ai";

const Bagitem = ({item})=>{
  const dispatch = useDispatch()
  const HandleOnDelete = () => {
    dispatch(BagActions.RemoveToBag(item.id))
  }
  return(
    <>
      <div className="bag-items-container">
      <div className="bag-item-container">
    <div className="item-left-part">
      <img className="bag-item-img" src={item.image}/>
    </div>
    <div className="item-right-part">
      <div className="company">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price-container">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount-percentage">({item.discount_percentage}% OFF)</span>
      </div>
      <div className="return-period">
        <span className="return-period-days">{item.return_period} days</span> return available
      </div>
      <div className="delivery-details">
        Delivery by
        <span className="delivery-details-days">{item.delivery_date}</span>
      </div>
    </div>

    <div className="remove-from-cart" onClick={HandleOnDelete}><AiFillDelete />
</div>
  </div>
          </div>
    </>
  )
}
export default Bagitem;