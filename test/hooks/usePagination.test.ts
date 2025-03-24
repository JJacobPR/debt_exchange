import { renderHook, act } from "@testing-library/react";
import usePagination from "../../src/hooks/usePagination";
import { describe, test, expect } from "vitest";

describe("usePagination Hook", () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const itemsPerPage = 3;

  test("should initialize with correct values", () => {
    const { result } = renderHook(() => usePagination(data, itemsPerPage));

    expect(result.current.currentPage).toBe(1);
    expect(result.current.totalPages).toBe(Math.ceil(data.length / itemsPerPage));
    expect(result.current.currentData).toEqual([1, 2, 3]);
  });

  test("should change pages correctly", () => {
    const { result } = renderHook(() => usePagination(data, itemsPerPage));

    act(() => {
      result.current.goToPage(2);
    });
    expect(result.current.currentPage).toBe(2);
    expect(result.current.currentData).toEqual([4, 5, 6]);
  });

  test("should not go below page 1", () => {
    const { result } = renderHook(() => usePagination(data, itemsPerPage));

    act(() => {
      result.current.goToPage(0);
    });
    expect(result.current.currentPage).toBe(1);
  });

  test("should not exceed total pages", () => {
    const { result } = renderHook(() => usePagination(data, itemsPerPage));

    act(() => {
      result.current.goToPage(10);
    });
    expect(result.current.currentPage).toBe(result.current.totalPages);
  });

  test("should handle last page correctly", () => {
    const { result } = renderHook(() => usePagination(data, itemsPerPage));

    act(() => {
      result.current.goToPage(4);
    });
    expect(result.current.currentPage).toBe(4);
    expect(result.current.currentData).toEqual([10]);
  });
});
