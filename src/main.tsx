import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import LoginPage from "./Components/Login";
import Wrapper from "./Components/Wrapper";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RegisterPage from "./Components/Register";
import Menu from "./Components/Menu";
import CarouselPage from "./Components/CarouselPage";
import CareerDetailPage from "./Components/CareerDescription";
import WebDevMinigame from "./Components/WebDevMinigame";
import MenuPage from "./Components/menu-page";

const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  { path: "/signup", element: <RegisterPage /> },
  { path: "/", element: <Menu /> },
  { path: "/career", element: <CarouselPage /> },
  { path: "/career/description", element: <CareerDetailPage /> },
  { path: "game", element: <MenuPage /> },
  { path: "game/webdev", element: <WebDevMinigame /> },
]);



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Wrapper>
      <RouterProvider router={router} />
    </Wrapper>
  </StrictMode>
);
