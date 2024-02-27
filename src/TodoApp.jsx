import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis/"

export const TodoApp = () => {

    const [todoId, setTodoId] = useState(1);

    // const { data: todos = [], isLoading } = useGetTodosQuery();
    const { data: todo = [], isLoading } = useGetTodoQuery(todoId);

    const handleTodo = (value) => {
        setTodoId(todoId + value);
        if (todoId + value < 1) setTodoId(1);
    }

    return (
        <>
            <h1>Todos - RTK Query</h1>
            <hr />
            <h4>isLoading: {isLoading ? 'True' : 'False'}</h4>

            {/* <pre>{JSON.stringify(todo)}</pre> */}

            <article style={{ marginBottom: '16px' }}>
                <h2>User - {todo.userId}</h2>
                <span>Todo Id - {todo.id}</span>
                <p>Title - {todo.title}</p>
                <span style={{
                    backgroundColor: `${todo.completed ? 'green' : 'red'}`,
                    borderRadius: '4px',
                    padding: '4px 16px'
                }}>{todo.completed ? 'True' : 'false'}</span>
            </article>

            {/* <ul style={{ listStyle: 'none', textAlign: 'left' }}>
                {
                    todos.map(todo => (
                        <li
                            key={todo.id}
                            style={{
                                margin: '16px 0'
                            }}
                        >
                            <strong style={{
                                backgroundColor: `${todo.completed ? 'green' : 'red'}`,
                                borderRadius: '4px',
                                padding: '4px 16px'
                            }}>
                                {todo.completed ? 'Donde' : 'Pending'}
                            </strong> - {todo.title}
                        </li>
                    ))
                }
            </ul> */}

            <button onClick={() => handleTodo(-1)}>Previous Todo</button>
            <button onClick={() => handleTodo(1)}>Next Todo</button>
        </>
    )
}