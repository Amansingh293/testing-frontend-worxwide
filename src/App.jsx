import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Loader from "./components/common/Loader";

// ✅ Lazy loading pages
const HomePage = React.lazy(() => import("./pages/HomePage"));
const Features = React.lazy(() => import("./pages/Features"));
const Pricing = React.lazy(() => import("./pages/Pricing"));
const Insights = React.lazy(() => import("./pages/Insights"));
const Contact = React.lazy(() => import("./pages/Contact"));
const LoginPage = React.lazy(() => import("./pages/LoginPage"));
const BlogSection = React.lazy(() => import("./components/blogs/BlogSection"));
const BlogDetails = React.lazy(() => import("./components/blogs/BlogDetails"));
const WhitepaperDetail = React.lazy(() =>
  import("./components/whitepappers/WhitepaperDetail")
);
const WhitepapperSection = React.lazy(() =>
  import("./components/whitepappers/WhitepapperSection")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<Loader />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "features",
        element: (
          <Suspense fallback={<Loader />}>
            <Features />
          </Suspense>
        ),
      },
      {
        path: "pricing",
        element: (
          <Suspense fallback={<Loader />}>
            <Pricing />
          </Suspense>
        ),
      },
      {
        path: "insights",
        element: (
          <Suspense fallback={<Loader />}>
            <Insights />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<Loader />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "login",
        element: (
          <Suspense fallback={<Loader />}>
            <LoginPage />
          </Suspense>
        ),
      },
      {
        path: "blog",
        element: (
          <Suspense fallback={<Loader />}>
            <BlogSection />
          </Suspense>
        ),
      },
      {
        path: "blogdetail",
        element: (
          <Suspense fallback={<Loader />}>
            <BlogDetails />
          </Suspense>
        ),
      },
      {
        path: "whitepaper",
        element: (
          <Suspense fallback={<Loader />}>
            <WhitepapperSection />
          </Suspense>
        ),
      },
      {
        path: "whitepaperdetail",
        element: (
          <Suspense fallback={<Loader />}>
            <WhitepaperDetail />
          </Suspense>
        ),
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
