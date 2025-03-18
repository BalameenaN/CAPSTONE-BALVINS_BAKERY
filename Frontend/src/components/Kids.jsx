import Nav from './Nav'
import productMatching from '../utils/productMatching.jsx';

export default function Kids({product}){
    console.log(product);
    //console.log(typeof dispatch);

    const kids = product.filter((p)=>p.Category == 'kids');
    const kidsProduct = productMatching(kids);
    console.log(kids);
    return(
        <>
        <Nav />
        <h1 style={{ color: 'brown', marginTop : '20px' }}>KID'S SPECIAL</h1>
        <div className='main-container'>
        {kidsProduct}
        </div>
    
        </>
    )
}