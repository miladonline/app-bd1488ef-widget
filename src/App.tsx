interface ToolOutput { structuredContent?: any; }
declare global { interface Window { openai?: { toolOutput?: ToolOutput; }; } }

function App() {
  const data = window.openai?.toolOutput?.structuredContent;
  
  if (!data) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <h1 className="text-4xl font-bold text-indigo-600 mb-4">Hello World! 👋</h1>
          <p className="text-gray-700 text-lg mb-6">
            Welcome to your simple React widget built with TypeScript, Vite, and Tailwind CSS.
          </p>
          <div className="border-t border-gray-200 pt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Data from OpenAI:</h2>
            <pre className="bg-gray-50 rounded-lg p-4 overflow-auto text-sm border border-gray-200">
              <code className="text-gray-800">{JSON.stringify(data, null, 2)}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;