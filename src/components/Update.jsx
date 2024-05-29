import React, { useEffect, useState } from "react";
import { IoIosAlarm } from "react-icons/io";

const DailyUpdate = () => {
  const [latestUpdate, setLatestUpdate] = useState();
  const [upcomingFest, setUpcomingFest] = useState();
  const [dailyProgram, setdailyProgram] = useState();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(
      typeof window !== "undefined" &&
        window.matchMedia("(max-width: 1020px)").matches
    );
    setLatestUpdate([
      {
        data: "“रंगपंचमी” या स्थानिक उत्सव कार्यक्रमाबाबत...",
        hyperlink: "#",
      },
      {
        data: "“गुढीपाडवा” या स्थानिक उत्सव कार्यक्रमाबाबत",
        hyperlink: "#",
      },
      {
        data: "“होळी” या स्थानिक उत्सव कार्यक्रमाबाबत",
        hyperlink: "#",
      },
      {
        data: "श्री साईबाबा व श्री साईनाथ रुग्‍णालयाकडील वैद्यकीय अधिकारी यांची आवश्‍यक रिक्‍त पदे कंत्राटी पध्‍दतीने ११ महिनचे कालावधीसाठी भरणेसाठी जाहिरात",
        hyperlink: "#",
      },
      {
        data: "Devotees List for Shri Sai Baba Aarti-Clothes. For the    Month of March-2024",
        hyperlink: "#",
      },
    ]);

    setUpcomingFest([
      {
        data: "SHRI RAM NAVAMI FESTIVAL 2024",
      },
    ]);

    setdailyProgram([
      {
        time: "4.45 AM",
        programname: "Temple Open",
      },
      {
        time: "5.00 AM",
        programname: "Bhupali",
      },
      {
        time: "5.15 AM",
        programname: "Kakad Aarti (Morning)",
      },
      {
        time: "5.50 AM",
        programname: "Mangal Snaan In Samadhi Mandir",
      },
      {
        time: "4.45 AM",
        programname: "Temple Open",
      },
      {
        time: "6.20 AM",
        programname: `Aarti "Shirdi Majhe Pandharpur"`,
      },
      {
        time: "6.25 AM",
        programname: "Darshan Begins In Samadhi Mandir",
      },
      {
        time: "11.30 AM",
        programname: "Dhuni Pooja With Rice and Ghee In Dwarkamai",
      },
      {
        time: "12.00 PM",
        programname: "Mid-day Aarti",
      },
      {
        time: "4.00 PM",
        programname: "Pothi (Devotional Reading / Study) In Samadhi Mandir",
      },
      {
        time: "At sunset",
        programname: "Dhoop Aarti",
      },
      {
        time: "8.30 - 10.00pm PM",
        programname: "Devotional Songs in Samadhi Mandir & Cultural Programms",
      },
      {
        time: "10.00 PM",
        programname: "Shej Aarti",
      },
    ]);
  }, []);
  return (
    <div>
      <div className="update-main-div">
        {/* First main cart */}
        <div
          className="update-daily-prog update-innerdivs"
          data-aos="fade-right"
          data-aos-duration={isMobile ? 1500 : 2500}
        >
          <h3>
            <span className="update-alram-ico">
              <IoIosAlarm />{" "}
            </span>
            &nbsp; Daily Programme
          </h3>

          <div className="update-card">
            {/* This is inner div */}
            <div className="update-bg">
              <div className="update-scrolling-container">
                <div className="update-content-daily">
                  {/* map */}

                  {dailyProgram &&
                    dailyProgram.map((data, index) => (
                      <div key={index}>
                        <div className="update-main-innerdiv">
                          <div className="update-daily-timediv">
                            <h5>{data.time}</h5>
                          </div>
                          <div>
                            <p>{data.programname}</p>
                          </div>
                        </div>
                        <hr />
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="update-blob"></div>
          </div>
        </div>

        {/* Second main cart */}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration={isMobile ? 1500 : 2500}
          className="update-upcoming-fest update-innerdivs"
        >
          <h3>
            <span className="update-alram-ico">
              <IoIosAlarm />
            </span>
            &nbsp; Upcoming Festivals
          </h3>
          <div className="update-card">
            <div className="update-bg">
              <div className="update-scrolling-container">
                <div className="update-content">
                  {upcomingFest &&
                    upcomingFest.map((item, index) => (
                      <div key={index}>
                        <p className="update-upcoming-fest">{item.data}</p>

                        <hr />
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="update-blob"></div>
          </div>
        </div>

        {/* Third main cart */}
        <div
          data-aos="fade-left"
          data-aos-duration={isMobile ? 1500 : 2500}
          className="update-latest-update update-innerdivs"
        >
          <h3>
            <span className="update-alram-ico">
              <IoIosAlarm />
            </span>{" "}
            &nbsp; Latest Updates
          </h3>
          <div className="update-card">
            <div className="update-bg">
              <div className="update-scrolling-container">
                <div className="update-content">
                  {latestUpdate &&
                    latestUpdate.map((item, index) => (
                      <div key={index}>
                        <p>
                          <a href={item.hyperlink}>{item.data}</a>
                        </p>
                        <hr />
                      </div>
                    ))}
                </div>
              </div>
            </div>
            <div className="update-blob"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyUpdate;
