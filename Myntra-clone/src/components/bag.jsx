import { useSelector } from "react-redux";
import BagSummary from "./BagSummary";
import Bagitem from "./bagitem";

const Bag =()=>{
  const Bag = useSelector(store=>store.Bag)
  const item = useSelector(store=>store.item)
  return(
    <>

    <main>
      <div className="bag-page">
        {item.filter((val)=>{
          const final =Bag.indexOf(val.id)
          return final >=0
        } ).map((item)=>(
          <Bagitem item={item}></Bagitem>
        ))}
  <BagSummary></BagSummary>
        </div>
    </main>
    
    </>
  )
}
export default Bag; 