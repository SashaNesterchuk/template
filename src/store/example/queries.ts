export const fetchData = async (): Promise<Array<string>> => {
  const response = await fetch("http://localhost:3000/", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  const result = await response.json();

  return result;
};
