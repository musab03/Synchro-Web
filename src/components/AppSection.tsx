'use client'

// src/components/AppSection.tsx
const AppSection = () => {
    return (
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">More apps to help you sell online</h2>
          <div className="flex justify-center space-x-8">
            <div className="bg-white p-6 rounded-lg shadow-md w-1/3">
              <h3 className="text-2xl font-bold mb-4">Shop</h3>
              <p>Activate Shop to reach new customers with an integrated mobile shopping experience and one-click checkout.</p>
              <button className="bg-black text-white px-4 py-2 rounded mt-4">Set up Shop</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-1/3">
              <h3 className="text-2xl font-bold mb-4">Linkpop</h3>
              <p>Turn your audience into customers through your social bio with Linkpop—a free link in bio tool designed for commerce.</p>
              <button className="bg-black text-white px-4 py-2 rounded mt-4">Make your link in bio shoppable</button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md w-1/3">
              <h3 className="text-2xl font-bold mb-4">Tokengated commerce</h3>
              <p>Mint your own NFTs and drive sales by giving token holders exclusive access to your merch, experiences, and more.</p>
              <button className="bg-black text-white px-4 py-2 rounded mt-4">Launch your tokengated store</button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AppSection;
  