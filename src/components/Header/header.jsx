import logo from '../../assets/NoteNest logo.png'

const Header = () => {
  return (
    <div>
        <nav className='bg-purple-100 flex justify-between py-2 items-center'>
            <img src={logo} alt="NoteNest Logo" height={60} width={130} className='sm:ml-10 hover:scale-95 cursor-pointer '/>
            <ul className='flex gap-2 sm:gap-10 p-2 sm:p-4 font-medium text-[16px]  sm:mr-20'>
                <li><a href="#" className=' hover:text-purple-500 '>Home</a></li>
                <li><a href="#" className=' hover:text-purple-500 '>About</a></li>
                <li><a href="#" className=' hover:text-purple-500 '>Github</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header