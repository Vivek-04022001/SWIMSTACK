import lor from "../assets/LOR.png";
import certificate from "../assets/certificate.png";
import TiltCard from "./utilities/TiltCard";

const Perks = () => {
  return (
    <section id="perks" 
    // className="bg-secondary/30"
    >
      <div className=" container max-w-6xl  mx-auto px-3 py-10 ">
        <div className="flex flex-col space-y-20 font-about">
          {/* headling */}
          <div className="text-4xl md:text-6xl text-center capitalize space-y-8">
            <h3 className="whitespace-nowrap bg-secondary inline-block text-black px-8 text-center max-w-full py-2 rounded-full border-2 border-secondary hover:bg-transparent text-3xl transition-color duration-150 ease-in-out ">
              Perks
            </h3>
          </div>

          {/* Offer Letter */}
          <div className="flex flex-col-reverse md:flex-row gap-6 pb-20">
            {/* image container */}
            <div className="md:w-1/2 w-full">
              <img src={lor} alt="about-image" className="w-full md:hidden shadow-3xl" />
              <TiltCard imageUrl={lor} />

            </div>
            {/* text content */}
            <div className="w-full md:w-1/2 font-about-text space-y-4 text-center md:text-left">
              <h3 className="text-4xl md:text-5xl tracking-wider text-black">
                Offer Letter
              </h3>
              <div className="hidden md:block text-black text-lg md:text-xl leading-66 space-y-4">
                <p>
                  At{" "}
                  <span className="whitespace-nowrap text-secondary text-2xl font-bold tracking-wider">
                    Swim Stack
                  </span>{" "}
                  , our offer letter is a testament to our unwavering commitment
                  to nurturing emerging talent.
                </p>
                <p>
                  Our meticulously crafted communication extends a formal
                  invitation, outlining numerous advantages, including
                  involvement in technically intricate projects, mentorship from
                  industry experts, and unrestricted access to cutting-edge
                  resources.
                </p>
                <p>
                  This letter underscores our dedication to fostering profound
                  skill development, robust professional growth, and a lasting
                  impact within the dynamic realm of internships.
                </p>
                <p>
                  Embark on your transformational journey with Swim Stack, where
                  success begins with this prestigious letter of acceptance.
                </p>
              </div>

              {/* short version */}
              <div className="md:hidden text-black text-lg md:text-xl space-y-4">
                <p>
                  Our offer letter symbolizes our dedication to nurturing
                  emerging talent. It invites you to technically intricate
                  projects, mentorship from experts, and cutting-edge resources.
                  Join{" "}
                  <span className="whitespace-nowrap text-secondary text-2xl font-bold tracking-wider">
                    Swim Stack
                  </span>{" "}
                  for profound skill development, professional growth, and
                  lasting impact in internships. Your success starts here."
                </p>
              </div>
            </div>
          </div>

          {/* Certificate */}
          <div className="flex flex-col-reverse gap-6">
            {/* image container */}
            <div className="w-full">
              <img src={certificate} alt="about-image" className="w-full md:hidden shadow-3xl" />
              <TiltCard imageUrl={certificate}/>
            </div>
            {/* text content */}
            <div className=" font-about-text space-y-4 text-center ">
              <h3 className="text-4xl md:text-5xl tracking-wider text-black">
                Certificate
              </h3>
              <div className="hidden md:block text-black text-lg md:text-xl leading-66 space-y-4">
                <p>
                  The{" "}
                  <span className="whitespace-nowrap text-secondary text-2xl font-bold tracking-wider">
                    Swim Stack
                  </span>{" "}
                  Certificate of Completion is a testament to your dedication
                  and proficiency in our rigorous internship program.
                </p>
                <p>
                  This prestigious credential signifies your mastery of advanced
                  concepts, industry-relevant skills, and your invaluable
                  contributions to our community.
                </p>
                <p>
                  It demonstrates your commitment to personal and professional
                  growth, enhancing your career prospects and marking you as a
                  distinguished alum of{" "}
                  <span className="whitespace-nowrap text-secondary text-2xl font-bold tracking-wider">
                    Swim Stack
                  </span>
                  .
                </p>
                <p>Congratulations on this remarkable achievement!</p>
              </div>

              {/* short version */}
              <div className="md:hidden text-black text-lg md:text-xl space-y-4">
                <p>
                  The{" "}
                  <span className="whitespace-nowrap text-secondary text-2xl font-bold tracking-wider">
                    Swim Stack
                  </span>{" "}
                  Certificate of Completion celebrates your dedication and
                  expertise, marking you as an accomplished alum.
                  Congratulations!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Perks;
