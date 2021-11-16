import React from 'react'

const ReposCard = ({repoName, owner, repoPrivate}) => {
    const repoLink = `https://github.com/${owner}/${repoName}`
    return (
        <div>
            <div class='mt-3 flex max-w-md w-10/12 bg-white shadow-md rounded-lg overflow-hidden mx-auto'>
                <div class='w-2 bg-gray-800'></div>
                <div class='flex items-center px-2 py-3'>
                    <img class='w-20 h-20 object-cover rounded-full' alt='User avatar' src={`https://avatars.githubusercontent.com/${owner}`}/>
                    <div class='mx-3'>
                        <p class='text-gray-600'>Usuario: {owner}</p>
                        <p class='text-gray-600'>{repoName}</p>
                        <p class='text-gray-600'>Disponible: {repoPrivate?"Private": "Public"}</p>
                        <a href={repoLink} target="_blank" rel="noreferrer" ><p className="mt-2 text-center text-light font-bold border-2 p-2">Más del repositorio</p></a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default ReposCard
