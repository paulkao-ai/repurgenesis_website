import { Mail, MapPin, Phone, Printer } from "lucide-react";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { NAV_ITEMS } from "../data/content";
import type { Page, Translator } from "@app/types";

export function Footer({
    navigate,
    t,
}: {
    navigate: (p: Page) => void;
    t: Translator;
}) {
  return (
    <footer className="bg-[#141827] text-white">
      <div className="
        max-w-7xl
        mx-auto
        px-6
        py-16
        grid
        grid-cols-1
        md:grid-cols-[1.4fr_1fr_1fr]
        gap-16
        ">
        <div>  {/* LEFT COLUMN */} 
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">R</span>
            </div>

            <span
              className="font-bold text-lg tracking-tight"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Repurgenesis
            </span>
          </div>

          {/* <p className="text-sm text-white/60 leading-7 max-w-sm mb-8">
            Accelerating drug repurposing through AI-driven discovery.
            Transforming approved compounds into new therapies for underserved patients.
          </p> */}
        
          {/*  Contact Info */} 
          <div className="space-y-3.5 text-sm">

            <a
              href="mailto:rp@repurgenesis.com"
              className="flex items-center gap-3 ml-2 text-white/70 hover:text-primary transition"
            >
              <Mail size={18} className="text-primary" />
              rp@repurgenesis.com
            </a>

            <a
              href="tel:+886287511368"
              className="flex items-center gap-3 ml-2 text-white/70 hover:text-primary transition"
            >
              <Phone size={18} className="text-primary" />
              (+886) 2-8751-1368
            </a>

            <a
              href="fax:+886287511369"
              className="flex items-center gap-3 ml-2 text-white/70 hover:text-primary transition"
            >
              <Printer size={18} className="text-primary" />
              (+886) 2-8751-1369
            </a>

            <a
              href="https://www.google.com/maps/place/114%E8%87%BA%E5%8C%97%E5%B8%82%E5%85%A7%E6%B9%96%E5%8D%80%E8%A5%BF%E6%B9%96%E9%87%8C%E7%91%9E%E5%85%89%E8%B7%AF583%E5%B7%B721%E8%99%9F6%E8%99%9F/@25.0806552,121.5677563,17z/data=!3m1!4b1!4m6!3m5!1s0x3442ac6e503fe32f:0x7da3370519a2ea77!8m2!3d25.0806552!4d121.5677563!16s%2Fg%2F11j599g637?hl=zh-TW&entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D"
              // https://maps.google.com/?q=114台北市內湖區瑞光路583巷21號6樓
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 ml-2 text-white/70 hover:text-primary transition"
            >
              <MapPin
                size={18}
                className="text-primary mt-1 shrink-0"/>

              <span>
                Neihu Technology Park 6F.,
                No.21, Ln.583, Ruiguang Rd.,
                Neihu Dist.,
                Taipei City 114694,
                Taiwan
              </span>
            </a>
          </div> 
        </div>

        <div>
           {/* COMPANY */}
          <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">Our Company</p>
          <ul className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <li key={item.page}>
                <button onClick={() => navigate(item.page)} className="text-sm text-white/70 hover:text-primary transition-colors cursor-pointer">
                  {t(item.key)}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          {/* GET IN TOUCH */}
        <p className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
          Get in Touch
        </p>

        <div className="flex flex-col gap-3">

          <a
            href="https://www.104.com.tw/company/1a2x6bimnc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-left text-sm text-white/70 hover:text-primary transition"
          >
            Careers
          </a>

          <button
            onClick={() => navigate("contact")}
            className="text-left text-sm text-white/70 hover:text-primary transition"
          >
            Contact Us
          </button>


        </div>

        <div className="mt-8 flex items-center gap-3">

          <a
            href="https://linkedin.com/company/repurgenesis/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <BiLogoLinkedinSquare 
              size={30}
              className="text-white" />
          </a>

          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition-transform"
          >
            <FaXTwitter 
            size={22}
            className="text-white" />
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 ml-1 transition-transform"
          >
            <FaYoutube
            size={30}
            className="text-white" />
          </a>
        </div>

      </div>


      </div>
      <div className="border-t border-white/10 max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/30">
        <span>© 2025 Repurgenesis Co., LTD. All Rights Reserved.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white/60 transition-colors">Terms of Use</a>
        </div>
      </div>

    </footer>
  );
}
