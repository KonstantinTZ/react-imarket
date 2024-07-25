import React, { useContext } from 'react';
import { Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from '../routes';
import Shop from '../pages/Shop';
import { Context } from '../index';
import { observer } from 'mobx-react-lite'

const AppRouter = observer(() => {
    const { user } = useContext(Context)

    return (
        <>
            <Routes>
                {user.isAuth && authRoutes.map(({ path, component }) => {
                    return <Route key={path} path={path} element={component} exact />
                })}
                {!user.isAuth && publicRoutes.map(({ path, component }) => {
                    return <Route key={path} path={path} element={component} exact />
                })}
                <Route path="*" element={<Shop />} exact />
            </Routes>
        </>
    )
})
export default AppRouter;