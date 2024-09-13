import React from "react";
import '@/styles/globals.css'
import Header from "@/components/Header";

// Function return a loading style
export default function Loading() {
  return (
    <>
    <main>
    <div className='pendulum'>
      <div className='pendulum_box'>
        <div className='ball first'></div>
        <div className='ball'></div>
        <div className='ball'></div>
        <div className='ball'></div>
        <div className='ball last'></div>
      </div>
    </div>
    </main>
    </>
  );
}
