import Contact from "./components/Contact";
import Home from "./components/Home";
import ItemsCard from "./components/ItemsCard";
import News from "./components/News";
import Testimonal from "./components/Testimonal";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <div className="px-40 max-md:px-10 md:px-10  lg:px-40 py-32 overflow-hidden">
          <div className="flex gap-32 max-md:flex-col md:flex-col lg:flex-row">
            <div className="space-y-5 w-6/12 max-md:w-full md:w-full lg:w-6/12">
              <span className="leading-3 cursor-pointer">
                <h5 className="py-4 font-bold font-Poppins text-[20px] opacity-70 tracking-wider">
                  OUR STORY
                </h5>
                <div className="line w-20 h-0.5 bg-red-500"></div>
              </span>
              <h1 className="font-normal text-[70px] font-Playfair leading-none max-md:text-[35px] lg:text-[50px]">
                Welcome To Royal
              </h1>
              <div>
                <p className="py-4 font-medium font-Poppins text-[20px] opacity-70 tracking-wider">
                  Lorem ipsum dolor sit amet iste explicabo pariatur quo ex,
                  earum debitis dolore accusamus est possimus nulla vel illo
                  neque aspernatur laboriosam. Enim earum modi fugiat eum
                  nesciunt, laboriosam nobis debitis consequuntur quia aliquid
                  expedita quibusdam architecto? Quod soluta voluptates rerum
                  repellendus.
                </p>
                <p className="py-1 font-medium  font-Poppins opacity-70 text-[20px] tracking-wider">
                  consectetur adipisicing elit. Debitis iure deleniti provident
                  quae dolores totam quis sunt, autem beatae delectus. quae
                  dolores totam quis sunt, autem beatae delectus. consectetur
                  adipisicing elit. Debitis iure deleniti provident quae dolores
                  totam quis sunt, autem beatae delectus.
                </p>
              </div>
            </div>
            <div className="w-6/12 max-md:w-full md:w-full lg:w-6/12 flex content-center justify-end">
              <img
                src="../Assets/vegitables.avif"
                alt=""
                className="w-[450px] max-md:w-full md:w-full lg:w-[450px] h-[700px]  max-md:h-[350px] md:h-[600px] lg:h-[700px] object-cover bg-no-repeat object-center rounded shrink-0"
              />
            </div>
          </div>
        </div>
        <ItemsCard />
        <Testimonal />
        <News />
        <Contact />
      </main>
    </>
  );
}

export default App;
