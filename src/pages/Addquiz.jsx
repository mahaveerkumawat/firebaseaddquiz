import React, { useContext } from 'react';
import { getDatabase, ref, set } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';
import { context } from '../MainContex';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Addquiz = () => {
    const navigator = useNavigate()
    const {user} = useContext(context)
   
    useEffect(
        ()=>{
            if(user == null){
                navigator('/login')
            }
        },
        [user]
    )
    const formdata = (e) => {
        e.preventDefault()
        const db = getDatabase();
        const quizdata = {
            question: e.target.question.value,
            optionA: e.target.optionA.value,
            optionB: e.target.optionB.value,
            optionC: e.target.optionC.value,
            optionD: e.target.optionD.value,
            correctoption: e.target.correct_option.value

        }
        const uniqueid = uuidv4();
        console.log(uniqueid)
        set(ref(db, 'quizes/' + uniqueid),
            quizdata
        );
        e.target.reset()


    }
    return (
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full">
            <h1 className="text-2xl font-bold mb-6">Add Quiz</h1>
            <form onSubmit={formdata}>
                <label htmlFor="question" className="block text-gray-700 mb-2">
                    Question:
                </label>
                <input
                    type="text"
                    name="question"
                    placeholder="Enter your question here..."
                    className="border border-gray-300 rounded-md p-2 w-full mb-4"
                />
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Options:</label>
                    <div className="flex items-center mb-2">
                        <input type="radio" name="correct_option" value="A" className="mr-2" />
                        <input
                            type="text"
                            name='optionA'
                            placeholder="Option A"
                            className="border border-gray-300 rounded-md p-2 w-full"
                        />
                    </div>
                    <div className="flex items-center mb-2">
                        <input type="radio" name="correct_option" value="B" className="mr-2" />
                        <input
                            type="text"
                            name='optionB'
                            placeholder="Option B"
                            className="border border-gray-300 rounded-md p-2 w-full"
                        />
                    </div>
                    <div className="flex items-center mb-2">
                        <input type="radio" name="correct_option" value="C" className="mr-2" />
                        <input
                            type="text"
                            name='optionC'
                            placeholder="Option C"
                            className="border border-gray-300 rounded-md p-2 w-full"
                        />
                    </div>
                    <div className="flex items-center mb-2">
                        <input type="radio" name="correct_option" value="D" className="mr-2" />
                        <input
                            type="text"
                            name='optionD'
                            placeholder="Option D"
                            className="border border-gray-300 rounded-md p-2 w-full"
                        />
                    </div>
                </div>
                <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-md">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Addquiz;
