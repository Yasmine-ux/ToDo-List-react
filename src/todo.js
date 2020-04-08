import React, { Component } from 'react'
import './App.css';
import ListItem from './ListItem';

 class Todo extends Component {
     constructor(props) {
         super(props);
         this.state = {
             items : [],
             currentItem:{
                 text:'',
                 key:''
             }
         }
         this.handleInput=this.handleInput.bind(this)
         this.addItem=this.addItem.bind(this)
         this.deleteItem=this.deleteItem.bind(this)
         this.changer=this.changer.bind(this)
     }
     handleInput(e){
         this.setState({
             currentItem:{
                 text: e.target.value,
                 key : Date.now()
             }
         })
     }
     addItem (e){
         e.preventDefault();
         const newItem= this.state.currentItem
         if(newItem.text !==""){
            const items = [...this.state.items, newItem];
          this.setState({
            items: items,
            currentItem:{
              text:'',
              key:''
            }
          })
          }
     }
     deleteItem(key){
        const filteredItems= this.state.items.filter(item =>
          item.key!==key);
        this.setState({
          items: filteredItems
        })
    
      }
      changer (key){
        
        this.setState({items : this.state.items.map(el => {
          if (el.key == key){
            if (el.bool === false)
            {
              return {
                ...el, btn : 'Undo', bool : true, styling:'lined'
              }
            }
            else 
            {
              return {
                ...el, btn : 'Complete', bool : false, styling:'not-lined'
              }
            }
          }
          else {return el
          }
          
        })})
      }
    render() {
        return (
    <div>
         <div className='header'>
         <h1>To-Do App</h1>
         <h4>Add New To-Do</h4>
         <form onSubmit={this.addItem}>
         <input className='Input' type='text' placeholder='Enter your task' value={this.state.currentItem.text} onChange={this.handleInput} ></input>
         <button className='btnadd' type='submit'>Add</button>
         </form>
         </div>
          <p className='paragraph'>Let's get some work done!</p>
         <ListItem items={this.state.items} deleteItem={this.deleteItem} changer={this.changer}/>
    </div>
        )
    }
}
export default Todo
