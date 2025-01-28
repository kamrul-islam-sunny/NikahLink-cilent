import { useEffect, useState } from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import useAuth from '../../Hooks/useAuth';
import { IoMdHeart, IoMdHeartEmpty } from 'react-icons/io';

const FavoriteButton = ({data}) => {
    const {user} = useAuth()
     const axiosPublic = useAxiosPublic()
    const [favorite, setFavorite] = useState(false)
      useEffect(()=>{
        axiosPublic.get(`/favorite-status/${data?.bioDataId}/${user?.email}`)
        .then(res => {
            setFavorite(res.data.isFavorite)
        })
      },[data, user , axiosPublic])
    
      const handleFavorite = () => {
        const favoriteData = {
          bioDataId: data.bioDataId,
          email: user?.email,
          PermanentAddress: data.perDivision,
          name: data?.name,
          Occupation: data.occupation
        }
        axiosPublic.post('/favorite-bioData', favoriteData)
        .then(res => {
          // console.log(res.data)
          setFavorite(true)
        })
      }
    return (
        <div>
            <button>
              {
                favorite ? <IoMdHeart className="text-4xl text-rose-600"></IoMdHeart> : <IoMdHeartEmpty onClick={handleFavorite} className="text-4xl text-rose-600"></IoMdHeartEmpty> 
              }
             
            </button>
        </div>
    );
};

export default FavoriteButton;