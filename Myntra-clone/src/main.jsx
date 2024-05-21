import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './router/App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Bag from './components/bag.jsx'
import Home from './router/Home.jsx'
import {Provider} from "react-redux"
import MyntraStore from './Store/index.js'
import "bootstrap/dist/css/bootstrap.min.css"

const router = createBrowserRouter([
  {
path:"/",
element:<App></App>,
children:[
  {
    path:"/bag",
    element:<Bag></Bag>
  },
  {
    path:"/",
    element:<Home></Home>
  },
]
},
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={MyntraStore}>
    <RouterProvider router={router}/>
    </Provider>
  
  </React.StrictMode>,
)
