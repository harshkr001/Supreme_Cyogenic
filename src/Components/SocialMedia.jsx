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
      link: "https://www.whatsapp.com"
    },
    {
      icon: <FaInstagram size={40} />,
      title: "Instagram",
      link: "https://www.instagram.com"
    },
    {
      icon: <FaFacebook size={40} />,
      title: "Facebook",
      link: "https://www.facebook.com"
    },
    {
      icon: <FaYoutube size={40} />,
      title: "YouTube",
      link: "https://www.youtube.com"
    },
    {
      icon: <FaMapMarkerAlt size={40} />,
      title: "Location",
      link: "https://www.google.com/maps"
    },
  ];

  return (
    <section className="pt-40 pb-40 mb-32 bg-slate-950"
      style={{
        paddingTop: "120px",
        paddingBottom: "120px",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 ">
        <h2 className="text-center text-sky-300 uppercase tracking-[0.25em]">
          CONNECT WITH US
        </h2>

        <h1 className="text-5xl font-bold text-center text-white  mb-40 transition-all duration-300">
          Social Media
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 
                      justify-items-center mb-32 ml-12 " >
          {socials.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900 border border-cyan-500/20 rounded-3xl p-8 w-[240px]
                         text-center min-h-[140px] 
                        flex flex-col items-center justify-center hover:-translate-y-2 transition-all 
                        duration-300"
            >

              <div className="flex justify-center text-cyan-400 mb-4">
                {item.icon}
              </div>

              <h3 className="text-white font-semibold text-lg">
                {item.title}
              </h3>

            </a>
          ))}
      </div>
    </div>
    </section >
  );
}