// Centralized projects data
export const projectsData = [
  {
    id: 'amie',
    title: 'AMIE',
    languages: 'Python, JavaScript, TypeScript',
    frameworks: 'React.js, FastAPI, Microsoft Azure',
    description: 'A full-stack platform for academic manuscript processing, including PDF ingestion, AI-driven invention classification, and novelty scoring.',
    longDescription: `AMIE is a comprehensive full-stack platform designed to revolutionize academic manuscript processing. The system processes over 10,000+ PDF pages and reduces manual review time by 70%. 

The platform features 4 concurrent AI agents on Azure AI Foundry, producing organized JSON outputs for downstream processing. Built with scalable, production-ready workflows using APIM, Blob Storage, and Cosmos DB.

Key features include automated PDF ingestion, AI-driven invention classification, novelty scoring algorithms, and seamless integration with Azure cloud services for high-availability distributed workflows.`,
    image: '', // Add image URL here (or use video as poster)
    images: [], // Array of image URLs for gallery
    video: '/videos/amie-demo.mp4', // Video path: Place your video in public/videos/ folder
    videos: [], // Array of additional video URLs for gallery
    github: 'https://github.com/slacke101',
    demoLink: '', // Add demo URL here (optional)
    mediaType: 'video', // 'image' or 'video' - set to 'video' to show video as main media
    date: 'Sep. 2025 - Present',
    status: 'Active',
    technologies: ['Python', 'JavaScript', 'TypeScript', 'React.js', 'FastAPI', 'Microsoft Azure', 'Azure Functions', 'Durable Functions', 'Blob Storage', 'API Management', 'Azure AI Foundry', 'Cosmos DB'],
    achievements: [
      'Processed over 10,000+ PDF pages',
      'Reduced manual review time by 70%',
      'Orchestrated 4 concurrent AI agents',
      'Built production-grade distributed workflows'
    ]
  },
  {
    id: 'tokenflow',
    title: 'TokenFlow',
    languages: 'C#, Python',
    frameworks: 'ASP.NET Core, Microsoft Azure, Microsoft Graph',
    description: 'A cloud-native workflow management system using ASP.NET Core and Azure to manage token-based task lifecycles and business processes.',
    longDescription: `TokenFlow is a cloud-native workflow management system designed to manage token-based task lifecycles and business processes efficiently. 

The system features a service-layer architecture that coordinates token creation, assignment, and lifecycle updates separate from controllers and UI logic. Built with ASP.NET Core and integrated with Microsoft Azure and Microsoft Graph for enterprise-grade functionality.

TokenFlow enables organizations to streamline their workflow processes, manage task assignments, and track progress through a sophisticated token-based system.`,
    image: '/models/tokenflow-system.png', // Add image URL here
    images: [],
    video: '',
    videos: [],
    github: 'https://github.com/slacke101/TokenFlow_API-MS',
    demoLink: '',
    mediaType: 'image',
    date: 'Oct. 2025 - Present',
    status: 'Active',
    technologies: ['C#', 'Python', 'ASP.NET Core', 'Microsoft Azure', 'Microsoft Graph', 'REST API'],
    achievements: [
      'Cloud-native architecture',
      'Service-layer separation',
      'Enterprise-grade workflow management',
      'Microsoft Graph integration'
    ]
  },
  {
    id: 'suncal-banking',
    title: 'SunCal Banking',
    languages: 'C#',
    frameworks: '.NET, OpenWeatherAPI',
    description: 'A secure modular banking system engineered in C# and .NET, implementing GUID-based account creation and processing over 500 transactions weekly.',
    longDescription: `SunCal Banking is a secure, modular banking system engineered in C# and .NET. The system implements GUID-based account creation and processes over 500 transactions weekly with a focus on security and performance.

Designed with a scalable architecture for persistent storage and seamless feature integration, the system reduced update development time by 40%. The platform includes comprehensive security measures, transaction processing, and account management capabilities.

Integrated with OpenWeatherAPI for enhanced user experience and location-based features.`,
    image: '',
    images: [],
    video: '',
    videos: [],
    github: 'https://github.com/slacke101',
    demoLink: '',
    mediaType: 'image',
    date: 'June 2025 – July 2025',
    status: 'Completed',
    technologies: ['C#', '.NET', 'OpenWeatherAPI', 'SQL Server', 'REST API'],
    achievements: [
      'Processes 500+ transactions weekly',
      'GUID-based secure account system',
      'Reduced update development by 40%',
      'Scalable modular architecture'
    ]
  },
  {
    id: 'benai-6',
    title: 'Autonomous Drone Software - BenAI 6',
    languages: 'Python, C++',
    frameworks: 'Ultralytics, OpenCV, PyTorch, TensorFlow',
    description: 'Advanced autonomous drone software with AI-powered vision systems for real-time object detection and navigation.',
    longDescription: `BenAI 6 is an advanced autonomous drone software system featuring AI-powered vision capabilities. Built with Ultralytics, OpenCV, PyTorch, and TensorFlow, the system enables real-time object detection, tracking, and autonomous navigation.

The software integrates cutting-edge computer vision algorithms with deep learning models to provide intelligent flight control, obstacle avoidance, and mission execution capabilities.

The drone hardware features custom-designed components including frame, gimbal, and sensor mounts, all designed using CAD software and 3D printed for optimal performance.`,
    image: '',
    images: [],
    video: '',
    videos: [],
    github: 'https://github.com/slacke101',
    demoLink: '',
    mediaType: 'image',
    date: '2025',
    status: 'Active',
    technologies: ['Python', 'C++', 'Ultralytics', 'OpenCV', 'PyTorch', 'TensorFlow', 'Computer Vision', 'Deep Learning', 'CAD Design', '3D Printing'],
    achievements: [
      'Real-time object detection',
      'Autonomous navigation',
      'AI-powered vision systems',
      'Advanced obstacle avoidance',
      'Custom CAD-designed components'
    ],
    // STL files should be placed in public/models/ directory
    // Example: public/models/drone-frame.stl
    // Rotation: [x, y, z] in radians (0 = no rotation, Math.PI/2 = 90 degrees)
    stlFiles: [
      {
        name: 'Drone Frame',
        url: '/models/drone-frame.stl', // Path relative to public folder
        color: '#d73f09',
        rotation: [-Math.PI/2, 0, 0] // Rotated to lay flat (horizontal)
      },
      // Add more STL files as needed:
      // {
      //   name: 'Gimbal Mount',
      //   url: '/models/gimbal-mount.stl',
      //   color: '#ff6b28',
      //   rotation: [0, 0, 0]
      // },
    ]
  },
  {
    id: 'webs-os',
    title: 'WEBS Autonomous Spider',
    languages: 'C++',
    description: 'An autonomous spider built with C++. Using distance sensors to navigate and avoid obstacles.',
    longDescription: `Project 7 is a web application built with Django and PostgreSQL, featuring modern web development practices and scalable architecture.`,
    image: '',
    images: [],
    video: '/videos/webs-demo.mp4',
    videos: [],
    github: 'https://github.com/slacke101/W.E.B.S.-Open-Source',
    demoLink: '',
    mediaType: 'video',
    date: '2025',
    status: 'In Development',
    technologies: ['Python', 'Django', 'PostgreSQL', 'REST API'],
    achievements: []
  },
  {
    id: 'project-8',
    title: 'Project 8',
    languages: 'C#',
    frameworks: '.NET Core, SQL Server',
    description: 'Enterprise application built with .NET Core and SQL Server.',
    longDescription: `Project 8 is an enterprise application built with .NET Core and SQL Server, designed for scalability and performance.`,
    image: '',
    images: [],
    video: '',
    videos: [],
    github: 'https://github.com/slacke101',
    demoLink: '',
    mediaType: 'image',
    date: '2025',
    status: 'In Development',
    technologies: ['C#', '.NET Core', 'SQL Server', 'REST API'],
    achievements: []
  }
];

// Helper function to get project by ID
export const getProjectById = (id) => {
  return projectsData.find(project => project.id === id);
};
