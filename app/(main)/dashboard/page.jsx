"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { usernameSchema } from "@/app/lib/validator";



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

  const onSubmit = async (data) => { }
  console.log("user",user)
  return <div className="space-y-8">
    <Card>
      <CardHeader>
        <CardTitle>Welcome <span className="uppercase">{user?.firstName}</span></CardTitle>
      </CardHeader>
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
              <Button type="sumit">Update Username</Button>
            </div>
          </form>
        </CardContent>
      </CardHeader>
    </Card>
  </div>;
};

export default Dashboard;
