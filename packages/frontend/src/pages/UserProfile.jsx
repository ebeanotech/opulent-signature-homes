import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const UserProfile = () => {
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "A passionate developer who loves to create beautiful and functional web applications.",
    profilePicture: "https://via.placeholder.com/150",
    socialLinks: {
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      github: "https://github.com/johndoe",
    },
    posts: [
      { id: 1, title: "My First Blog Post", date: "2023-01-01" },
      { id: 2, title: "Learning React", date: "2023-02-15" },
      { id: 3, title: "Understanding JavaScript Closures", date: "2023-03-10" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <div
          className="bg-cover bg-center h-56"
          style={{
            backgroundImage: "url(https://via.placeholder.com/600x200)",
          }}
        ></div>
        <div className="p-6">
          <div className="flex items-center space-x-6">
            <img
              className="w-32 h-32 rounded-full border-4 border-white -mt-16"
              src={user.profilePicture}
              alt={user.name}
            />
            <div>
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <p className="text-gray-600">{user.email}</p>
              <p className="mt-4">{user.bio}</p>
              <div className="mt-4 flex space-x-4">
                <a
                  href={user.socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href={user.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href={user.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900"
                >
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 bg-gray-50 border-t">
          <h2 className="text-xl font-bold mb-4">Posts</h2>
          <ul className="space-y-4">
            {user.posts.map((post) => (
              <li key={post.id} className="flex justify-between items-center">
                <span className="text-gray-800">{post.title}</span>
                <span className="text-gray-500 text-sm">
                  {new Date(post.date).toLocaleDateString()}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
