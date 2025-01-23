
import { Fragment } from 'react';
import { Head } from './Components/Head';
import { About } from './Components/About';

const App = (props) => {
    return (
        <Fragment>
            <Head />
            <About/>

        </Fragment>
    );
};

export default App;
