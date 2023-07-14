import { useRouter } from "next/router";
import Seo from "../../components/Seo";

export default function Detail({ params }) {
  const router = useRouter();
  const [title, id] = params || [];
  console.log(params);
  return (
    <div>
      <Seo title={title}/>
      <h4>{title}</h4>
      <h4>{id}</h4>
    </div>
  );
}

export function getServerSideProps({params: { params } }) {
  return {
    props: { params },
  };
}