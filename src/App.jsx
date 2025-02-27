// Add Event Handelar in JSX

function AlertButton({ message, children }) {
  return (
    <button
      onClick={() => alert(message)}
      className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all cursor-pointer"
    >
      {children}
    </button>
  );
}

export default function App() {
  // add event handler to button JSX
  return (
    <div className="flex justify-center mt-4 gap-3">
      <AlertButton message="Playing Movie...">Play this Movie</AlertButton>
      <AlertButton message="Image Uploading...">Upload Image</AlertButton>
    </div>
  );
}
