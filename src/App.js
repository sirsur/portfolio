import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Main from './components/Main';

const App = () => {
    /*const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 8000)
    }, []);

    return (
        loading ? <Preloader /> : <Main />
    );*/
    
    return (
        <Main />
    )
};

export default App;