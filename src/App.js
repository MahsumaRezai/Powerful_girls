
import { Fragment } from 'react';
import { About } from './Components/About';
import Head from './Components/Head';
import { Main } from './Components/Main';

const App = (props) => {
    return (
        <Fragment>
            <Head/>
            <Main/>
            <About/>

        </Fragment>
    );
};

export default App;
