import { Fragment } from 'react'
import { Button } from './Button';
import classes from './Main.module.css'
export const Main = (props) => {
    return (
        <Fragment>
            <div className={classes.main}>
                <div>
                    <p>Welcome to my portfolio website!</p>
                    <h1>Hey folks, I'm Marvel SannWeb DesignerUI Specialist</h1>
                    <span>Building a successful product is a challenge. I am highly energetic in user experience design,
                         interfaces and web development.</span>



                </div>
                <div>
                    <Button />

                </div>
            </div>


        </Fragment>
    )
}