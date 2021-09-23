import "./index.css";

function App() {
  return (
    <body class="min-h-screen px-8 py-96 bg-black">
      <div class="grid gap-8 items-start justify-center">
        <div class="relative group">
          <div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 via-yellow-600 to-purple-600 rounded-lg filter blur-lg opacity-75 group-hover:opacity-100 transition duration-200"></div>
          <button class="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
            <span class="flex items-center space-x-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="text-pink-600 transform -rotate-45 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span class="pr-6 text-gray-100">Let's go PAPAFAM 2021</span>
            </span>
            <span class="pl-6 text-indigo-400 group-hover:tet-gray-100 transition duration-200">
              See what's new &rarr;
            </span>
          </button>
        </div>
      </div>
    </body>
  );
}

export default App;
