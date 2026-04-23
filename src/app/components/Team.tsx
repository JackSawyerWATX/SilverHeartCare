
import raghav from "../../imports/Raghav.jpg";
import sanjay from "../../imports/Sanjay.jpg";
import meena from "../../imports/Meenakshi.jpg";
import devika from "../../imports/Devika.jpg";
import virendra from "../../imports/Virendra.jpg";
import upma from "../../imports/Upma.jpg";
import advisoryBoard from "../../imports/advisoryBoard.jpg"


interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  image?: any;
}

function TeamMemberCard({ name, role, bio, image }: TeamMemberCardProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
      <div>
        <h3 className="text-3xl font-bold text-gray-800 mb-2">{name}</h3>
        <p className="text-xl font-semibold text-blue-600 mb-6">{role}</p>
        <p className="text-gray-600 text-lg leading-relaxed">{bio}</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center w-full overflow-hidden">
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover rounded-lg" />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-gray-500">
              <span>Photo placeholder</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

interface AdvisoryGridProps {
  advisory: string[];
  groupPhoto?: string;
}

function Advisory({ advisory, groupPhoto }: AdvisoryGridProps) {
  return (
    <div className="mb-20">
      <div className="bg-gray-300 h-120 rounded-lg flex items-center justify-center w-full overflow-hidden mb-12">
        {groupPhoto ? (
          <img src={groupPhoto} alt="Advisory board group photo" className="w-full h-full object-cover rounded-lg" />
        ) : (
          <div className="flex items-center justify-center w-full h-full text-gray-500">
            <span>Photo placeholder</span>
          </div>
        )}
      </div>
      <div className="bg-white p-8 rounded-lg border border-gray-200">
        <p className="text-gray-700 text-lg leading-relaxed">
          {advisory.join(" • ")}
        </p>
      </div>
    </div>
  );
}

export function Team() {
  const boardMembers = [
    {
      name: "Sanjay Singh",
      role: "Board Member",
      bio: "Sanjay is an energy industry executive and a chemical engineer with an MBA. He is a committed volunteer, and has been a director on the Board of KBR Heritage Federal Credit Union for over six years. He believes that the best way for him to support his community is to work with the seniors. ​In his spare time, Sanjay enjoys gardening, carpentry, and camping.",
      image: sanjay,
    },
    {
      name: "Meenakshi Sanjay",
      role: "Board Member",
      bio: "Meenakshi is a career educator with an MBA, currently working in Special Education in Fort Bend School District. She volunteers at Fort Bend Education Foundation and has a career in education spanning over 10 years. In her spare time, Meenakshi enjoys running, meditating, and traveling.",
      image: meena,
    },
    {
      name: "Devika Singh",
      role: "Board Member",
      bio: "Devika is a graduate of Texas A&M University and George Washington University, and currently works at the U.S. Chamber of Commerce as an events manager. She truly believes that interacting with seniors is the most fruitful way to volunteer and gain wisdom from the local community. In her spare time, Devika enjoys painting, reading, and traveling. ​",
      image: devika,
    },
    {
      name: "Virendra Patel",
      role: "Board Member",
      bio: "Virendra Patel was born in India in 1968. Virendra has received his B.S. degree in Electrical Engineering from University of Pune. After graduation, he migrated to Houston in 1994. After completion of his M.S. degree, he started his career as a Software Engineer. As of today, Virendra still continues his career in the field of Computer Science along with pursuing his passion for trading. Along with with his full time job, Virendra is currently managing a hedge fund. Virendra is currently married with two kids.",
      image: virendra,
    },
    {
      name: "Upma Shah",
      role: "Board Member",
      bio: "Upma Shah has been involved with Silver Heart Care as a supporter and sponsor for several years. She has worked to strengthen our relationships with the community. She is an entrepreneur.",
      image: upma,
    },
  ];

  const advisory = [
    "Advisory 1",
    "Advisory 2",
    "Advisory 3",
    "Advisory 4",
    "Advisory 5",
    "Advisory 6",
    "Advisory 7",
    "Advisory 8",
    "Advisory 9",
    "Advisory 10",
    "Advisory 11",
    "Advisory 12",
    "Advisory 13",
    "Advisory 14",
    "Advisory 15",
  ];

  return (
    <section
      className="py-20"
      style={{
        background:
          "linear-gradient(to bottom, #d1d5db 0%, #d1d5db 10%, #f3f4f6 20%, #f3f4f6 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Page Title */}
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
            Our Team
          </h2>
        </div>

        {/* Founder Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Founder</h2>
          <TeamMemberCard
            name="Raghav Singh"
            role="Founder"
            bio="Raghav is a junior at the University of Texas at Austin and is the founder of Silver Heart Care. 
            He started the organization In 2020, during the COVID-19 pandemic. He received much of his inspiration to launch Silver Heart Care from experiences he had with his grandparents. Raghav has always been passionate about service and giving back to the community, and after seeing the situation many seniors are in, he decided to launch Silver Heart Care. 
            He currently runs many of the day-to-day activities in the organization, including planning events, managing sign-ups, coordinating with other organizations, and is responsible for the volunteer youth members."
            image={raghav}
          />
        </div>

        {/* Board of Directors Section */}
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Board of Directors</h2>
          {boardMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              role={member.role}
              bio={member.bio}
              image={member.image}
            />
          ))}
        </div>

        {/* Advisory Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-12">Silver Heart Care Advisory Board</h2>
          <Advisory advisory={advisory} groupPhoto={advisoryBoard}/>
        </div>
      </div>
    </section>
  );
}
