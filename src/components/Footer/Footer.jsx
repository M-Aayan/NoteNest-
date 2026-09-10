import logo from '../../assets/NoteNest logo.png'

const Footer = () => {
    return (
        <div>
            <footer className='bg-purple-100'>
                <div className='p-4 flex justify-between gap-5'>
                        <div className='p-5'>
                            <h1 className='font-medium text-2xl mb-3 text-fuchsia-500' >About</h1>
                            <p className='text-[14px] sm:text-[16px]'>NoteNest is a simple note-taking app built to help you capture your thoughts, <br /> ideas, and important notes in a clean and organized way.</p>
                        </div>
                    <img src={logo} alt="" className='h-[90px] w-[120px]'/>
                </div>
                <div className='text-center p-2 bg-purple-300'>
                    <p>© 2026 NoteNest • Built with React & Tailwind CSS.</p>
                    <a href="#"className='hover:text-purple-700' > Built with ♥ Github<i className="ri-github-fill text-2xl ml-3"></i></a>
                </div>
            </footer>
        </div>
    )
}

export default Footer