import { useSelector } from "react-redux";

const BagSummary = ()=>{
  const Bag = useSelector(st=>st.Bag)
  const item = useSelector(store=>store.item)
 const con = 99
    const totalItem =Bag.length
    let totalMRP =0
    let totalDiscount =0
   
const Bagitem = item.filter((item)=>{
  const final = Bag.indexOf(item.id)
  return final>=0;
})
Bagitem.forEach((element) => {
  totalMRP+=element.original_price
  totalDiscount+=element.original_price-element.current_price
});
const finalPayment =totalMRP-totalDiscount+con;
  return(
    <>
     <div className="bag-summary">
      <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹{con}</span>
    </div>
    <hr/>
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{finalPayment}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>
  </div>
    </>
  )
}
export default BagSummary;