

export function About() {
  return (
    <section
      className="py-20"
      style={{
        background:
          "linear-gradient(to bottom, #d1d5db 0%, #d1d5db 10%, #f3f4f6 20%, #f3f4f6 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2
            className="text-5xl md:text-6xl font-bold mb-8 inline-block"
            style={{
              fontFamily:
                "Arial Narrow, Roboto Condensed, sans-serif-condensed, sans-serif",
              color: "#3b82f6",
              textShadow: "-3px 4px 4px rgba(0, 0, 0, 0.3)",
              borderBottom: "4px solid #3b82f6",
              paddingBottom: "8px",
            }}
          >
            About Silver Heart Care
          </h2>
          <div></div>
        </div>

            {/* Impact Statement */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg p-12 text-white text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">Our Impact</h3>
          <p className="text-lg leading-relaxed">
            {/* Add your impact statement here */}
            ​We are a registered 501(c)3 nonprofit organization based in Sugar Land, Texas. <br />
            Our main goal is to support the well-being of seniors in our community.
          </p>
        </div>

      {/* Our Goals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Goals</h3>
              <ul className="list-disc pl-5 text-gray-600 text-lg leading-relaxed mb-4">
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                {/* Goals List */}
                  <li>
                    Raise awareness about the importance of senior care
                  </li>
                  <li>
                    Raise funds to advance the cause 
                  </li>
                  <li>
                    Increase motivation for philanthropy in the community and among young adults
                  </li>
                  <li>
                    Enrich our young minds with the wisdom of our elders
                  </li>
                </p>
              </ul>
          </div>
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 text-lg">Add photo here</span>
          </div>
        </div>

      {/* Our Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center order-2 md:order-1">
            <span className="text-gray-500 text-lg">Add photo here</span>
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Services</h3>
              <h5 className="text-xl font-bold text-gray-800 mb-3">
                Provide the following services at no-cost to seniors:
              </h5>
            <ul className="list-disc pl-5 text-gray-600 text-lg leading-relaxed mb-4">
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                {/* Services list */}
                  <li>
                    Household Help
                  </li>
                  <li>
                    Assistance with Technology
                  </li>
                  <li>
                    Rides (Pickups and Dropoffs)
                  </li>
                  <li>
                    Grocery Pickups
                  </li>
                  <li>
                    and more!
                  </li>
                </p>
              </ul>
              <h5 className="text-xl font-bold text-gray-800 mb-3">
                We also help seniors living in disadvantaged conditions by:
              </h5>
            <ul className="list-disc pl-5 text-gray-600 text-lg leading-relaxed mb-4">
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                {/* Services list */}
                  <li>
                    Distributing food items
                  </li>
                  <li>
                    Volunteering with disaster relief efforts
                  </li>
                </p>
              </ul>
          </div>
        </div>

                  {/* More About Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">More About Us</h3>
              <h5 className="text-xl font-bold text-gray-800 mb-3">Mission</h5>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  {/* Add your mission text here */}
                  At SHC, our mission is to enhance the quality of life for senior citizens by assisting 
                  them in providing reliable transportation services and individualized support. Through 
                  the dedication of our community-minded volunteers, we aim to foster a culture of care, 
                  connection, and philanthropy.
                </p>
              <h5 className="text-xl font-bold text-gray-800 mb-3">Vision</h5>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {/* Add more mission details here */}
                  We envision a society where senior citizens are cherished and empowered, living their 
                  golden years with purpose, joy, and security. Our vision is to build a compassionate and 
                  connected community that celebrates the contributions of older adults while addressing 
                  the challenges they face. Through collaboration, education, and innovation, we strive to 
                  eliminate barriers, reduce isolation, and create a future where every senior citizen feels 
                  valued, supported, and inspired to lead a fulfilling life.
                </p>
                </div>
              <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 text-lg">Add photo here</span>
          </div>
          </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">More About Us</h3>

              <h5 className="text-xl font-bold text-gray-800 mb-3">Establishments We Have Worked With:</h5>
            </div>
            <div>
              <ul className="list-disc pl-5 text-gray-600 text-lg leading-relaxed mb-4">
                <li>Alings Chinese Bistro</li>
                <li>Atria Sugar Land</li>
                <li>Bellerive Senior Living</li>
                <li>Big Frog T-Shirts</li>
                <li>Brookdale First Colony</li>
                <li>Fort Bend Chamber of Commerce</li>
                <li>Fort Bend Seniors Meals on Wheels</li>
                <li>India Cultural Center</li>
                <li>India House</li>
                <li>Kroger at Sweetwater</li>
                <li>Sunbelt Imports</li>
                <li>Sweetwater Country Club</li>
                <li>Texas Inpatient Consultants</li>
              </ul>
            </div>

            <div>
              <h5 className="text-xl font-bold text-gray-800 mb-3">Establishments We Have Worked With:</h5>
            </div>
            <div>
              <ul className="list-disc pl-5 text-gray-600 text-lg leading-relaxed mb-4">
                <li>Sugar Land City Council</li>
                <li>Atria Sugar Land</li>
                <li>Bellerive Senior Living</li>
              </ul>
            </div>
          </div>
    </section>
  );
}
