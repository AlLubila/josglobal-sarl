import React from "react";
import Image from "next/image";

import styles from "@/styles/section/homepage/testimony.module.css";

export default function Testimony() {
  return (
    <div>
      <section className="text-white py-16 my-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8">
            What our clients are saying
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white shadow rounded-lg p-8">
              <p className="text-gray-700 mb-4">
                "Partnering with JOSGLOBAL Sarl has been a game-changer for our
                business. Their ability to source high-quality building
                materials at competitive prices has helped us complete our
                projects on time and within budget. The reliability of their
                supply chain, especially in handling complex logistics, is
                unmatched. With their excellent customer support, we always feel
                like we are their top priority. JOSGLOBAL is more than just a
                supplier—they’re a key part of our success."
              </p>
              <p className="text-gray-700 font-medium">
                - John M., CEO of Kinshasa Construction Solutions
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-8">
              <p className="text-gray-700 mb-4">
                "We have been sourcing wholesale clothing, shoes, and
                accessories from JOSGLOBAL Sarl for over a year, and their
                service has been outstanding. Their products consistently meet
                our high standards of quality, and the team always goes above
                and beyond to accommodate our requests for specific styles and
                trends. Thanks to their dedication and support, we have been
                able to grow our business and offer our customers top-notch
                fashion at affordable prices."
              </p>
              <p className="text-gray-700 font-medium">
                - Marie T., Founder of Kinshasa Boutique
              </p>
            </div>
            <div className="bg-white shadow rounded-lg p-8">
              <p className="text-gray-700 mb-4">
                "JOSGLOBAL Sarl has been an essential partner for us in sourcing
                agricultural machinery. Their wide selection of equipment for
                small industries has allowed us to improve the efficiency and
                productivity of our clients' operations. We value their
                transparency, timely deliveries, and the excellent quality of
                the products. They’re truly committed to supporting our business
                needs, and we look forward to continuing this partnership for
                many years to come."
              </p>
              <p className="text-gray-700 font-medium">- Claude L., Managing Director, Congo Agro Solutions</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
