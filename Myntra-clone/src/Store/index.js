import {configureStore} from "@reduxjs/toolkit"
import itemSlice from "./itemsSlice";
import FetchLoaderSlice from "./FetchLoader";
import BagSlice from "./bagSlice";


const MyntraStore = configureStore({
reducer:{
  item:itemSlice.reducer,
  fetchLoader:FetchLoaderSlice.reducer,
  Bag:BagSlice.reducer,
}
})

export default MyntraStore;