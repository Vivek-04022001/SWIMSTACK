import Logo from '../../assets/horizontal_logo.png'
import {BsLinkedin} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <section id="footer" className='bg-gradient-to-t from-black from-5% to-accent to-95%'>
      <footer className='container mx-auto max-w-6xl px-3 py-10 '>
      {/* <!-- footer flex container --> */}
      <div className="flex flex-col items-center mb-8 space-y-6 md:flex-row md:space-y-0 md:justify-between md:items-start">
        {/* <!-- Menu & logo container --> */}

        <div className="flex flex-col items-center space-y-8 md:items-start md:space-y-4">
          {/* <!-- logo container --> */}
          <div className="bg-primary" >
            <img src={Logo} className="w-[120px]"/>
          </div>
          {/* <!-- Menu container --> */}
          <div
            className="flex flex-col items-center space-y-4 font-bold text-white md:flex-row md:space-y-0 md:space-x-6 md:ml-3">

            {/* <!-- Item0  --> */}
            <div className="h-10 group">
              <a href="#home">Home</a>
              <div className="mx-2  group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            {/* <!-- Item1  --> */}
            <div className="h-10 group">
              <a href="#about">About</a>
              <div className="mx-2  group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            {/* <!-- Item2  --> */}
            <div className="h-10 group">
              <a href="#internship">Internships</a>
              <div className="mx-2  group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            {/* <!-- Item3 --> */}
            <div className="h-10 group">
              <a href="#perks">Perks</a>
              <div className="mx-2  group-hover:border-b group-hover:border-blue-50"></div>
            </div>
            {/* <!-- Item4  --> */}
            <div className="h-10 group">
              <a href="#faq">FAQ</a>
              <div className="mx-2  group-hover:border-b group-hover:border-blue-50"></div>
            </div>
           
          </div>
        </div>

        {/* <!-- Social & Copy right container --> */}
        <div className="flex flex-col items-start justify-between space-y-4 text-gray-500">
          {/* <!-- icons container --> */}
          <div className="flex items-center mx-auto justify-center space-x-4 md:justify-end md:mx-0">
            {/* <!-- Icon 1 --> */}
            <div className="h-8 group">
              <a href="https://www.linkedin.com/company/swimstack/" target='_blank'>
                <BsLinkedin className='text-white text-3xl'/>
              </a>
            </div>
            {/* <!-- Icon 2 --> */}
            <div className="h-8 group">
              <a href="www.google.com" target='_blank'>
                <SiGmail className='text-white text-3xl'/>
              </a>
            </div>
          
          </div>

          {/* <!-- copyright --> */}
          <div className="font-bold ">
            &copy; {currentYear} SwimStack. All right Reserved.
          </div>
        </div>
      </div>

      </footer>
    </section>
  )
}

export default Footer