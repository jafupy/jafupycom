import {} from "react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { slug } from "../../actions/links";

export default function Page() {
  const [pageinfo, setPageinfo] = useState({});
  const router = useRouter();
  const { slug } = router.query;

  const {} = useMutation({
    mutateFn: async () => {
      const data = await slug(slug);
      setPageinfo(data);
    },
  });
  return <div></div>;
}
