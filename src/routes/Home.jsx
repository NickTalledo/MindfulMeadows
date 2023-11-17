const Home = () => {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl font-semibold text-gray-800 mt-2 mb-6">
            Welcome to MindfulMeadows: Nurturing Minds, Sharing Stories
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            MindfulMeadows is a sanctuary for anyone dealing with mental health
            challenges. It&apos;s a place to speak your heart out, seek advice,
            or just share your journey with others who understand. Here,
            you&apos;re among friends who face similar struggles.
          </p>

          <img
            src="https://images.unsplash.com/photo-1519791883288-dc8bd696e667?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Serene Nature"
            className="w-full custom-height object-cover rounded-lg mb-8"
          />
          <p className="text-lg text-gray-600 mb-8">
            In MindfulMeadows, share your experiences, exchange coping
            strategies, or simply find a listening ear. Our platform ensures
            complete anonymity, allowing you the freedom to express yourself
            without fear of judgment.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Join MindfulMeadows today, and become part of a supportive community
            that believes in empathy, understanding, and collective healing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
