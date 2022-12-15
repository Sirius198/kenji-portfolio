import { useQuery } from "react-query";

const fetchAdvice = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  return res.json();
};

interface AdviceResponse {
  slip: {
    advice: string;
  };
}

const useFreeAdvice = () => {
  const { data, status } = useQuery<AdviceResponse>(
    "advice-query-key",
    fetchAdvice
  );

  return [data?.slip.advice, status] as const;
};

export default useFreeAdvice;
