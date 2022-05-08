import Image from "next/image";
const Hero = () => {
  return (
    <section className="py-10 px-32 flex items-center">
      <div className="flex-1">
        <h1 className="text-5xl text-gray-900 font-bold">
          E-Commerce
          <span> Store</span>
          <br />
          <span className="text-purple-600">Fasion,Gadgets and more...</span>
        </h1>
        <p className="text-gray-600 mt-5">
          Lorem minim nisi laborum proident ipsum eiusmod consequat ea duis
          nostrud esse laborum. Duis nostrud ipsum officia eiusmod velit commodo
          incididunt commodo elit reprehenderit adipisicing consequat officia
          cupidatat. Non incididunt veniam duis proident. Qui irure fugiat quis
          aliqua est magna magna reprehenderit fugiat dolore.
        </p>
        <div className="flex mt-10">
          <button className="bg-cyan-500 text-white py-2 px-4 font-bold rounded-md">
            Explore
          </button>
          <button className="bg-purple-500 text-white rounded-md font-bold px-4 py-2 ml-10">
            View Offers
          </button>
        </div>
      </div>
      <div className="flex-1">
        <img src={"/heroimage.jpg"} />
      </div>
    </section>
  );
};

export default Hero;
