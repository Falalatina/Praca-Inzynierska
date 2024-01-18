import { describe, expect, it, test } from "vitest";
import TeamCard from "../Team/Teamcard";
import { render, screen } from "@testing-library/react";

test("teamComponent", () => {
  expect("should render team component", () => {
    render(<TeamCard teamName="test" workers={user} />);

    screen.debug;
  });
});
