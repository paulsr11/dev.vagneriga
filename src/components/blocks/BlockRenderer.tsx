import Hero from "./Hero";

const BLOCK_COMPONENTS: Record<string, any> = {
  'acf/hero': Hero,
  // Add more blocks here as they are created in WP
};

export default function BlockRenderer({ blocks }: { blocks: any[] }) {
  if (!blocks) return null;

  return (
    <>
      {blocks.map((block, index) => {
        const Component = BLOCK_COMPONENTS[block.blockName];
        if (!Component) {
          console.warn(`No component found for block: ${block.blockName}`);
          return null;
        }

        return <Component key={index} {...block.attrs} />;
      })}
    </>
  );
}
