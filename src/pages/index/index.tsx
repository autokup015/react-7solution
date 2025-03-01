import IndexView from "@/sections/index/view/index-view";

const metadata = { title: "Homepage" };

// ---------------------------------------------------------------------------------

const IndexPage = () => {
  return (
    <>
      <title>{metadata.title}</title>

      <IndexView />
    </>
  );
};

export default IndexPage;
