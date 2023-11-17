const Footer = () => {
  return (
    <footer className="bg-blue-400 text-white py-6">
      <div className="container mx-auto flex items-center justify-center">
        <div className="text-center">
          <div className="flex justify-center space-x-4"></div>
          <p className="mt-4">
            &copy; {new Date().getFullYear()} MindfulMeadows. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
