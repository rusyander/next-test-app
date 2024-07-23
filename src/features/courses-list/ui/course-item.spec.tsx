import { render, screen, waitFor } from "@testing-library/react";
import { after, before, describe, it } from "node:test";
import CourseItem from "./course-item";
import userEvent from "@testing-library/user-event";

// export function flushPromises(): Promise<void> {
//   return new Promise(jest.requireActual("timers").setImmediate);
// }

describe("CourseItem", () => {
  it("should render course item", async () => {
    const onDelete = jest.fn();

    render(
      <CourseItem
        course={{ id: "1", name: "Test", description: "Test" }}
        onDelete={onDelete}
      />,
    );
    // await flushPromises();
    await userEvent.click(screen.getByText("Удалить"));

    expect(onDelete).toHaveBeenCalled();
  });
});
