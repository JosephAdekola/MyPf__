import React, { useEffect, useRef, useState } from "react";
import HeaderAndDescription from "./HeaderAndDescription";
import "../assets/styles/instagram.css";
import { getInstaMedia } from "../services/instaApiCall";

export default function InstagramPanel() {
  const [loading, setLoading] = useState(false);
  const [inside, setInside] = useState("#a1368f");
  const [outside, setOutside] = useState("#f58634");
  const [instaItems, setInstaItems] = useState([]);

  const scrollRef = useRef(null);
  const scrollStep = 300; // added missing scrollStep variable

  // ✅ Function to handle horizontal scroll
  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -scrollStep : scrollStep;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // ✅ Fetch Instagram data on mount
  useEffect(() => {
    const getInstaItems = async () => {
      try {
        setLoading(true);
        const res = await getInstaMedia();

        if (res?.data?.data) {
          const filteredItems = res.data.data
            .filter((p) => ["IMAGE", "VIDEO"].includes(p.media_type))
            .map((p) => ({
              media_url: p.media_url,
              media_type: p.media_type,
              permalink: p.permalink,
              like_count: p.like_count,
              comments_count: p.comments_count,
            }));

          setInstaItems(filteredItems);
        }
      } catch (err) {
        console.error("Error fetching Instagram items:", err);
      } finally {
        setLoading(false);
      }
    };

    getInstaItems();
  }, []);

  return (
    <div
      className="w-full bg-[#4e2946] px-2 sm:px-5 flex flex-col gap-5"
      id="insta-panel"
    >
      {/* Header */}
      <div>
        <HeaderAndDescription
          header="Follow me on Instagram"
          desc="Stay up to date with me on Instagram. I drop valuable content every now and then."
          paraAlign="center"
          paraMargin="auto"
        />
      </div>

      {/* Scroll Buttons + Items */}
      <div className="scrollable-gallery-container">
        {/* Left Button */}
        <button onClick={() => scroll("left")} 
            className="scroll-btn left-btn transition-all duration-500 ease-in-out">
          <i className="pi pi-chevron-left text-white"></i>
        </button>

        {/* Scrollable Container */}
        <div ref={scrollRef} className="scroll-container">
          {instaItems.length === 0 && !loading ? (
            <p className="text-center text-white w-full py-5">
              No Instagram posts available.
            </p>
          ) : (
            instaItems.map((item, index) => (
              <div key={index} className="scroll-card">
                <div className="media-wrapper">
                  {item.media_type === "IMAGE" ? (
                    <img
                      src={item.media_url}
                      alt={`media-${index}`}
                      className="media-img"
                    />
                  ) : (
                    <video
                      src={item.media_url}
                      className="media-img"
                      muted
                      playsInline
                      loop
                      preload="metadata"
                      onMouseEnter={(e) => e.currentTarget.play()}
                      onMouseLeave={(e) => e.currentTarget.pause()}
                    />
                  )}
                </div>

                {/* Likes + Comments + Link */}
                <div className="post-meta">
                  <div className="likes-comments">
                    <p className=" text-white ">
                      <i className="pi pi-heart"></i> {item.like_count ?? 0}
                    </p>
                    <p className=" text-white ">
                      <i className="pi pi-comment"></i>{" "}
                      {item.comments_count ?? 0}
                    </p>
                  </div>
                  {item.permalink && (
                    <a
                      href={item.permalink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="pi pi-arrow-right text-white"></i>
                    </a>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Right Button */}
        <button onClick={() => scroll("right")} 
            className="scroll-btn right-btn transition-all duration-500 ease-in-out">
          <i className="pi pi-chevron-right text-white"></i>
        </button>
      </div>

      {/* Follow Button */}
      <div className="flex justify-center">
        <input
          type="submit"
          value={loading ? "Just a sec..." : "Follow Me Now!"}
          disabled={loading}
          onMouseEnter={() => {
            setInside("#f58634");
            setOutside("#a1368f");
          }}
          onMouseLeave={() => {
            setInside("#a1368f");
            setOutside("#f58634");
          }}
          className={`border p-5 rounded-full text-white font-bold my-auto cursor-pointer 
            px-5 py-2 text-2xl sm:text-lg transition-all duration-500 ease-in-out ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          style={{
            background: `linear-gradient(to right, ${outside}, ${inside})`,
          }}
          onClick={() => window.open("https://www.instagram.com/imadekola", "_blank")}
        />
      </div>
    </div>
  );
}
