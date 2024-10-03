import React, { useContext, useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from "firebase/database";
import { useNavigate } from 'react-router-dom';
import { context } from '../MainContex';


const Viewquiz = () => {
    const navigator = useNavigate()
    const { user } = useContext(context)

    useEffect(
        () => {
            if (user == null) {
                navigator('/login')
            }
        },
        [user]
    )
    const [quizdata, setquizdata] = useState([])
    const fetchdata = () => {
        const db = getDatabase();
        const starCountRef = ref(db, "quizes");
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();
            console.log(data)
            setquizdata(data)
        });

    }
    const tabledata = []
    for (let key in quizdata) {
        console.log("key", key)
        tabledata.push(
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                    {quizdata[key].question}
                </th>
                <td className={`px-6 py-4  ${quizdata[key].correctoption == 'A' && 'text-green-600'}`}> {quizdata[key].optionA}</td>
                <td className={`px-6 py-4  ${quizdata[key].correctoption == 'B' && 'text-green-600'}`}>{quizdata[key].optionB}</td>
                <td className={`px-6 py-4  ${quizdata[key].correctoption == 'C' && 'text-green-600'}`}>{quizdata[key].optionC}</td>
                <td className={`px-6 py-4  ${quizdata[key].correctoption == 'D' && 'text-green-600'}`}>{quizdata[key].optionD}</td>
            </tr>
        )
    }
    useEffect(
        () => {
            fetchdata()
        },
        []
    )
    return (
        <div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Question
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Option A
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Option B
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Option C
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Option D
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {tabledata}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default Viewquiz;
