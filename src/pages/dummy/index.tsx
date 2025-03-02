import DummyView from "@/sections/dummy/view/dummy-view";

const metadata = { title: "Dummy Api" };

// ---------------------------------------------------------------------------------

const DummyPage = () => {
  return (
    <>
      <title>{metadata.title}</title>

      <DummyView />
    </>
  );
};

export default DummyPage;
