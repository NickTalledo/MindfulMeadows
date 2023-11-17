const Resources = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1564121211835-e88c852648ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Mental Health Awareness"
            className="w-full object-cover h-64 sm:h-96"
          />
          <div className="p-6">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">
              Mental Health Resources
            </h1>
            <p className="text-gray-600 mb-6">
              Find information, support, and guidance for mental health issues.
              Below are some resources to help you get started.
            </p>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://www.nami.org/Home"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  National Alliance on Mental Illness (NAMI)
                </a>
              </li>
              <li>
                <a
                  href="https://www.who.int/health-topics/mental-health"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  World Health Organization: Mental Health
                </a>
              </li>
              <li>
                <a
                  href="https://www.mind.org.uk/"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mind: For Better Mental Health
                </a>
              </li>
              <li>
                <a
                  href="https://www.mentalhealth.gov/"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MentalHealth.gov
                </a>
              </li>
              <li>
                <a
                  href="https://www.samhsa.gov/find-help/national-helpline"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SAMHSA’s National Helpline
                </a>
              </li>
              <li>
                <span className="font-semibold">
                  Suicide Prevention Hotline:
                </span>{" "}
                Call 1-800-273-TALK (1-800-273-8255)
              </li>
              <li>
                <span className="font-semibold">Crisis Text Line:</span> Text
                HOME to 741741 (USA)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
