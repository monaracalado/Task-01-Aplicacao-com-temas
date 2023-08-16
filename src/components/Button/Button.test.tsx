import { render, fireEvent } from "@testing-library/react";
import HouseButton from "./Button"; 

describe("HouseButton", () => {
  it("renders the component correctly", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <HouseButton variantColor="gryffindor" onClick={onClickMock}>
        Gryffindor
      </HouseButton>
    );

    const button = getByText("Gryffindor");
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1); 
  });
});
