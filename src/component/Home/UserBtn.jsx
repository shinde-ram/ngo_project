import React,{useState} from 'react'
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function UserBtn() {
  const navigate = useNavigate()
    const isLoggedIn = false;
  const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };
  
   
  
    const handleLogout = () => {
      setShowDropdown(false);
      // Add logout logic here
    };
  return (
    <div>
       <div className="flex mt-6 md:mt-0 md:mb-10">

          <div className="relative">
            <div className='flex flex-col items-center md:me-6 '>
              <FaUserCircle
                className="text-4xl text-white cursor-pointer  items-center"
                onClick={toggleDropdown}
              />
              <p className='text-gray-500 '>Profile</p>
            </div>
            <div
              className={` flex flex-col transition-all duration-500 ease-in-out ${showDropdown ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } w-36 text-center bg-gray-600 rounded-md text-white py-2 absolute top-10 right-0 z-20`}
            >
              {isLoggedIn ? (
                <>
                  <button
                    onClick={handleLogout}
                    className="block w-full  p-2 text-black hover:bg-gray-200"
                  >
                    Log Out
                  </button>
                  <div className="whitespace-nowrap block w-full p-2 text-black hover:bg-gray-500">
                    You Donated
                  </div>
                </>
              ) : (
                <>
                  <button
                    onClick={() => { navigate('/login'); setShowDropdown(false); }}
                    className="block w-full  p-2 text-black hover:bg-gray-500"
                  >
                    Login
                  </button>
                  <button
                    onClick={() => { navigate('/signup'); setShowDropdown(false); }}
                    className="block w-full p-2 text-black hover:bg-gray-500"
                  >
                    Register as User
                  </button>
                  <button
                    onClick={() => { navigate('/signup'); setShowDropdown(false); }}
                    className="block w-full p-2 text-black hover:bg-gray-500"
                  >
                    Register as NGO
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
    </div>
  )
}

export default UserBtn
