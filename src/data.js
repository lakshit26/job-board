const jobs = [
  {
    "id": 1,
    "title": "Software Engineer",
    "company": "InnoTech",
    "location": "Mountain View, CA",
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
    },
  },
  {
    "id": 2,
    "title": "Data Scientist",
    "company": "Insights Inc.",
    "location": "Menlo Park, CA",
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
    },
  },
  {
    "id": 3,
    "title": "Front-End Developer",
    "company": "Pixel Craft",
    "location": "Seattle, WA",
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
    },
  },
  {
    "id": 4,
    "title": "Backend Developer",
    "company": "Connex Systems",
    "location": "Redmond, WA",
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
    },
  },
  {
    "id": 5,
    "title": "Product Manager",
    "company": "InnovateX",
    "location": "Cupertino, CA",
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
    },
  },
  {
    "id": 6,
    "title": "Graphic Designer",
    "company": "Creative Spark",
    "location": "San Jose, CA",
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
    },
  },
  {
    "id": 7,
    "title": "Content Writer",
    "company": "Wordsmith Inc.",
    "location": "Boston, MA",
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
    },
  },
  {
    "id": 8,
    "title": "Marketing Manager",
    "company": "Growth Strategies",
    "location": "San Francisco, CA",
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
    },
  },
  {
    "id": 9,
    "title": "Sales Representative",
    "company": "Reach Solutions",
    "location": "Chicago, IL",
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
    },
  },
  {
    "id": 10,
    "title": "Human Resources Specialist",
    "company": "Talent Bridge",
    "location": "Los Gatos, CA",
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
    },
  },
];

export default jobs;