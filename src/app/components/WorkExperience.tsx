type Experience = {
    years: string;
    title: string;
    company: string;
    location: string;
    link?: string;
  };
  
  const experiences: Experience[] = [
    { years: "2017 — Now", title: "Senior Designer", company: "Magic Design Co", location: "San Francisco, CA" },
    { years: "2015 — 2017", title: "Junior Designer", company: "Creative Co", location: "Atlanta, GA" },
    { years: "2014 — 2015", title: "Intern", company: "Design Hub", location: "Atlanta, GA" },
    { years: "2012 — 2014", title: "Freelance Graphic Designer", company: "", location: "Remote" },
    { years: "2010 — 2012", title: "Art Assistant", company: "Studio X", location: "Cincinnati, OH" },
    { years: "2008 — 2010", title: "Volunteer Designer", company: "Nonprofit Y", location: "Cincinnati, OH" },
  ];
  
  export default function WorkExperience() {
    return (
      <section className="mt-12 px-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index}>
              <div className="flex gap-6">
                <div className="w-28 text-sm text-gray-500 shrink-0">{exp.years}</div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    {exp.title} {exp.company && (
                      <a href="#" className="inline-block ml-1 hover:underline" target="_blank" rel="noopener noreferrer">
                        at {exp.company} <span>↗</span>
                      </a>
                    )}
                  </p>
                  <p className="text-sm text-gray-500">{exp.location}</p>
                </div>
              </div>
  
              {/* ✅ Render gallery ONLY after the second item */}
              {index === 1 && (
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <img src="/images/picture1.png" alt="gallery1" className="w-full h-48 object-cover rounded-md" />
                  <img src="/images/picture2.png" alt="gallery2" className="w-full h-48 object-cover rounded-md" />
                  <img src="/images/picture3.png" alt="gallery3" className="w-full h-48 object-cover rounded-md" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  