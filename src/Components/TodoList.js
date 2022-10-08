import React from 'react';
import '../Styles/TodoList.css';

function TodoList(props){
    return(
        <section>
            <ul className="TodoList">
                {props.children}
            </ul>
        </section>
    )
}

export {TodoList};