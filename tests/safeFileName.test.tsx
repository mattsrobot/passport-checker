import { test, expect } from 'vitest';
import safeFileName from "~/helpers/safeFileName";

test('hashes a string with a file name', async () => {
    expect(safeFileName("hello.png")).toBe("3ef7dac1a447e8595451fb5524ff8d52e066bf028e134a7c21addc8ffcc4989e.png")
})

test('hashes a string without a file extension', async () => {
    expect(safeFileName("hello")).toBe("3338be694f50c5f338814986cdf0686453a888b84f424d792af4b9202398f392")
})

test('hashes a string without a file name', async () => {
    expect(safeFileName(".png")).toBe("4f3f33ccbc6ce8e6e19b0c4d7b9875d763351f16aee3667588b140e864daee49.png")
})

