import '../../src/Styles/App.css';
import Typical from 'react-typical'
const UNavbar = () => {
    return (
        <h1 id="titlecarduser">
        <Typical 
        steps={['User',1000,'Details!',500]}
        loop={Infinity}
        wrapper="p"
        /></h1>
        
    )
};

export default UNavbar;