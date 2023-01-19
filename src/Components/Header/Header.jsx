import React from 'react'
import logo from './../../Images/logo.jpg'
import classes from './Header.module.css'

const Header = (props) =>{
    return(
        <div className={classes.Header}>
            <div className={classes.header_input}>
                <img src={logo} alt='logo'></img>
                <div className={classes.header_phone}><h5>Тел.: +7(910)592-11-47</h5></div>
                <div className={classes.header_main}><h3><a href='#'>Главная</a></h3></div>
                <div className={classes.header_news}><h3><a href='#'>Услуги</a></h3></div>
                <div className={classes.header_contacts}><h3><a href='#'>Новости</a></h3></div>
            </div>
        </div>
    )
}

export default Header