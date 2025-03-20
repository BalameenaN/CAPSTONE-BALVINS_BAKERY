import Nav from './Nav'
import productMatching from '../utils/productMatching.jsx';

//component to display all the products under icecream category
export default function Icecream({ product }) {
    //console.log(product);

    const Ic = product.filter((p) => p.Category == 'ice cream'); //filtering the products with category 'ice cream'
    const IcProduct = productMatching(Ic);
    console.log(IcProduct);
    return (
        <>
            <Nav />
            <h1 style={{ color: 'brown', marginTop: '20px' }}>Ice cream</h1>
            <div className='main-container'>
                {IcProduct}
            </div>

        </>
    )
}