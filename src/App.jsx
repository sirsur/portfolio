import React from 'react';
import Main from './pages/Main';

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