"use client"

type TodoItemProps ={
    id: string,
    title: string,
    completed: boolean,
    toggleTodo: (id: string, completed: boolean) => void
}

export function TodoItem({id, title, completed, toggleTodo}: TodoItemProps){
    return (
        <li className="fle gap-1 items-center">
            <input
                id={id}
                type="checkbox"
                defaultChecked={completed}
                className="cursor-pointer peer"
                onChange={e => toggleTodo(id, e.target.checked)}
            />
            <label htmlFor={id} className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500">{title}</label>
        </li>
    )
}