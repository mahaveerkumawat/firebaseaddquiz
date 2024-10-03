import React from 'react';



const Home = () => {
   
    return (
        <>

            <section className="py-16 bg-white min-h-[100]:">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800">Our Features</h2>
                    <p className="mt-4 text-gray-600">
                        Explore what we offer to enhance your experience.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                        <div className="p-6 bg-gray-100 rounded-lg shadow">
                            <h3 className="text-xl font-semibold text-gray-800">Feature 1</h3>
                            <p className="mt-2 text-gray-600">Description of feature 1.</p>
                        </div>
                        <div className="p-6 bg-gray-100 rounded-lg shadow">
                            <h3 className="text-xl font-semibold text-gray-800">Feature 2</h3>
                            <p className="mt-2 text-gray-600">Description of feature 2.</p>
                        </div>
                        <div className="p-6 bg-gray-100 rounded-lg shadow">
                            <h3 className="text-xl font-semibold text-gray-800">Feature 3</h3>
                            <p className="mt-2 text-gray-600">Description of feature 3.</p>
                        </div>
                    </div>
                </div>
            </section>
         
            <footer className="py-6 bg-gray-800 text-white text-center">
                <p>© 2024 Your Company. All rights reserved.</p>
            </footer>

         


        </>

    );
}

export default Home;
