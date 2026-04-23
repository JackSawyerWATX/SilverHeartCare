
import kroger from "../../imports/KrogerRewards.png";
import goods from "../../imports/GoodsDrive.jpg"
import cleanup from "../../imports/VolunteerCleanup.jpg"
import fbcc from "../../imports/FBCC.png";

interface ImageCardProps {
  src: string;
  alt: string;
  caption: string;
  containerHeight?: string;
}

function ImageCard({ src, alt, caption, containerHeight = "h-96" }: ImageCardProps) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className={`bg-gray-300 ${containerHeight} rounded-lg flex items-center justify-center w-full`}>
        <img src={src} alt={alt} className="w-full h-full object-cover rounded-lg" />
      </div>
      <p className="text-center text-gray-600 text-md mt-3">{caption}</p>
    </div>
  );
}

interface SectionProps {
  title: string;
  children: React.ReactNode;
  image?: React.ReactNode;
}

function Section({ title, children, image }: SectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
      <div>
        <h3 className="text-3xl font-bold text-gray-800 mb-6">{title}</h3>
        {children}
      </div>
      {image && <div>{image}</div>}
    </div>
  );
}

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
        </div>

            {/* Impact Statement */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg p-12 text-white text-center mb-16">
          <h3 className="text-3xl font-bold mb-4">Our Impact</h3>
          <p className="text-lg leading-relaxed">
            {/* Add impact statement here */}
            ​We are a registered 501(c)3 nonprofit organization based in Sugar Land, Texas. <br />
            Our main goal is to support the well-being of seniors in our community.
          </p>
        </div>

      {/* Our Goals */}
      <Section 
        title="Our Goals"
        image={
          <ImageCard 
            src={fbcc} 
            alt="Fort Bend Chamber of Commerce" 
            caption="Proud members of FB Chamber of Commerce"
          />
        }
      >
        <ul className="list-disc pl-5 text-gray-600 text-lg leading-relaxed mb-4">
          <li>Raise awareness about the importance of senior care</li>
          <li>Raise funds to advance the cause</li>
          <li>Increase motivation for philanthropy in the community and among young adults</li>
          <li>Enrich our young minds with the wisdom of our elders</li>
        </ul>
      </Section>

      {/* Our Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div className="order-2 md:order-1">
          <ImageCard 
            src={goods} 
            alt="grocery pickup" 
            caption="Volunteers picking up and delivering groceries"
          />
        </div>
        <div className="order-1 md:order-2">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Services</h3>
          <h5 className="text-xl font-bold text-gray-800 mb-3">
            Provide the following services at no-cost to seniors:
          </h5>
          <ul className="list-disc pl-5 text-gray-600 text-lg leading-relaxed mb-4">
            <li>Household Help</li>
            <li>Assistance with Technology</li>
            <li>Rides (Pickups and Dropoffs)</li>
            <li>Grocery Pickups</li>
            <li>and more!</li>
          </ul>
          <h5 className="text-xl font-bold text-gray-800 mb-3">
            We also help seniors living in disadvantaged conditions by:
          </h5>
          <ul className="list-disc pl-5 text-gray-600 text-lg leading-relaxed mb-4">
            <li>Distributing food items</li>
            <li>Volunteering with disaster relief efforts</li>
          </ul>
        </div>
      </div>

      {/* More About Us */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Mission Statement</h3>
          <h5 className="text-xl font-bold text-gray-800 mb-3">Mission</h5>
          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            At SHC, our mission is to enhance the quality of life for senior citizens by assisting 
            them in providing reliable transportation services and individualized support. Through 
            the dedication of our community-minded volunteers, we aim to foster a culture of care, 
            connection, and philanthropy.
          </p>
          <h5 className="text-xl font-bold text-gray-800 mb-3">Vision</h5>
          <p className="text-gray-600 text-lg leading-relaxed">
            We envision a society where senior citizens are cherished and empowered, living their 
            golden years with purpose, joy, and security. Our vision is to build a compassionate and 
            connected community that celebrates the contributions of older adults while addressing 
            the challenges they face. Through collaboration, education, and innovation, we strive to 
            eliminate barriers, reduce isolation, and create a future where every senior citizen feels 
            valued, supported, and inspired to lead a fulfilling life.
          </p>
        </div>
        <ImageCard 
          src={cleanup}
          alt="Volunteer cleaning services"
          caption="Volunteers helping with household chores"
        />
      </div>
      <div>
        <h3 className="text-3xl font-bold text-gray-800 mb-6">More About Us</h3>
        <h5 className="text-xl font-bold text-gray-800 mb-3">Establishments We Have Worked With:</h5>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div>
          <ul className="list-disc pl-5 text-gray-600 text-lg leading-relaxed mb-4">
            <li>Alings Chinese Bistro</li>
            <li>Atria Sugar Land</li>
            <li>Bellerive Senior Living</li>
            <li>Big Frog T-Shirts</li>
            <li>Brookdale First Colony</li>
            <li>Fort Bend Chamber of Commerce</li>
            <li>Fort Bend Seniors Meals on Wheels</li>
          </ul>
        </div>
        <div>
          <ul className="list-disc pl-5 text-gray-600 text-lg leading-relaxed mb-4">
            <li>India Cultural Center</li>
            <li>India House</li>
            <li>Kroger at Sweetwater</li>
            <li>Sunbelt Imports</li>
            <li>Sugar Land City Council</li>
            <li>Sweetwater Country Club</li>
            <li>Texas Inpatient Consultants</li>
          </ul>
        </div>
      </div>

      {/* Kroger Rewards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
        <img src={kroger} alt="Kroger Community Rewards" className="w-64 h-40 object-contain rounded-lg"/>
        <div>
          <h3 className="text-3xl font-bold text-gray-800">Members of The Kroger Community Rewards Program</h3>
        </div>
      </div>
          </div>
    </section>
  );
}
