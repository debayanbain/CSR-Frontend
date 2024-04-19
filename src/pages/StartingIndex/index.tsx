
import clsx from "clsx";
import { Card1, Card2, Card3 } from "./Card";


function Index() {

  return (
    <>
      <div
        className={clsx([
          "relative h-screen lg:overflow-hidden bg-primary xl:bg-white dark:bg-darkmode-800 xl:dark:bg-darkmode-600",

          "before:hidden before:xl:block before:content-[''] before:w-[60%] before:-mt-[15%] before:-mb-[70%] before:ml-[10%] before:absolute before:inset-y-10 before:left-[10%] before:transform before:rotate-[90deg] before:bg-primary/20 before:rounded-[100%] before:dark:bg-darkmode-400",

          "after:hidden after:xl:block after:content-[''] after:w-[82%] after:-mt-[3%] after:-mb-[80%] after:ml-[18%] after:absolute after:inset-y-10 after:left-[-9%] after:transform after:rotate-[90deg] after:bg-primary after:rounded-[100%] after:dark:bg-darkmode-700",
        ])}
      >
        <div className="overflow-y-auto container w-full mr-auto ml-auto h-screen relative z-10 xl:px-10 max-w-screen-xl">
          <div className="flex flex-col items-center justify-start gap-4 h-full">
            <div>
              <img 
                src="./src/assets/images/vedantaLogo.svg"
                alt="Vedanta Logo"
              />
            </div>
            <div className="relative w-full">
              {/* <div className=" w-full h-[78px] top-0 left-0">
                <div className="absolute w-full text-center top-0 left-0 font-extrabold text-white xl:text-[#1e3ea3] text-[30px] leading-[normal] whitespace-nowrap">
                  Select category
                  <p className="absolute w-full text-center top-[40px] left-0 font-extrabold text-[#7592ed] text-[15px] tracking-[0] leading-[normal]">
                    Select a category where you want to login
                  </p>
                </div>
              </div> */}
            </div>
            {/* Card style inserted */}
            <div className="flex justify-center flex-col gap-8 pr-[7px] md:grid-cols-3 md:gap-8 xl:grid">
              <Card1 
              imageUrl =".\src\assets\images\land.png"
              title = "LRMS"
              buttonText = "LOGIN"
              />

              <Card2 
              imageUrl= ".\src\assets\images\people .png"
              title = "CSR"
              buttonText = "LOGIN"
              />

              <Card3 
              imageUrl= ".\src\assets\images\worldwide.png"
              title = "R&R"
              buttonText = "LOGIN"
              />
            </div>
            {/* Card style Ended */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;

//90, width: 60%, ml-[10%]