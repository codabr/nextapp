import React, { FC, useEffect } from "react";
import Image from "next/image";
import { Asset } from "contentful";
import { renderDocument } from "../utils/renderDocument";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Card2: FC<any> = ({ product, index }) => {
  const { name, description, thumbnail } = product.fields;
  const getImageURL = (image: Asset) => {
    return "https:" + image.fields.file.url;
  };
  const options = {
    threshold: 0.2,
    triggerOnce: true,
  };
  const [ref, inView] = useInView(options);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: { type: "spring", duration: 1.5, delay: index * 0.5 },
      });
    }
    !inView &&
      animation.start({
        y: 100,
        opacity: 0,
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);
  return (
    <motion.div
      className="flex content-start max-w-[350px] min-h-[350px] h-auto p-5 rounded shadow-md"
      animate={animation}
      ref={ref}
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
    </motion.div>
  );
};

export default Card2;
2;
