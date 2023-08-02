import React from 'react';
import {AddErrorProduct, AddProductMain, AllFunction, TopsellerContent} from '../index';

const Main = () => {
    return (
        <main className='bg-black-Background flex flex-col items-center justify-center'>
            <AllFunction />
            <TopsellerContent />
            <AddProductMain />
            <AddErrorProduct />
        </main>
    );
}

export default Main;
