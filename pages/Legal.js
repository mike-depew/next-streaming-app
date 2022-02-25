import React from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import Navigation from "../components/Navigation";
import Link from "next/link";

const Legal = () => {
  return (
    <>
      <Navigation />
      <div className="py-28 md:py-28 bg-black min-h-screen text-gray-200">
        <div className="px-3 md:px-0 md:container md:mx-auto">
          <div>
            <h4 className="text-center text-3xl font-medium text-yellow-500">
              <span className="block">
                PLEASE READ AND COMPLY WITH THE FOLLOWING
              </span>
              CONDITIONS BEFORE YOU CONTINUE:
            </h4>
            <div>
              <div className="mt-8">
                <div className="p-6 border border-gray-100 h-64 w-11/12 overflow-y-auto">
                  <h3 className="text-3xl font-bold tracking-wider">legal disclaimer</h3>
                  <p className="text-sm leading-relaxed">
                    dolor sit amet consectetur adipisicing elit. Itaque sapiente
                    adipisci doloribus consequatur voluptatem ipsam quis
                    officiis iure ullam! Libero minus sequi nam facilis dolores
                    quasi voluptate saepe illo tenetur totam repellendus maiores
                    quod rerum vitae cupiditate hic nostrum, praesentium
                    blanditiis natus eum soluta dolore minima dicta nisi.
                    Laboriosam, voluptatum.
                    <br />
                    adipisci doloribus consequatur voluptatem ipsam quis
                    officiis iure ullam! Libero minus sequi nam facilis dolores
                    quasi voluptate saepe illo tenetur totam repellendus maiores
                    quod rerum vitae cupiditate hic nostrum, praesentium
                    blanditiis natus eum soluta dolore minima dicta nisi.
                    Laboriosam, voluptatum.
                    <br />
                    adipisci doloribus consequatur voluptatem ipsam quis
                    officiis iure ullam! Libero minus sequi nam facilis dolores
                    quasi voluptate saepe illo tenetur totam repellendus maiores
                    quod rerum vitae cupiditate hic nostrum, praesentium
                    blanditiis natus eum soluta dolore minima dicta nisi.
                    Laboriosam, voluptatum.
                    <br />
                    adipisci doloribus consequatur voluptatem ipsam quis
                    officiis iure ullam! Libero minus sequi nam facilis dolores
                    quasi voluptate saepe illo tenetur totam repellendus maiores
                    quod rerum vitae cupiditate hic nostrum, praesentium
                    blanditiis natus eum soluta dolore minima dicta nisi.
                    Laboriosam, voluptatum.
                    <br />
                    adipisci doloribus consequatur voluptatem ipsam quis
                    officiis iure ullam! Libero minus sequi nam facilis dolores
                    quasi voluptate saepe illo tenetur totam repellendus maiores
                    quod rerum vitae cupiditate hic nostrum, praesentium
                    blanditiis natus eum soluta dolore minima dicta nisi.
                    Laboriosam, voluptatum.
                  </p>
                 
                </div>
                <br/>

                <div className="flex flex-col items-center justify-center">
                  <p className="text-lg font-medium">
                    <input type="checkbox"
                     className="inline-flex m-3"
                    />
                    I know ypu use cookies and think ist neat!
                    <span>Learn More</span>
                  </p>
                  <br/>
                  <div className="space-x-3">

     


                    <button className="w-32 h-12 bg-blue-500 rounded">ENTER HERE</button>


              
                 

                    <button className="w-32 h-12 border border-gray-50 rounded">EXIT HERE</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Legal;
