import quizLogo from '../assets/quiz-logo.png'
export default function Header() {
    return <header>
        <img src={quizLogo} alt="Logo Quiz" />
        <h1>React Quiz</h1>
    </header>
}