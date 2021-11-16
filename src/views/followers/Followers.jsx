import {useParams} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import Header from '../../layout/Header'
import FollowersCard from '../../components/followersCards/FollowersCard'


const Followers = () => {

    const {name}= useParams()

    const [followersInfo, setFollowersInfo]=useState([])

    useEffect(() => {
        const requestApi = async() =>{
            const urlDir = `https://api.github.com/users/${name}/followers`
            const response = await fetch(urlDir)
            const result = await response.json()
            setFollowersInfo(result)
        }
        requestApi()
    }, [name])

    return (
        <div>
            <Header />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6  bg-gray-800">
                {
                    followersInfo?.map(info =>
                        <FollowersCard 
                            key={info?.id}
                            userName={info?.login}
                            image={info?.avatar_url}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Followers
