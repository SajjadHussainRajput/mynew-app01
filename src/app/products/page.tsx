 import Link from "next/link"
import Nav from "../../../component/Nav" 
 export default  function Products(){
    return(
        <div>
          <Nav/>
        <h1>Products 1st Page list Details </h1>
        <ol>

          <li>  <Link href="/products/product"> Product</Link></li>
          <li>  <Link href="/products/product"> Product</Link></li>
          <li>  <Link href="/products/product"> Product</Link></li>
        </ol>
        </div>
    )
}