import React from 'react';
import { FaDiscord, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="text-black py-4">
            <div className="container flex justify-between items-center">
                <div className="text-center ml-2">
                    <p>Copyright &copy; 2024</p>
                </div>
                <div className="flex space-x-2">
                    <button className="bg-gray-300/50 hover:bg-gray-400/50 font-medium text-white py-2 px-2 items-center rounded-full">
                        <FaDiscord className="fill-gray-600" />
                    </button>
                    <button className="bg-gray-300/50 hover:bg-gray-400/50 font-medium text-white py-2 px-2 items-center rounded-full">
                        <FaYoutube className="fill-gray-600" />
                    </button>
                </div>
                <div className="text-center mr-2">
                    <p>Developed by <span className='text-blue-500'>Fr3zy</span></p>
                </div>

            </div>
        </footer>
    );
}
