import { renderHook, act } from "@testing-library/react-hooks";
import useForm from "../hook";

const setup = (params) => {
  const { result } = renderHook(() => useForm(params));
  return result;
};

describe("test useFrom", () => {
  test("should change the keyword", () => {
    const result = setup();

    act(() => result.current.changeKeyword({ keyword: "argentina" }));

    expect(result.current.keyword).toBe("argentina");
  });

  test("should use the initial values", () => {
    const result = setup({ initialKeyword: "oso" });

    expect(result.current.keyword).toBe("oso");
    expect(result.current.rating).toBe("g");
  });
});
