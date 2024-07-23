import React, { useContext } from 'react';
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { SHOP_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite'

const NavBar = observer((props) => {
    const { user } = useContext(Context)

    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <NavLink activeclassname={"active"} to={SHOP_ROUTE} style={{ color: 'white' }}>Магазин Магнолия</NavLink>
                    {user.isAuth ? <Nav className="ml-auto" style={{ color: 'white', display: 'flex', gap: '10px' }}>
                        <button className='btn btn-light' >Админ панель</button>
                        <button className='btn btn-light' >Войти</button>
                    </Nav>
                        :
                        <Nav className="ml-auto" style={{ color: 'white' }}>
                            <button className='btn btn-light' onClick={() => { user.setIsAuth(true) }} >Авторизация</button>
                        </Nav>
                    }
                </Container>
            </Navbar>

        </>
    )
})
export default NavBar;