import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ReposCard from '../../components/reposcard/ReposCard'
import Header from "../../layout/Header"

const Repositories = () => {

    const {name}= useParams()

    const [reposData, setReposData]= useState([])

    useEffect(() => {
        const requestApi = async() =>{
            const urlDir = `https://api.github.com/users/${name}/repos`
            const response = await fetch(urlDir)
            const result = await response.json()
            setReposData(result)
        }
        requestApi()
    }, [name])

    return (
        <div>
            <Header />
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-800">
                {
                    reposData?.map(data =>
                        <ReposCard 
                            repoName={data.name}
                            owner={name}
                            repoPrivate={data.private}
                            
                        />
                    )
                }
            </div>
        </div>
    )

}

export default Repositories
