import React from 'react'

class TodoList extends React.Component {
  constructor() {
    super()
    this.state = {
      userInput: '',
      items: []
    }
  }
  
  onChange(event) {
    this.setState({
      userInput: event.target.value
      })
  }
  
  addTodo(event) {
    event.preventDefault() //évite de reload de la page à l'envoi du formulaire
    this.setState({
      userInput: '', //vide le l'input après la soumission
      items: [...this.state.items, this.state.userInput] //ES6 - ajoute userInput dans items
    })
  }
  
  renderTodo() {
    return this.state.items.map((item) => {
      return (
        <div className="list-group-item" key={item}>
          <button  className="badge badge-secondary" onClick={this.deleteTodo.bind(this)}>Done </button> {item} 
        </div>
      )
    })
  }
  
  deleteTodo(event) {
    event.preventDefault()
    const array = this.state.items
    const index = array.indexOf(event.target.value) //trouve l'index de l'item en question
    array.splice(index, 1) //supprimer l'item
    this.setState({ //items sera maintenant égal à array après les suppressions
      items: array 
    })
  }
    
  render() {
    return(
      <div>
        <h1 align="center">Ma Todo List</h1>
        <form className="form-row">
          <input 
            className="form-control mb-2"
            value={this.state.userInput} 
            type="text" 
            placeholder="Renseigner un item"
            onChange={this.onChange.bind(this)}
          />
          <button 
            className="btn btn-primary" 
            onClick={this.addTodo.bind(this)}
          >
            Ajouter
          </button>
        </form>
        <div className="list-group  mt-5">
          {this.renderTodo()}
        </div>
      </div>
    )
  }
}

export default TodoList