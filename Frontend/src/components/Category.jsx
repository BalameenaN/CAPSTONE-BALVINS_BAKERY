import cake from '../../image/cake.jpg'
import kids from '../../image/kids.jpg'
import icecream from '../../image/icecream.jpg'
import { Link } from 'react-router-dom'

export default function Category(){
    return(
        <>
        <h1 style={{ color: 'brown', textAlign:'center', marginTop:'30px' }}>Category</h1>
        <div className='category-container'>
        <div className='category-div'>
        <Link to='/product'>
        <img src={cake} /></Link>
        <h4>Cake & savoury</h4>
        </div>
        <div className='category-div'>
        <Link to='/kids'>
        <img src={kids} /></Link>
        <h4>Kid's special</h4>
        </div>
        <div className='category-div'>
        <Link to='/icecream'>
        <img src={icecream} /></Link>
        <h4>Ice creams</h4>
        </div>
        </div>
        
        </>
        

    );
}