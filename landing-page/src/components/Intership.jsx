import web from '../assets/web-dev.jpg'
import android from '../assets/android-dev.jpg'
import machine from '../assets/machine-learning.jpg'

const Intership = () => {
  return (
    <section id="internship" className="bg-accent">
      <div className="container max-w-6xl mx-auto px-3 py-10 ">
        <div className="flex flex-col font-about">
          {/* headling */}
          <div className="mb-20 text-4xl md:text-6xl text-center capitalize space-y-8">
            <h3 className="whitespace-nowrap bg-secondary inline-block text-primary px-8 text-center max-w-full py-2 rounded-full border-2 border-secondary hover:bg-transparent text-3xl transition-color duration-150 ease-in-out">
              Internship Opportunities
            </h3>
            <h3 className="text-secondary">Our Offerings</h3>
          </div>

          {/* internship cards */}
          <div className='items-container'>
          {/* item -1  */}
          <div className='group item'>
          {/* images */}
          <img src={web} alt="" className='w-full duration-200 md:block group-hover:scale-110' />
          {/* item gradient */}
          <div className='item-gradient'></div>
          {/* text item */}
          <h5 className='absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black'>Web Development</h5>
          </div>
          {/* item -2  */}
          <div className='group item'>
          {/* images */}
          <img src={android} alt="" className='w-full duration-200 md:block group-hover:scale-110' />
          {/* item gradient */}
          <div className='item-gradient'></div>
          {/* text item */}
          <h5 className='absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black'>Android Development</h5>
          </div>
          {/* item -3  */}
          <div className='group item'>
          {/* images */}
          <img src={machine} alt="" className='w-full duration-200 md:block group-hover:scale-110' />
          {/* item gradient */}
          <div className='item-gradient'></div>
          {/* text item */}
          <h5 className='absolute px-6 duration-200 w-52 bottom-4 md:bottom-8 md:px-10 group-hover:scale-110 group-hover:text-black'>Machine Learning </h5>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intership;
