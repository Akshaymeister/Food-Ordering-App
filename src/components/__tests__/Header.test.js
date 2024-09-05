import { Provider } from "react-redux";
import Header from "../Header";
import { appStore } from "../../utils/appStore";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

it("Should load header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button");
  expect(loginButton).toBeInTheDocument();
});
