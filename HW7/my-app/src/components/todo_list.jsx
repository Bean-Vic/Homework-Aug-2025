"use client"

import React, { useState, useEffect } from "react";

export const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [filter, setFilter] = useState("All"); // All, Active, Completed
    const [editingId, setEditingId] = useState(null);
    const [editingText, setEditingText] = useState("");

    // Load todos from localStorage on component mount
    useEffect(() => {
        const savedTodos = localStorage.getItem("todo-list");
        if (savedTodos) {
            try {
                const parsedTodos = JSON.parse(savedTodos);
                setTodos(parsedTodos);
            } catch (error) {
                console.error("Error parsing saved todos:", error);
            }
        }
    }, []);

    // Save todos to localStorage whenever todos change
    useEffect(() => {
        localStorage.setItem("todo-list", JSON.stringify(todos));
    }, [todos]);

    // Add new todo
    const addTodo = () => {
        if (inputValue.trim() !== "") {
            const newTodo = {
                id: Date.now(),
                text: inputValue.trim(),
                completed: false
            };
            setTodos([...todos, newTodo]);
            setInputValue("");
        }
    };

    // Toggle todo completion
    const toggleTodo = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    // Delete todo
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    // Start editing
    const startEdit = (id, text) => {
        setEditingId(id);
        setEditingText(text);
    };

    // Save edit
    const saveEdit = () => {
        if (editingText.trim() !== "") {
            setTodos(todos.map(todo =>
                todo.id === editingId ? { ...todo, text: editingText.trim() } : todo
            ));
        }
        setEditingId(null);
        setEditingText("");
    };

    // Cancel edit
    const cancelEdit = () => {
        setEditingId(null);
        setEditingText("");
    };

    // Clear completed todos
    const clearCompleted = () => {
        setTodos(todos.filter(todo => !todo.completed));
    };

    // Filter todos based on current filter
    const filteredTodos = todos.filter(todo => {
        if (filter === "Active") return !todo.completed;
        if (filter === "Completed") return todo.completed;
        return true; // All
    });

    // Handle input key press
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            addTodo();
        }
    };

    return (
    <>
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            {/* Title Area */}
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold text-gray-800">ToDo</h1>
                <span className="text-lg text-gray-600 font-medium">{todos.length} items left</span>
            </div>

            {/* Input Field */}
            <div className="flex gap-3 mb-6">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Add a task..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                    onClick={addTodo}
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                    Add
                </button>
            </div>

            {/* Todo Lists */}
            <div className="mb-6">
                {filteredTodos.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                        No tasks found. Add a task to get started!
                    </div>
                ) : (
                    filteredTodos.map(todo => (
                        <div key={todo.id} className="flex items-center gap-3 py-3 px-2 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => toggleTodo(todo.id)}
                                className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                            />

                            {editingId === todo.id ? (
                                <>
                                    <input
                                        type="text"
                                        value={editingText}
                                        onChange={(e) => setEditingText(e.target.value)}
                                        onKeyDown={(e) => e.key === "Enter" && saveEdit()}
                                        className="flex-1 px-3 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        autoFocus
                                    />
                                    <button
                                        onClick={saveEdit}
                                        className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={cancelEdit}
                                        className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                </>
                            ) : (
                                <>
                                    <span className={`flex-1 ${todo.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                                        {todo.text}
                                    </span>
                                    <button
                                        onClick={() => startEdit(todo.id, todo.text)}
                                        className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => deleteTodo(todo.id)}
                                        className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                                    >
                                        Delete
                                    </button>
                                </>
                            )}
                        </div>
                    ))
                )}
            </div>

            {/* Footer Navigation */}
            <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                <div className="flex gap-2">
                    {["All", "Active", "Completed"].map(filterType => (
                        <button
                            key={filterType}
                            onClick={() => setFilter(filterType)}
                            className={`px-4 py-2 rounded-lg border transition-colors ${
                                filter === filterType
                                    ? 'bg-blue-500 text-white border-blue-500'
                                    : 'bg-white text-blue-500 border-blue-500 hover:bg-blue-50'
                            }`}
                        >
                            {filterType}
                        </button>
                    ))}
                </div>

                <button
                    onClick={clearCompleted}
                    disabled={!todos.some(todo => todo.completed)}
                    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                    Clear Completed
                </button>
            </div>
        </div>
    </>
    );
};