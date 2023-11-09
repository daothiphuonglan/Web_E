import React from 'react';
import './BreadCrum.css';
import { AiOutlineArrowRight } from 'react-icons/ai'
const BreadCrum = (props) => {
    const {product}=props;
    return (
        <div className="breadcrum">
            HOME <AiOutlineArrowRight/> SHOP <AiOutlineArrowRight/> {product.category} <AiOutlineArrowRight/> {product.name}
        </div>
    );
};

export default BreadCrum;