import React from 'react'
import classes from './ContentServices.module.css'

import ScrollRight from './../../../Icons/ScrollRight.png'
import ScrollLeft from './../../../Icons/ScrollLeft.png'

import ChessStudio from './../../../Images/Services/ChessStudio.png'
import ChSad from './../../../Images/Services/ChSad.png'
import DanceStudio from './../../../Images/Services/DanceStudio.png'

const ContentServices = (props) => {
    const Service = [
        <div className={classes.ContentServices_ChessStudio}> <img src={ChessStudio} alt='img' /> </div>,
        <div className={classes.ContentServices_ChSad}> <img src={ChSad} alt='img' /> </div>,
        <div className={classes.ContentServices_DanceStudio}> <img src={DanceStudio} alt='img' /> </div>]
    return (
        <div className={classes.ContentServices}>
            <div className={classes.ContentServices_Title}>
                <h1 id='ContentServicesID'>Наши Услуги</h1>
            </div>
            <div className={classes.left_col}>
                <img className={classes.ScrollLeft} src={ScrollLeft} alt='img' />
            </div>

            {Service}

            <div className={classes.right_col}>
                <img className={classes.ScrollRight} src={ScrollRight} alt='img' />
            </div>
        </div>
    )
}

export default ContentServices