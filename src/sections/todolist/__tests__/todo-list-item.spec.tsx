import { fireEvent, render, screen } from "@testing-library/react";
import TodoListItem from "../todo-list-item";

import { TMockTodo } from "@/constants/mock-data-todo";

describe("<TodoListItem />", () => {
  const setup = () => {
    const mockOnClick = vi.fn();

    const mockData: Array<TMockTodo> = [
      { type: "Fruit", name: "Apple" },
      { type: "Vegetable", name: "Broccoli" },
    ];

    const agrs = render(
      <TodoListItem id="mock-id" data={mockData} onClick={mockOnClick} />
    );

    return {
      mockOnClick,
      ...agrs,
    };
  };

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should render component TodoListItem", () => {
    const { unmount } = setup();

    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Broccoli")).toBeInTheDocument();

    unmount();
  });

  it("function move will called", () => {
    const { mockOnClick, unmount } = setup();

    fireEvent.click(screen.getByTestId("item-Fruit-Apple"));

    expect(mockOnClick).toHaveBeenCalledTimes(1);

    unmount();
  });
});
