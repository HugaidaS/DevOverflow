interface TechInfo {
  icon: string;
  description: string;
  aliases: RegExp;
}

const techMap: TechInfo[] = [
  {
    icon: "devicon-javascript-plain",
    description:
      "A versatile programming language for building interactive and dynamic web content.",
    aliases: /^(javascript|js)$/,
  },
  {
    icon: "devicon-typescript-plain",
    description:
      "A typed superset of JavaScript that adds static type definitions for safer, scalable code.",
    aliases: /^(typescript|ts)$/,
  },
  {
    icon: "devicon-react-original",
    description:
      "A JavaScript library for building user interfaces with reusable components and a virtual DOM.",
    aliases: /^(react|reactjs)$/,
  },
  {
    icon: "devicon-nextjs-plain",
    description:
      "A React framework with server-side rendering, static generation, and built-in routing for production apps.",
    aliases: /^(nextjs|next)$/,
  },
  {
    icon: "devicon-nodejs-plain",
    description:
      "A JavaScript runtime built on Chrome's V8 engine for fast, scalable server-side applications.",
    aliases: /^(nodejs|node)$/,
  },
  {
    icon: "devicon-bun-plain",
    description:
      "An all-in-one JavaScript runtime designed for speed, with a bundler, transpiler, and package manager built in.",
    aliases: /^(bun|bunjs)$/,
  },
  {
    icon: "devicon-denojs-original",
    description:
      "A secure JavaScript and TypeScript runtime with built-in tooling and a permissions-based security model.",
    aliases: /^(deno|denojs)$/,
  },
  {
    icon: "devicon-python-plain",
    description:
      "A high-level, general-purpose language known for readability and a vast ecosystem in web dev, data science, and AI.",
    aliases: /^python$/,
  },
  {
    icon: "devicon-java-plain",
    description:
      "A widely-used object-oriented language designed for portability, running on billions of devices via the JVM.",
    aliases: /^java$/,
  },
  {
    icon: "devicon-cplusplus-plain",
    description:
      "A systems programming language offering low-level memory control with high-level abstractions for performance-critical software.",
    aliases: /^(c\+\+|cpp)$/,
  },
  {
    icon: "devicon-csharp-plain",
    description:
      "A modern object-oriented language by Microsoft, used for Windows apps, Unity game development, and enterprise software.",
    aliases: /^(c#|csharp)$/,
  },
  {
    icon: "devicon-php-plain",
    description:
      "A server-side scripting language widely used for web development, powering platforms like WordPress and Laravel.",
    aliases: /^php$/,
  },
  {
    icon: "devicon-html5-plain",
    description:
      "The standard markup language for creating web pages, defining the structure and content of a website.",
    aliases: /^(html|html5)$/,
  },
  {
    icon: "devicon-css3-plain",
    description:
      "A stylesheet language used for describing the visual presentation and layout of HTML documents.",
    aliases: /^(css|css3)$/,
  },
  {
    icon: "devicon-git-plain",
    description:
      "A distributed version control system for tracking code changes and collaborating across development teams.",
    aliases: /^git$/,
  },
  {
    icon: "devicon-docker-plain",
    description:
      "A platform for building, shipping, and running applications in lightweight, portable containers.",
    aliases: /^docker$/,
  },
  {
    icon: "devicon-mongodb-plain",
    description:
      "A NoSQL document database that stores data in flexible, JSON-like documents for scalable development.",
    aliases: /^(mongodb|mongo)$/,
  },
  {
    icon: "devicon-mysql-plain",
    description:
      "An open-source relational database known for reliability and wide adoption in web applications.",
    aliases: /^mysql$/,
  },
  {
    icon: "devicon-postgresql-plain",
    description:
      "An advanced open-source relational database with strong standards compliance and support for complex queries.",
    aliases: /^(postgresql|postgres)$/,
  },
  {
    icon: "devicon-amazonwebservices-original",
    description:
      "Amazon's comprehensive cloud platform offering over 200 services for compute, storage, databases, and more.",
    aliases: /^(aws|amazonwebservices)$/,
  },
  {
    icon: "devicon-firebase-plain",
    description:
      "A Google-backed platform providing authentication, real-time databases, and hosting for web and mobile apps.",
    aliases: /^firebase$/,
  },
  {
    icon: "devicon-graphql-plain",
    description:
      "A query language for APIs that lets clients request exactly the data they need, reducing over-fetching.",
    aliases: /^graphql$/,
  },
  {
    icon: "devicon-vuejs-plain",
    description:
      "A progressive JavaScript framework for building UIs, known for its gentle learning curve and flexible architecture.",
    aliases: /^(vue|vuejs)$/,
  },
  {
    icon: "devicon-tailwindcss-plain",
    description:
      "A utility-first CSS framework for rapidly building custom designs directly in your markup.",
    aliases: /^(tailwind|tailwindcss)$/,
  },
  {
    icon: "devicon-angularjs-plain",
    description:
      "A TypeScript-based web framework by Google for building large-scale, structured single-page applications.",
    aliases: /^angular$/,
  },
  {
    icon: "devicon-jquery-plain",
    description:
      "A fast, lightweight JavaScript library that simplifies DOM manipulation, event handling, and AJAX interactions.",
    aliases: /^jquery$/,
  },
  {
    icon: "devicon-sass-plain",
    description:
      "A CSS preprocessor that adds variables, nesting, mixins, and functions for more maintainable stylesheets.",
    aliases: /^sass$/,
  },
  {
    icon: "devicon-laravel-plain",
    description:
      "A PHP web framework with elegant syntax, offering tools for routing, authentication, and database management.",
    aliases: /^laravel$/,
  },
  {
    icon: "devicon-rails-plain",
    description:
      "A full-stack Ruby framework emphasizing convention over configuration for rapid web application development.",
    aliases: /^(rails|ruby)$/,
  },
  {
    icon: "devicon-redis-plain",
    description:
      "An in-memory data store used as a database, cache, and message broker with sub-millisecond response times.",
    aliases: /^redis$/,
  },
  {
    icon: "devicon-linux-plain",
    description:
      "An open-source operating system kernel powering servers, embedded devices, and most of the world's cloud infrastructure.",
    aliases: /^linux$/,
  },
  {
    icon: "devicon-jenkins-plain",
    description:
      "An open-source automation server for building, testing, and deploying code through CI/CD pipelines.",
    aliases: /^jenkins$/,
  },
  {
    icon: "devicon-kubernetes-plain",
    description:
      "An open-source container orchestration platform for automating deployment, scaling, and management of containerized apps.",
    aliases: /^kubernetes$/,
  },
  {
    icon: "devicon-azure-plain",
    description:
      "Microsoft's cloud platform providing a wide range of services for building, deploying, and managing applications.",
    aliases: /^(azure|azuredevops)$/,
  },
  {
    icon: "devicon-googlecloud-plain",
    description:
      "Google's suite of cloud services for compute, storage, machine learning, and data analytics.",
    aliases: /^(gcp|googlecloud)$/,
  },
  {
    icon: "devicon-bitbucket-plain",
    description:
      "A Git-based source code hosting service by Atlassian with built-in CI/CD and deep Jira integration.",
    aliases: /^bitbucket$/,
  },
  {
    icon: "devicon-nginx-plain",
    description:
      "A high-performance web server and reverse proxy known for handling large volumes of concurrent connections.",
    aliases: /^nginx$/,
  },
  {
    icon: "devicon-blender-plain",
    description:
      "A free, open-source 3D creation suite supporting modeling, animation, rendering, and video editing.",
    aliases: /^blender$/,
  },
  {
    icon: "devicon-unity-original",
    description:
      "A cross-platform game engine for creating 2D and 3D interactive experiences across mobile, desktop, and consoles.",
    aliases: /^unity$/,
  },
  {
    icon: "devicon-unrealengine-original",
    description:
      "A powerful game engine by Epic Games known for high-fidelity graphics, used in AAA games and real-time 3D projects.",
    aliases: /^unreal$/,
  },
  {
    icon: "devicon-swift-plain",
    description:
      "Apple's modern programming language for iOS and macOS, designed for safety, speed, and expressiveness.",
    aliases: /^swift$/,
  },
  {
    icon: "devicon-kotlin-plain",
    description:
      "A modern JVM language by JetBrains, officially supported for Android development with full Java interop.",
    aliases: /^kotlin$/,
  },
  {
    icon: "devicon-go-plain",
    description:
      "A statically typed language by Google built for simplicity, concurrency, and high-performance backend services.",
    aliases: /^go$/,
  },
  {
    icon: "devicon-rust-plain",
    description:
      "A systems programming language focused on memory safety and performance without a garbage collector.",
    aliases: /^rust$/,
  },
  {
    icon: "devicon-dart-plain",
    description:
      "A client-optimized language by Google, primarily used with Flutter for cross-platform mobile and web apps.",
    aliases: /^dart$/,
  },
  {
    icon: "devicon-flask-original",
    description:
      "A lightweight Python web framework providing the essentials for building web applications without imposing structure.",
    aliases: /^flask$/,
  },
  {
    icon: "devicon-django-plain",
    description:
      "A high-level Python web framework that encourages rapid development with a batteries-included philosophy.",
    aliases: /^django$/,
  },
  {
    icon: "devicon-bootstrap-plain",
    description:
      "A popular CSS framework with pre-built responsive components and a grid system for rapid front-end development.",
    aliases: /^bootstrap$/,
  },
  {
    icon: "devicon-materialui-plain",
    description:
      "A React component library implementing Google's Material Design with ready-to-use UI building blocks.",
    aliases: /^(materialui|material\s?ui)$/,
  },
  {
    icon: "devicon-photoshop-plain",
    description:
      "Adobe's industry-standard image editing software for photo retouching, compositing, and digital art creation.",
    aliases: /^photoshop$/,
  },
  {
    icon: "devicon-illustrator-plain",
    description:
      "Adobe's vector graphics editor for creating logos, icons, illustrations, and scalable design assets.",
    aliases: /^illustrator$/,
  },
  {
    icon: "devicon-xd-plain",
    description:
      "Adobe's UI/UX design tool for wireframing, prototyping, and collaborating on web and mobile app designs.",
    aliases: /^xd$/,
  },
  {
    icon: "devicon-premiere-plain",
    description:
      "Adobe's professional video editing software used for film, TV, and online content production.",
    aliases: /^premiere$/,
  },
  {
    icon: "devicon-figma-plain",
    description:
      "A collaborative, browser-based design tool for UI/UX design, prototyping, and developer handoff.",
    aliases: /^figma$/,
  },
  {
    icon: "devicon-inkscape-plain",
    description:
      "A free, open-source vector graphics editor for creating and editing SVGs, illustrations, and diagrams.",
    aliases: /^inkscape$/,
  },
  {
    icon: "devicon-trello-plain",
    description:
      "A visual project management tool using boards, lists, and cards to organize tasks and workflows.",
    aliases: /^trello$/,
  },
  {
    icon: "devicon-jira-plain",
    description:
      "An Atlassian project tracking tool for agile software development, bug tracking, and sprint planning.",
    aliases: /^jira$/,
  },
  {
    icon: "devicon-heroku-plain",
    description:
      "A cloud platform-as-a-service that simplifies deploying, managing, and scaling web applications.",
    aliases: /^heroku$/,
  },
  {
    icon: "devicon-elasticsearch-plain",
    description:
      "A distributed search and analytics engine for log analysis, full-text search, and real-time data exploration.",
    aliases: /^elasticsearch$/,
  },
  {
    icon: "devicon-redux-original",
    description:
      "A predictable state management library for JavaScript apps, commonly paired with React for complex app state.",
    aliases: /^redux$/,
  },
  {
    icon: "devicon-threejs-original",
    description:
      "A JavaScript library that makes creating 3D graphics in the browser accessible using WebGL.",
    aliases: /^threejs$/,
  },
];

const findTech = (techName: string): TechInfo | undefined => {
  const normalized = techName.replace(/[ .]/g, "").toLowerCase();
  return techMap.find((tech) => tech.aliases.test(normalized));
};

export { techMap, findTech };
export type { TechInfo };