import React from 'react'
import classes from './ContentMain.module.css'
import MainImg from './../../../Images/ContentMain3.jpg'

const ContentMain = (props) => {
    return (
        <div className={classes.ContentMain}>
            <div className={classes.ContentMain_Filter}>
            <img src={MainImg} alt='img'/>
                <div className={classes.ContentMain_Text}>
                    <span>Детский психологический центр развития "Мoзаика" в Калуге ждёт Вас на развивающие занятия...</span><br></br>
                    <span>Добро пожаловать, дорогие дети, родители, друзья!</span>
                </div>
                
            </div>
        </div>
    )
}

export default ContentMain