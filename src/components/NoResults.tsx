export const NoResults = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <svg className="mb-3 h-8 w-8 fill-gray-400" version="1.1" viewBox="0 0 24 24">
        <path d="M21.24,19.83l-5.64-5.64C16.48,13.02,17,11.57,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7c0,3.87,3.13,7,7,7 c1.57,0,3.02-0.52,4.19-1.4l5.64,5.64L21.24,19.83z M5,10c0-2.76,2.24-5,5-5s5,2.24,5,5c0,2.76-2.24,5-5,5S5,12.76,5,10z"></path>
      </svg>
      <h2 className="text-xl font-bold text-gray-800">No SVGs found</h2>
      <p className="text-gray-500">Try another website or adjust the URL</p>
    </div>
  )
}
