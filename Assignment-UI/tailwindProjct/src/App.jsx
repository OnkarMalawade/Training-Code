import "./App.css";

function App() {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="p-6 max-w-sm bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-gray-800">
            Hello, Tailwind CSS!
          </h1>
          <p className="mt-2 text-gray-600">
            This is a React component styled with Tailwind.
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Click Me
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
