import React from 'react'
import Card from './Card'

const Weather = ({data}) => {
    console.log(data)
    return (
        <Card data={data}/>
    )
}

export default Weather
