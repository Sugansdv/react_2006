import { useState } from 'react'
import Proj1 from './components/Proj1';
import Proj2 from './components/Proj2';
import Proj3 from './components/Proj3';
import Proj4 from './components/Proj4';
import Task from './components/Task';

function App() {

  return (
    <>
    <div className='text-center m-5'>
      <h3>Day_25 Task</h3>
    </div>
      <Task /><br /><hr />
      <Proj1 /><br /><hr />
      <Proj2 /><br /><hr />
      <Proj3 /><br /><hr />
      <Proj4 /><br /><hr />
    </>
  )
}

export default App
