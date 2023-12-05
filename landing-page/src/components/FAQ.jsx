import faq from "../assets/faq.jpg";

const FAQ = () => {
  return (
    <section id="faq" className="bg-accent">
      <div className="container max-w-6xl mx-auto px-3 py-10 ">
        <div className="flex flex-col gap-6 font-about">
          {/* headline */}
          <div className="mb-20 text-4xl md:text-6xl text-center capitalize space-y-8">
            <h3 className="whitespace-nowrap bg-secondary inline-block text-primary px-8 text-center max-w-full py-2 rounded-full border-2 border-secondary hover:bg-transparent text-3xl transition-color duration-150 ease-in-out">
              F.A.Q
            </h3>
            <p className="text-primary text-xl md:max-w-2xl mx-auto">
              Here are some of our FAQs. If you have any other questions you'd
              like answered please feel free to email us.
            </p>
          </div>
          {/* Accordian Container */}
          <div className="max-w-2xl text-md md:text-xl  m-8 mx-auto overflow-hidden">
            {/* <!-- Tab 1 --> */}
            <div className="py-1 border-b outline-none group" tabindex="1">
              {/* <!-- Tab Flex Container --> */}
              <div className="flex items-center justify-between py-3 text-primary transition duration-500 cursor-pointer group ease">
                {/* <!-- Tab Title --> */}
                <div className="transition duration-500 ease group-hover:text-secondary">
                  What is SWIM STACK Intern's virtual internship certification?
                </div>
                {/* <!-- Arrow --> */}
                <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>

              {/* <!-- Tab Inner Content --> */}
              <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                <p class="py-2 text-justify text-primary">
                  This one-month (4-week) Virtual Internship Certification
                  program at Evolve Intern focuses on empowering interns through
                  hands-on engagement with minor projects, fostering skill
                  enhancement.Upon successful completion, interns are rewarded
                  with a one-month internship certificate, recognizing their
                  dedication and achievement in our immersive learning
                  environment.
                </p>
              </div>
            </div>
            {/* <!-- Tab 2 --> */}
            <div className="py-1 border-b outline-none group" tabindex="1">
              {/* <!-- Tab Flex Container --> */}
              <div className="flex items-center justify-between py-3 text-primary transition duration-500 cursor-pointer group ease">
                {/* <!-- Tab Title --> */}
                <div className="transition duration-500 ease group-hover:text-secondary">
                  How to apply for Internship?
                </div>
                {/* <!-- Arrow --> */}
                <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>

              {/* <!-- Tab Inner Content --> */}
              <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                <p class="py-2 text-justify text-primary">
                  First of all, go to the Internship section. There you select
                  the domain of your interest and click on apply now and fill
                  the google form. Note*: Please fill in the required details
                  correctly in the google form.
                </p>
              </div>
            </div>
            {/* <!-- Tab 3 --> */}
            <div className="py-1 border-b outline-none group" tabindex="1">
              {/* <!-- Tab Flex Container --> */}
              <div className="flex items-center justify-between py-3 text-primary transition duration-500 cursor-pointer group ease">
                {/* <!-- Tab Title --> */}
                <div className="transition duration-500 ease group-hover:text-secondary">
                  I have filled the internship form, What's next?
                </div>
                {/* <!-- Arrow --> */}
                <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>

              {/* <!-- Tab Inner Content --> */}
              <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                <p class="py-2 text-justify text-primary">
                  If you have correctly filled all the required fields in the
                  Google Form, you will receive an offer letter from us before
                  the start of your internship. All important information and
                  announcements regarding the internship will be sent to you by
                  mail.
                </p>
              </div>
            </div>
            {/* <!-- Tab 4 --> */}
            <div className="py-1 border-b outline-none group" tabindex="1">
              {/* <!-- Tab Flex Container --> */}
              <div className="flex items-center justify-between py-3 text-primary transition duration-500 cursor-pointer group ease">
                {/* <!-- Tab Title --> */}
                <div className="transition duration-500 ease group-hover:text-secondary">
                  What to do for task related queries, change domain and offer
                  letter or certificate correction?
                </div>
                {/* <!-- Arrow --> */}
                <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>

              {/* <!-- Tab Inner Content --> */}
              <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                <p class="py-2 text-justify text-primary">
                  If you have any task related queries, change domain and offer
                  letter or certificate correction, then contact on WhatsApp.
                </p>
              </div>
            </div>
            {/* <!-- Tab 5 --> */}
            <div className="py-1 border-b outline-none group" tabindex="1">
              {/* <!-- Tab Flex Container --> */}
              <div className="flex items-center justify-between py-3 text-primary transition duration-500 cursor-pointer group ease">
                {/* <!-- Tab Title --> */}
                <div className="transition duration-500 ease group-hover:text-secondary">
                  I Have Completed My Tasks Well Before Deadline. When Will I
                  Get a Certificate?
                </div>
                {/* <!-- Arrow --> */}
                <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>

              {/* <!-- Tab Inner Content --> */}
              <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                <p class="py-2 text-justify text-primary">
                  You can submit your task through task submission form if you
                  have received it or wait for it to be shared. If you have
                  submitted the task before the deadline, Please expect your
                  completion certificate in the 1st week of next month.
                </p>
              </div>
            </div>
            {/* <!-- Tab 6 --> */}
            <div className="py-1 border-b outline-none group" tabindex="1">
              {/* <!-- Tab Flex Container --> */}
              <div className="flex items-center justify-between py-3 text-primary transition duration-500 cursor-pointer group ease">
                {/* <!-- Tab Title --> */}
                <div className="transition duration-500 ease group-hover:text-secondary">
                  Is there any fee for internship?
                </div>
                {/* <!-- Arrow --> */}
                <div className="transition duration-500 ease group-focus:-rotate-180 group-focus:text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>

              {/* <!-- Tab Inner Content --> */}
              <div className="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
                <p class="py-2 text-justify text-primary">
                  The internship program itself has no registration fee,
                  providing accessibility to all interested candidates. However,
                  please be advised that detailed information regarding
                  associated fees will be disclosed within the Submission Form.
                  These fees contribute to the issuance of essential documents
                  such as Certificates of Offer, Letter of Recommendation, and
                  Certificate of Completion, alongside provision for additional
                  benefits and company development initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
