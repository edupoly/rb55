import Banner from "./components/Banner";
import Course from "./components/Course";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
function App() {
  const courses = [
    {
      coursename: "React Basics",
      price: 15000,
      trainer: "Praveen",
      duration: 20,
      shortDescription: "Intro to React, components, state, and props.",
    },
    {
      coursename: "React Advanced",
      price: 30000,
      trainer: "Nithin",
      duration: 40,
      shortDescription: "Hooks, context, performance optimization and testing.",
    },
    {
      coursename: "Angular Fundamentals",
      price: 20000,
      trainer: "Chiru",
      duration: 25,
      shortDescription:
        "TypeScript-based framework, components, services and routing.",
    },
    {
      coursename: "Angular Advanced",
      price: 35000,
      trainer: "Anu",
      duration: 45,
      shortDescription:
        "NgRx, advanced forms, lazy loading and performance tuning.",
    },
    {
      coursename: "NodeJS Essentials",
      price: 18000,
      trainer: "Ravi",
      duration: 30,
      shortDescription:
        "Server-side JavaScript, event loop, and building APIs.",
    },
    {
      coursename: "ExpressJS API Development",
      price: 22000,
      trainer: "Priya",
      duration: 28,
      shortDescription:
        "RESTful APIs with Express, middleware and routing patterns.",
    },
    {
      coursename: "Next.js Practical",
      price: 32000,
      trainer: "Sanjay",
      duration: 35,
      shortDescription: "SSR, SSG, routing and performance with Next.js.",
    },
    {
      coursename: "Vue.js Complete",
      price: 17000,
      trainer: "Kavya",
      duration: 22,
      shortDescription: "Vue core, components, composition API and tooling.",
    },
    {
      coursename: "Svelte Quickstart",
      price: 14000,
      trainer: "Meera",
      duration: 16,
      shortDescription:
        "Lightweight UI framework, reactivity and building components.",
    },
    {
      coursename: "TypeScript for JavaScript Devs",
      price: 16000,
      trainer: "Arjun",
      duration: 18,
      shortDescription: "Types, generics, tooling and migrating JS projects.",
    },
    {
      coursename: "Fullstack MERN",
      price: 40000,
      trainer: "Praveen",
      duration: 60,
      shortDescription:
        "Mongo, Express, React and Node fullstack application building.",
    },
    {
      coursename: "GraphQL API Design",
      price: 26000,
      trainer: "Nithin",
      duration: 30,
      shortDescription: "Schema design, resolvers, Apollo and best practices.",
    },
    {
      coursename: "MongoDB for Developers",
      price: 15000,
      trainer: "Chiru",
      duration: 20,
      shortDescription:
        "Document modeling, queries, indexing and aggregation framework.",
    },
    {
      coursename: "Docker & Containers",
      price: 21000,
      trainer: "Anu",
      duration: 24,
      shortDescription:
        "Containerization, images, Dockerfile and basic orchestration.",
    },
    {
      coursename: "Backend with NestJS",
      price: 28000,
      trainer: "Ravi",
      duration: 32,
      shortDescription:
        "Modular backend, decorators, dependency injection and testing.",
    },
    {
      coursename: "Python for Developers",
      price: 19000,
      trainer: "Deepa",
      duration: 26,
      shortDescription:
        "Core Python, standard library, scripting and best practices.",
    },
    {
      coursename: "Django Web Development",
      price: 24000,
      trainer: "Karan",
      duration: 34,
      shortDescription:
        "Building web apps with Django, ORM, templates and deployment.",
    },
    {
      coursename: "Kubernetes Basics",
      price: 23000,
      trainer: "Ritika",
      duration: 20,
      shortDescription:
        "Containers orchestration, pods, services, deployments and config.",
    },
    {
      coursename: "CI/CD with GitHub Actions",
      price: 15000,
      trainer: "Vikram",
      duration: 14,
      shortDescription:
        "Automating builds, tests and deployments using GitHub Actions.",
    },
    {
      coursename: "AI/ML with TensorFlow",
      price: 36000,
      trainer: "Ananya",
      duration: 40,
      shortDescription:
        "Neural networks, model training, TensorFlow APIs and deployment.",
    },
  ];
  return (
    <div className="border border-2 border-danger p-2 m-2">
      <Navbar></Navbar>
      <Banner></Banner>
      <Feedback></Feedback>
      <div className="d-flex flex-wrap">
        {courses.map((course) => {
          return (
            <Course
              price={course.price}
              trainer={course.trainer}
              duration={course.duration}
              description={course.shortDescription}
            >
              {course.coursename}
            </Course>
          );
        })}
      </div>
    </div>
  );
}

export default App;
