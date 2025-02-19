import React, { useContext, useState } from 'react';
import { Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { NavLink, useLocation } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'
import { login, registration } from '../http/userAPI';
import { observer } from 'mobx-react-lite'
import { Context } from '../index'
import { useNavigate } from "react-router-dom"

const Auth = observer((props) => {
    const { user } = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const [errorMsg, setErrorMsg] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password)

            } else {
                data = await registration(email, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        } catch (e) {
            // alert(e.response.data.message)
            setErrorMsg(e.response.data.message)

        }

    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        onBlur={() => setErrorMsg('')}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        onBlur={() => setErrorMsg('')}
                    />
                    <div className="d-flex justify-content-between mt-3 pl-3 pr-3 text-danger">{errorMsg}</div>
                    <div className="d-flex justify-content-between mt-3 pl-3 pr-3">

                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                        }

                        <Button
                            variant={"outline-success"}
                            onClick={() => click()}
                        >
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                    </div>

                </Form>
            </Card>
        </Container>
    )
})
export default Auth;