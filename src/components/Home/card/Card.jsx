import React from 'react'

import { Link } from 'react-router-dom';
import "./Card.styles.css"



const Card = (props) => {
    const {userName, image, cantidadFollowers, cantidadFollowing, cantidadRepos, bio} = props
    return (

        <>

        <div className="h-96 mt-6 flex flex-wrap items-center justify-center  ">
            <div className="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3 shadow-2xl transform duration-200 easy-in-out">
                <div class=" h-32 overflow-hidden" >
                    <img class="w-full" src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />
                </div>
                <div class="flex justify-center px-5  -mt-6">
                    <img class="h-32 w-32 bg-white p-2 rounded-full" src={image} alt={`Pictur of ${userName}`}  />

                </div>
                <div className="">
                    <div className="text-center px-14">
                        <h2 className="text-gray-800 text-3xl font-bold capitalize">{userName}</h2> 
                                               
                    </div>
                    <div className="text-center px-14 py-4">
                        <h3>{bio}</h3>
                    </div>
                    <hr className="mt-1" />
                    <div className="flex bg-gray-50">
                        <div className="text-center w-1/3 p-4 hover:bg-gray-100 cursor-pointer">
                            <Link to={`/users/${userName}/followers`}>
                                <p>Followers:</p>
                                <p className="font-semibold">{cantidadFollowers}</p>
                            </Link>
                        </div>
                        <div className="border"></div>
                        <div className="text-center w-1/3 p-4 hover:bg-gray-100 cursor-pointer">
                            <Link to={`/users/${userName}/Following`}>
                                <p>  Following: </p>
                                <p className="font-semibold">{cantidadFollowing}</p>
                            </Link>
                        </div>
                        <div className="border"></div>
                        <div className="text-center w-1/3 p-4 hover:bg-gray-100 cursor-pointer">
                            <Link to={`/users/${userName}/repos`}>
                                <p>Repositories:</p> 
                                <p className="font-semibold">{cantidadRepos}</p>
                            </Link>
                        </div>
                    </div>                   
                </div>
            </div>
        </div>

        </>
    )
}

export default Card




