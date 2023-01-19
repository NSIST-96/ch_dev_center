import React from 'react'
import classes from './ContentInfo.module.css'
import InfoImg from './../../../Images/ContentInfo.jpg'
import InfoImg2 from './../../../Images/ContentInfo2.jpg'
import InfoImg3 from './../../../Images/ContentInfo3.jpg'
const ContentInfo = (props) => {
    return (
        <div className={classes.ContentInfo}>
            
            <div className={classes.ContentInfo_Text}>
                <h3>Развивающие занятия</h3>
                <span>Психологический центр развития в Калуге "Мозаика" предлагает родителям широкий спектр возможностей в направлении развития и обучения их детей. Комплекс интегрированных занятий для детей от 8 месяцев и до 7 лет, охватывает все основные направления в развитии: физическое, интеллектуальное, художественно-эстетическое, социальное. Занятия построены на смене разных видов творческой и интеллектуальной активности, проводятся в игровой форме (игру принято называть основной формой деятельности дошкольника). Именно в игре проявляются и развиваются разные стороны его личности, удовлетворяются многие интеллектуальные и эмоциональные потребности, складывается характер.</span>
            </div>
            <img className={classes.img1} src={InfoImg} alt='img' />
            <img className={classes.img2} src={InfoImg2} alt='img' />
            <img className={classes.img3} src={InfoImg3} alt='img' />
        </div>
    )
}

export default ContentInfo