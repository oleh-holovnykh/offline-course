import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom';

function App() {
  const [showRequisites, setShowRequisites] = useState<boolean>(false);
  const [showSchedule, setShowSchedule] = useState<boolean>(false);

  const handleRequisitesClick = () => {
    setShowRequisites(!showRequisites);

    if (showSchedule) {
      setShowSchedule(!showSchedule);
    }
  };

  const handleScheduleClick = () => {
    setShowSchedule(!showSchedule);

    if (showRequisites) {
      setShowRequisites(!showRequisites);
    }
  };

  return (
    <>
      <div className='text-center mb-2 mt-4'>
        <span className='mb-2 block'>
          <b>Модуль:</b> 6000 грн
        </span>
        <span className='mb-2 block text-sm'>
          <b>Група практики:</b> 800 грн 
        </span>
        <div className='mb-2'>
        <NavLink to="/payment">
            <button
                onClick={handleRequisitesClick}
                className={`mr-2 text-sm text-gray-800 py-2 px-4 border border-gray-200 rounded ${
                  showRequisites ? 'hover:bg-white bg-gray-100' : 'bg-white hover:bg-gray-100 shadow'
                }`}
              >
                Реквізити
            </button>
          </NavLink>
            
          <NavLink to="/schedule">
            <button
                onClick={handleScheduleClick}
                className={`text-sm text-gray-800 py-2 px-4 border border-gray-200 rounded ${
                  showSchedule ?  'hover:bg-white bg-gray-100' : 'bg-white hover:bg-gray-100 shadow'
                }`}
              >
                Розклад
            </button>
          </NavLink>
        </div>
        </div>
        <Outlet />
    </>
  );
}

export default App;
