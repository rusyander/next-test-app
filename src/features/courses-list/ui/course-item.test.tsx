import { render, screen, waitFor } from "@testing-library/react";
import { describe, it } from "node:test";
import CourseItem from "./course-item";
import userEvent from "@testing-library/user-event";

describe("CourseItem", () => {
  it("should render course item", async () => {
    const onDelete = jest.fn();

    render(
      <CourseItem
        course={{ id: "1", name: "Test", description: "Test" }}
        onDelete={onDelete}
      />,
    );

    await userEvent.click(screen.getByText("Удалить"));

    expect(onDelete).toHaveBeenCalled();

    // await waitFor(() => {
    //   expect(screen.queryByText("Удалить")).not.toBeInTheDocument();
    // });
  });
});
