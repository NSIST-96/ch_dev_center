import React from 'react'
import classes from './Content.module.css'
import ContentMain from './ContentMain/ContentMain';

const Content = (props) =>{
    return(
        <div className={classes.Content}>
            <ContentMain/>
        </div>
    )
}

export default Content