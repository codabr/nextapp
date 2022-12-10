import React, { FC, useEffect } from "react";
import Image from "next/image";
import { Asset } from "contentful";
import { renderDocument } from "../utils/renderDocument";
import { useInView } from "react-intersection-observer";

type PropsType = {
  product: any;
  num?: number;
};

const Card: FC<PropsType> = ({ product, num }) => {
  const { name, description, thumbnail } = product.fields;
  const getImageURL = (image: Asset) => {
    return "https:" + image.fields.file.url;
  };
  const options = {
    threshold: 0.2,
    triggerOnce: true,
  };
  const [ref, inView] = useInView(options);

  return (
    <div
      className="flex content-start max-w-[350px] min-h-[350px] h-auto p-5 rounded shadow-md"
      ref={ref}
      style={{
        transform: inView ? "none" : "translateY(200px)",
        opacity: inView ? 1 : 0,
        transition: `all 0.7s ease-in ${num ? num * 0.3 + "s" : "0.5s"}`,
      }}
    >
      <div className="flex flex-col items-center space-y-2">
        <div>
          <Image src={getImageURL(thumbnail)} alt="" width={200} height={200} />
        </div>
        <h1>{name}</h1>
        <span className=" text-hs-text mt-3 text-justify ">
          {renderDocument(description)}
        </span>
      </div>
    </div>
  );
};

export default Card;
2;
