"use client";

export default function Page() {
  return (
    <div className="flex flex-col gap-28">
      <div className="experience">
        <div className="mb-10 text-2xl">
          <h1 className="font-bold">Work Experience</h1>
        </div>
        <div className="flex flex-col gap-16">
          <div className="flex flex-row justify-center gap-x-16 gap-y-5 flex-wrap max-sm:justify-start">
            <div className="min-w-52 w-1/3">
              <h2 className="font-bold mb-2">
                Software Engineer &#40;ServiceNow&#41; & Certified Admin
              </h2>
              <h3 className="font-light text-sm">
                Northumbria University, Newcastle
              </h3>
              <p className="font-light text-sm">9/2023 – 6/2024</p>
            </div>

            <div className="flex-1 min-w-52">
              <ul className="flex flex-col gap-2 list-disc p-5 pl-10 backdrop-blur-lg rounded-lg bg-gradient-to-tr from-sky-800/10 to-indigo-900/10">
                <li>
                  Admin-ed and configured 4 ServiceNow instances including a
                  live instance
                </li>
                <li>
                  Aced ServiceNow Certified System Administrator (CSA) exam and
                  was certified
                </li>
                <li>
                  Developed a headless CMS (Content Management System) for the
                  self-service portal using HTML, SCSS, AngularJS, RDBs
                </li>
                <li>
                  Created UI pages using JavaScript and Jelly scripting while
                  using ServiceNow APIs
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-row justify-center gap-x-16 gap-y-5 flex-wrap max-sm:flex-col-reverse">
            <div className="flex-1 min-w-52">
              <ul className="flex flex-col gap-2 list-disc p-5 pl-10 backdrop-blur-lg rounded-lg bg-gradient-to-tr from-sky-800/10 to-indigo-900/10">
                <li>
                  Delivered a modern-looking self-service portal for a start-up
                  using HTML, SCSS, AngularJS, RDBs
                </li>
                <li>
                  Implemented a headless CMS for the self-service portal using
                  HTML, SCSS, AngularJS, RDBs
                </li>
              </ul>
            </div>

            <div className="min-w-52 w-1/3">
              <h2 className="font-bold mb-2">Freelance Software Engineer</h2>
              <h3 className="font-light text-sm">IKWA, Newcastle</h3>
              <p className="font-light text-sm">10/2023 – 10/2023</p>
            </div>
          </div>

          <div className="flex flex-row justify-center gap-x-16 gap-y-5 flex-wrap max-sm:justify-start">
            <div className="min-w-52 w-1/3">
              <h2 className="font-bold mb-2">
                Software Engineer &#40;ServiceNow&#41;
              </h2>
              <h3 className="font-light text-sm">
                Northumbria University, Newcastle
              </h3>
              <p className="font-light text-sm">8/2022 – 8/2023</p>
            </div>

            <div className="flex-1 min-w-52">
              <ul className="flex flex-col gap-2 list-disc p-5 pl-10 backdrop-blur-lg rounded-lg bg-gradient-to-tr from-sky-800/10 to-indigo-900/10">
                <li>
                  Delivered & maintained a self-service portal used by +1,000
                  staff using HTML, SCSS, AngularJS, RDBs
                </li>
                <li>
                  Developed +10 webpages following stakeholder project requests
                  and communication
                </li>
                <li>
                  Worked in a hard-working Agile team contributing to +500
                  stories
                </li>
                <li>
                  Generated +20 wireframe mockups using Adobe XD and Figma
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-row justify-center gap-x-16 gap-y-5 flex-wrap max-sm:flex-col-reverse">
            <div className="flex-1 min-w-52">
              <ul className="flex flex-col gap-2 list-disc p-5 pl-10 backdrop-blur-lg rounded-lg bg-gradient-to-tr from-sky-800/10 to-indigo-900/10">
                <li>
                  Logged +50 patients per day at the biggest hospital in Bahrain
                  under high pressure
                </li>
              </ul>
            </div>

            <div className="min-w-52 w-1/3">
              <h2 className="font-bold mb-2">Radiology Ward Receptionist</h2>
              <h3 className="font-light text-sm">
                Al-Salmaniyah Hospital, Bahrain
              </h3>
              <p className="font-light text-sm">10/2023 – 10/2023</p>
            </div>
          </div>
        </div>
      </div>

      <div className="coreSkills">
        <div className="mb-10 text-2xl">
          <h1 className="font-bold">Core Skills</h1>
        </div>
        <ul className="flex flex-col gap-2 list-disc p-5 pl-10 backdrop-blur-lg rounded-lg bg-gradient-to-tr from-sky-800/10 to-indigo-900/10">
          <li>
            Engineering full-stack apps with state-of-the-art frameworks such as
            React, AngularJS, PHP, Firebase, SQL
          </li>
          <li>
            Designing and implementing aesthetic, modern, and sophisticated UIs
            using SCSS and Tailwind with intuitive UX
          </li>
          <li>
            Developing modern-looking Portals on ServiceNow and Configuring and
            maintaining instances on various levels
          </li>
          <li>
            Building and tuning of AI models with focus on computer vision
            machine learning and autonomous driving
          </li>
        </ul>
      </div>

      <div className="programmingLanguages">
        <div className="mb-10 text-2xl">
          <h1 className="font-bold">Programming Languages & Libraries</h1>
        </div>
        <div className="flex flex-wrap flex-row justify-center items-center gap-5">
          <div className="w-1/5 aspect-square min-w-20 flex flex-col items-center justify-center p-1 rounded-lg bg-gradient-to-tr from-sky-800/10 to-indigo-900/10 hyphens-manual text-center">
            Java
          </div>
          <div className="w-1/5 aspect-square min-w-20 flex flex-col items-center justify-center p-1 rounded-lg bg-gradient-to-tr from-sky-800/10 to-indigo-900/10 hyphens-manual text-center">
            Java&shy;Script
          </div>
          <div className="w-1/5 aspect-square min-w-20 flex flex-col items-center justify-center p-1 rounded-lg bg-gradient-to-tr from-sky-800/10 to-indigo-900/10 hyphens-manual text-center">
            Type&shy;Script
          </div>
          <div className="w-1/5 aspect-square min-w-20 flex flex-col items-center justify-center p-1 rounded-lg bg-gradient-to-tr from-sky-800/10 to-indigo-900/10 hyphens-manual text-center">
            Python
          </div>
          <div className="w-1/5 aspect-square min-w-20 flex flex-col items-center justify-center p-1 rounded-lg bg-gradient-to-tr from-sky-800/10 to-indigo-900/10 hyphens-manual text-center">
            React
          </div>
          <div className="w-1/5 aspect-square min-w-20 flex flex-col items-center justify-center p-1 rounded-lg bg-gradient-to-tr from-sky-800/10 to-indigo-900/10 hyphens-manual text-center">
            Next&shy;JS
          </div>
          <div className="w-1/5 aspect-square min-w-20 flex flex-col items-center justify-center p-1 rounded-lg bg-gradient-to-tr from-sky-800/10 to-indigo-900/10 hyphens-manual text-center">
            Three&shy;JS
          </div>
          <div className="w-1/5 aspect-square min-w-20 flex flex-col items-center justify-center p-1 rounded-lg bg-gradient-to-tr from-sky-800/10 to-indigo-900/10 hyphens-manual text-center">
            Angular&shy;JS
          </div>
          <div className="w-1/5 aspect-square min-w-20 flex flex-col items-center justify-center p-1 rounded-lg bg-gradient-to-tr from-sky-800/10 to-indigo-900/10 hyphens-manual text-center">
            C
          </div>
          <div className="w-1/5 aspect-square min-w-20 flex flex-col items-center justify-center p-1 rounded-lg bg-gradient-to-tr from-sky-800/10 to-indigo-900/10 hyphens-manual text-center">
            C++
          </div>
          <div className="w-1/5 aspect-square min-w-20 flex flex-col items-center justify-center p-1 rounded-lg bg-gradient-to-tr from-sky-800/10 to-indigo-900/10 hyphens-manual text-center">
            MAT&shy;LAB
          </div>
          <div className="w-1/5 aspect-square min-w-20 flex flex-col items-center justify-center p-1 rounded-lg bg-gradient-to-tr from-sky-800/10 to-indigo-900/10 hyphens-manual text-center">
            HTML
          </div>
          <div className="w-1/5 aspect-square min-w-20 flex flex-col items-center justify-center p-1 rounded-lg bg-gradient-to-tr from-sky-800/10 to-indigo-900/10 hyphens-manual text-center">
            CSS/&shy;SCSS
          </div>
          <div className="w-1/5 aspect-square min-w-20 flex flex-col items-center justify-center p-1 rounded-lg bg-gradient-to-tr from-sky-800/10 to-indigo-900/10 hyphens-manual text-center">
            Tail&shy;wind
          </div>
          <div className="w-1/5 aspect-square min-w-20 flex flex-col items-center justify-center p-1 rounded-lg bg-gradient-to-tr from-sky-800/10 to-indigo-900/10 hyphens-manual text-center">
            PHP
          </div>
          <div className="w-1/5 aspect-square min-w-20 flex flex-col items-center justify-center p-1 rounded-lg bg-gradient-to-tr from-sky-800/10 to-indigo-900/10 hyphens-manual text-center">
            Tensor&shy;Flow
          </div>
          <div className="w-1/5 aspect-square min-w-20 flex flex-col items-center justify-center p-1 rounded-lg bg-gradient-to-tr from-sky-800/10 to-indigo-900/10 hyphens-manual text-center">
            Scikit-Learn
          </div>
          <div className="w-1/5 aspect-square min-w-20 flex flex-col items-center justify-center p-1 rounded-lg bg-gradient-to-tr from-sky-800/10 to-indigo-900/10 hyphens-manual text-center">
            Android Studio
          </div>
          <div className="w-1/5 aspect-square min-w-20 flex flex-col items-center justify-center p-1 rounded-lg bg-gradient-to-tr from-sky-800/10 to-indigo-900/10 hyphens-manual text-center">
            Git
          </div>
          <div className="w-1/5 aspect-square min-w-20 flex flex-col items-center justify-center p-1 rounded-lg bg-gradient-to-tr from-sky-800/10 to-indigo-900/10 hyphens-manual text-center">
            Service&shy;Now
          </div>
        </div>
      </div>

      <div className="certificates">
        <div className="mb-10 text-2xl">
          <h1 className="font-bold">Certificates</h1>
        </div>
        <ul className="flex flex-col gap-2 list-disc p-5 pl-10 backdrop-blur-lg rounded-lg bg-gradient-to-tr from-sky-800/10 to-indigo-900/10">
          <li>
          ServiceNow Certified System Administrator 
          </li>
          <li>
          ITIL 4 Foundation Certificate in IT Service Management
          </li>
          <li>
          Level 3 - Chartered Management Institute &#40;CMI&#41; certificate in frontline management
          </li>
          <li>
          Academic IELTS certificate &#40;Band 7.5&#41;
          </li>
        </ul>
      </div>

      <div className="softSkills">
        <div className="mb-10 text-2xl">
          <h1 className="font-bold">Soft Skills</h1>
        </div>
        <ul className="flex flex-col gap-2 list-disc p-5 pl-10 backdrop-blur-lg rounded-lg bg-gradient-to-tr from-sky-800/10 to-indigo-900/10">
          <li>
            Adapted to Agile frameworks
          </li>
          <li>
            Languages: English &#40;native-fluency&#41; | Arabic &#40;native-fluency&#41;
          </li>
          <li>
            Software: MS office suite | Adobe XD | Figma | VS Code | Adobe Photoshop
          </li>
          <li>
            Excellent Teamwork skills, leadership & attention to detail
          </li>
        </ul>
      </div>
    </div>
  );
}
