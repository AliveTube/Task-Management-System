import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutUs from './components/About Us/AboutUs'
import Landing from './components/Landing/Landing'
import Error from './components/Error/Error'
import RegisterPage from './components/RegisterPage/RegisterPage.jsx'
import Login from './components/Login/Login.jsx'
import Home from './components/Home/Home.jsx'
import { Provider } from 'react-redux'
import { store } from './ReduxStore/store.jsx'
import CreateTask from './components/CreateTask/CreateTask.jsx'
import Tasks from './components/Tasks/Tasks.jsx'
import TaskDetails from './components/TaskDetails/TaskDetails.jsx'
import Folders from './components/Folders/Folders.jsx'
import UpdateTask from './components/UpdateTask/UpdateTask.jsx'

const router = createBrowserRouter([
  { path: '/', element: <App />, children: [
    {index: true, element: <Landing />},
    {path: 'about', element: <AboutUs />},
    {path: 'home', element: <Home/>, children:[
      {index: true, element: <Folders />},
      {path: 'addTask', element: <CreateTask />},
      {path: 'updateTask', element: <UpdateTask></UpdateTask>},
      {path: 'tasks', element: <Tasks />},
      {path: 'tasks/:uniqueId', element:<TaskDetails/>},
      //newly added components
      { path: 'profile', element: <ProfileComponent /> },
      { path: 'todo-lists', element: <TodoLists /> },

    ]},
  ]},
  {path:'register', element: <RegisterPage></RegisterPage>},
  {path:'login', element: <Login/>},

  { path: '*', element: <Error /> }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router = {router} />
    </Provider>
  </StrictMode>,
)