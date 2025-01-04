import React from "react";

function AboutUs() {
  return (
    <section className="sm:px-8 py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
          About Us
        </h2>
        <div className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          <p className="mb-6">
            At FIDA Digital Marketing Agency, we are passionate about helping
            businesses succeed in the fast-evolving digital world. Our team of
            experts combines creativity, data-driven strategies, and
            cutting-edge technologies to deliver results that matter.
          </p>
          <p>
            From small startups to established enterprises, we work closely with
            our clients to understand their unique needs and challenges,
            creating customized marketing solutions that drive growth,
            engagement, and lasting impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Core Value 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              Our Mission
            </h3>
            <p className="text-gray-600 mt-4">
              To empower businesses by delivering innovative and effective
              digital marketing solutions, helping them reach their goals and
              make a mark in the competitive online space.
            </p>
          </div>

          {/* Core Value 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              Why Choose Us
            </h3>
            <p className="text-gray-600 mt-4">
              With a focus on transparency, measurable results, and a
              client-first approach, we ensure every campaign we create aligns
              with your brand’s vision and delivers tangible value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
