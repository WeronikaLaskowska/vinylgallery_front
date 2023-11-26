import React, { useRef, useState, MouseEvent } from "react";
import RedSquare from "./RedSquare";
import { PrimaryButton } from "@/components/inputs/PrimaryButton";

const VinylSpin = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const audioUrl =
    "https://rr1---sn-f5f7lnl6.googlevideo.com/videoplayback?expire=1701044230&ei=potjZceYAafX7QTXq5foCQ&ip=45.145.160.254&id=o-ADua8ldVyYmpMiKO-DQ5FQzpwT-W-L5p5YS025FB2xHw&itag=140&source=youtube&requiressl=yes&spc=UWF9f_OoJejXwN5FYfyhnGf02v-UETA&vprv=1&svpuc=1&mime=audio/mp4&gir=yes&clen=3092756&dur=191.053&lmt=1575742677825945&keepalive=yes&fexp=24007246&c=ANDROID&txp=5431432&sparams=expire,ei,ip,id,itag,source,requiressl,spc,vprv,svpuc,mime,gir,clen,dur,lmt&sig=ANLwegAwRgIhANOjPKeX6oyNafcehHuIcxH58dMN7f2W5vg5Ivu6qOPYAiEAgitwMw8s0LVbDmTRteJgHBciAt_wZfwnuRhcFN0Iv-s=&avi=K1A%2FHwERIiwAVF9GE1ZEdjY7CzEvDBxHSFQmDVNZV0E1FigaFRwsBwECFkYZX0dfPF5LNQwEJQAWIgwJRkJGUj0CS0wLASEJSFQ1CEJIU1E5HgACHCc5BBADFkYZX0dfPF5LIAwQKAotGAMLdkNeej4WDA5HTn1JRi8xB0xEXEciC0tMCwEhCUhUNRZMSUsRalABAhEEd0pLQlBKEgUHHWFEWVhXQXlfXEZVVAwTHhEdExE7DBopJgsDCxBRSBAJPgcFGklWDhAWBAAKV2VbXjUBHRcIBG9fRkdSVBIBAAFmQVlUSVYIHRAEBAdXXkBnKQIMVF9WLwQXEzUIQkhXQRoBSws%3D&from_cache=False&title=Tyler%20The%20Creator%20-%20Earfquake&rm=sn-5gold7e&req_id=952d92e1d424a3ee&ipbypass=yes&cm2rm=sn-u2oxu-bqok7l,sn-u2oxu-f5fey7d&redirect_counter=3&cms_redirect=yes&cmsv=e&mh=ia&mip=2a01:113f:450a:3900:a1f9:efc5:43dc:497f&mm=30&mn=sn-f5f7lnl6&ms=nxu&mt=1701022340&mv=m&mvi=1&pl=40&lsparams=ipbypass,mh,mip,mm,mn,ms,mv,mvi,pl&lsig=AM8Gb2swRQIgTNUEo8m_KN51qOY8RwaQMcmdjegT0a-apqi1cAmZi70CIQDBkdXqf7Elw3auQwqfo0KN6Hrw8xrPondg5xFYGu3udw%3D%3D";
  const togglePlay = () => {
    setIsPlaying((prevIsPlaying) => {
      const audio = audioRef.current;
      if (audio) {
        if (prevIsPlaying) {
          audio.pause();
        } else {
          audio.play();
        }
      }
      return !prevIsPlaying;
    });
  };

  return (
    <div>
      <div id="album">
        <div id="cover">
          <div id="print"></div>
        </div>

        <div onClick={() => togglePlay()} className="absolute -top-12 left-0">
          <audio ref={audioRef} src={audioUrl} />
          <PrimaryButton
            buttonType="FADED"
            title="Play/Pause"
            className="max-w-[100px]"
          />
        </div>
        <RedSquare isSpinning={isPlaying} />
      </div>
    </div>
  );
};

export default VinylSpin;
