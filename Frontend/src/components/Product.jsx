import Nav from './Nav'
import productMatching from '../utils/productMatching.jsx';


export default function Product({ product }) {

    //filters product with category 'cake'
    const cake = product.filter((p) => p.Category == 'cake');
    const cakeProduct = productMatching(cake);
    //console.log(cakeProduct);

    //filters product with category 'savoury'
    const savoury = product.filter((p) => p.Category == 'Savoury');
    const savouryProduct = productMatching(savoury);


    return (
        <>
            <Nav />
            <h1 style={{ color: 'brown', marginTop: '20px' }}>CAKES</h1>
            <div className='main-container'>
                {cakeProduct}
            </div>
            <h1 style={{ color: 'brown', marginTop: '20px' }}>SAVOURY</h1>
            <div className='main-container'>
                {savouryProduct}
            </div>
        </>
    )
}