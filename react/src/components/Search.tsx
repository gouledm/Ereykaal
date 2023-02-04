import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';

const Search = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () =>{
        setNav(!nav)
    }
    return (
        <div className='flex justify-between items-center h-24 max-w[1240px] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold'>EREYKAAL</h1>
            <ul className='flex hidden'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Dictionary</li>
                <li className='p-4'>Search</li>
                <li className='p-4'>Contact</li>
            </ul>
            <div className='fixed right-5 top-0 m-4' onClick={handleNav}>
                {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-400 bg-[#3f8ade] ease-in-out duration-500 hidden' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold m-4'>EREYKAAL</h1>
                <ul className="uppercase p-4">
                    <li className='p-4 border-b border-gray-400'>Home</li>
                    <li className='p-4 border-b border-gray-400'>Dictionary</li>
                    <li className='p-4 border-b border-gray-400'>Search</li>
                    <li className='p-4'>Contact</li>
                </ul>
            </div>
        </div>
    );
}

export default Search;