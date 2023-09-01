import React from 'react';
import Container from '../Shared/Container';
import { categories } from './categoriesData';
import CategoriyBox from './CategoriyBox';
const Categories = () => {
    return (
        <div>
           <Container>
             <div className='flex items-center justify-between overflow-x-auto pt-4'>
                {
                    categories.map(item => (
                       <CategoriyBox label={item.label} icon={item.icon} key={item.label} />
                    ))
                }
             </div>
           </Container>
        </div>
    );
};

export default Categories;