"use client"

import React from "react";
import { useState } from "react";

export const Code1 = ({ init_vale }) => {
    const [Value, setValue] = useState(init_vale || 0);

    function increase() {
        setValue(prev => prev + 1);
    }

    function decrease() {
        setValue(prev => prev - 1);
    }

    return (
    <>
        <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-lg shadow-lg border border-gray-200 max-w-sm mx-auto">
            <div className="text-2xl font-bold text-gray-800 mb-2">
                Counter Value: <span className="text-blue-600">{Value}</span>
            </div>
            <div className="flex space-x-4">
                <button
                    onClick={decrease}
                    className="w-16 h-16 text-2xl font-bold text-white bg-red-500 hover:bg-red-600 active:bg-red-700 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
                >
                    -
                </button>
                <button
                    onClick={increase}
                    className="w-16 h-16 text-2xl font-bold text-white bg-green-500 hover:bg-green-600 active:bg-green-700 rounded-full shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95"
                >
                    +
                </button>
            </div>
        </div>
    </>);
};

const withLocalStorage = (WrappedComponent) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                init_vale: 0,
                currentValue: 0,
                isLoaded: false
            };
        }

        componentDidMount() {
            // Load saved value from localStorage after component mounts (client-side only)
            if (typeof window !== 'undefined') {
                const local_saved = localStorage.getItem("code1_counter");
                const savedValue = local_saved ? parseInt(local_saved, 10) : 0;
                this.setState({
                    init_vale: savedValue,
                    currentValue: savedValue,
                    isLoaded: true
                });
            } else {
                this.setState({ isLoaded: true });
            }
        }

        handleClick = (event) => {
            const buttonText = event.target.textContent;
            if (buttonText === '+') {
                this.setState(prevState => {
                    const newValue = prevState.currentValue + 1;
                    // Save to localStorage immediately when value changes
                    if (typeof window !== 'undefined') {
                        localStorage.setItem("code1_counter", newValue.toString());
                    }
                    return { currentValue: newValue };
                });
            } else if (buttonText === '-') {
                this.setState(prevState => {
                    const newValue = prevState.currentValue - 1;
                    // Save to localStorage immediately when value changes
                    if (typeof window !== 'undefined') {
                        localStorage.setItem("code1_counter", newValue.toString());
                    }
                    return { currentValue: newValue };
                });
            }
        }

        componentWillUnmount() {
            // Save current value to localStorage when component unmounts (client-side only)
            if (typeof window !== 'undefined') {
                localStorage.setItem("code1_counter", this.state.currentValue.toString());
            }
        }

        render() {
            // Show loading until localStorage is loaded
            if (!this.state.isLoaded) {
                return (
                    <div className="flex items-center justify-center p-8">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                        <span className="ml-3 text-gray-600">Loading saved value...</span>
                    </div>
                );
            }

            return (
            <>
                <div className="relative">
                    {/* localStorage indicator */}
                    <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full shadow-lg">
                        💾 Saved
                    </div>
                    <div onClick={this.handleClick}>
                        <WrappedComponent
                            {...this.props}
                            init_vale={this.state.init_vale}
                        />
                    </div>
                </div>
            </>);
        }
    }
}

// Create the enhanced component
export const Code1WithStorage = withLocalStorage(Code1);