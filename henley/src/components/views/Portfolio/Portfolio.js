import React from 'react'
import {portfolioItems} from './portfilioItems'


const portfolioItem = ({title, type, image, link}) => (
    <div>
        <div>{title}</div>
        <div>
            {
                type.map((pType, index) => (
                    <div key={index}>{pType}</div>
                ))
            }
        </div>
        <div>{image}</div>
        <a href={link} target='_blank'> View </a>
    </div>
)

const Portfolio = () => (
    <div className='global__page__padding'>
        <div>Portfolio</div>
        {
            portfolioItems.map((item, index) => (
                <div key={index}>
                    {portfolioItem(item)}
                </div>
            ))
        }
    </div>
);
export default Portfolio