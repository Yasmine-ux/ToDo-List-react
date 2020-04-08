import React from 'react'
import './App.css';

function ListItem(props) {
    const items = props.items;
    const listItems = items.map(item =>
        {
            return (
                <div className='listItem' key={item.key}>
                    <div className='btn-div'>
                    <button className='bttn' onClick={()=> {props.changer(item.key)}}>{item.btn}Task</button>
                    <button className='bttn' onClick={() => {props.deleteItem(item.key)}}>Delete</button>
                    </div>
                    <p className={item.styling}>{item.text}</p>
                </div>
            );
        })
    
    return listItems
    
}
export default ListItem