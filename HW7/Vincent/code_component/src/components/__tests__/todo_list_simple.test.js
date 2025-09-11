import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TodoList } from '../todo_list';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

describe('TodoList - Simple Tests', () => {
  beforeEach(() => {
    localStorageMock.getItem.mockClear();
    localStorageMock.setItem.mockClear();
    localStorageMock.clear.mockClear();
    localStorageMock.getItem.mockReturnValue(null);
  });

  test('renders todo list with initial state', () => {
    render(<TodoList />);

    expect(screen.getByText('ToDo')).toBeInTheDocument();
    expect(screen.getByText('0 items left')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Add a task...')).toBeInTheDocument();
  });

  test('adds a new todo', async () => {
    render(<TodoList />);

    const input = screen.getByPlaceholderText('Add a task...');
    const addButton = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'Test todo' } });
    fireEvent.click(addButton);

    await waitFor(() => {
      expect(screen.getByText('Test todo')).toBeInTheDocument();
    });
  });
});
