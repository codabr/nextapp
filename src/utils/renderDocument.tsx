import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { ReactNode } from "react";

export const renderDocument = (document: any) => {
  const Text = ({ children }: any) => <p>{children}</p>;

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node: ReactNode, children: ReactNode[]) => (
        <Text>{children}</Text>
      ),
    },
    renderText: (text: string) =>
      text.split("\n").flatMap((text, i) => [i > 0 && <br />, text]),
  };

  return documentToReactComponents(document, options as any);
};
