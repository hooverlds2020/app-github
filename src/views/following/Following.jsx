import React, {useState, useEffect} from 'react'
import { useParams} from 'react-router-dom'
import FollowersCard from "../../components/followersCards/FollowersCard" 
import Header from "../../layout/Header"

const Following = () => {
    const {name} = useParams()
    const [followingData, setFollowingData] = useState([])

    useEffect(() => {
        const requestApi = async() =>{
            const urlDir = `https://api.github.com/users/${name}/following`
            const response = await fetch(urlDir)
            const result = await response.json()
            setFollowingData(result)
        }
        requestApi()
    }, [name])

    return (
        <div>
            <Header />
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6  bg-gray-800">
                {
                    followingData?.map(data =>
                        <FollowersCard 
                        key={data?.id}
                        userName={data?.login}
                        image={data?.avatar_url}

                        />
                    )
                }
            </div>

        </div>
    )
}

export default Following
