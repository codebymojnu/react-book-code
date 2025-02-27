// Add Event Handelar in JSX

export default function App() {
  // Define handleClick function
  function handleClick() {
    // develop your logic here
    alert("Why you click me!");
  }

  // add event handler to button JSX
  return (
    <div className="flex justify-center mt-4">
      <button
        onClick={handleClick}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all cursor-pointer"
      >
        Click Me
      </button>
    </div>
  );
}
