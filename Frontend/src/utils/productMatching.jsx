 //function to create JSX element for each product
 export default function productMatching(prod){
    const result = prod.map((p)=>{
        return(
            <>
            <div className='product-container'>
            <img src={p.Image_URL}/>
           <h3>{p.Name}</h3>
            <h5>Price: ${p.Price}</h5>
            <h5>Rating: {p.Rating}</h5>
            <button className='product-btn'>Add to cart</button>
            </div>
            </>
        ) 
        
    })
    return result;
}