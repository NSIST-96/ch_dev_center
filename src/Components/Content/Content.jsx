import React from 'react'
import classes from './Content.module.css'
import ContentMain from './ContentMain/ContentMain';
import ContentInfo from './ContentInfo/ContentInfo';

const Content = (props) =>{
    return(
        <div className={classes.Content}>
            <ContentMain/>
            <ContentInfo/>
        </div>
    )
}

export default Content