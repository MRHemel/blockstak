import photo1 from '../assets/signup/photo1.png'
import photo2 from '../assets/signup/photo2.png'
import photo3 from '../assets/signup/photo3.png'
import user1 from '../assets/signup/user1.png'
import user2 from '../assets/signup/user2.png'

const SignUp = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row w-full">
                <div className="w-1/2 flex ">
                    <div className='p-4 relative'>
                        <img src={photo1} alt="" />
                        <img src={user1} alt="" className='absolute lg:right-0 lg:top-56 md:right-0 md:top-28 sm:right-0 sm:top-20 sm:w-16' />
                        <div className='flex justify-end  mt-8 relative'>
                            <img src={photo2} alt="" />
                            <img src={user2} alt="" className='absolute lg:-right-6 lg:top-40 md:top-28 md:-right-4 
                            sm:top-20 sm:w-16' />
                        </div>
                    </div>
                    <div className='flex items-center p-10 relative'>
                        <img src={photo3} alt="" />
                        <img src={user2} alt="" className='absolute lg:right-6 lg:top-80 md:right-0 md:top-56 sm:top-40 sm:right-4 sm:w-16' />
                    </div>

                </div>
                <div className="w-1/2 space-y-8 flex flex-col items-start">
                    <h1 className="text-4xl font-bold uppercase text-left text-black">Create and <br /> sell your NFTS</h1>
                    <p className="text-left text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Facilisi ac phasellus placerat a pellentesque tellus sed <br /> egestas. Et tristique dictum sit tristique sed non. Lacinia lorem <br /> id consectetur pretium diam ut. Pellentesque eu sit blandit <br /> fringilla risus faucibus.</p>
                    <button className="btn btn-primary bg-[#3D00B7] text-white">Sign Up Now</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;