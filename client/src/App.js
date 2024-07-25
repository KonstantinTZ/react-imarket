import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import NavBar from './components/NavBar';
import { observer } from 'mobx-react-lite'
import { useContext, useEffect, useState } from 'react';
import { Context } from './index'
import { check } from './http/userAPI'
import { Spinner } from 'react-bootstrap';

const App = observer(() => {
  const { user } = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // setTimeout - для эмитации долго запроса
    setTimeout(() => {

      check().then(data => {
        user.setIsAuth(true)
        user.setUser(true)
      }).finally(() => setLoading(false))
    }, 1000)
  }, [])

  return (

    <BrowserRouter>


      {
        loading
          ?
          <div className='container d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
            <Spinner />
          </div>
          :
          <>
            <NavBar />
            <AppRouter />
          </>
      }




    </BrowserRouter>

  );
})

export default App;
