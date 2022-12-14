import { NextPage } from "next";
import Card from "../components/Card";
import { client } from "../contentful/client";
import Container from "../components/Container";

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
          <h1 className="text-white text-[55px] cursor-pointer">ABC-CO</h1>
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
          <h2 className="text-white text-3xl animate-slideLeft">
            Lorem ipsum dolor sit amet
          </h2>
        </div>
      </div>
      <div className="px-[10%] fle flex-col justify-between h-auto space-y-[100px] py-16">
        <Container title="Cards without staggered effect">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {products.map((product: any, index: number) => (
              <Card product={product} key={index} />
            ))}
          </div>
        </Container>
        <Container title="Cards without staggered effect">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product: any, index: number) => (
              <Card product={product} key={index} num={index + 1} />
            ))}
          </div>
        </Container>
      </div>
      <div className="h-[100px] px-[10%] flex justify-start items-center bg-[#003B5C] text-gray-400">
        <h2>© Copyright 2022 SeTech</h2>
      </div>
    </div>
  );
};
export default Home;
