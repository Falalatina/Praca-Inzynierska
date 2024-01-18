import { describe, expect, it, test } from "vitest";
import TeamCard from "../Team/Teamcard";
import { render, screen } from "@testing-library/react";

describe("teamComponent", () => {
  const mockWorkers = [
    { id: 1, name: "asia" },
    { id: 2, name: "basia" },
  ];
  it("should render team component", () => {
    render(<TeamCard teamName="Małpiszony" workers={mockWorkers} />);

    // Check if the teamName is rendered
    const teamNameElement = screen.getByText("Małpiszony");
    expect(teamNameElement).toBeInTheDocument();

    mockWorkers.forEach((worker) => {
      const workerNameElement = screen.getByText(name);
      expect(workerNameElement).toBeInTheDocument();
    });
  });
});
