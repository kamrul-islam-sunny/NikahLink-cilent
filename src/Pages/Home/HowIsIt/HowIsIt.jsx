

const HowIsIt = () => {
    return (
        <div>
            <div className="bg-gradient-to-b from-rose-50 to-pink-100 py-16">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
      How It Works
    </h2>
    <p className="text-lg text-gray-600 mb-12">
      Find your perfect match in just a few simple steps. We’ve made it easy
      for you to connect with genuine individuals.
    </p>

    {/* Steps */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Step 1 */}
      <div className="bg-white p-6 shadow-lg rounded-2xl">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-pink-500 text-white rounded-full h-12 w-12 flex items-center justify-center text-lg font-bold">
            1
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          Create Your Profile
        </h3>
        <p className="text-gray-600">
          Sign up and fill out your profile with all the details about yourself
          and what you`re looking for.
        </p>
      </div>

      {/* Step 2 */}
      <div className="bg-white p-6 shadow-lg rounded-2xl">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-pink-500 text-white rounded-full h-12 w-12 flex items-center justify-center text-lg font-bold">
            2
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          Browse Matches
        </h3>
        <p className="text-gray-600">
          Explore profiles tailored to your preferences. Use filters like age,
          location, and interests.
        </p>
      </div>

      {/* Step 3 */}
      <div className="bg-white p-6 shadow-lg rounded-2xl">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-pink-500 text-white rounded-full h-12 w-12 flex items-center justify-center text-lg font-bold">
            3
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">
          Connect & Communicate
        </h3>
        <p className="text-gray-600">
          Send messages, connect with matches, and take the next step toward
          finding your life partner.
        </p>
      </div>
    </div>

    {/* CTA Section */}
    <div className="mt-12">
      <a
        href="/premium-membership"
        className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition transform duration-300"
      >
        Join Now & Start Your Journey
      </a>
    </div>
  </div>
</div>

        </div>
    );
};

export default HowIsIt;