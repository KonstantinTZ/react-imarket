import React, { useContext } from 'react';
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite'
import { useNavigate } from "react-router-dom"

const NavBar = observer((props) => {
    const { user } = useContext(Context)
    const navigate = useNavigate()
    function handleClick() {
        user.setIsAuth(true)
        navigate(LOGIN_ROUTE)
    }
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <NavLink activeclassname={"active"} to={SHOP_ROUTE} style={{ color: 'white' }}>Магазин Магнолия</NavLink>
                    {user.isAuth ? <Nav className="ml-auto" style={{ color: 'white', display: 'flex', gap: '10px' }}>
                        <button className='btn btn-light'
                            onClick={() => navigate(ADMIN_ROUTE)}
                        >
                            Админ панель
                        </button>
                        <button className='btn btn-light'
                            onClick={() => navigate(LOGIN_ROUTE)}
                        >
                            Выйти</button>
                    </Nav>
                        :
                        <Nav className="ml-auto" style={{ color: 'white' }}>
                            <button className='btn btn-light' onClick={() => handleClick()} >Авторизация</button>
                        </Nav>
                    }
                </Container>
            </Navbar>

        </>
    )
})
export default NavBar;