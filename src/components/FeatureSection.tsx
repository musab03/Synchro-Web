'use client'

// src/components/FeatureSection.tsx
const FeatureSection = () => {
    return (
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Everything you need to sell online</h2>
          <p className="text-lg mb-12">Bring your products to life across every channel.</p>
          <div className="flex justify-center space-x-8">
            <div className="w-1/3">
              <h3 className="text-2xl font-bold mb-4">Your storefront</h3>
              <p>It's never been easier to set up your own online store and bring your brand to life.</p>
            </div>
            <div className="w-1/3">
              <h3 className="text-2xl font-bold mb-4">Online marketplaces</h3>
              <p>Connect to online marketplaces across the web so you can sell where people shop.</p>
            </div>
            <div className="w-1/3">
              <h3 className="text-2xl font-bold mb-4">Social media</h3>
              <p>Grow your audience with integrated tools to help you sell on Facebook, Instagram, TikTok, and more.</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default FeatureSection;
  