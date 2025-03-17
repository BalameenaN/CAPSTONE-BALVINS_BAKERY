import Nav from './Nav'
import productMatching from '../utils/productMatching.jsx';

export default function Icecream({product}){
    console.log(product);

    const Ic = product.filter((p)=>p.Category == 'ice cream');
    const IcProduct = productMatching(Ic);
    console.log(IcProduct);
    return(
        <>
        <Nav />
        <h1 style={{ color: 'brown', marginTop : '20px' }}>Ice cream</h1>
        <div className='main-container'>
        {IcProduct}
        </div>
       
        </>
    )
}