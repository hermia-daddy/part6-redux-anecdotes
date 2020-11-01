import React from 'react'
import { connect } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

const Filter = (props) => {
  const handlerChange = (event) => {
    const filter = event.target.value
    console.log('开始:', filter)
    if (filter) {
      props.filterChange('SET_FILTER', filter)
    } else {
      console.log('触发全部:', filter)
      props.filterChange('ALL', filter)
    }
  }

  const style = {
    marginBottom: 10
  }
  return (
    <div style={style}>
      filter <input onChange={handlerChange} />
    </div>
  )
}

const mapDispatchToProps = {
  filterChange
}

export default connect(null, mapDispatchToProps)(Filter)
