import logo from './logo.svg';
import './App.css';
import sc from "styled-components";
import {useState} from "react";
import Balancer from "react-wrap-balancer";

const TitleStyle = sc.h1
    `text-align:center;`;

function App(props) {
    const [todos, setTodos] = useState([]);

    //? Function to add the text to a list
    /**
     * The addTodo function is responsible for adding a new todo item to the list.
     *
     *
     * @param event Prevent the default behavior of the form, which is to refresh the page
     *
     * @return Undefined
     *
     * @docauthor Trelent
     */
    const addTodo = (event) => {
        event.preventDefault();
        const todoInput = document.querySelector(".input");
        const newTodoItem = todoInput.value.trim();
        console.log(newTodoItem);
        if (newTodoItem !== "") {
            setTodos([...todos, newTodoItem]);
            todoInput.value = "";
        } else {
            alert("Empty input field not allowed!");
        }
    }

    return (
        <div className="App">
            {/*TodoList Functions*/}
            <TitleStyle>
                <Balancer>
                    <h1 className="title">Simple React TodoList</h1>
                </Balancer>
                {/*Todolist Functions*/}
                <form>
                    <Balancer>
                        <h2 className="label-wrapper">
                            <label htmlFor="">What need to be done?</label>
                        </h2>
                        <input type="text" className="input"/>
                        {/* Connecting the function addTodo with the button to launch the code*/}
                        <button onClick={addTodo} className="button">Add new todo</button>
                    </Balancer>
                </form>
                {/*   TodoList Body*/}
                <div className="filters btn-group">
                    <button className="btn">
                        <span>All</span>
                    </button>

                    <button className="btn">
                        <span>Active</span>
                    </button>

                    <button className="btn">
                        <span>Completed</span>
                    </button>
                </div>

                <ul>
                    {
                        todos.map((TodoData, index) => {
                            return <li key={index}>
                                {TodoData}
                            </li>
                        })
                    }
                </ul>
            </TitleStyle>
        </div>
    );
}

export default App;
