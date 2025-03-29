const Card = ({username, role = "BA"}) => {
    return (
      <div className="max-w-sm mx-auto bg-white shadow-md rounded-2xl overflow-hidden p-4">
        <div className="flex items-center space-x-4">
          <img
            className="w-12 h-12 rounded-full"
            src="/pic.png"
            alt="Avatar"
          />
          <div>
            <h2 className="text-lg font-semibold">{username}</h2>
            <p className="text-gray-500 text-sm">{role}</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-gray-700 text-sm">
            Passionate about crafting clean UI with React and Tailwind. Always learning something new!
          </p>
        </div>
      </div>
    );
  };
  
  export default Card;