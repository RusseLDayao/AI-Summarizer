import { landLogo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center
    items-center flex-col'>
      <nav className='flex justify-between  
      items-center flex-col'>
          <img src={ landLogo }/>
      </nav>
    </header>
  )
}

export default Hero