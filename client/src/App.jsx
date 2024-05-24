
import {Route, BrowserRouter as Router ,Routes} from 'react-router-dom';
import UserRegister from './components/UserRegister';
import UserTable from './components/UserTable';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<UserRegister/>}/>
        <Route path='/users' element={<UserTable/>}/>
      </Routes>
    </Router>
  )
}

export default App