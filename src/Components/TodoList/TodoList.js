import React from 'react';
import './TodoList.css';

function TodoList(props){
    const renderFunc = props.children || props.render;
    return(
        <section className="TodoList-conteiner">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(props.totalTodos == 0 && !props.loading) && props.onEmpty()}
            {(!!props.totalTodos && props.searchedTodos.length==0) && props.onEmptyResults(props.searchText)}
            {props.searchedTodos.map(renderFunc)}
            {/* <ul className="TodoList">
                {props.children}
            </ul> */}
        </section>
    )
}

export {TodoList};