
import { Fragment } from 'react';
import { About } from './Components/About';
import Head from './Components/Head';
import { Main } from './Components/Main';
import Skills from './Components/Skill';


const App = (props) => {
    return (
        <Fragment>
            <Head />
            <Main />
            <About />
            <Skills />



        </Fragment>
    );
};

export default App;
