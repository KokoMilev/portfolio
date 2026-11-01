
const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
        <div className="flex gap-3">
            
            <a href="https://github.com/KokoMilev" target="_blank" rel="noopener noreferrer">
            <div className="social-icon">
                <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
            </div>
            </a>
            <a href="https://www.linkedin.com/in/kaloyan-milev/" target="_blank" rel="noopener noreferrer">
            <div className="social-icon">
                <img src="/assets/linkedinLogo.png" alt="linkedin" className="w-1/2 h-1/2" />
            </div>
            </a>
        </div>

        <p className='text-white-600'>© {new Date().getFullYear()} Kaloyan Milev. All rights reserved.</p>
    </footer>
  )
}

export default Footer