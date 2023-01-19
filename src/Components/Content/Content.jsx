import React from 'react'
import classes from './Content.module.css'
import ContentMain from './ContentMain/ContentMain';
import ContentInfo from './ContentInfo/ContentInfo';
import ContentServices from './ContentServices/ContentServices';

const Content = (props) =>{
    return(
        <div className={classes.Content}>
            <ContentMain/>
            <ContentInfo/>
            <ContentServices/>
        </div>
    )
}

export default Content