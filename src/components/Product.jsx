import { useEffect, useState } from "react"
import './product.css'
import pro from './pro.png'

export default function Product() {

    const [product, setProduct] = useState([]);
    const [scroll, setScroll] = useState(0);

    async function fetchProduct() {
        let data = await fetch(`https://dummyjson.com/products?limit=10&skip=${scroll == 0 ? 0 : 10}`)
        let res = await data.json();
        setProduct((prev) => [...prev, ...res.products]);
    }
    console.log(product)

    useEffect(() => {
        fetchProduct();
    }, [scroll])





    return (<body>

        {
            product.map((item, index) => {

                return (<>




                    <div className="container">
                        <img className="img" src={item.images} alt="prod" />
                        <h3>{item.title}</h3>
                    </div>




                </>);

            })



        }
        <button onClick={() => setScroll(scroll + 1)} className="btn">see more</button>
























    </body>)

}