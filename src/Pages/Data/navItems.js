export const navItems = [
  {
    id: 1,
    title: "Home",
    path: "/",  // Home path
  },
  {
    id: 2,
    title: "About Us",
    path: "/about-us",  // About Us path
    subTopics: [
      {
        subTitle: "News",
        path: "/about-us/news",  // Subpath for News
      },
      {
        subTitle: "Manufacturing Capacity",
        path: "/about-us/manufacturing-capacity",  // Subpath for Manufacturing Capacity
      },
      {
        subTitle: "Innovation By Omega",
        path: "/about-us/innovation-by-omega",  // Subpath for Innovation by Omega
      },
    ],
  },
  {
    id: 3,
    title: "Products",
    path: "/products",  // Products path
    subTopics: [
      {
        subTitle: "Elevators",
        path: "/products/elevators",  // Elevators path
        subSubTopics: [
          {
            subSubTitle: "Passenger Elevators",
            path: "/products/elevators/passenger",  // Passenger Elevators path
            subSubSubTopics: [
              {
                subSubSubTitle: "Grandia Elevators",
                path: "/products/elevators/passenger/grandia",  // Grandia Elevators path
              },
              {
                subSubSubTitle: "Imperia Elevators",
                path: "/products/elevators/passenger/imperia",  // Imperia Elevators path
              },
              {
                subSubSubTitle: "Magnifica Elevator",
                path: "/products/elevators/passenger/magnifica",  // Magnifica Elevators path
              },
              {
                subSubSubTitle: "Marvella Elevators",
                path: "/products/elevators/passenger/marvella",  // Marvella Elevators path
              },
              {
                subSubSubTitle: "Prima Elevators",
                path: "/products/elevators/passenger/prima",  // Prima Elevators path
              },
              {
                subSubSubTitle: "Suprema Elevators",
                path: "/products/elevators/passenger/suprema",  // Suprema Elevators path
              },
            ],
          },
          {
            subSubTitle: "Hospital Elevators",
            path: "/products/elevators/hospital",  // Hospital Elevators path
          },
          {
            subSubTitle: "Bungalow Elevators",
            path: "/products/elevators/bungalow",  // Bungalow Elevators path
          },
          {
            subSubTitle: "Capsule Elevators",
            path: "/products/elevators/capsule",  // Capsule Elevators path
          },
          {
            subSubTitle: "Car Elevators",
            path: "/products/elevators/car",  // Car Elevators path
          },
          {
            subSubTitle: "Goods Elevators",
            path: "/products/elevators/goods",  // Goods Elevators path
          },
          {
            subSubTitle: "Service Elevators",
            path: "/products/elevators/service",  // Service Elevators path
          },
          {
            subSubTitle: "Dumbwaiter Elevators",
            path: "/products/elevators/dumbwaiter",  // Dumbwaiter Elevators path
          },
        ],
      },
      {
        subTitle: "Escalators",
        path: "/products/escalators",  // Escalators path
      },
    ],
  },
  {
    id: 4,
    title: "Services",
    path: "/services",  // Services path
    subTopics: [
      {
        subTitle: "Maintenance",
        path: "/services/maintenance",  // Maintenance path
      },
      {
        subTitle: "Modernization Solution",
        path: "/services/modernization-solution",  // Modernization Solution path
      },
    ],
  },
  {
    id: 5,
    title: "Gallery",
    path: "/gallery",  // Gallery path
    subTopics: [
      {
        subTitle: "360°",
        path: "/gallery/360",  // 360° view path
      },
    ],
  },
  {
    id: 6,
    title: "Client",
    path: "/client",  // Client path
  },
  {
    id: 7,
    title: "Careers",
    path: "/careers",  // Careers path
  },
  {
    id: 8,
    title: "Contact Us",
    path: "/contact-us",  // Contact Us path
  },
  {
    id: 9,
    title: "Blog",
    path: "/blog",  // Blog path
  },
  {
    id: 10,
    title: "Download",
    path: "/download",  // Download path
    subTopics: [
      {
        subTitle: "Omega Client APK",
        path: "/download/omega-client-apk",  // Omega Client APK path
      },
      {
        subTitle: "Omega Client iOS",
        path: "/download/omega-client-ios",  // Omega Client iOS path
      },
      {
        subTitle: "Omega Modernization",
        path: "/download/omega-modernization",  // Omega Modernization path
      },
    ],
  },
];
