import Nav from './Nav'
import productMatching from '../utils/productMatching.jsx';

export default function Kids({product}){
    console.log(product);

    const kids = product.filter((p)=>p.Category == 'kids');
    const kidsProduct = productMatching(kids);
    console.log(kids);
    return(
        <>
        <Nav />
        <h1 style={{ color: 'brown' }}>KID'S SPECIAL</h1>
        <div className='main-container'>
        {kidsProduct}
        </div>
        </>
    )
}