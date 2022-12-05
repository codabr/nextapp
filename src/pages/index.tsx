import { NextPage } from "next";
import Card1 from "../components/Card_1";
import Card2 from "../components/Card_2";
import { client } from "../contentful/client";

export async function getServerSideProps() {
  const _products = await client.getEntries({ content_type: "products" });

  return {
    props: {
      products: _products.items,
    },
  };
}
const Home: NextPage<any> = ({ products }) => {
  return (
    <div>
      <div
        className=" flex flex-col h-screen px-[5%] w-full"
        style={{
          background: `linear-gradient(180deg, rgba(1,32,49,0.76) 25%, rgba(0,59,92,0.61) 60%),url('/bg-image.jpg') 0 0/cover no-repeat`,
        }}
      >
        <div className="flex justify-between items-center">
          <h1 className="text-white text-[55px] cursor-pointer">SeTech</h1>
          <ul className="text-white flex justify-between w-1/2 lg:w-1/6">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="flex flex-col justify-center items-center self-center h-full space-y-5">
          <h1 className="text-white text-5xl animate-slideRight">
            Lorem ipsum dolor sit amet
          </h1>
          <h2 className="text-white text-3xl">Lorem ipsum dolor sit amet</h2>
        </div>
      </div>
      <div className="px-[10%] fle flex-col justify-between h-auto space-y-[100px] py-16">
        <div className="flex flex-col justify-center items-center w-full space-y-10">
          <h1 className="text-4xl">Cards with staggered effect</h1>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product: any, index: number) => (
              <Card1 product={product} key={index} />
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full space-y-10 min-h-[400px]">
          <h1 className="text-4xl">Cards with staggered effect</h1>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product: any, index: number) => (
              <Card2 product={product} key={index} index={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="h-[100px] px-[10%] flex justify-start items-center bg-[#003B5C] text-gray-400">
        <h2>© Copyright 2022 SE.TECH</h2>
      </div>
    </div>
  );
};
export default Home;
