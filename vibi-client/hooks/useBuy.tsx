'use client'
import { useState } from "react"


const useBuy = () => {

    const [city, setCity] = useState('')
    const [district, setDistrict] = useState('')
    const [budget, setBudget] = useState('')
    const [rooms, setRooms] = useState('')



    return {
        city,
        district,
        budget,
        rooms,
        setCity,
        setDistrict,
        setBudget,
        setRooms
    }

}

export default useBuy