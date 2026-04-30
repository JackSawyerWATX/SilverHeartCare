
import kroger from "../../imports/KrogerRewards.png";
import goods from "../../imports/GoodsDrive.jpg"
import cleanup from "../../imports/VolunteerCleanup.jpg"
import fbcc from "../../imports/FBCC.png";

// Styles and Constants

const SECTION_BACKGROUND = "linear-gradient(to bottom, #d1d5db 0%, #d1d5db 10%, #f3f4f6 20%, #f3f4f6 100%)";

const PAGE_TITLE_STYLES = {
  fontFamily: "Arial Narrow, Roboto Condensed, sans-serif-condensed, sans-serif",
  color: "#3b82f6",
  textShadow: "-3px 4px 4px rgba(0, 0, 0, 0.3)",
  borderBottom: "4px solid #3b82f6",
  paddingBottom: "8px",
};

// Component Interfaces

interface ImageCardProps {
  src: string;
  alt: string;
  caption: string;
  containerHeight?: string;
}

interface SectionProps {
  title: string;
  children: React.ReactNode;
  image?: React.ReactNode;
}

interface PageTitleProps {
  title: string;
}

interface ImpactStatementProps {
  heading: string;
  content: string;
}

interface TwoColumnListProps {
  items: string[];
}

interface MissionVisionProps {
  image: string;
  imageAlt: string;
  imageCaption: string;
}

// Reusable Components

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

function PageTitle({ title }: PageTitleProps) {
  return (
    <div className="mb-16">
      <h2
        className="text-5xl md:text-6xl font-bold mb-8 inline-block"
        style={PAGE_TITLE_STYLES}
      >
        {title}
      </h2>
    </div>
  );
}

function ImpactStatement({ heading, content }: ImpactStatementProps) {
  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-lg p-12 text-white text-center mb-16">
      <h3 className="text-3xl font-bold mb-4">{heading}</h3>
      <p className="text-lg leading-relaxed">{content}</p>
    </div>
  );
}

function SubsectionTitle({ title }: { title: string }) {
  return <h5 className="text-xl font-bold text-gray-800 mb-3">{title}</h5>;
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5 text-gray-600 text-lg leading-relaxed mb-4">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

function TwoColumnList({ items }: TwoColumnListProps) {
  const mid = Math.ceil(items.length / 2);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
      <div>
        <BulletList items={items.slice(0, mid)} />
      </div>
      <div>
        <BulletList items={items.slice(mid)} />
      </div>
    </div>
  );
}

function MissionVision({ image, imageAlt, imageCaption }: MissionVisionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
      <div>
        <h3 className="text-3xl font-bold text-gray-800 mb-6">Mission Statement</h3>
        <SubsectionTitle title="Mission" />
        <p className="text-gray-600 text-lg leading-relaxed mb-4">
          At SHC, our mission is to enhance the quality of life for senior citizens by assisting 
          them in providing reliable transportation services and individualized support. Through 
          the dedication of our community-minded volunteers, we aim to foster a culture of care, 
          connection, and philanthropy.
        </p>
        <SubsectionTitle title="Vision" />
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
        src={image}
        alt={imageAlt}
        caption={imageCaption}
      />
    </div>
  );
}

function EstablishmentsSection({ establishments }: { establishments: string[] }) {
  return (
    <>
      <div>
        <h3 className="text-3xl font-bold text-gray-800 mb-6">More About Us</h3>
        <SubsectionTitle title="Establishments We Have Worked With:" />
      </div>
      <TwoColumnList items={establishments} />
    </>
  );
}

function KrogerRewardsSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-12">
      <img src={kroger} alt="Kroger Community Rewards" className="w-64 h-40 object-contain rounded-lg"/>
      <div>
        <h3 className="text-3xl font-bold text-gray-800">Members of The Kroger Community Rewards Program</h3>
      </div>
    </div>
  );
}

// Data

const GOALS = [
  "Raise awareness about the importance of senior care",
  "Raise funds to advance the cause",
  "Increase motivation for philanthropy in the community and among young adults",
  "Enrich our young minds with the wisdom of our elders",
];

const SERVICES_PRIMARY = [
  "Household Help",
  "Rides (Pickups and Dropoffs)",
  "Grocery Pickups",
  "and more!",
];

const SERVICES_SECONDARY = [
  "Distributing food items",
  "Volunteering with disaster relief efforts",
];

const ESTABLISHMENTS = [
  "Alings Chinese Bistro",
  "Atria Sugar Land",
  "Bellerive Senior Living",
  "Big Frog T-Shirts",
  "Brookdale First Colony",
  "Fort Bend Chamber of Commerce",
  "Fort Bend Seniors Meals on Wheels",
  "India Cultural Center",
  "India House",
  "Kroger at Sweetwater",
  "Sunbelt Imports",
  "Sugar Land City Council",
  "Sweetwater Country Club",
  "Texas Inpatient Consultants",
];

// Main Component

export function About() {
  return (
    <section
      className="py-20"
      style={{ background: SECTION_BACKGROUND }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <PageTitle title="About Silver Heart Care" />

        <ImpactStatement 
          heading="Our Impact"
          content="We are a registered 501(c)3 nonprofit organization based in Sugar Land, Texas. Our main goal is to support the well-being of seniors in our community."
        />

        {/* Our Goals Section */}
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
          <BulletList items={GOALS} />
        </Section>

        {/* Our Services Section */}
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
            <SubsectionTitle title="Provide the following services at no-cost to seniors:" />
            <BulletList items={SERVICES_PRIMARY} />
            <SubsectionTitle title="We also help seniors living in disadvantaged conditions by:" />
            <BulletList items={SERVICES_SECONDARY} />
          </div>
        </div>

        {/* Mission & Vision Section */}
        <MissionVision 
          image={cleanup}
          imageAlt="Volunteer cleaning services"
          imageCaption="Volunteers helping with household chores"
        />

        {/* Establishments Section */}
        <EstablishmentsSection establishments={ESTABLISHMENTS} />

        {/* Kroger Rewards Section */}
        <KrogerRewardsSection />
      </div>
    </section>
  );
}
