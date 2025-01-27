
import { Fragment } from 'react';
import { About } from './Components/About';
import Head from './Components/Head';
import { Main } from './Components/Main';
import Skills from './Components/Skill';
import Resume from './Components/Resume';


const App = (props) => {
    return (
        <Fragment>
            <Head />
            <Main />
            <About />
            <Skills />
            <Resume/>



        </Fragment>
    );
};

export default App;
