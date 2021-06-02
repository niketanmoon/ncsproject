import { lazy } from "react";

const SignIn = lazy(() => import("../container/SignIn"));
const SignUp = lazy(() => import("../container/SignUp"));
const Home = lazy(() => import("../container/Home"));
const Wallet = lazy(() => import("../container/Wallet"));
const Transaction = lazy(() => import("../container/Transaction"));
export const RoutesPath = [
  {
    path: "/signin",
    component: SignIn,
    private: false,
  },
  {
    path: "/signup",
    component: SignUp,
    private: false,
  },
  {
    path: "/wallet",
    component: Wallet,
    private: true,
  },
  {
    path: "/transactions",
    component: Transaction,
    private: true,
  },
  {
    path: "",
    component: Home,
    private: false,
  },
];
