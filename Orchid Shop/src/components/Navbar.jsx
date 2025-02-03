import { Link } from 'react-router-dom';

function Navbar() {
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <nav>
            <Link to="/" style={{ marginRight: '10px' }} onClick={() => scrollToSection()}>Home</Link>
            <Link to="/dashboard" style={{ marginRight: '10px' }}>Dashboard</Link>
            <Link to="/introduction">intro</Link>
            <Link to="/login">login</Link>
            <Link to="/Register">login</Link>
        </nav>
    );
}

export default Navbar;