import photo1 from '../assets/signup/photo1.png'
import user1 from '../assets/signup/user1.png'
import user2 from '../assets/signup/user2.png'

const Category = () => {
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
            <div className="card bg-white rounded-lg shadow-lg p-4">
                <div className="relative">
                    <img src={photo1} alt="Main Picture" className="w-full rounded-lg" />
                    <div className="absolute bottom-0 left-0">
                        <div className="flex relative">
                            <img src={user1} alt="Small Picture 1" className="w-8 h-8 rounded-full" />
                            <img src={user2} alt="Small Picture 2" className="w-8 h-8 rounded-full absolute bottom-0 left-5" />
                            <img src={user1} alt="Small Picture 3" className="w-8 h-8 rounded-full absolute bottom-0 left-10" />
                        </div>
                    </div>
                </div>
                <div className="card-content">
                    {/* Other card content */}
                </div>
            </div>
        </div>
    );
};

export default Category;

