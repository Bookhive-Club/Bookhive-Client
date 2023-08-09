"use client";
import "@/styles/main.scss";
import { Poppins } from "next/font/google";
import Homepage from "./home";
import Script from "next/script";
import { useEffect } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function Home() {
  useEffect(() => {
    if (typeof document !== "undefined") {
      const script = document.createElement("script");
      script.src = "https://getlaunchlist.com/js/widget.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);
  return (
    <main>
      <Homepage />
      <Script
        id={"waitlist"}
        strategy="beforeInteractive"
        src="https://getlaunchlist.com/js/widget.js"
      />
      <Script
        id={"tawkto"}
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
          var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
          s1.async=true;
          s1.src='https://embed.tawk.to/646106c7ad80445890ece090/1h0dg51aa';
          s1.charSet='UTF-8';
          s1.setAttribute('crossorigin','*');
          s0.parentNode.insertBefore(s1,s0);
          })();`,
        }}
      />

      <Script
        id={"metrica"}
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(93569944, "init", {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
          });`,
        }}
      />
    </main>
  );
}
