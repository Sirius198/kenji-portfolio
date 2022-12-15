import { useQuery } from "react-query";
import { NEXT_PUBLIC_RESUME_URL } from "../util/constants";
import { ResumeDataType } from "../util/resumedata";

const useResume = () => {
  const { data, status } = useQuery<ResumeDataType>("@pools-list", async () => {
    const response = await fetch(NEXT_PUBLIC_RESUME_URL!);
    return response.json();
  });

  return [data, status] as const
};

export default useResume;
