import logo from '../assets/Images/logo.png'
export default function Header() {
    return (
        <header className="header">
            <img 
                src={logo}
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
        </header>
    )
}