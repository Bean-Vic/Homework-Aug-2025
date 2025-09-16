# Homework 8: React Router & Unit Testing

## React Router Questions

### 1. What is the difference between `<Link>` and `<a>` tag?

**Answer:**
- **`<a>` tag**: A standard HTML anchor element that triggers a full page reload when clicked. This breaks the Single Page Application (SPA) flow by causing the browser to make a new HTTP request and reload the entire page.
- **`<Link>` component**: Provided by React Router, it uses the browser's History API to update the URL without reloading the page. This maintains the SPA experience with client-side navigation.

**Example:**
```jsx
// Traditional HTML - causes page reload
<a href="/about">About</a>

// React Router - client-side navigation
<Link to="/about">About</Link>
```

### 2. What is `<Route>` used for?

**Answer:**
`<Route>` is a React Router component that defines the mapping between URL paths and React components. When the current URL matches the specified path, React Router renders the corresponding component.

**Key props:**
- `path`: The URL pattern to match
- `element`: The component to render when the path matches
- `index`: Indicates this is the default child route

**Example:**
```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/users/:id" element={<UserProfile />} />
</Routes>
```

### 3. What is the difference between `path="/"` and `path="*"`?

**Answer:**
- **`path="/"`**: Matches exactly the root/home page URL. This is typically used for the main landing page of your application.
- **`path="*"`**: A wildcard that matches any path not already matched by other routes. This is commonly used as a catch-all route for handling 404 errors or undefined routes.

**Example:**
```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} /> {/* Catch-all for 404 */}
</Routes>
```

### 4. How do you navigate using React Router?

**Answer:**
There are two primary methods for navigation in React Router:

**Declarative Navigation:**
- `<Link>`: Basic navigation component
- `<NavLink>`: Enhanced Link with active state styling capabilities

**Programmatic Navigation:**
- `useNavigate()` hook: Allows navigation from within component logic (event handlers, effects, etc.)

**Examples:**
```jsx
// Declarative
<Link to="/dashboard">Go to Dashboard</Link>
<NavLink to="/profile" className={({ isActive }) => isActive ? 'active' : ''}>
  Profile
</NavLink>

// Programmatic
const navigate = useNavigate();
const handleLogin = () => {
  // After successful login
  navigate('/dashboard');
  // Or with options
  navigate('/dashboard', { replace: true });
};
```

### 5. How do you redirect a user in React Router?

**Answer:**
React Router provides multiple ways to handle redirects:

**Declarative Redirect:**
- `<Navigate>` component: Immediately redirects when rendered

**Programmatic Redirect:**
- `useNavigate()` hook: Redirect based on conditions or user actions

**Examples:**
```jsx
// Declarative - immediate redirect
<Route path="/old-path" element={<Navigate to="/new-path" replace />} />

// Conditional redirect
function ProtectedRoute({ children }) {
  const isAuthenticated = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}

// Programmatic redirect
const navigate = useNavigate();
useEffect(() => {
  if (!user) {
    navigate('/login', { replace: true });
  }
}, [user, navigate]);
```

### 6. How do you acquire the user's current URL parameters?

**Answer:**
React Router provides several hooks to access URL information:

**`useParams()`**: Extracts dynamic route parameters (path segments)
**`useSearchParams()`**: Handles query string parameters
**`useLocation()`**: Provides complete location object with pathname, search, hash, etc.

**Examples:**
```jsx
// For route: /users/:id?tab=profile&sort=name
function UserProfile() {
  // Get route parameters
  const { id } = useParams(); // "123"

  // Get query parameters
  const [searchParams, setSearchParams] = useSearchParams();
  const tab = searchParams.get('tab'); // "profile"
  const sort = searchParams.get('sort'); // "name"

  // Get full location info
  const location = useLocation();
  // location.pathname: "/users/123"
  // location.search: "?tab=profile&sort=name"

  return <div>User {id} - Tab: {tab}</div>;
}
```

## Unit Testing Questions

### 7. What is Jest?

**Answer:**
Jest is a comprehensive JavaScript testing framework developed by Facebook (now Meta). It's primarily used for unit and integration testing in React and Node.js applications.

**Key features:**
- **Test runner**: Executes and manages test suites
- **Assertions**: Built-in matchers for various test scenarios
- **Mocking**: Powerful mocking system for functions and modules
- **Snapshot testing**: Captures component output for regression testing
- **Code coverage**: Built-in coverage reports
- **Zero configuration**: Works out-of-the-box with minimal setup

### 8. What is a test case in Jest?

**Answer:**
A test case defines what functionality to test and the expected result. It's written using `test()` or `it()` functions that describe the behavior being tested.

**Structure:**
```javascript
test('description of what is being tested', () => {
  // Arrange: Set up test data
  const input = 'test data';

  // Act: Execute the function being tested
  const result = functionToTest(input);

  // Assert: Verify the expected outcome
  expect(result).toBe('expected output');
});

// Alternative syntax
it('should behave in a specific way', () => {
  // Test implementation
});
```

### 9. What does `expect` do in Jest?

**Answer:**
`expect` is Jest's assertion function that compares an actual value with an expected value using various matchers. It creates an expectation object that provides methods to test different conditions.

