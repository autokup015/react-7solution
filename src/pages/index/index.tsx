import Index from "@/sections/index";

const metadata = { title: "Homepage" };

// ---------------------------------------------------------------------------------

const IndexPage = () => {
  return (
    <>
      <title>{metadata.title}</title>

      <Index />
    </>
  );
};

export default IndexPage;
