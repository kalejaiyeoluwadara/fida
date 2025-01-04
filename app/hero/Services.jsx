import React from "react";

function Services() {
  return (
    <section className="sm:px-8 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
          Our Services
        </h2>
        <p className="text-gray-600 text-center mb-12">
          At FIDA Digital Marketing Agency, we offer a comprehensive range of
          services designed to help businesses thrive in the digital landscape.
          Whether you're looking to build your online presence, engage your
          audience, or boost sales, we've got you covered.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              Search Engine Optimization (SEO)
            </h3>
            <p className="text-gray-600 mt-4">
              Increase your website's visibility and ranking on search engines
              with our advanced SEO techniques. From keyword research to on-page
              and off-page optimization, we ensure your business gets noticed.
            </p>
            <ul className="mt-6 text-gray-600 text-left space-y-3">
              <li>✔ Comprehensive Keyword Research</li>
              <li>✔ On-Page and Technical SEO</li>
              <li>✔ Link Building Strategies</li>
              <li>✔ Performance Analytics</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-blue-100 shadow-lg rounded-lg p-6 border-2 border-blue-600">
            <h3 className="text-2xl font-semibold text-gray-800">
              Social Media Management
            </h3>
            <p className="text-gray-600 mt-4">
              Connect with your audience and build a loyal community. We create,
              manage, and optimize your social media campaigns to drive
              engagement and growth.
            </p>
            <ul className="mt-6 text-gray-600 text-left space-y-3">
              <li>✔ Content Creation & Scheduling</li>
              <li>✔ Audience Engagement Strategies</li>
              <li>✔ Social Media Advertising</li>
              <li>✔ Performance Insights</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              Pay-Per-Click (PPC) Advertising
            </h3>
            <p className="text-gray-600 mt-4">
              Maximize your marketing ROI with targeted PPC campaigns. We create
              data-driven strategies that ensure every click counts towards
              achieving your goals.
            </p>
            <ul className="mt-6 text-gray-600 text-left space-y-3">
              <li>✔ Google Ads & Social Media Ads</li>
              <li>✔ Campaign Strategy & Setup</li>
              <li>✔ Budget Management</li>
              <li>✔ Conversion Tracking</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
