import { NextPage } from "next";
import useSWR from "swr";

const fetcher = (apiURL: string) => fetch(apiURL).then((res) => res.json());

const Test: NextPage = () => {
  const { data, error } = useSWR("/api/hello", fetcher);

  return (
    <>
      <h1>Test</h1>
      ERROR
      <pre>{JSON.stringify(error, null, 2)}</pre>
      DATA
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

export default Test;
