import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import '../App.css'


const UserById = () => {
    const api = "http://37.27.29.18:8001/api/categories";
    const [data, setData] = useState([]);
    const { id } = useParams()
    async function get() {
        try {
            const { data } = await axios.get(`${api}/${id}`);
            setData(data.data);
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        get()
    }, [])
    return (
        <div className='px-[20px] pt-[100px]'>
            <div className=' bg-gray-200 dark:bg-gray-900 m-auto mt-[100px] transition-all duration-[1s] w-[100%] text-gray-900 dark:text-white py-[50px] rounded-[12px] flex flex-col items-center justify-center gap-[25px]'>
                <b>Номер: {data.id}</b>
                <h1 className='font-bold text-[35px]'>Имя: {data.name}</h1>
            </div>
        </div>
    )
}

export default UserById