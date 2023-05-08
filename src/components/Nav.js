import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <StyledNav>
            <h1><a href="#">Capture</a></h1>
            <ul>
                <li><Link to="/">About us</Link></li>
                <li><Link to="/our-work">Our work</Link></li>
                <li><Link to="/contact-us">Contact us</Link></li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;

    h1 {
        a {
            font-size: 1.5rem;
            font-family: 'lobster', sans-serif;
            font-weight: lighter;
        }
    }
    
    a {
        color: white;
        text-decoration: none;

    }

    ul {
        display: flex;
        list-style: none;
    }

    li {
        padding-left: 10rem;
        position: relative;
    }
`;

export default Nav;