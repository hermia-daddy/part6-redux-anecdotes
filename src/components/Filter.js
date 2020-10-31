import React from 'react'
import { useDispatch } from 'react-redux'
import { filterChange } from '../reducers/filterReducer'

const Filter = () => {
  const dispatch = useDispatch()
  const handlerChange = (event) => {
    const filter = event.target.value
    console.log('开始:', filter)
    if (filter) {
      dispatch(filterChange('SET_FILTER', filter))
    } else {
      console.log('触发全部:', filter)
      dispatch(filterChange('ALL', filter))
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

export default Filter
