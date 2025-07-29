"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { usernameSchema } from "@/app/lib/validator";
import { updateUsername } from "@/action/users";
import useFetch from "@/hooks/use-fetch"
import { BarLoader } from "react-spinners";
import { getLatestUpdates } from "@/action/dashboard";
import { format } from "date-fns";

const Dashboard = () => {
  const { isLoaded, user } = useUser()
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    setOrigin(window.location.origin + "/");
  }, []);

  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    resolver: zodResolver(usernameSchema)
  })
  useEffect(() => {
    setValue("username", user?.username)
  }, [isLoaded])
 const {
    loading: loadingUpdates,
    data: upcomingMeetings,
    fn: fnUpdates,
  } = useFetch(getLatestUpdates);
  console.log(upcomingMeetings)
   const {
    loading,
    error,
    fn: fnUpdateUsername,
  } = useFetch(updateUsername);
  const onSubmit = async (data) => { 
    fnUpdateUsername(data.username)
      console.log("user",data.username)
  }
 
  useEffect(() => {
    (async () => await fnUpdates())();
  }, []);
  return <div className="space-y-8">
    <Card>
      <CardHeader>
        <CardTitle>Welcome <span className="uppercase">{user?.firstName}</span></CardTitle>
      </CardHeader>
           <CardContent>
          {!loadingUpdates ? (
            <div className="space-y-6 font-light">
              <div>
                {upcomingMeetings && upcomingMeetings?.length > 0 ? (
                  <ul className="list-disc pl-5">
                    {upcomingMeetings?.map((meeting) => (
                      <li key={meeting.id}>
                        {meeting.event.title} on{" "}
                        {format(
                          new Date(meeting.startTime),
                          "MMM d, yyyy h:mm a"
                        )}{" "}
                        with {meeting.name}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No upcoming meetings</p>
                )}
              </div>
            </div>
          ) : (
            <p>Loading updates...</p>
          )}
        </CardContent>
    </Card>
    <Card>
      <CardHeader>
        <CardTitle>
          Your Unique Link
        </CardTitle>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
               <span>{origin}</span>
                <Input {...register("username")} placeholder="username" />
              </div>
              {
                errors.username && (
                  <p>{errors.username.message}</p>
                )
              }
                 {error && (
                <p className="text-red-500 text-sm mt-1">{error?.message}</p>
              )}
              {loading && (
              <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />
            )}
              <Button type="sumit">Update Username</Button>
            </div>
          </form>
        </CardContent>
      </CardHeader>
    </Card>
  </div>;
};

export default Dashboard;
