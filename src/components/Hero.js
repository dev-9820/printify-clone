import  videopg from '../hero-vertical.mp4'
import  video2 from '../hero-vertical-compact.mp4'
const Hero =() =>{
    return(
        <div className=" antialiased flex justify-center translate-y-16  w-full">

            <div className="flex-col justify-center text-black mx-2 md:w-3/4 max-w-7xl">
                <div className=" justify-center mb-8 mt-16  align-middle flex flex-col self-center  items-center">
                    <div className="text-black text-center">
                        <h1 className="font-extrabold text-4xl sm:text-6xl md:text-7xl"> CREATE AND SELL <br/> CUSTOM PRODUCTS </h1>
                    </div>
                    <div className=" text-black font-normal mt-5 w-full flex justify-center">
                        <h1 className="mx-5">✔ 100% Free To Use</h1>
                        <h1 className="mx-5">✔ 900+ Products </h1>
                        <h1 className="mx-5">✔ Global Delivery</h1>
                    </div>


                </div>
                <div className="flex justify-center">
                    <button
                        className="bg-lime-300 rounded-md text-lg w-full sm:w-2/5 font-medium border px-6 py-4 hover:bg-lime-200 transition-all hover:border-gray-300">Get
                        Started for Free
                    </button>
                </div>
                <div className="flex mt-5 justify-center">
                <video className="sm:hidden" loop autoPlay> <source src={video2} type='video/mp4' /> </video>
                <video className="hidden sm:block" loop autoPlay> <source src={videopg} type='video/mp4' /> </video>
                
                </div>
                <div className="text-center mt-2 font-bold">Trusted by 10M+ sellers</div>
                </div>
        </div>
    )
}

export default Hero;