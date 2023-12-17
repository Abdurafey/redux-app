import React from 'react'
import '../App.css'
import { useSelector,useDispatch } from 'react-redux'
import {incNumber, decNumber} from '../redux/actions/index'

const Main = () => {
  const myState = useSelector((state)=> state.changeTheNumber)
  const dispatch = useDispatch();
  return (
    <>
    <div className="container">
        <h1>Increment/Decrement counter</h1>
        <h4>using React and Redux</h4>

        <div className="quantity">
            <a href="#" title='Decrement' className="quantity_minus" onClick={()=> dispatch(decNumber())}><span>-</span></a>
            <input name='quantity' type="text" className="quantity_input" value={myState}/>
            <a href="#" title='Increment' className="quantity_plus" onClick={()=> dispatch(incNumber())}><span>+</span></a>
        </div>
    </div>
    </>
  )
}

export default Main
