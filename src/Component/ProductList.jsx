import ProductCart from "./ProductCart"

const products= [
    {id:1,name:"Laptop",price:"8520"},
    {id:2,name:"Phone",price:"820"},
    {id:3,name:"Key",price:"852"},
    {id:4,name:"Laptop",price:"520"},
    {id:5,name:"Apple",price:"520"}


]

export default function ProductList(){
    
    return (
        <div className="row">
       {products.map((p) =>(

        <div key={p.id} className="col-md-3 mb-4">
            <ProductCart  product = {p} />
          </div>
         ))}
        
      </div>
    )
}