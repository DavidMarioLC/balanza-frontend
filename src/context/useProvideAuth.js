import { useState } from 'react';






function useProvideAuth() {

    const [user, setUser] = useState(localStorage.getItem('token'));



    const signin = (cb) => {

        setUser(true);
        localStorage.setItem('token', true)
        cb()

    };

    const signout = (cb) => {

        // setUser(null);
        localStorage.removeItem('token')
        cb()
    };

    return {
        user,
        signin,
        signout
    };
}

export default useProvideAuth