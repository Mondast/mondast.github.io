import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { ProjectsData } from '@/utils/config';

export default function Projects() {
    return (
        <div id="projects">
            <div className='mb-6'>
                <h1 className="text-3xl font-bold text-center mt-16 md:mt-64">My Projects</h1>
                <p className="text-lg text-center mt-2 mb-4">You can see the projects I have done below.</p>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mx-auto mb-12 max-w-6xl">
                {ProjectsData.map((item, index) => (
                    <div key={index} className="bg-gray-200/90 rounded-lg  overflow-hidden shadow-lg px-2 mx-6 sm:mx-0">
                        <div className='flex flex-col items-center mx-2 mt-2'>
                            <img src={item.image} alt={item.name} className="h-auto rounded-lg" />
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold text-center">{item.name}</h2>
                            <p className="text-center mb-4">{item.description}</p>
                            <div className="flex justify-center">
                                <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-700 font-semibold py-2 px-4 rounded-full">
                                    <FaExternalLinkAlt className="mr-2" /> {item.url}
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
