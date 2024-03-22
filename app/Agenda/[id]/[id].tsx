import { GeorumNetworkGroups } from "@/app/lib/placeholder";
import { useRouter } from "next/router";

export default function ContactDetailsPage () {
  const router = useRouter();
  const { id } = router.query;

  const contact = GeorumNetworkGroups[Number(id)];
  if (!contact) {
    return <div>Contact Non trouver</div>
  }

  return (
    <div>
      <h2>name: {contact.name}</h2>
    </div>
  )
}