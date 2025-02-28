import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CloseButton } from "./CloseButton";

const getRandomNotification = () => {
  const notifications = [
    { "title": "New Insight", "message": "Explore our latest creative breakthrough." },
    { "title": "Upcoming Event", "message": "Join us for a talk on future innovation." },
    { "title": "Fresh Perspective", "message": "See creativity from a new angle." },
    { "title": "Collaboration", "message": "Connect with pioneers in design and research." },
    { "title": "Journal Entry", "message": "New thoughts on experimental creativity." },
    { "title": "Behind the Scenes", "message": "A look into our latest exploration." },
    { "title": "Creative Challenge", "message": "Push your imagination with this prompt." },
    { "title": "Lab Update", "message": "Exciting progress—see what’s next." },
    { "title": "Exclusive Insight", "message": "Unlock a new way of thinking." },
    { "title": "Now Streaming", "message": "Watch our latest talk on creativity." },
    { "title": "Open Call", "message": "Share your ideas with our research team." },
    { "title": "Latest Exploration", "message": "Reimagining the limits of creativity." },
    { "title": "New Connections", "message": "Meet visionaries shaping the future." },
    { "title": "Curated Inspiration", "message": "Ideas to spark your next breakthrough." },
    { "title": "Monthly Recap", "message": "A look at our latest projects." },
    { "title": "Experimental Findings", "message": "A fresh take on design and thinking." },
    { "title": "Future Visions", "message": "Radical ideas shaping tomorrow." },
    { "title": "Thought Experiment", "message": "Step into a new creative mindset." },
    { "title": "New Collaboration", "message": "A partnership redefining possibilities." },
    { "title": "Stay Curious", "message": "A daily spark of unconventional ideas." }
  ];
  return notifications[Math.floor(Math.random() * notifications.length)];
};

export const Notification = () => {
  const [notifications, setNotifications] = useState<{ title: string; message: string }[]>([]);

  useEffect(() => {
    // Asegura que la notificación inicial solo se genere en el cliente
    setNotifications([getRandomNotification()]);
  }, []);

  return (
    <div className="container flex justify-center">
      <ul>
        <AnimatePresence initial={false} mode="popLayout">
          {notifications.map((notif, index) => (
            <motion.li
              className="relative mt-[5px]"
              key={index}
              layout
              initial={{ opacity: 0, y: 50, scale: 0.3 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.3 } }}
            >
              <div className="flex items-center gap-[10px] bg-mainBlue pt-[12px] pb-[15px] px-[15px] rounded-[20px] w-[320px] border border-[#ffffff25]">
                <div>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="10" fill="#F4EFFD"/>
                        <path d="M22.4751 20.0749C22.4751 24.1757 19.1508 27.5 15.0501 27.5C10.9493 27.5 7.625 24.1757 7.625 20.0749C7.625 15.9742 10.9493 12.6499 15.0501 12.6499C19.1508 12.6499 22.4751 15.9742 22.4751 20.0749Z" fill="#CDAFFF"/>
                        <path d="M32.3752 19.9251C32.3752 24.0258 29.0509 27.3501 24.9502 27.3501C20.8494 27.3501 17.5251 24.0258 17.5251 19.9251C17.5251 15.8243 20.8494 12.5 24.9502 12.5C29.0509 12.5 32.3752 15.8243 32.3752 19.9251Z" fill="#30017A"/>
                    </svg>
                </div>
                <div className="grow">
                  <div className="flex items-center justify-between mb-[5px]">
                    <h5 className="text-white text-sm font-medium tracking-tighter leading-[120%]">{notif.title}</h5>
                    <span className="text-secondaryBlue text-xs tracking-tighter leading-[100%] opacity-50">now</span>
                  </div>
                  <p className="text-secondaryBlue text-xs tracking-tighter leading-[120%]">{notif.message}</p>
                </div>
              </div>
              <CloseButton close={() => setNotifications(notifications.filter((_, i) => i !== index))} />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
      <button
        className="absolute bottom-[15px] flex items-center justify-center p-3 rounded-[50%] bg-white transition-all duration-300 ease-in-out hover:scale-[1.1]"
        onClick={() => setNotifications((prev) => [...prev, getRandomNotification()])}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12L2 12" stroke="#30017A" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M12 2L12 22" stroke="#30017A" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      </button>
    </div>
  );
};
