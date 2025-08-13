import React from "react";

function Allcategories() {
  const categories = [
    { name: "Web Development", desc: "Create responsive and dynamic websites." },
    { name: "Mobile Apps", desc: "Develop Android and iOS applications." },
    { name: "Data Science", desc: "Analyze data and build predictive models." },
    { name: "UI/UX Design", desc: "Design intuitive and engaging user experiences." },
    { name: "Cybersecurity", desc: "Protect systems from cyber threats." },
    { name: "Cloud Computing", desc: "Deploy scalable applications in the cloud." },
    { name: "Game Development", desc: "Unity, Unreal Engine, Godot projects." },
    { name: "WordPress & CMS", desc: "Themes, plugins, templates." },
    { name: "Cloud & DevOps", desc: "Docker, Kubernetes, AWS deployment scripts." },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-gray-950 to-gray-400 bg-clip-text text-transparent">All Categories</h1>

      <div className="grid h-full w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-gray-100 to-gray-600 h-[170px] w-[400px] rounded-lg p-6 hover:shadow-lg transition shadow-2xl shadow-gray-950"
          >
            <a
              href="#"
              className=" font-bold text-2xl    text-blue-800 hover:text-blue-800 hover:underline transition"
            >
              {category.name}
            </a>
            <p className="mt-2 text-gray-600 ">{category.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Allcategories;
