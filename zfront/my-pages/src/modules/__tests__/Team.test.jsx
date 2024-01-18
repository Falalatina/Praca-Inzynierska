import { describe, it, test } from "vitest";
import TeamCard from "../Team/Teamcard";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@chakra-ui/react";
import theme from "../../themes";
import { expect } from "chai";

describe("teamComponent", () => {
  const mockWorkers = [
    { id: 1, name: "asia" },
    { id: 2, name: "basia" },
  ];

  it("should render team component", () => {
    render(
      <ThemeProvider theme={theme}>
        <TeamCard teamName="Małpiszony" workers={mockWorkers} />
      </ThemeProvider>
    );
    const teamNameElement = screen.getByText("Małpiszony");

    expect(teamNameElement).to.exist;
  });

  test("should exist person", () => {
    render(
      <ThemeProvider theme={theme}>
        <TeamCard teamName="Małpiszony" workers={mockWorkers} />
      </ThemeProvider>
    );
    mockWorkers.forEach((worker) => {
      const workerNameElement = screen.getByText(worker.name);
      expect(workerNameElement).to.exist;
    });
    screen.debug();
  });
});
