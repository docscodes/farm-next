import { getSession } from "@/actions";
import CarForm from "@/components/CarForm";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getSession();

  if (!session?.jwt) {
    redirect("/login");
  }

  return (
    <div className="p-4">
      <h1>Private Page</h1>
      <CarForm />
    </div>
  );
};

export default page;
