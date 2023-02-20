import './Product.css'
import data from '../../data/data';

const Product = () => {
    console.log(data);
    return (
        <div className='list_of_products'>
            {
                data.map((item, index) => (
                    <div key={index} className='one_product'>
                        <h4 className='item_title'>{item.name}</h4>
                        <img src={item.imageUrl} alt="product photo" />
                        <p className='item_description'>{item.description}</p>
                        <p className='item_price'>Price : {item.price}$</p>
                    </div>
                ))
            }
        </div>
    )
}
export default Product