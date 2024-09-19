import logo from '../logo.svg'
import { ChevronDownIcon } from '@chakra-ui/icons';

const Navbar =()=>{
   return(
    <div className="fixed z-20 antialiased bg-white backdrop-blur shadow-md bg-opacity-70 w-full">
        <div className="border px-4 py-2 flex justify-center gap-24">
            <div className="sm:mx-16 flex items-center justify-between w-full">
            <div className=" md:p-2  justify-center flex"><img src={logo} alt="Logo"/></div>
            <div className="hidden lg:flex px-6 translate-x-5 gap-8 text-md">
                <div><button className="hover:underline">Catalog</button> <ChevronDownIcon className="-translate-y-0.5 -translate-x-1"/> </div>
                <div><button className="hover:underline">Blogs</button></div>
                <div><button className="hover:underline">Pricing</button></div>
                <div><button className="hover:underline">Services</button> <ChevronDownIcon className="-translate-y-0.5 -translate-x-1"/> </div>
            </div>
            <div>
                
            <button className="mx-5 bg-white rounded text-base font-bold border px-4 py-2 hover:bg-slate-100 transition-all hover:border-black hover:border-opacity-50">Log in</button>
            <button className="bg-lime-300 rounded text-base font-bold border px-4 py-2 hover:bg-lime-200 transition-all hover:border-gray-300">Sign Up</button>
            </div>
            </div>
        </div>
    </div>
   )
}

export default Navbar;
