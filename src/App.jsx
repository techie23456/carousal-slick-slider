import "./App.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./data";
import { useState ,useEffect} from "react";

export default function App() {

  const[data,setData] = useState([])
   const fetchProduct = async () => {
      
   fetch("https://dummyjson.com/products")
   .then(res=>{
       return res.json()
   })
   .then(final=>{
      
        setData(final.products);
    });
  }

  useState(()=>
  {
    fetchProduct();
  },[]);



  return (
    <div className="App">
      <h1>React multi carousel</h1>
      <Carousel showDots={true} responsive={responsive}>
        { 
          data.map((item) =>
           <Product url={item.images[0]} 
            name={item.title}
            price={item.price}
            description={item.description} />
          
          )
        }
      </Carousel>
    </div>
  );
}
