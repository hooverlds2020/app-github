import {useNavigate} from 'react-router-dom';

import "./Header.styles.css"

const Header = () => {

    
    const navigate = useNavigate();   


    return (
        <>
        <div className="bg-yellow-300 py-5">
            <h3 className ="text-center text-white font-bold md:text-3xl">Project GitHub</h3>
            
        </div>
        
            <nav className=" w-full p-4 bg-pink-700 text-black hover:bg-red-700">
                <ul className="flex justify-around items-center text-white" >
                    <li  onClick={()=> navigate('/')}><i className="hover:bg-red-700 fas fa-home fa-2x cursor-pointer"></i></li>
                    <li onClick={()=> navigate(- 1)}><i className="fas fa-undo-alt fa-2x cursor-pointer"></i></li>
                    <li onClick={()=> navigate(+ 1)}><i className="fas fa-chevron-right fa-2x cursor-pointer "></i></li>
                </ul>
            </nav>        
       
        </>

    )
}

export default Header
