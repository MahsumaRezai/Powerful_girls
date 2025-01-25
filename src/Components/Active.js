import classes from './Skill.module.css'

export const Active = (props) => {
    return (
        <div className={classes.cardskill}>
            <div className={classes.textabout}>
                <h1 className={classes.title}>Skills</h1>
            </div>

            <div className={classes.wapperskill}>
                <div className={classes.skill}>
                    <p>HTML</p>
                </div>
                <div className={classes.skill}>
                    <p>CSS</p>


                </div>
                <div className={classes.skill}>
                    <p>SCSS</p>

                </div>
                <div className={classes.skill}>
                    <p>JAVASCRIPT</p>

                </div>
                <div className={classes.skill}>
                    <p>Type script</p>

                </div>

            </div>
            <div className={classes.wapperskill}>
                <div className={classes.skill}>
                    <p>React js</p>

                </div>
                <div className={classes.skill}>
                    <p>Php</p>

                </div>
                <div className={classes.skill}>
                    <p>
                        Next js</p>

                </div>
                <div className={classes.skill}>
                    <p>Bootstrap</p>

                </div>
                <div className={classes.skill}>
                    <p>
                        Tailwind</p>

                </div>

            </div>


        </div>
    )
}