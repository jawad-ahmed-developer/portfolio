// One object per project. To add a project, add an object here; no component
// changes needed.
//
// icon:       'ml' | 'desktop' | 'terminal' (used while `image` is null)
// status:     null, or a short label such as 'In progress'
// repoUrl:    GitHub URL, or null (the GitHub button is hidden when null)
// detailsUrl: optional extra link, or null (the Details button is hidden)
// image:      imported asset, or null; if set, also set `imageAlt`
export const projects = [
  {
    id: 'smart-irrigation-forecasting',
    title: 'Smart Irrigation and Soil Moisture Forecasting System',
    category: 'Machine learning',
    icon: 'ml',
    status: 'In progress',
    description:
      'End-to-end machine learning project to forecast soil moisture 24 hours ahead, using historical soil moisture, weather and irrigation data from Italian precision-irrigation farms. Work covers preprocessing, exploratory analysis, feature engineering, model training, tuning and evaluation, with the best model intended for deployment through a web application.',
    tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
    repoUrl: null, // TODO: add the repo URL once it is on GitHub
    detailsUrl: null,
    image: null,
    imageAlt: '',
  },
  {
    id: 'smart-city-management-system',
    title: 'Smart City Management System',
    category: 'Desktop application',
    icon: 'desktop',
    status: null,
    description:
      "Java desktop application for managing a smart city's core records: citizens, vehicles, buildings and departments. Includes role-based access control, admin activity tracking and search.",
    tech: ['Java', 'Swing', 'JDBC', 'MySQL'],
    repoUrl: 'https://github.com/jawad-ahmed-developer/SmartCityManagementSystem',
    detailsUrl: null,
    image: null,
    imageAlt: '',
  },
  {
    id: 'online-shopping-management-system',
    title: 'Online Shopping Management System',
    category: 'Desktop application',
    icon: 'desktop',
    status: null,
    description:
      'Desktop e-commerce management application built as a university Database Systems project. Demonstrates CRUD operations, indexing, aggregation pipelines, embedded documents, references and transactions on MongoDB Atlas.',
    tech: ['Java', 'Swing', 'MongoDB Atlas'],
    repoUrl: 'https://github.com/jawad-ahmed-developer/OnlineShoppingSystem',
    detailsUrl: null,
    image: null,
    imageAlt: '',
  },
  {
    id: 'file-system-navigator',
    title: 'FileSystemNavigator',
    category: 'Console application',
    icon: 'terminal',
    status: null,
    description:
      'Java console application that simulates a hierarchical file system, letting users manage files and folders through common file system operations in a menu-driven interface.',
    tech: ['Java'],
    repoUrl: 'https://github.com/jawad-ahmed-developer/FileSystemNavigator',
    detailsUrl: null,
    image: null,
    imageAlt: '',
  },
]