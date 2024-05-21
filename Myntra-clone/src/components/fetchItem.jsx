import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { itemAction } from "../Store/itemsSlice";
import { LoaderActions } from "../Store/FetchLoader";
const FetchItem = ()=>{
  const  fetchData= useSelector(store =>store.fetchLoader)
  const  dispatch = useDispatch()
  useEffect(()=>{
  
if(fetchData.fetchDone) return;
const controller = new AbortController();
const signal = controller.signal;
fetch("http://localhost:8080/items",{signal}).then((res) =>res.json()).then(({items})=>{
dispatch(itemAction.addInitialItems(items[0]))})
return ()=>{
  controller.abort();
}
  },[fetchData])
  return(
    <>
    </>
  )
}
export default FetchItem;