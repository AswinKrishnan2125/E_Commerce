import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebase'; // Update with your Firebase configuration
import { MDBBtn } from 'mdb-react-ui-kit';
// import './ProductDetail.css'; // Import custom CSS for styling
import Footer from '../footer/Footer';
import './ProductDetails.css'
import Navbar from '../navbar/Navbar';

function ProductDetails() {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const navigate=useNavigate();
    const handleClick = () => {
        setIsAddedToCart(true);
    }
    const toCart = () => {
        navigate(`/cart/${productId}`);
    }

    useEffect(() => {
        const fetchProduct = async () => {
            const productDoc = await getDoc(doc(db, 'Smartphones', productId));
            if (productDoc.exists()) {
                setProduct(productDoc.data());
            } else {
                console.error('No such document!');
            }
        };

        fetchProduct();
    }, [productId]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="product-detail">
            <Navbar />
            <div className="hero">

            <img src={product.image} alt={product.Name} className="product-image" />
            <div className="product-info">
                <h3>{product.Name}</h3>
                {/* <p>{product.description}</p> */}
                <p>Price: ${product.price}</p>
                <p> {product.ram}</p>
                <p>{product.cam}</p>
                <p>{product.bat}</p>
                
                <MDBBtn color="primary" onClick={handleClick} disabled={isAddedToCart}>
                        {isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
                    </MDBBtn><MDBBtn color="success" onClick={toCart}>Buy Now</MDBBtn>
            </div>
            </div>
            <Footer />
        </div>
        
    );
}

export default ProductDetails;
