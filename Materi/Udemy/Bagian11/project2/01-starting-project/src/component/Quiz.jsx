import { useCallback, useState } from 'react';
import question from '../data/question';

import completeImg from '../assets/quiz-complete.png';
import QuestionTimer from './QuestionTimer';
export default function Quiz() {
    const [userAnswer, setUserAnswer] = useState([]);
    const activeQuestionIndex = userAnswer.length;
    const quisIsComplete = activeQuestionIndex === question.length;

    if (quisIsComplete) {
        return <div id='summary'>
            <img src={completeImg} alt="" />
            <h2>Quiz Complete</h2>
        </div>

    }

    const shuffledAnswer = [...question[activeQuestionIndex].answers];
    shuffledAnswer.sort(() => Math.random() - 0.5);

    function handleSelectAnswer(selectedAnswer) {
        setUserAnswer((prev) => [...prev, selectedAnswer]);
    }

    return <div id="quiz">
        <div id='question'>
            {console.log("userAnswer: " + userAnswer)}
            <QuestionTimer timeout={1000} onTimeOut={() => handleSelectAnswer(null)} />
            <h2>{question[activeQuestionIndex].text}</h2>
            <ul id='answers'>
                {shuffledAnswer.map(answer =>
                    <li key={answer} className='answer'>
                        <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
                    </li>
                )}
            </ul>
        </div>
    </div>
}