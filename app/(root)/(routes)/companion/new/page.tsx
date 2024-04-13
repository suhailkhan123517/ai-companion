import { redirect } from "next/navigation";
import { auth, redirectToSignIn } from "@clerk/nextjs";

import { db } from "@/lib/db";
import { CompanionAdd } from "../_components/companion-add";
// import { checkSubscription } from "@/lib/subscription";

interface CompanionIdPageProps {
  params: {
    companionId: string;
  };
}

const CompanionNew = async ({ params }: CompanionIdPageProps) => {
  const { userId } = auth();

  if (!userId) {
    return redirectToSignIn();
  }

  //   const validSubscription = await checkSubscription();

  //   if (!validSubscription) {
  //     return redirect("/");
  //   }

  const categories = await db.category.findMany();

  return <CompanionAdd categories={categories} />;
};

export default CompanionNew;
