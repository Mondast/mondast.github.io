import React from 'react';
import { LanguagesData } from '@/utils/config';

export default function Languages() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-16 md:mt-64">Technologies I Use</h1>
            <p className="text-lg text-center mt-2 mb-4 mx-2">Below you can see the languages and programs I use</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mx-4 mb-12 md:mx-32 lg:mx-64">
                {LanguagesData.map((item, index) => (
                    <div key={index} className="flex items-center bg-gray-200/70 rounded-lg py-2 hover:bg-gray-300/60">
                        {item.iconURL}
                        <p className="text-black ml-4 font-semibold">{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
