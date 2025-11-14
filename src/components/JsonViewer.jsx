function JsonViewer({ nodes, edges, show, handleSetShow }) {

  const jsonData = JSON.stringify({ nodes, edges }, null, 2);
  return (
    <div className="flex justify-center items-center mt-4">
      {!show && (
        <button
          className="  bg-blue-500 text-white px-3 py-1 rounded"
          onClick={() => handleSetShow(true)}
        >
          Show JSON
        </button>
      )}

      {show && (
        <div className="relative w-100 h-80 bg-gray-900 text-green-300 p-3 rounded-xl shadow-lg overflow-auto">

  <pre className="text-sm">{jsonData}</pre>


  <button
    className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded"
    onClick={() => handleSetShow(false)}
  >
    Close
  </button>
</div>

      )}
    </div>
  );
}
export default JsonViewer;
