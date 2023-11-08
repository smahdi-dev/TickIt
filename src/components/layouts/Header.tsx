import headerLogo from '../../assets/png/logo-no-background.png'

const Header = () => {
  return (
    <header className="
        relative 
        top-0 
        left-0 
        right-0
        h-80
        flex
        justify-center
        items-center 
    ">
        <img src={headerLogo} alt="logo"
            width={500} height={300}
            className='
                max-sm:w-80
                max-md:w-96
            '
        />
    </header>
  )
}

export default Header