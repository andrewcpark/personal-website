import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>Andrew | Resume</title>
        <meta
          name="description"
          content="I’m a software engineer experienced in scaling full-stack JavaScript applications."
        />
        <link href="public/assets/acp-logo.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Andrew C Park</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/andrew-c-park/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/andrewcpark"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className=" uppercase text-center underline text-[18px] py-2">
            {" "}
            Technical Skills
          </h5>
          <p className="py-2">
            <span className="px-2"> JavaScript (ES6+) </span> |
            <span className="px-2"> TypeScript </span> |
            <span className="px-2"> React (Router, Hooks) </span> |
            <span className="px-2"> Redux </span> |
            <span className="px-2"> Node.js </span> |
            <span className="px-2"> Express.js </span> |
            <span className="px-2"> webpack </span> |
            <span className="px-2"> Git </span> |
            <span className="px-2"> SQL </span> |
            <span className="px-2"> NoSQL </span> |
            <span className="px-2"> HTML </span> |
            <span className="px-2"> CSS/SCSS </span> |
            <span className="px-2"> Redis </span> |
            <span className="px-2"> Next.js </span> |
            <span className="px-2"> bcrypt </span> |
            <span className="px-2"> testing framworks (Jest, Supertest) </span>{" "}
            |<span className="px-2"> Agile Methodologies </span>
          </p>
          <p className="py-2">
            <span className="font-bold">Amazon Web Services</span>
            <span className="px-2">|</span> Elastic Beanstalk
            <span className="px-2">|</span> EC2
            <span className="px-2">|</span> ECR
            <span className="px-2">|</span> RDS
          </p>
        </div>

        <h5 className="uppercase text-center underline text-[18px] py-4">
          Professional Experience
        </h5>

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">ShipAid</span>
            <span className="px-2">|</span> Shopify Shipping Protection App
          </p>
          <p className="py-1 italic">11/2022 - Present</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Developed custom scripts using Javascript for customers’ software
              integration and frontend solutions while optimizing their
              operational performance
            </li>
            <li>
              Designed and improved the frontend application by streamlining
              client experiences utilizing React following UI/UX best practices
            </li>
            <li>
              Oversaw internal and customer troubleshooting, responsible for
              software maintenance requiring deep understanding of the codebase
              and Shopify systems
            </li>
            <li>
              Worked closely with a remote team in an Agile environment, taking
              part in weekly stand ups and code reviews
            </li>
          </ul>
        </div>

        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">RediSomm</span>
            <span className="px-2">|</span> Redis Monitoring Tool
          </p>
          <p className="py-1 italic">4/2022 - Present</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Built the frontend application with React and React Router (to
              optimize for performance and prevent re-renders after navigating
              to a new page) and React Hooks (for state management flexibility
              and re-render predictability)
            </li>
            <li>
              Organized the backend logic with Express, orchestrating the
              receiving and routing of APIs to customized middleware resulting
              in a flexible backend with global and local error handlers
            </li>
            <li>
              Stored Redis expired key-value data in a NoSQL database for its
              quick lookup time and ease of use as documents using key-value
              pairs to achieve scalability and maintain large volumes of
              unstructured data types
            </li>
            <li>
              Created the application’s landing page by implementing Next.js for
              its intuitive page routing, quick and SEO-friendly static-site
              generation, and built-in API functionality
            </li>
            <li>
              Wrote tests using Jest and Supertest frameworks, following
              Test-Driven Development principles to minimize debugging time,
              ensuring a consistent bug free user experience
            </li>
            <li>
              Product developed under tech accelerator OS Labs
              (opensourcelabs.io)
            </li>
          </ul>
        </div>

        {/* OPEN SOURCE PROJECTS */}
        <h5 className=" uppercase text-center underline text-[18px] py-4">
          Open Source Projects
        </h5>

        <div className="py-6">
          <p className="italic">
            <span className="font-bold"> Bluefin </span>
            <span className="px-2">|</span> Real Estate Search Application
          </p>
          <p className="py-1 italic">2022</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Developed the frontend of the React application, incorporating
              React Router to navigate to multiple pages without making
              unnecessary API calls to the server and React Portal to render a
              modal component that exists outside of its parent DOM hierarchy
            </li>
            <li>
              Integrated third-party APIs, Google Maps and Zillow to allow users
              to request queries of active home listings in a specified area
              then display the listings on an interactive map and list of
              listing cards
            </li>
          </ul>
        </div>

        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Pulse </span>
            <span className="px-2">|</span> Job Tracking Application
          </p>
          <p className="py-1 italic">2022</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Implemented the frontend state management with Redux to manage a
              deeply interconnected application, leveraging a consistent state
              container as the single source of truth from frequent dispatches
              to state
            </li>
            <li>
              Designed and implemented the application UI leveraging Bootstrap
              to build responsive web displays, using customizable and reusable
              components
            </li>
            <li>
              Deployed and integrated a PostgreSQL database to build a
              structured organization of relational data that can be quickly
              accessed with a relational query language, being efficient with
              complex and large volumes of required data
            </li>
            <li>
              Ensured stability and robustness in the codebase by writing unit
              tests using Jest, simplifying the debugging process
            </li>
          </ul>
        </div>

        <div className="py-6">
          <p className="italic">
            <span className="font-bold"> NFT Generator </span>
            <span className="px-2">|</span> NFT Customization Application
          </p>
          <p className="py-1 italic">2022</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Created a consumer facing frontend application using HTML, CSS,
              and JavaScript that produces a layered image file of dynamically
              rendered images based on user inputs resulting in quick client
              side scripting and versatile functionality
            </li>
          </ul>
        </div>
        <div className="py-6">
          <p>
            <span className="uppercase font-bold"> Education: </span>
            <span className="px-2 font-bold"> B.A. </span> @ University of
            California, Riverside <span> | </span>
            <span className="px-2 font-bold"> Software Engineering </span> @
            Codesmith
          </p>
          <p>
            <span className="uppercase font-bold"> Community Engagement: </span>
            <span className="px-2 italic">
              "Cache is King, The Importance of Caching"
            </span>{" "}
            Public Talk | Single Sprout Speaker Series
          </p>
          <p>
            <span className="uppercase font-bold"> Certifications: </span>
            <span className="px-2">
              AWS Certified Cloud Practitioner
            </span>
          </p>
          <p>
            <span className="uppercase font-bold"> Interests & Hobbies </span>
            <span className="px-2"> Training Mixed Martial Arts </span> |
            <span className="px-2"> Traveling to Hawaii </span> |
            <span className="px-2"> Visiting Open Houses </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default resume;
