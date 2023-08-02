import React from 'react';
import ErrorProduct from './ErrorProduct';
import EconomyTime from './EconomyTime';

const AddErrorProduct = () => {
    return (
        <section className='md:w-10/12 w-full md:px-0 px-5 flex md:gap-x-10 gap-x-5'>
            <ErrorProduct />
            <EconomyTime />
        </section>
    );
}

export default AddErrorProduct;
