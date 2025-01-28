const HowIsIt = () => {
  return (
    <div className="bg-gradient-to-b from-rose-50 to-pink-100 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center ">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          How It Works
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Find your perfect match in just a few simple steps. We’ve made it easy
          for you to connect with genuine individuals.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {/* Step 1 - Create Account */}
          <div className="bg-white p-6 shadow-lg rounded-2xl flex flex-col items-center w-72 md:w-80 transition-transform transform hover:scale-105">
            <div className="bg-pink-500 text-white rounded-full h-12 w-12 flex items-center justify-center text-lg font-bold mb-4 ">
              1
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Create Account
            </h3>
            <p className="text-gray-600 text-center">
              Sign up by providing basic details like name, email, and password
              to get started.
            </p>
          </div>

          {/* Step 2 - Edit Your BioData */}
          <div className="bg-white p-6 shadow-lg rounded-2xl flex flex-col items-center w-72 md:w-80 transition-transform transform hover:scale-105">
            <div className="bg-pink-500 text-white rounded-full h-12 w-12 flex items-center justify-center text-lg font-bold mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Edit Your BioData
            </h3>
            <p className="text-gray-600 text-center">
              Fill in your detailed bio, including age, profession, and
              preferences for a match.
            </p>
          </div>

          {/* Step 3 - Save and Publish */}
          <div className="bg-white p-6 shadow-lg rounded-2xl flex flex-col items-center w-72 md:w-80 transition-transform transform hover:scale-105">
            <div className="bg-pink-500 text-white rounded-full h-12 w-12 flex items-center justify-center text-lg font-bold mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Save and Publish
            </h3>
            <p className="text-gray-600 text-center">
              Once you`re happy with your bio, save and publish it to make your
              profile visible.
            </p>
          </div>

          {/* Step 4 - Browse Matches */}
          <div className="bg-white p-6 shadow-lg rounded-2xl flex flex-col items-center w-72 md:w-80 transition-transform transform hover:scale-105">
            <div className="bg-pink-500 text-white rounded-full h-12 w-12 flex items-center justify-center text-lg font-bold mb-4">
              4
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Browse Matches
            </h3>
            <p className="text-gray-600 text-center">
              Explore potential matches using filters like age, location, and
              interests.
            </p>
          </div>

          {/* Step 5 - Connect & Communicate */}
          <div className="bg-white p-6 shadow-lg rounded-2xl flex flex-col items-center w-72 md:w-80 transition-transform transform hover:scale-105">
            <div className="bg-pink-500 text-white rounded-full h-12 w-12 flex items-center justify-center text-lg font-bold mb-4">
              5
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Connect & Communicate
            </h3>
            <p className="text-gray-600 text-center">
              Send messages, chat with potential matches, and take the next step
              toward a relationship.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="/dashboard"
            className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition transform duration-300"
          >
            Join Now & Start Your Journey
          </a>
        </div>
      </div>
    </div>
  );
};

export default HowIsIt;
