import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function SocialMedia() {
  const socials = [
    {
      icon: <FaWhatsapp size={40} />,
      title: "WhatsApp",
    },
    {
      icon: <FaInstagram size={40} />,
      title: "Instagram",
    },
    {
      icon: <FaFacebook size={40} />,
      title: "Facebook",
    },
    {
      icon: <FaYoutube size={40} />,
      title: "YouTube",
    },
    {
      icon: <FaMapMarkerAlt size={40} />,
      title: "Location",
    },
  ];

  return (
    <section className="pt-36 pb-36 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-sky-300 uppercase tracking-[0.25em]">
          CONNECT WITH US
        </h2>

        <h1 className="text-5xl font-bold text-center text-white mt-4 mb-24">
          Social Media
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {socials.map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-cyan-500/20 rounded-3xl p-6 text-center min-h-[120px]
               flex flex-col items-center justify-center"
            >
              <div className="flex justify-center text-cyan-400 mb-4">
                {item.icon}
              </div>

              <h3 className="text-white font-semibold text-lg">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}