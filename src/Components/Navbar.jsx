import { FaDiscord, FaYoutube } from "react-icons/fa";
export default function Navbar() {
    return (
        <div className="top-0 mt-12 left-0 w-full z-50 backdrop-blur-lg bg-opacity-80">
            <div className="mx-auto max-w-7xl px-6 sm:px-6 lg:px-8 ">
                <div className="relative flex h-16 justify-between">
                    <div className="flex flex-1 items-stretch justify-start">
                        <a className="flex flex-shrink-0 items-center" href="#">
                            <img
                                className="block h-12 w-auto rounded-full ring ring-red-500"
                                src="https://cdn.discordapp.com/avatars/1155137511954337887/a_c8b2bebaaa5b801cf13575231d729776.gif?size=1024"
                            />
                            <div className="flex ml-6 justify-center items-center flex-col sm:flex-row">
                                <div className="flex items-center sm:mb-0 mb-2">
                                    <p className="text-lg font-semibold">Fr3zy ·</p>
                                    <p className="ml-2 text-blue-300">Full-Stack Developer</p>
                                </div>
                                <p className="ml-6 text-black/500 bg-gray-200 px-6 rounded-md hover:bg-gray-200/70 sm:ml-0">v1.0</p>
                            </div>
                        </a>
                    </div>
                    <div className="flex-shrink-0 px-2 py-3 items-center space-x-4 hidden sm:flex">
                        <button className="bg-gray-300/50 hover:bg-gray-400/50 font-medium text-white py-2 px-2 items-center rounded-full">
                            <FaDiscord className="fill-gray-600" />
                        </button>
                        <button className="bg-gray-300/50 hover:bg-gray-400/50 font-medium text-white py-2 px-2 items-center rounded-full">
                            <FaYoutube className="fill-gray-600" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
