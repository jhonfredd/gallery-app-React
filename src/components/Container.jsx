import React from 'react'
import Cards from './Cards'
import { useState } from 'react';

const Container = ({ isDarkTheme }) => {
  return (
    <div className='container border my-3'>
     <Cards isDarkTheme={isDarkTheme}/>
    </div>
  )
}

export default Container
