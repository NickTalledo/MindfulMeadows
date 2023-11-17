import supabase from "../utils/supabase";
import bcrypt from "bcryptjs";

import { useState } from "react";

const CreatePost = () => {
  const [post, setPost] = useState({
    disorder: "",
    issue: "",
    description: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password } = post;

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(password)) {
      setError(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match. Please try again.");
      return;
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    try {
      const { data, error } = await supabase
        .from("posts")
        .insert([{ ...post, password: password }]);
      if (error) throw error;
      console.log("New post added:", data);
      setMessage("Post created successfully!");
      setError("");
      setPost({ disorder: "", issue: "", description: "", password: "" });
      setConfirmPassword("");
    } catch (error) {
      console.error("Error creating post:", error.message);
      setError("Error creating post. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-8 bg-blue-200">
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-center mb-6">
          Create a New Post
        </h1>
        {message && (
          <div className="text-green-500 mb-4 text-center">{message}</div>
        )}
        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="disorder"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Disorder
            </label>
            <input
              type="text"
              id="disorder"
              name="disorder"
              value={post.disorder}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="issue"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Issue
            </label>
            <input
              type="text"
              id="issue"
              name="issue"
              value={post.issue}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={post.description}
              onChange={handleChange}
              rows="4"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Password (for post editing)
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={post.password}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Create Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
