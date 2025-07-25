"use client";
import { UserButton } from "@clerk/nextjs";
import { ChartNoAxesGantt } from "lucide-react";
import React from "react";

const UseMenu = () => {
    return <div>
        <UserButton appearance={{
            elements: {
                avatarBox: "h-18 w-18"
            }
        }}>
            <UserButton.MenuItems>
                <UserButton.Link label="My Events "  labelIcon={<ChartNoAxesGantt />} href="/events" />            
                <UserButton.Action label="manageAccount" />
            </UserButton.MenuItems>
        </UserButton>
    </div>;
};

export default UseMenu;
