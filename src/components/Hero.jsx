import { landLogo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center
    items-center flex-col'>
      <nav className='flex justify-between  
      items-center w-full mb-10 pt-1'>
          <img src={ landLogo } alt='Sumrizzo'
          className='w-28 object-contain'/>
          <button type='button'
                onClick={() => window.open ('https://github.com/RusseLDayao/AI-Summarizer')}
                className='black_btn'>
                  GitHub
      </button>
      </nav>
      <h1 className='head_text'>
        Summarize Article with <br className='max-md:hidden'/>
        <span className='orange_gradient'>
          Open-AI GPT-4
        </span>
      </h1>
      <h2 className='desc'>
      Streamlining open source insights by delivering clear
       and concise article summaries for
        efficient knowledge absorption.
      </h2>
    </header>
  )
}

export default Hero