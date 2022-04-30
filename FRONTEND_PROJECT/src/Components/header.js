import '../../src/Styles/App.css';
import Typical from 'react-typical'
const Navbar = () => {
    return (
        <h1 id="titlecard">
        <Typical 
        steps={['User',1000,'List!',500]}
        loop={Infinity}
        wrapper="p"
        /></h1>
        
    )
};

export default Navbar;