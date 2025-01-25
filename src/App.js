
import { Fragment } from 'react';
import { About } from './Components/About';
import Head from './Components/Head';
import { Main } from './Components/Main';
import { Active } from './Components/Active';


const App = (props) => {
    return (
        <Fragment>
            <Head/>
            <Main/>
            <About/>
            <Active/>
          

        </Fragment>
    );
};

export default App;
