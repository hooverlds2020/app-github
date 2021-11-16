import React from 'react'
import { Link } from 'react-router-dom'

const FollowersCard = ({userName, image}) => {
    return (
        // <div>
        //     <img src={image} alt={`Pictur of ${userName}`} />
        //     <h4>{userName}</h4>
        //     <Link to={`/users/${userName}`}><button>Ver más</button></Link>
        // </div>
        
        <>        
        {/* <div className=" w-4/12 h-96 mr-1 flex flex-row flex-wrap ">
            <div className="w-full bg-white shadow-lg transform duration-200 easy-in-out">
                <div className=" h-32 overflow-hidden">
                    <img className="w-full" src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />
                </div>
                <div className="flex justify-center px-5  -mt-6">
                    <img className="h-32 w-32 bg-white p-2 rounded-full" src={image} alt={`Pictur of ${userName}`}  />
                </div>
                <div className="text-center">            
                    <h2 className="text-gray-800 text-3xl font-bold capitalize">{userName}</h2> 
                    <hr className="mt-3" />
                    <Link to={`/users/${userName}`}><button className=" mt-3 mb-3 text-base text-gray-400 font-normal">Ver más</button></Link>                      
                </div>
            </div>
        </div> */}

    <div class="w-full">
        <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">        
                <div class="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center">
                    <div class="mb-8">
                        <img class="object-center object-cover rounded-full h-36 w-36" src={image} alt={`Pictur of ${userName}`}/>
                    </div>
                    <div class="text-center">
                        <p class="text-xl text-white font-bold mb-2">{userName}</p>
                        <Link to={`/users/${userName}`}><p class="text-base text-gray-400 font-normal">Ver más</p></Link>
                    </div>
                </div>        
        </section>
    </div>

        
        </>
    )
}

export default FollowersCard





