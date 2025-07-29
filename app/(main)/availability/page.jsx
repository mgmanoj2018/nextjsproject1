import React from "react";
import AvailabilityForm from "./_components/availability-form";
import { defaultAvailability } from "./data";
import { getUserAvailability } from "@/action/availability";

export default async function AvailabilityPage() {
  const availability = await getUserAvailability();

  return <AvailabilityForm initialData={availability || defaultAvailability} />;
}