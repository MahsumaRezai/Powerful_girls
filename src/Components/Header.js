import { Fragment } from 'react';
import classes from "./Header.module.css"
export const Header = (props) => {
    return (
        <Fragment>
            <div className={classes.header}>
                <div className={classes.headertext}>
                    <h2>Masoumeh Nawrozi</h2>
                    <p>I'm <span class="typed" data-typed-items=" A Designer,A  Developer, A Freelancer,A  Teacher">Full-Stack</span><span
                        class="typed-cursor typed-cursor--blink" aria-hidden="true"></span><span class="typed-cursor typed-cursor--blink"
                            aria-hidden="true"></span></p>
                </div>

            </div>

        </Fragment>
    )
}