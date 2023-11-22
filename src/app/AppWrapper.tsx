import { Fragment, lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import Loading from "@/components/Loading";
import AddProperty from "@/pages/tenantProperty/tenantProperty";
import MainNavBarTenant from "@/components/mainNavBarTenant/mainNavBarTenant";
import App from "./App";
import TenantHome from "../pages/tenantHome";

// const Home = lazy(() => import("../pages/tenantHome"));

// import App from "./App";


// const App = lazy(() => import("../app/App"));
const Home = lazy(() => import("../pages/Home"));
const Setting = lazy(() => import("../layout/Setting"));
const Profile = lazy(() => import("../pages/Profile"));
const ProtectedRoute = lazy(() => import("../components/auth/ProtectedRoute"));

const AppWrapper = () => {
  return (
    <Fragment>
      <Suspense fallback={<Loading />}>
        
        <Routes>
          <Route path="/" element={<App />}>
          <Route path="/" element={<Home />} />
            <Route path="/tenant" element={<TenantHome />} />
            <Route path="/tenant/propertyAdder" element={<AddProperty />} />
            <Route path="/tenant/propertyEditor" element={""} />
        {/* <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<Home />} /> */}
          {/* <Route path="" element={<App />}>
            <Route path="" element={<Home />} /> */}

            <Route path="/setting" element={<Setting />}>
              <Route
                path="profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
};

export default AppWrapper;
