import { test } from 'vitest';
import { json } from "@remix-run/node";
import { createRemixStub } from "@remix-run/testing";
import {
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import Passport from "~/routes/passport.$id._index";

test('it displays the error', async () => {

  const RemixStub = createRemixStub([
    {
      path: "/",
      Component: Passport,
      loader() {
        return json({ error: "Unexpected error", dob: null, expiry: null });
      },
    },
  ]);

  render(<RemixStub />);

  await waitFor(() => screen.findByText("Unexpected error"));
})

test('it displays the date of birth', async () => {

  const RemixStub = createRemixStub([
    {
      path: "/",
      Component: Passport,
      loader() {
        return json({ error: null, dob: "1/1/1986", expiry: "27 April 2023" });
      },
    },
  ]);

  render(<RemixStub />);

  await waitFor(() => screen.findByText("1/1/1986"));
  await waitFor(() => screen.findByText("27 April 2023"));
})
