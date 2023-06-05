import { useEffect, useState } from "react";
import ToyCard from "./ToyCard";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Toys = () => {
  const [allToys, setAllToys] = useState([]);

  const cowToys = allToys.filter((toy) => toy.category === "cow");
  const catToys = allToys.filter((toy) => toy.category === "cat");
  const tigerToys = allToys.filter((toy) => toy.category === "tiger");
  const horseToys = allToys.filter((toy) => toy.category === "horse");

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);
  return (
    <>
      <div className="bg-base-200 ">
        <h2 className="text-3xl font-bold  text-center py-10">
          Bye Your Favorite Toys
        </h2>
        <div className="Container">
          <Tabs forceRenderTabPanel defaultIndex={1}>
            <TabList>
              <Tab>All</Tab>
              <Tab>Category</Tab>
            </TabList>
            <TabPanel>
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
                {allToys.map((toy) => (
                  <ToyCard key={toy._id} toy={toy} />
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <Tabs forceRenderTabPanel>
                <TabList>
                  <Tab>Cow</Tab>
                  <Tab>Cat</Tab>
                  <Tab>Tiger</Tab>
                  <Tab>Horse</Tab>
                </TabList>
                <TabPanel>
                  <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
                    {cowToys.map((toy) => (
                      <ToyCard key={toy._id} toy={toy} />
                    ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
                    {catToys.map((toy) => (
                      <ToyCard key={toy._id} toy={toy} />
                    ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
                    {tigerToys.map((toy) => (
                      <ToyCard key={toy._id} toy={toy} />
                    ))}
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-5">
                    {horseToys.map((toy) => (
                      <ToyCard key={toy._id} toy={toy} />
                    ))}
                  </div>
                </TabPanel>
              </Tabs>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Toys;
