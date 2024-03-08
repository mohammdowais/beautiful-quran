import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProgressDemo from '../Loaders/Progress'
import Menubar from '../Menubar/Menubar'

const Ayah = () => {
    const [ayah,setAyah] = useState("")
    const [loading,setLoading] = useState(false)

    useEffect(()=>{
        fetchData()
    },[])

    async function fetchData(){
        try {
        setLoading(true)
        const url='http://api.alquran.cloud/v1/ayah/1:2/quran-uthmani'
        // const url = 'http://api.alquran.cloud/v1/surah/114'
        const response = await axios.get(url)
        if(response?.data){
            console.log(response.data.data)
            setAyah(response.data.data)
        }
        } catch (error) {
            console.log(error)
        } finally{
            setLoading(false)
        }
    }

  if(loading){
    return <ProgressDemo/>
  }
  return (
   <div className="flex flex-col justify-center items-center">
        <Menubar/>
        <div className="text-darkText text-[3rem] font-[Amiri-Bold]">
            {ayah.text}
        </div>
   </div> 
  )
}

export default Ayah