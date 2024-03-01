const jobs = [
  {
    "id": 1,
    "title": "Software Engineer",
    "company": "InnoTech",
    "location": {
      "city": "Mountain View",
      "state": "CA",
      "country": "USA"
    },
    "description":
      "We are looking for a talented software engineer to join our team and work on cutting-edge projects. You will be responsible for designing, developing, and testing complex software systems.",
    "skills": ["Python", "Java", "C++", "Data Structures", "Algorithms"],
    "responsibilities": [
      "Design, develop, and test software systems.",
      "Collaborate with other engineers on product development.",
      "Stay up-to-date on the latest technologies.",
      "Write clean, maintainable, and efficient code.",
      "Troubleshoot and debug complex software issues.",
    ],
    "estimatedSalaryRange": {
      "min": 100000, 
      "max": 150000, 
      "currency": "USD",
    },
  },
  {
    "id": 2,
    "title": "Data Scientist",
    "company": "Insights Inc.",
    "location": {
      "city": "Menlo Park",
      "state": "CA",
      "country": "USA"
    },
    "description":
      "We are seeking a data scientist to join our team and help us make data-driven decisions. You will be responsible for collecting, analyzing, and interpreting data to solve real-world problems.",
    "skills": ["Python", "R", "Statistics", "Machine Learning", "Data Visualization"],
    "responsibilities": [
      "Collect, clean, and analyze data from various sources.",
      "Develop and implement machine learning models to solve specific problems.",
      "Communicate insights and findings to stakeholders in a clear and concise manner.",
      "Stay up-to-date on the latest data science techniques and tools.",
      "Collaborate with engineers and other data scientists on projects.",
    ],
    "estimatedSalaryRange": {
      "min": 125000, 
      "max": 150000, 
      "currency": "USD",
    },
  },
  {
    "id": 3,
    "title": "Front-End Developer",
    "company": "Pixel Craft",
    "location": {
      "city": "Seattle",
      "state": "WA",
      "country": "USA"
    },
    "description":
      "We are looking for a front-end developer to join our team and build user-friendly web applications. You will be responsible for designing, developing, and testing the user interface of our products.",
    "skills": ["HTML", "CSS", "JavaScript", "React", "Angular"],
    "responsibilities": [
      "Design and develop user interfaces using best practices and accessibility guidelines.",
      "Build responsive web applications that work across different devices and browsers.",
      "Write clean, maintainable, and efficient code.",
      "Collaborate with back-end developers and designers on projects.",
      "Stay up-to-date on the latest front-end development trends and technologies.",
    ],
    "estimatedSalaryRange": {
      "min": 30000, 
      "max": 50000, 
      "currency": "USD",
    },
  },
  {
    "id": 4,
    "title": "Backend Developer",
    "company": "Connex Systems",
    "location": {
      "city": "Redmond",
      "state": "WA",
      "country": "USA"
    },
    "description":
      "We are seeking a backend developer to join our team and develop robust and scalable web services. You will be responsible for designing, developing, and testing the backend infrastructure of our applications.",
    "skills": ["Java", "Python", "Node.js", "Databases", "APIs"],
    "responsibilities": [
      "Design, develop, and test APIs and web services.",
      "Build and maintain databases.",
      "Write clean, maintainable, and efficient code.",
      "Troubleshoot and debug complex backend issues.",
      "Collaborate with front-end developers and DevOps engineers on projects.",
    ],
    "estimatedSalaryRange": {
      "min": 30000, 
      "max": 80000, 
      "currency": "USD",
    },
  },
  {
    "id": 5,
    "title": "Product Manager",
    "company": "InnovateX",
    "location": {
      "city": "Cupertino",
      "state": "CA",
      "country": "USA"
    },
    "description":
      "We are looking for a product manager to join our team and lead the development of innovative new products. You will be responsible for defining product vision, conducting market research, and managing the product development lifecycle.",
    "skills": ["Product Management", "Market Research", "Product Development", "Communication", "Leadership"],
    "responsibilities": [
      "Define product vision and roadmap.",
      "Conduct market research and analyze user needs.",
      "Manage the product development process from ideation to launch.",
      "Collaborate with cross-functional teams (engineering, design, marketing).",
      "Communicate product vision and strategy effectively to stakeholders.",
    ],
    "estimatedSalaryRange": {
      "min": 100000, 
      "max": 250000, 
      "currency": "USD",
    },
  },
  {
    "id": 6,
    "title": "Graphic Designer",
    "company": "Creative Spark",
    "location": {
      "city": "San Jose",
      "state": "CA",
      "country": "USA"
    },
    "description":
      "We are looking for a talented graphic designer to join our team and create visually appealing and engaging content. You will be responsible for designing graphics for various marketing materials, social media, and our website.",
    "skills": ["Graphic Design", "Adobe Photoshop", "Adobe Illustrator", "UI/UX Design", "Typography"],
    "responsibilities": [
      "Develop creative concepts for visual content based on client briefs and brand guidelines.",
      "Design graphics for marketing materials (brochures, flyers, presentations).",
      "Create social media graphics (posts, banners, stories).",
      "Design user interfaces (UI) and user experiences (UX) for web and mobile applications.",
      "Collaborate with copywriters and marketing teams on projects.",
    ],
    "estimatedSalaryRange": {
      "min": 50000, 
      "max": 90000, 
      "currency": "USD",
    },
  },
  {
    "id": 7,
    "title": "Content Writer",
    "company": "Wordsmith Inc.",
    "location": {
      "city": "Boston",
      "state": "MA",
      "country": "USA"
    },
    "description":
      "We are seeking a skilled content writer to join our team and create engaging and informative content for our website, blog, and social media channels. You will be responsible for researching, writing, and editing various types of content, including blog posts, articles, website copy, and social media captions.",
    "skills": ["Content Writing", "SEO", "Content Marketing", "Editing","Grammar"],
    "responsibilities": [
      "Conduct research and gather information on assigned topics.",
      "Write clear, concise, and engaging content that resonates with the target audience.",
      "Optimize content for search engines (SEO) to improve website traffic.",
      "Edit and proofread content for grammar, spelling, and clarity.",
      "Collaborate with editors and marketing teams on content strategy and development.",
    ],
    "estimatedSalaryRange": {
      "min": 25000, 
      "max": 50000, 
      "currency": "USD",
    },
  },
  {
    "id": 8,
    "title": "Marketing Manager",
    "company": "Growth Strategies",
    "location": {
      "city": "San Francisco",
      "state": "CA",
      "country": "USA"
    },
    "description":
      "We are looking for a passionate marketing manager to join our team and develop and execute marketing campaigns that drive brand awareness, lead generation, and sales. You will be responsible for creating and managing marketing budgets, developing marketing strategies, and analyzing campaign performance.",
    "skills": ["Marketing", "Marketing Strategy", "Campaign Management", "Analytics", "Communication"],
    "responsibilities": [
      "Develop and implement comprehensive marketing plans and strategies.",
      "Manage marketing budgets and track return on investment (ROI).",
      "Create and execute marketing campaigns across various channels (online, offline, social media).",
      "Analyze marketing campaign performance and make data-driven decisions.",
      "Collaborate with cross-functional teams (sales, product, design) to achieve marketing goals.",
    ],
    "estimatedSalaryRange": {
      "min": 15000, 
      "max": 50000, 
      "currency": "USD",
    },
  },
  {
    "id": 9,
    "title": "Sales Representative",
    "company": "Reach Solutions",
    "location": {
      "city": "Chicago",
      "state": "IL",
      "country": "USA"
    },
    "description":
      "We are seeking a driven sales representative to join our team and build relationships with potential customers, identify sales opportunities, and close deals. You will be responsible for prospecting new leads, qualifying leads, and presenting product features and benefits to close deals.",
    "skills": ["Sales", "Lead Generation", "Communication","Negotiation", "Customer Relationship Management"],
    "responsibilities": [
      "Prospect for new leads and qualify them based on sales criteria.",
      "Develop and maintain relationships with potential and existing customers.",
      "Present product demos and answer customer questions about features and benefits.",
      "Negotiate contracts and close deals to achieve sales targets.",
      "Maintain accurate sales records and reports.",
    ],
    "estimatedSalaryRange": {
      "min": 15000, 
      "max": 35000, 
      "currency": "USD",
    },
  },
  {
    "id": 10,
    "title": "Human Resources Specialist",
    "company": "Talent Bridge",
    "location": {
      "city": "Los Gatos",
      "state": "CA",
      "country": "USA"
    },
    "description":
      "We are looking for a skilled human resources specialist to join our team and support all aspects of the employee lifecycle, from recruitment and onboarding to training and development. You will be responsible for sourcing and screening candidates, conducting interviews, and managing employee relations.",
    "skills": ["Human Resources", "Recruitment", "Employee Relations", "Training and Development", "Payroll"],
    "responsibilities": [
      "Develop and implement recruiting strategies to attract top talent.",
      "Screen and interview candidates for open positions.",
      "Onboard new hires and provide them with the necessary training and resources.",
      "Manage employee relations, including performance reviews, disciplinary actions, and conflict resolution.",
      "Maintain accurate employee records and ensure compliance with labor laws.",
    ],
    "estimatedSalaryRange": {
      "min": 150000, 
      "max": 200000, 
      "currency": "USD",
    },
  },
  {
    "id": 11,
    "title": "Graphic Designer",
    "company": "CreativStudio",
    "location": {
      "city": "Berlin",
      "state": "",
      "country": "Germany"
    },
    "description":
      "We are seeking a passionate and creative Graphic Designer to join our team and help us create visually stunning designs for our clients. You will be responsible for developing concepts, designing graphics, and collaborating with various departments to bring our brand to life.",
    "skills": ["Adobe Creative Suite", "Typography", "Branding", "UI/UX Design", "Marketing Materials"],
    "responsibilities": [
      "Develop design concepts based on client briefs and brand guidelines.",
      "Create high-quality graphics for print, web, and social media.",
      "Collaborate with marketing, sales, and other teams to ensure brand consistency.",
      "Stay up-to-date on design trends and best practices.",
      "Meet deadlines and work effectively under pressure.",
    ],
    "estimatedSalaryRange": {
      "min": 40000,
      "max": 60000,
      "currency": "EUR"
    },
  },
  {
    "id": 12,
    "title": "Data Scientist",
    "company": "Insights Inc.",
    "location": {
      "city": "Menlo Park",
      "state": "CA",
      "country": "USA"
    },
    "description":
      "Analyze large datasets to identify trends and insights that drive business decisions. Utilize advanced statistical methods and machine learning techniques.",
    "skills": ["Python", "R", "SQL", "Data Visualization", "Machine Learning"],
    "responsibilities": [
      "Collect, clean, and prepare data for analysis.",
      "Develop and implement machine learning models.",
      "Communicate findings to stakeholders through reports and presentations.",
      "Collaborate with engineers and product managers to implement insights.",
    ],
    "estimatedSalaryRange": {
      "min": 120000,
      "max": 180000,
      "currency": "USD"
    },
  },
  {
    "id": 13,
    "title": "Content Writer",
    "company": "StoryCraft Media",
    "location": {
      "city": "Melbourne",
      "state": "Victoria",
      "country": "Australia"
    },
    "description":
      "Craft engaging blog posts, website copy, and social media content that resonates with target audiences. Optimize content for search engines.",
    "skills": ["Writing", "Editing", "SEO", "Social Media Marketing", "Content Management Systems"],
    "responsibilities": [
      "Research and write high-quality content aligned with brand voice and audience needs.",
      "Optimize content for search engines and social media engagement.",
      "Collaborate with marketing and sales teams to develop content strategies.",
      "Track content performance and make adjustments as needed.",
    ],
    "estimatedSalaryRange": {
      "min": 60000,
      "max": 80000,
      "currency": "AUD"
    },
  },
  {
    "id": 14,
    "title": "Marketing Manager",
    "company": "Reach Solutions",
    "location": {
      "city": "San Francisco",
      "state": "CA",
      "country": "USA"
    },
    "description":
      "Develop and execute marketing campaigns across multiple channels to drive brand awareness and lead generation. Analyze campaign performance and optimize strategies.",
    "skills": ["Marketing", "Digital Marketing", "Social Media Marketing", "Content Marketing", "Analytics"],
    "responsibilities": [
      "Plan and execute integrated marketing campaigns.",
      "Manage marketing budget and resources effectively.",
      "Analyze campaign performance and make data-driven decisions.",
      "Collaborate with other departments to achieve marketing goals.",
    ],
    "estimatedSalaryRange": {
      "min": 90000,
      "max": 120000,
      "currency": "USD"
    },
  },
  {
    "id": 15,
    "title": "Front-End Developer",
    "company": "InnovateX",
    "location": {
      "city": "Cupertino",
      "state": "CA",
      "country": "USA"
    },
    "description":
      "Develop and maintain user interfaces for web applications, ensuring a seamless and intuitive user experience. Stay up-to-date with latest front-end technologies.",
    "skills": ["HTML", "CSS", "JavaScript", "React/Angular (preferred)", "UI/UX Design"],
    "responsibilities": [
      "Implement front-end components according to design specifications.",
      "Collaborate with back-end developers to ensure integration.",
      "Write clean, maintainable, and efficient code.",
      "Test and debug front-end issues.",
    ],
    "estimatedSalaryRange": {
      "min": 80000,
      "max": 110000,
      "currency": "USD"
    },
  },
  {
    "id": 16,
    "title": "Quality Assurance Engineer (QA)",
    "company": "Connex Systems",
    "location": {
      "city": "Bangalore",
      "state": "Karnataka",
      "country": "India"
    },
    "description":
      "Ensure the quality and functionality of software applications through rigorous testing procedures. Identify and report bugs to developers.",
    "skills": ["Software Testing", "Test Automation", "Bug Reporting", "Agile Methodology"],
    "responsibilities": [
      "Design and execute test cases for various functionalities.",
      "Write automated test scripts using tools like Selenium.",
      "Report bugs effectively and work with developers to resolve them.",
      "Stay up-to-date with latest testing methodologies and tools.",
      "Contribute to the overall quality of software releases.",
    ],
    "estimatedSalaryRange": {
      "min": 400000,
      "max": 600000,
      "currency": "INR"
    },
  },
  {
    "id": 17,
    "title": "Business Development Manager",
    "company": "Talent Bridge",
    "location": {
      "city": "Mumbai",
      "state": "Maharashtra",
      "country": "India"
    },
    "description":
      "Identify and develop new business opportunities for the company through effective networking and sales strategies.",
    "skills": ["Sales", "Business Development", "Networking", "Negotiation", "Relationship Management"],
    "responsibilities": [
      "Prospect for new clients and build relationships.",
      "Understand client needs and present relevant solutions.",
      "Negotiate contracts and close deals.",
      "Manage and develop client relationships.",
      "Contribute to the company's growth and revenue targets.",
    ],
    "estimatedSalaryRange": {
      "min": 600000,
      "max": 800000,
      "currency": "INR"
    },
  },
  {
    "id": 18,
    "title": "Human Resources Specialist",
    "company": "Spark HR Solutions",
    "location": {
      "city": "Chennai",
      "state": "Tamil Nadu",
      "country": "India"
    },
    "description":
      "Provide comprehensive HR support for all employee lifecycle stages, from recruitment and onboarding to training and development.",
    "skills": ["Human Resources", "Recruitment", "Employee Relations", "Payroll (optional)"],
    "responsibilities": [
      "Source and screen candidates for open positions.",
      "Conduct interviews and manage the onboarding process.",
      "Handle employee relations issues and ensure compliance with labor laws.",
      "Administer benefits and maintain employee records.",
      "Contribute to a positive and productive work environment.",
    ],
    "estimatedSalaryRange": {
      "min": 300000,
      "max": 450000,
      "currency": "INR"
    },
  }
];

export default jobs;


let jobList = new Set();
let companyList = new Set();
jobs.forEach((job)=>{
  jobList.add(job.title);
  companyList.add(job.company);
});
jobList = [...jobList];
companyList = [...companyList];
// console.log(jobList,companyList)
export {jobList};
export {companyList};
  