**Common matchers:**
```javascript
expect(actual).toBe(expected);           // Strict equality (===)
expect(actual).toEqual(expected);        // Deep equality for objects/arrays
expect(actual).toContain(item);          // Array/string contains item
expect(actual).toBeTruthy();             // Truthy values
expect(actual).toBeFalsy();              // Falsy values
expect(fn).toHaveBeenCalled();          // Function was called
expect(fn).toHaveBeenCalledWith(arg);   // Function called with specific args
```

### 10. What is the difference between `.toBe()` and `.toEqual()`?

**Answer:**
- **`.toBe()`**: Uses strict equality (`===`) comparison. Best for primitive values like numbers, strings, and booleans. Checks if two values are the exact same reference.
- **`.toEqual()`**: Performs deep equality comparison. Used for objects and arrays to compare their contents recursively.

**Examples:**
```javascript
// .toBe() - Primitive values
expect(2 + 2).toBe(4);
expect('hello').toBe('hello');
expect(true).toBe(true);

// .toEqual() - Objects and arrays
expect({ name: 'John', age: 30 }).toEqual({ name: 'John', age: 30 });
expect([1, 2, 3]).toEqual([1, 2, 3]);

// This would fail with .toBe() but pass with .toEqual()
const obj1 = { name: 'John' };
const obj2 = { name: 'John' };
expect(obj1).toEqual(obj2); // ✅ Pass
expect(obj1).toBe(obj2);    // ❌ Fail (different references)
```

### 11. How do you test if a React component renders correctly?

**Answer:**
Use React Testing Library's `render` and `screen` utilities to test component rendering:

**Methods:**
1. **Text content testing**: Check if specific text appears
2. **Element queries**: Find elements by role, label, or test ID
3. **Snapshot testing**: Compare entire component structure

**Examples:**
```javascript
import { render, screen } from '@testing-library/react';

test('component renders with correct text', () => {
  render(<Welcome name="John" />);

  // Test text content
  expect(screen.getByText('Welcome, John!')).toBeInTheDocument();

  // Test by role
  expect(screen.getByRole('heading')).toHaveTextContent('Welcome, John!');

  // Test by test ID
  expect(screen.getByTestId('welcome-message')).toBeVisible();
});

// Snapshot testing
test('component matches snapshot', () => {
  const { container } = render(<Welcome name="John" />);
  expect(container.firstChild).toMatchSnapshot();
});
```

### 12. How do you simulate a button click in a test?

**Answer:**
Use `@testing-library/user-event` (preferred) or `fireEvent` from React Testing Library to simulate user interactions.

**Examples:**
```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Using userEvent (preferred - more realistic)
test('button click with userEvent', async () => {
  const user = userEvent.setup();
  const handleClick = jest.fn();

  render(<button onClick={handleClick}>Click me</button>);

  await user.click(screen.getByRole('button'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});

// Using fireEvent (simpler but less realistic)
test('button click with fireEvent', () => {
  const handleClick = jest.fn();

  render(<button onClick={handleClick}>Click me</button>);

  fireEvent.click(screen.getByRole('button'));
  expect(handleClick).toHaveBeenCalled();
});
```

### 13. How do you mock a function with Jest?

**Answer:**
Jest provides several ways to create mock functions for testing:

**Mock function creation:**
```javascript
// Create a mock function
const mockFn = jest.fn();

// Mock with return value
const mockFn = jest.fn().mockReturnValue('mocked result');

// Mock with implementation
const mockFn = jest.fn((x) => x * 2);

// Mock resolved promise
const mockAsyncFn = jest.fn().mockResolvedValue('async result');
```

**Testing mock functions:**
```javascript
test('function is called correctly', () => {
  const mockCallback = jest.fn();
  const testFunction = (callback) => callback('test input');

  testFunction(mockCallback);

  // Test if function was called
  expect(mockCallback).toHaveBeenCalled();
  expect(mockCallback).toHaveBeenCalledTimes(1);
  expect(mockCallback).toHaveBeenCalledWith('test input');
});
```

**Module mocking:**
```javascript
// Mock entire module
jest.mock('./api', () => ({
  fetchUser: jest.fn().mockResolvedValue({ id: 1, name: 'John' })
}));
```

### 14. What is snapshot testing and how do you utilize it?

**Answer:**
Snapshot testing captures a component's rendered output and saves it as a snapshot file. Future test runs compare against this snapshot to detect unexpected UI changes.

**How it works:**
1. First run creates a snapshot file
2. Subsequent runs compare current output with saved snapshot
3. Test fails if output differs from snapshot
4. Developer can update snapshots if changes are intentional

**Examples:**
```javascript
test('component matches snapshot', () => {
  const { container } = render(<UserCard name="John" email="john@example.com" />);
  expect(container.firstChild).toMatchSnapshot();
});

// Inline snapshots (stored in test file)
test('component renders correctly', () => {
  const { container } = render(<Button>Click me</Button>);
  expect(container.firstChild).toMatchInlineSnapshot(`
    <button>
      Click me
    </button>
  `);
});
```

**Best practices:**
- Use for components with stable UI structure
- Review snapshot changes carefully
- Keep snapshots small and focused
- Update snapshots when UI changes are intentional: `npm test -- --updateSnapshot`
