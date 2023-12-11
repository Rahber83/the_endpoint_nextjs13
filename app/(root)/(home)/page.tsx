import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Filter from "@/components/shared/Filter";
import Link from "next/link";
import HomeFilters from "@/components/home/HomeFilters";
import NoResult from "@/components/shared/NoResult";
import QuestionCard from "@/components/cards/QuestionCard";

const questions = [
  {
    _id: "1",
    title: "State Management in React?",
    tags: [
      { _id: "101", name: "React" },
      { _id: "102", name: "State Management" },
    ],
    author: {
      _id: "201",
      name: "ReactDevGuru",
      picture: "https://example.com/reactdevguru.jpg",
    },
    answers: [
      { response: "You can use React Context API or libraries like Redux." },
      { response: "Redux helps manage global state in larger applications." },
    ],
    upvotes: 11111185,
    views: 11601,
    createdAt: new Date("2023-10-25"),
  },
  {
    _id: "2",
    title: "Component Lifecycle in Angular?",
    tags: [
      { _id: "103", name: "Angular" },
      { _id: "104", name: "Components" },
    ],
    author: {
      _id: "202",
      name: "AngularNinja21",
      picture: "https://example.com/angularninja21.jpg",
    },
    answers: [
      {
        response:
          "Angular has several lifecycle hooks like ngOnInit, ngOnDestroy, etc.",
      },
      {
        response: "These hooks enable developers to manage component behavior.",
      },
    ],
    upvotes: 70,
    views: 500,
    createdAt: new Date("2023-09-20"),
  },
  {
    _id: "3",
    title: "Best Practices for Writing JavaScript?",
    tags: [
      { _id: "105", name: "JavaScript" },
      { _id: "106", name: "Best Practices" },
    ],
    author: {
      _id: "203",
      name: "JSCodeMaster",
      picture: "https://example.com/jscodemaster.jpg",
    },
    answers: [
      {
        response:
          "Use meaningful variable names and follow a consistent coding style.",
      },
      {
        response:
          "Ensure proper error handling and avoid global scope pollution.",
      },
    ],
    upvotes: 120,
    views: 1000,
    createdAt: new Date("2023-08-15"),
  },
  {
    _id: "4",
    title: "Building RESTful APIs with Node.js?",
    tags: [
      { _id: "107", name: "Node.js" },
      { _id: "108", name: "RESTful APIs" },
    ],
    author: {
      _id: "204",
      name: "NodeJSMaster88",
      picture: "https://example.com/nodejsmaster88.jpg",
    },
    answers: [
      {
        response:
          "Express.js is commonly used with Node.js for building REST APIs.",
      },
      {
        response:
          "Middleware like body-parser helps parse incoming request data.",
      },
    ],
    upvotes: 95,
    views: 800,
    createdAt: new Date("2023-07-10"),
  },
  {
    _id: "5",
    title: "Understanding Data Structures and Algorithms?",
    tags: [
      { _id: "109", name: "Data Structures" },
      { _id: "110", name: "Algorithms" },
    ],
    author: {
      _id: "205",
      name: "AlgoGeek77",
      picture: "https://example.com/algogeek77.jpg",
    },
    answers: [
      {
        response:
          "Data structures are ways to store and organize data efficiently.",
      },
      {
        response: "Algorithms are step-by-step procedures for problem-solving.",
      },
    ],
    upvotes: 150,
    views: 1200,
    createdAt: new Date("2023-06-05"),
  },
  {
    _id: "6",
    title: "Working with MongoDB Aggregation?",
    tags: [
      { _id: "111", name: "MongoDB" },
      { _id: "112", name: "Aggregation" },
    ],
    author: {
      _id: "206",
      name: "MongoDBNinja",
      picture: "https://example.com/mongodbninja.jpg",
    },
    answers: [
      {
        response:
          "Aggregation pipelines allow for advanced data processing in MongoDB.",
      },
      {
        response:
          "Operators like $match, $group, and $project are commonly used.",
      },
    ],
    upvotes: 80,
    views: 700,
    createdAt: new Date("2023-05-20"),
  },
  {
    _id: "7",
    title: "Semantic HTML: Why is it important?",
    tags: [
      { _id: "113", name: "HTML" },
      { _id: "114", name: "Semantic Markup" },
    ],
    author: {
      _id: "207",
      name: "HTMLPro123",
      picture: "https://example.com/htmlpro123.jpg",
    },
    answers: [
      {
        response: "Semantic HTML improves accessibility and SEO of web pages.",
      },
      {
        response:
          "It helps browsers and screen readers understand content better.",
      },
    ],
    upvotes: 60,
    views: 400,
    createdAt: new Date("2023-04-15"),
  },
  {
    _id: "8",
    title: "CSS Flexbox vs. CSS Grid?",
    tags: [
      { _id: "115", name: "CSS" },
      { _id: "116", name: "Flexbox" },
      { _id: "117", name: "Grid" },
    ],
    author: {
      _id: "208",
      name: "CSSStyler99",
      picture: "https://example.com/cssstyler99.jpg",
    },
    answers: [
      {
        response:
          "Flexbox is ideal for layout in one dimension - rows or columns.",
      },
      { response: "CSS Grid provides a two-dimensional layout system." },
    ],
    upvotes: 110,
    views: 900,
    createdAt: new Date("2023-03-10"),
  },
  {
    _id: "9",
    title: "React Hooks: useState vs. UseReducer?",
    tags: [
      { _id: "101", name: "React" },
      { _id: "118", name: "Hooks" },
    ],
    author: {
      _id: "209",
      name: "ReactHooksFanatic",
      picture: "https://example.com/reacthooksfanatic.jpg",
    },
    answers: [
      {
        response:
          "useState is simpler for managing individual state variables.",
      },
      {
        response:
          "useReducer is powerful for managing more complex state logic.",
      },
    ],
    upvotes: 95,
    views: 750,
    createdAt: new Date("2023-02-05"),
  },
  {
    _id: "10",
    title: "Optimizing Performance in Angular Apps?",
    tags: [
      { _id: "103", name: "Angular" },
      { _id: "119", name: "Performance Optimization" },
    ],
    author: {
      _id: "210",
      name: "AngularPerformancePro",
      picture: "https://example.com/angularperformancepro.jpg",
    },
    answers: [
      {
        response:
          "Lazy loading modules and optimizing change detection are key.",
      },
      {
        response:
          "Using trackBy for ngFor and minimizing DOM manipulations help.",
      },
    ],
    upvotes: 120,
    views: 1000,
    createdAt: new Date("2023-01-01"),
  },
];

export default function Home() {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          otherClasses="flex-1"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex  w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              answers={question.answers}
              upvotes={question.upvotes}
              views={question.views}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There’s no question to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the discussion. our query could be the next big thing others learn from. Get involved! 💡"
            link="/ask-question"
            linkTitle="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
