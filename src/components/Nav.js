import styled from 'styled-components';

const Nav = () => {
    return (
        <StyledNav>
            <h1><a href="#">Capture</a></h1>
            <ul>
                <li><a href="">About us</a></li>
                <li><a href="">Our work</a></li>
                <li><a href="">Contact us</a></li>
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