import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader';
import Main from './components/Main';

const App = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }, []);

    return (
        loading ? <Preloader /> : <Main />
    );
};

export default App;