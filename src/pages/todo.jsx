import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { CheckCircleOutlined } from '@ant-design/icons';
import { CloseCircleOutlined } from '@ant-design/icons';


const Todo = () => {
    const api = "http://37.27.29.18:8001/api/categories";
    const [data, setData] = useState([]);
    const [editName, setEditName] = useState("");
    const [idX, setIdX] = useState(null);
    const [addName, setAddName] = useState("");
    const [addModal, setAddModal] = useState(false);
    const [editModal, setEditModal] = useState(false);
    const [search, setSearch] = useState("");
    const [successDelete, setSuccessDelete] = useState(false);
    const [successEdit, setSuccessEdit] = useState(false);
    const [successAdd, setSuccessAdd] = useState(false);
    const [wrongAdd, setWrongAdd] = useState(false);
    const [wrongEdit, setWrongEdit] = useState(false);

    const showModalAdd = () => {
        setAddModal(true);
    }
    const showModalEdit = (e) => {
        setEditName(e.name)
        setIdX(e.id)
        setEditModal(true)
    }
    async function editUser() {
        const originalUser = data.find((e) => e.id == idX)
        if (editName != originalUser.name) {
            let updatedObj = {
                name: editName,
                id: idX
            }
            try {
                await axios.put(api, updatedObj);
                get();
                setSuccessEdit(true)
                setTimeout(() => {
                    setSuccessEdit(false)
                }, 1500);
            } catch (error) {
                console.error(error);
            }
            setEditModal(false);
        }
        else {
            setWrongEdit(true);
            setTimeout(() => {
                setWrongEdit(false)
            }, 1500);
        }
    }
    async function get() {
        try {
            const { data } = await axios.get(api);
            setData(data.data);
        } catch (error) {
            console.error(error);
        }
    }
    async function delUser(id) {
        try {
            await axios.delete(`${api}?id=${id}`);
            get();
            setSuccessDelete(true);
            setTimeout(() => {
                setSuccessDelete(false)
            }, 1500);
        } catch (error) {
            console.error(error);
        }
    }

    async function addUser() {
        if (addName) {
            let newObj = {
                name: addName
            }
            try {
                await axios.post(api, newObj);
                get();
            } catch (error) {
                console.error(error);
            }
            setAddModal(false);
            setAddName("");
            setSuccessAdd(true)
            setTimeout(() => {
                setSuccessAdd(false);
            }, 1500);
        }
        else {
            setWrongAdd(true);
            setTimeout(() => {
                setWrongAdd(false)
            }, 1500);
        }
    }
    useEffect(() => {
        get()
    }, [])




    return (
        <div className='pt-[20px]'>
            <div className='flex lg:items-center lg:justify-center px-[10px] flex-col lg:flex-row gap-[10px] lg:gap-[10px] rounded-[12px] transition-all lg:px-[10px] duration-500 bg-gray-300 dark:bg-gray-900 w-[90%] lg:w-[28%] m-auto mb-[20px] py-[10px]'>
                <button onClick={() => showModalAdd()} className='bg-blue-500 lg:w-[35%] text-white py-[5px] px-[10px] rounded-[8px]'>Добавить</button>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Поиск..." className="dark:bg-gray-800 bg-gray-200 text-black transition-all duration-[0.5s] dark:text-white lg:w-[80%] rounded-[8px] pl-[10px] p-[6px]" />
            </div>
            {addModal && (
                <div className="fixed inset-0 bg-black/30 backdrop-blur-[5px] flex items-center justify-center z-50 transition-all duration-300">
                    <div className="bg-gray-300 dark:bg-gray-900 p-6 rounded-xl shadow-xl w-[300px] flex flex-col gap-4">
                        <input type="text" value={addName} onChange={(e) => setAddName(e.target.value)} placeholder="Имя..." className="dark:bg-gray-800 bg-gray-200 text-black dark:text-white rounded-[8px] pl-[10px] p-[8px]" />
                        <div className='flex flex-col gap-[5px]'>
                            <button onClick={() => addUser()} className="bg-blue-500 text-white py-[8px] px-[12px] rounded-[8px] hover:bg-blue-600 transition">Сохранить</button>
                            <button onClick={() => setAddModal(false)} className="bg-red-500 text-white py-[8px] px-[12px] rounded-[8px] hover:bg-red-600 transition">Назад</button>
                        </div>
                    </div>
                </div>
            )}
            {editModal && (
                <div className="fixed inset-0 bg-black/30 backdrop-blur-[5px] flex items-center justify-center z-50 transition-all duration-300">
                    <div className="bg-gray-300 dark:bg-gray-900 p-6 rounded-xl shadow-xl w-[300px] flex flex-col gap-4">
                        <input type="text" value={editName} onChange={(e) => setEditName(e.target.value)} placeholder="Name..." className="dark:bg-gray-800 bg-gray-200 text-black dark:text-white rounded-[8px] pl-[10px] p-[8px]" />
                        <div className='flex flex-col gap-[5px]'>
                            <button onClick={() => editUser()} className="bg-blue-500 text-white py-[8px] px-[12px] rounded-[8px] hover:bg-blue-600 transition">Сохранить</button>
                            <button onClick={() => setEditModal(false)} className="bg-red-500 text-white py-[8px] px-[12px] rounded-[8px] hover:bg-red-800 transition">Назад</button>
                        </div>
                    </div>
                </div>
            )}
            {successDelete && (
                <div className="fixed inset-0 bg-black/30 backdrop-blur-[5px] flex items-center justify-center z-50 transition-all duration-300">
                    <div className="bg-gray-300 dark:bg-gray-900 p-6 rounded-xl shadow-xl w-[300px] flex flex-col items-center gap-4">
                        <CheckCircleOutlined style={{ fontSize: '32px', color: '#52c41a' }} />
                        <h1 className="text-green-600 font-bold text-xl">Успешно удалено!</h1>
                    </div>
                </div>
            )}
            {successEdit && (
                <div className="fixed inset-0 bg-black/30 backdrop-blur-[5px] flex items-center justify-center z-50 transition-all duration-300">
                    <div className="bg-gray-300 dark:bg-gray-900 p-6 rounded-xl shadow-xl w-[300px] flex flex-col items-center gap-4">
                        <CheckCircleOutlined style={{ fontSize: '32px', color: '#52c41a' }} />
                        <h1 className="text-green-600 font-bold text-xl">Успешно изменено!</h1>
                    </div>
                </div>
            )}
            {successAdd && (
                <div className="fixed inset-0 bg-black/30 backdrop-blur-[5px] flex items-center justify-center z-50 transition-all duration-300">
                    <div className="bg-gray-300 dark:bg-gray-900 p-6 rounded-xl shadow-xl w-[300px] flex flex-col items-center gap-4">
                        <CheckCircleOutlined style={{ fontSize: '32px', color: '#52c41a' }} />
                        <h1 className="text-green-600 font-bold text-xl">Успешно добавлено!</h1>
                    </div>
                </div>
            )}
            {wrongAdd && (
                <div className="fixed inset-0 bg-black/30 backdrop-blur-[5px] flex items-center justify-center z-50 transition-all duration-300">
                    <div className="bg-gray-300 dark:bg-gray-900 p-6 rounded-xl shadow-xl w-[300px] flex flex-col items-center gap-4">
                        <CloseCircleOutlined style={{ fontSize: '32px', color: '#ff4d4f' }} />
                        <h1 className="text-red-600 font-bold text-xl">Заполните поле!</h1>
                    </div>
                </div>
            )}
            {wrongEdit && (
                <div className="fixed inset-0 bg-black/30 backdrop-blur-[5px] flex items-center justify-center z-50 transition-all duration-300">
                    <div className="bg-gray-300 dark:bg-gray-900 p-6 rounded-xl shadow-xl w-[300px] flex flex-col items-center gap-4">
                        <CloseCircleOutlined style={{ fontSize: '32px', color: '#ff4d4f' }} />
                        <h1 className="text-red-600 font-bold text-xl">Измените имя!</h1>
                    </div>
                </div>
            )}
            <div className='dark:bg-gray-900 bg-gray-300 transition-all duration-500 overflow-auto h-[520px] w-[90%] m-auto flex flex-col gap-[10px] text-gray-950 dark:text-white items-center justify-start text-center py-[30px] px-[15px] rounded-[12px]'>
                <h1 className='font-bold text-[25px]'>Пользователи: {data.length}</h1>
                <div className='dark:bg-gray-900 bg-gray-300 transition-all duration-500 overflow-auto h-[480px] lg:h-[680px] w-[100%] m-auto flex flex-col gap-[10px] text-gray-950 dark:text-white items-center justify-start text-center rounded-[12px]'>
                    {data
                        .filter((e) => e.name.toLowerCase().trim().includes(search.toLowerCase()))
                        .map((e) => {
                            return (
                                <article className='transition-all hover:bg-gray-400 dark:hover:bg-gray-800 duration-[0.5s] bg-gray-200 dark:bg-gray-950 py-[15px] h-[140px] flex flex-col gap-[10px] scroll-auto items-center justify-center w-[100%] rounded-[8px]' key={e.id}>
                                    <b>Номер: {e.id}</b>
                                    <h1 className='font-bold cursor-pointer'>Имя: {e.name}</h1>
                                    <div className='flex items-center gap-[5px]'>
                                        <button className='text-red-500 bg-gray-300 dark:bg-gray-900 text-[10px] py-[5px] px-[10px] rounded-[5px] transition-all duration-[0.3s] font-[500] cursor-pointer dark:hover:bg-gray-950 hover:text-red-950' onClick={() => delUser(e.id)}>Удалить</button>
                                        <button onClick={() => showModalEdit(e)} className='text-orange-500 text-[10px] bg-gray-300 dark:bg-gray-900 py-[5px] px-[10px] rounded-[5px] transition-all duration-[0.3s] font-[500] cursor-pointer dark:hover:bg-gray-950 hover:text-orange-950' >Изменить</button>
                                        <Link to={`/userById/${e.id}`}>
                                            <button className='text-gray-500 bg-gray-300 text-[10px] dark:bg-gray-900 py-[5px] px-[5px] lg:px-[10px] rounded-[5px] transition-all duration-[0.3s] font-[500] cursor-pointer dark:hover:bg-gray-950 hover:text-gray-600'>Информация</button>
                                        </Link>
                                    </div>
                                </article>
                            )
                        })}
                </div>
            </div >
        </div >
    )
}

export default Todo