import Image from 'next/image';
import Link from 'next/link';

import React from 'react';

type Props = {};

const TheHeader = (props: Props) => {
    return (
        <header className="z-50">
            <nav className="bg-indigo-950 text-white p-4 rounded-b-md ">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <Image
                            id="logo"
                            alt="logo"
                            src="https://placehold.co/200x50@3x/png"
                            width="200"
                            height="50"
                            className="mr-4"
                            
                        />
                        <span className="text-xl font-semibold">
                            Your Website
                        </span>
                    </div>
                    <div className="flex items-center">
                        <div className="flex items-center mr-10">
                            <input
                                type="text"
                                placeholder="Search"
                                className="bg-gray-800 text-white rounded-md px-3 py-2 focus:outline-none"
                            />
                        </div>
                        <button className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md">
                            Bookmarks
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default TheHeader;
