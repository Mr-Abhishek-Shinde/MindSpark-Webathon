import React from 'react'
import './filterlist.css'

function FilterList() {
  return (
    <div className='filter-list'>
        <h6>Showing 5 applications</h6>
        <span className='filter'>Clear All</span>
        <span className='filter'>Application Stage</span>
        <span className='filter'>Application Input</span>
    </div>
  )
}

export default FilterList