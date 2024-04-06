import { useParams } from 'react-router-dom'
import { data } from './ListOfNhaCap4';
import React from 'react';
import './NhaCap4.css'


const NhaCap4Detail = () => {
    const { id } = useParams();
    const Nha4 = data.find(Nha4 => Nha4.id === id);

    return (
        <div className='detail-info'>
            <img className='img-NhaCap4Detail' src={Nha4.image} alt={Nha4.name} />
            <p className='title'><strong>Title</strong>: {Nha4.title}</p>
            <p className='info'><strong>Information</strong>: {Nha4.info}</p>
        </div>
    );
}
export default NhaCap4Detail;