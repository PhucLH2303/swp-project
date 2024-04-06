import { data } from './ListOfNhaCap4';
import React from 'react';
import './NhaCap4.css';
import { Link } from 'react-router-dom'

const NhaCap4 = () => {
    return (
        <div className='container'>
            {data.map((Nha4) => (
                <div key={Nha4.id} className="ending-item">
                    <Link to={`/NhaCap4Detail/${Nha4.id}`}>
                        <img className='img-NhaCap4' src={Nha4.image} alt={Nha4.title} />
                        <h3 className="blog-title">{Nha4.title}</h3>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default NhaCap4;