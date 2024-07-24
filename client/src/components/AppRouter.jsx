import React, { useContext } from 'react';
import { Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from '../routes';
import Shop from '../pages/Shop';
import { Context } from '../index';

const AppRouter = () => {
    const { user } = useContext(Context)
    return (
        <>
            {
                user.isAuth
                    ?
                    <Routes>
                        {
                            authRoutes.map(({ path, component }) =>
                                <Route key={path} path={path} element={component} />
                            )
                        }

                        <Route path="*" element={<Shop />} />

                    </Routes>
                    :
                    <Routes>
                        {
                            publicRoutes.map(({ path, component }) =>
                                <Route key={path} path={path} element={component} />
                            )
                        }

                        <Route path="*" element={<Shop />} />

                    </Routes>
            }
        </>
    )
}
export default AppRouter;