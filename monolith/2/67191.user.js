scr_meta=<><![CDATA[ //
// ==UserScript==
// @name           Designers Developed Social Share Tool
// @namespace      http://designora.com/tools/designers-social-share-tool
// @description    Post to all the top design and social sites from one simple interface
// @include        http://*
// @exclude        https://*
// @version        9.9
// ==/UserScript==
]]></>.toString(); //

var shortenedURL = "";

function gm_post_bar_twit_trigger()
{
   if(shortenedURL != "")
   {
      //Twit with current URL
      varBody.appendChild(document.createElement('script')).innerHTML = "gm_twitter_window.document.location='http://twitter.com/home?status=" + encodeURIComponent(document.title) + " - Source: " + shortenedURL + "';\ngm_twitter_window.focus();";
   }
   else
   {
      //Standard is.gd url is 17 chars long
      //No point in using a URL shortener if the current URL is shorter than that
      if(window.location.href.length > 17)
      {
         //Get URL and then Twit
         GM_xmlhttpRequest({
            method:"GET",
            url:"http://is.gd/api.php?longurl=" + encodeURIComponent(window.location.href),
            headers:
            {
               "User-Agent":"Mozilla/5.0",
               "Accept":"text/xml"
            },
            onload:function(response)
            {
               //alert([
               //   response.status,
               //   response.statusText,
               //   response.readyState,
               //   response.responseHeaders,
               //   response.responseText,
               //   response.finalUrl
               //].join("\n"));

               if(response.status == 200 && response.readyState == 4)
               {
                  shortenedURL = response.responseText;
                  gm_post_bar_twit_trigger();
               }
               else
               {
                  //alert("Error: is.gd has returned status " + response.status + " with the error:\n\n==========\n" + response.responseText + "\n==========\n\nThis may mean that the server is down, or this URL is blacklisted. You will be able to tweet the full URL");
                  shortenedURL = encodeURIComponent(window.location.href);
                  gm_post_bar_twit_trigger();
               }
            }
         });
      }
      else
      {
         //URL already short. Continue with original URL
         shortenedURL = encodeURIComponent(window.location.href);
         gm_post_bar_twit_trigger();
      }
   }
}

if(window==parent)
{
// Embedded Images
   var postButton = "data:image/gif;base64,R0lGODlhFAA6APEAAAAAAP8AAMzM/wAAACH5BAEAAAEALAAAAAAUADoAAAKIjC+puxcMGYpUmFpfAgA3xXlRKDJkCXLqukLsq7odmtK1LZz4zt9bTAHmWCPdbFhcGI8+ZPOnNDGh1Odwtpz+hFUZs0XT9cZBogfGlWrT1m7bKpbKMPG4cq29J/fefhkt8kI2WMT2B0Z3YqjHWCFm1+g2F8knaZGCBqZxlUlygTNB42Dj8ClSAAA7";

   var designfloatIcon = "data:image/gif;base64,R0lGODlhEAAQAPcAACmf3S6d2TWf1iug3iOg5SOi5iWi5yql5i+l4Sql6DCk4DOn4DKn6DCo5jOo5zap4TWo5zOv7jGv7zWt6jSt6zeu6Tmv6Dew7Tex7zmw6Tix7juy7ju07Tyw6jy17j627zq28Tu28jy08T638T+48T668T669X2psnyvu0+iyUGk1Uaq2lGmz16kwVer0FSu1lay20Gx50O06kG370a16US270uy4Em050+y4Eyz5Em26Uq360y36U636ku67kC38EC58kq+9Fe341S55VC56lK761G971S66Fa87Fq75V664Vm/71y+6lK+8W2vxm+wxWiwzGy62G2822+/3nayxH60wXu5zHi4zXS50ni81Xm/132/02u+4UHC+0/D+FrB7lHB9FLB9VPC9lXA8lfG+FvF9VjE9l3G9XvA1nzA12DI9mLK9mPL92PM9mPO+2fT/P6XJP6XJv2aL/SZMP2cMvmgPNmiWNqmXu6gRfSlTf6mRfipTvypTfCmUvOvXv6rUPmwW/6wWeOqYuKwbuC1ee22dOu5efSvYPCxZ/m3av67b/i6c/6+dp6rnYmrq42urIOut4e0vImytpmsoZmwp5izr5G1tpa1tJS8v5q3tJ6/vKGrmaavmLWylrG1nbW3n7q4maO8taK+t6W6sLO6orW4obO/r7W9q4a9y4y6wpK8wqrCupjAwZ/Cw8C0jcC4mci+ns+/m+C+jeq/hdDAmtTDnt/Gm9zGncLBqMXDqcbEqs3Epc/EpsrHrc3GqNjJp+bIm+vFk/PAg/rEgv/HhP3GhfXPnPjQnvvSn+LLpOLOqOXOqOTPqeTPqujOpunPp+7Tq/HPofPWrfbWqf7aq//arfHYsPDYsvXctvfeufzbsPnfufjfvP/guPviwfvkwvrkxPzkxf/mxPznx/7pyf3pyv3qzPzqzf7s0P7t1f7u1f/u1v7u2P7y3f/z3//04//25f/25//36f/46//47P/57gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAAEAAQAAAI/wDbsDljJgyTKWm2aOGyRMwZNW/WnBmDJMsqWoQGyerVSoqRMW7KNBGi6hc2ZHzoFPt2LZeVHmTAEEmVrBy8anvmDFsXb9suLF6CRPE1Th44W504vXrGbl42U198YIrGLlytKjluwMjkLB25W2iOkErEyJClGCJqaMDhaZGiQqySuKoj5w6UDTuK0MDwCE+cPqKGgAIUaBCVCzJ4dOhAyc8fRJp0hDImblqpFxIiUHASS1s3YKg+XFHW7h20TyieSILFrZ45XUpA2BglzZ27Y4LszPJGT92ySCN+VHBxyho6anrgEFN3jtmlFSFmWFDAohKvYIfyCGuGC5IKBCQ+ZCRYAEBAC0eNNk06kSLAgAdASpjgMOEAgQQOIDAwUKBBBg9dBAQAOw==";
   var deliciousIcon = "data:image/gif;base64,R0lGODlhEAAQAPcAAAQCBNTS1DR21Pz+/PkAACQAAAAAAAAAAH8AACIAAAAAAAAAAAAAAAAAABUAAAAAAA9OAAAAAABWAAAAAAA0AAIAAABfAAAAAABEAAMAAABJAAAAAEBTAOcAABJQAAAAANEAAOUAAIEAAHwAAAAAAAAAAAEAAAAAAFYAAAAAAAAAAAAAAEgAAOYAABIAAAAAAHMAAAAAAAAAAAAAAGgAAOcAABIAAAAAAAAAAOkAAJAAAHwAAEAAAAAAAJEAAHwAAP8AyP8A6v8AEv8AAD0AoQAA85EABHwAEG0AAOcAAIEAAHwAAQAAAAAAABUAAAAAAGABmAME7AABEgAEAAi8YG4A6RgAEgAAAEigAG8A6hV+EgAAAAAAAAAAAAAAAAAAAH4AAAAAAAAAAMAAAAAAAAAAAAAAAAAAAP8AAP8AAP8AAP8AAf8AS/8AAP8AAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUAAAAAAO0A8AsAngAAgAAAfHgAAOcAABIAAAAAAIcAAOsAAIEAAHwAADMAB+MAAIEAAHwAAGAAANoAAFAAAAAAAEgAAG8AEAEAFgAAAGwAAAAAAAAAAAAAALTtAOYLABIAAAAAADSQAADoAAASAMAAAAidAPwrABKDAAB8AAAA+OkAnpAAgHwAfEAA/wAA/5EA/3wA//8A8P8Anv8AgP8AfD0AUQABAJEAAHwAANoBUfQsAICDAHx8AAC0hADo7hUSEgAAAADc/wAr/wCD/wB8/0gAAG8AABUAAAAAAAAYvAEA6QAAEgAAAABMBgBknQCDTAB8AOcAnPQA6YAAEnwAAKC4d+jpcBISTwAAAEiF0G9k6RWDEgB8AABETACNZABPgwAAfABgoQCY6wBPEgAAAAAArQAB/wAA/wAAfwC0UADo6wASEgAAAAAAAAABAAAAAAAAAACgTABkZACDgwB8fAABAAAAAAAAAAAAAAAA7QAwCwAAAAAAAAAAQAAAEwAAFgAAAAAAgQAARQAASAAAACH5BAAAAAAALAAAAAAQABAABwhGAAcIHChQgMGDBgkSRIhQ4UCGBx0WhChA4gCKFSVitLhRI0UAIEOCDECyJEmRIk2aRBlSZUmWI10GgAlA5kyYNmnmxCkzIAA7";
   var diggIcon = "data:image/gif;base64,R0lGODlhEAAQAPcAAAQCBJyanMzOzOzq7Nze3PT29NTW1PTy9OTm5Pz+/KyqrNTS1Ozu7OTi5Pz6/Nza3A8AgAAAAAAAEAAAgAAACAIA/AAAEgAAAAAAAAMA6QAAkAAAfLSo4MeIABI7+wAAANEA/+UA/4EA/3wA/wAADwAAAQEAAAAAAFYADQAA/wAAkAAAfLwA0MYAyRIAEgAAAGgAGAAAAAAAAAAAANwAAMcAABIAAAAAAAAAAOkAAJAAAHwAAEAAAAAAAJEAAHwAAP8A2P8AAP8A+/8AAD1QUAAJCZH7+3wAAG2wmOfIyYESEnwAAAAAFgAAChUVkQAAfGAC1gMCAACRAAB8AHhFUFcACRgA+wAAAEh4AG8TABUVOwAAAAAAoAAAyQAVEgAAAH7QAABSAAAWAMAAAACImADIAAASkQAAfP8AyP8APf8AO/8AAP/MbP/Kyv8SEv8AAAAAIQDpAACQkQB8fAAI2AACBwCROwB8AAD/PQD/ABX/kQD/fMEC8G8CngCRgAB8fOx7AMcBABKRAAB8AIe7AOsBAIGRAHx8ADMAB+MAAIEAAHwAAGAAANrOAFASAAAAAEjYAG/NgAESGQAAAGwAAAAAAAAAAAAAACjBAMdvABIAAAAAADQEAADJAAASAMAAAAidAPwrABKDAAB8AAAA+OkAnpAAgHwAfEAA/wAA/5EA/3wA//8A8P8Anv8AgP8AfD0AWAABAJEAAHwAANoBWPQsAICDAHx8AAAo5ADJ3BUSEgAAAADc/wAr/wCD/wB8/0gAAG8AABUAAAAAAAAYMAEAygAAEgAAAABMBgBknQCDTAB8AOcAEPQAyoAAEnwAABQsd8nKcBISTwAAAEiFRG9kyhWDEgB8AABETACNZABPgwAAfABgHACYzABPEgAAAAAApgAB/wAA/wAAfwAoxADJywASEgAAAAAAAAABAAAAAAAAAACgTABkZACDgwB8fAABAAAAAAAAAAAAAAAAwQAwbwAAAAB8AAio8ACIggA7GQAAAAD/gQD/RQD/SAD/ACH5BAEAAAAALAAAAAAQABAABwiVAAEIHEiwoMGBChImDEAwgEOECSImCEBAYICIDhgCUJCgwAAEAQwAuJjAAQMCARImYIAA5cKOBxoYCOCAYwMCM2dePIBTQIACDoOGdJigp8+TBAg8MLCUodCUHBl8vPnQIsSpSgM8GKhxYwIEN3FStFjVJgEFBmZWJDnRK060PtcWYMCAIce0CgT43Pp05FOHFQ8KDggAOw==";
   var diigoIcon = "data:image/gif;base64,R0lGODlhEAAQAJEAANLt/wCZ/////wAAACH5BAAAAAAALAAAAAAQABAAAAIulI9pwSocDgRqLkaTNaC7njni01QleV6YCkDNZoEdvGr1htBBKN11/gN9PCNHAQA7";
   var facebookIcon = "data:image/gif;base64,R0lGODlhEAAQAKIAAGF5rEVinmB4q+vu9G2EtP///ztZmAAAACH5BAAAAAAALAAAAAAQABAAAAM4WLrcCibKGYGiWN4sxt6Y9xWZAZpkdp6R06bTIMpvucLUbeNKQPxAggIY6AWBw1+xAClJLI7oIgEAOw==";
   var designmooIcon = "data:image/gif;base64,R0lGODlhEAAQAPcAAAAAAAICAgYGBg8PDxERERQUFBUVFRwcHCAgICUlJCgoJyoqKisrKywsLDMzMzQ0NDc3Nzk5OUNDQ0hISFFRUVJSUlNTU1RUVFZWVldXV1lZWWFhYWZmZmdnZ2hoaGlpaWtra2xsbG5ubnx8fJCQkJeXl5iYmKSkpKWlpaurq6+vr7CwsLKysre3t7u7u8PDw8jIyM3NzdHR0dnZ2dvb297e3uHh4eLi4ePj4+Tk5OXl5ebm5ufn5+fo6Ojo6Ojo6enp6unq6urq6+zs7O3s7e3u7e7u7u/v7/Dw8PDw8fLx8vHy8fLy8vPz8/T09PX19fX29fb29vf39/j4+Pn4+fv7+/z9/f///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAAEAAQAAAIzgAfABhIEMAEDRg2IBi4oCBBATOsXFlBwGHBBiqmRKlRwOLABCWIVDkiBYZHABV2WElixEiSIgwsQjjSZAiRm0SktOhYEAWVIEKGCB0iBIoMEiYoDGTRBAhQIVCFBEEi5YqIgR2e/Nj6I0gQIFt9MPkwMIMTHj18qF3Lg0cSsgBOINmxo61dHnSReEA5RIdfIU2WKGlChIcOJiAc0OCBA8eRGCMqXBjhIoeQGxcu/LBhw0gKAwUDKIhwAICFI0KYvBhwcqAEDhxCNGgNAEFAADs=";
   var dzoneIcon = "data:image/gif;base64,R0lGODlhEAAQAPcAACh94xmiYSenakOzfjWF5VK5iEKN5lCV6Gul7H3Kpoa275O+8YzQsKjcxKHG867O9LzW9sne+MXo19Tt4dfn+uTv++Lz6/L3/fH59f///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACwAAAAAEAAQAAAIgwAzCBxIsKDBgwgFOgAAICHBBQwdDoTYUGIGigkhHGBogKGFAiBDZnjAsCRDCQFSpkxQgSGCChU2AsAgQUKCAAIwLARQQSDGDBgEBGhwMaJPowwCDBBIEoCDow0tpJwg8AIBhgoUXG1YAKfICFsBbEWpMmVVBwseXIhAwULNtxIsEgwIADs=";
   var newsvineIcon = "data:image/gif;base64,R0lGODlhEAAQAPcAAAQCBPz+/ARWJAAAfOEAACEAAAAAAAAAADEARR8AAAAAAAAAAAAABwAAABUAAAAAAA8AgAAAAAAAEAAAgAAACAIA/AAAEgAAAAAAAAMA6QAAkAAAfLSo4MeIABI7+wAAANEA/+UA/4EA/3wA/wAADwAAAQEAAAAAAFYADQAA/wAAkAAAfLwA0MYAyRIAEgAAAGgAGAAAAAAAAAAAANwAAMcAABIAAAAAAAAAAOkAAJAAAHwAAEAAAAAAAJEAAHwAAP8A2P8AAP8A+/8AAD1QUAAJCZH7+3wAAG2wmOfIyYESEnwAAAAAFgAAChUVkQAAfGAC1gMCAACRAAB8AHhFUFcACRgA+wAAAEh4AG8TABUVOwAAAAAAoAAAyQAVEgAAAH7QAABSAAAWAMAAAACImADIAAASkQAAfP8AyP8APf8AO/8AAP/MbP/Kyv8SEv8AAAAAIQDpAACQkQB8fAAI2AACBwCROwB8AAD/PQD/ABX/kQD/fMEC8G8CngCRgAB8fOx7AMcBABKRAAB8AIe7AOsBAIGRAHx8ADMAB+MAAIEAAHwAAGAAANrOAFASAAAAAEjYAG/NgAESGQAAAGwAAAAAAAAAAAAAACjBAMdvABIAAAAAADQEAADJAAASAMAAAAidAPwrABKDAAB8AAAA+OkAnpAAgHwAfEAA/wAA/5EA/3wA//8A8P8Anv8AgP8AfD0AXAABAJEAAHwAANoBXPQsAICDAHx8AAAo5ADJ3BUSEgAAAADc/wAr/wCD/wB8/0gAAG8AABUAAAAAAAAYMAEAygAAEgAAAABMBgBknQCDTAB8AOcAEPQAyoAAEnwAABQsd8nKcBISTwAAAEiFRG9kyhWDEgB8AABETACNZABPgwAAfABgIACYzABPEgAAAAAAogAB/wAA/wAAfwAoxADJywASEgAAAAAAAAABAAAAAAAAAACgTABkZACDgwB8fAABAAAAAAAAAAAAAAAAwQAwbwAAAAB8AAio8ACIggA7GQAAAAD/gQD/RQD/SAD/ACH5BAEAAAAALAAAAAAQABAABwhOAAEAEECwoEEBAgUWDECQ4cGECxk6NAjRYACHEytaFHCxoEaMEwl+lHgQoUKLGD2e3NhR5EqQD1+SjDkQZUOVNVlmXBmRZsmQLnlypBkQADs=";
   var redditIcon = "data:image/gif;base64,R0lGODlhEAAQAPcAACwuNIyOjMzKzExOVHRybKyqrMzq/Gx+jHx+fLzW7GReXPympPyytIyerFxufFxmbNzW1JyuxNz2/Gx2hPwSDJyenLTK3FxqdPT29Dw+PNTSzLy6vIyGhMTe9GRmZJSivGRyhKS6zFRaXLSytPTy9HSGnHyChFReZIyetGRyfGxqbNze3Gx6hKSipPz+/ERGRKzCzHyKnMzOzGxydKyurNTy/HR+jMTa9PzCxGRufGRqbPzOzNz6/PwyNIyapGRqdPz29NTS1Mzi/FRaZISChFxiZIyitHR6hERKTKzC1IESEnwAAAAAFgAAChUVkQAAfGACZAMCAACRAAB8AHhFuFcAnBgAOwAAAEh4AG8TABUVOwAAAAAAoAAAyQAVEgAAAH6AAACGAAAZAMAAAACImADIAAASkQAAfP8AYP8AJP8AO/8AAP/MbP/Kyv8SEv8AAAAAIQDpAACQkQB8fAAImAACCACROwB8AAD/PQD/ABX/kQD/fMEC8G8CngCRgAB8fOx7AMcBABKRAAB8AIe7AOsBAIGRAHx8ADMAB+MAAIEAAHwAAGAAANrOAFASAAAAAEjYAG/NgAESGQAAAGwAAAAAAAAAAAAAACjBAMdvABIAAAAAADQEAADJAAASAMAAAAidAPwrABKDAAB8AAAA+OkAnpAAgHwAfEAA/wAA/5EA/3wA//8A8P8Anv8AgP8AfD0AWAABAJEAAHwAANoBWPQsAICDAHx8AAAo5ADJ3BUSEgAAAADc/wAr/wCD/wB8/0gAAG8AABUAAAAAAAAYMAEAygAAEgAAAABMBgBknQCDTAB8AOcAEPQAyoAAEnwAABQsd8nKcBISTwAAAEiFRG9kyhWDEgB8AABETACNZABPgwAAfABgHACYzABPEgAAAAAApgAB/wAA/wAAfwAoxADJywASEgAAAAAAAAABAAAAAAAAAACgTABkZACDgwB8fAABAAAAAAAAAAAAAAAAwQAwbwAAAAB8AAAI8ACQggA7GQAAAAD/gQD/RQD/SAD/ACH5BAAAAAAALAAAAAAQABAABwjPAGsIHEiwoMAbQm7c6KAwIcMOCQ8yTCgkwZAcPn54iHHjIMKGDS7AyCECyIAOAhMiNNBhQgiGNkSg6FhjoRALKGIAKBGhYcQQDybY0BGgxYgKJh7YmFAkRI0ZKzIQweCialUSHDKsmFHjCIERLhZQwOECB4UFLgoQOFLjw4uqDHrscLGjB4OqSD4InGG1b98ZHSUMEVC1QBASGgpUFTBESA0JSQZscCGACAIihDcMSELzhoUTPwpogJBYxQkLCFMqDFECRA4QJUJ8pGmwtsCAADs=";
   var stumbleIcon = "data:image/gif;base64,R0lGODlhEAAQAPcAAAQCBASKBByCtAROBAS+BHTihARChDzKTATWBHR2dHzS7BTCJNTq3ARirBR2rAQuTLzq9ASuBISitATOBARSjCTKNOz+7Ay2HAwuDCTiJCzCNARqrOT2/EyaxJza7BR6rARSnAyGxBRCVATGBAQ+dAQaLARuvOz+/ARmBBTqFKTO5BzGJLz2zAS2BFSu1BTOHBS2JARutARapAQiPCSKvAzCDARKlAzeDARyvAQyXATSBCzmLCTGNBR+tAQaNPz+/KTO7Mz63Gy23BS6JAQWLAyiDBSCvARSBATCBITejARGjGTedAzaDBy+LARmrAx2tASyBATKDARSlCTONOz+9BzqHARurOz6/Kzi9CR6rARWnBSKxAzGDAQ+fPT+/AxuDBzGLMT6zAS6BFyy3AxutARepAQyZCzGNAQeNKTS7By6JP8AAP/MbP/Kyv8SEv8AAAAAIQDpAACQkQB8fAAI2AACBwCROwB8AAD/PQD/ABX/kQD/fMEC8G8CngCRgAB8fOx7AMcBABKRAAB8AIe7AOsBAIGRAHx8ADMAB+MAAIEAAHwAAGAAANrOAFASAAAAAEjYAG/NgAESGQAAAGwAAAAAAAAAAAAAACjBAMdvABIAAAAAADQEAADJAAASAMAAAAidAPwrABKDAAB8AAAA+OkAnpAAgHwAfEAA/wAA/5EA/3wA//8A8P8Anv8AgP8AfD0AWwABAJEAAHwAANoBW/QsAICDAHx8AAAo5ADJ3BUSEgAAAADc/wAr/wCD/wB8/0gAAG8AABUAAAAAAAAYMAEAygAAEgAAAABMBgBknQCDTAB8AOcAEPQAyoAAEnwAABQsd8nKcBISTwAAAEiFRG9kyhWDEgB8AABETACNZABPgwAAfABgHwCYzABPEgAAAAAAowAB/wAA/wAAfwAoxADJywASEgAAAAAAAAABAAAAAAAAAACgTABkZACDgwB8fAABAAAAAAAAAAAAAAAAwQAwbwAAAAB8AAio8ACIggA7GQAAAAD/gQD/RQD/SAD/ACH5BAEAAAAALAAAAAAQABAABwjMAAEIHEiwYEEMX1akuFEEhUGBGHZUuYEAgQ4dBAxiqMLk4gQdEyYQYEAQwwskC8BUWBkFiRgqEgYeEcPix5UrJ34EaQHFggofAgOc+eGCjBMnHX7AiGABSA6BSC5Q4YBljJQsPzQwVSFFYI0IZwrU/NAja880XQEMaDIExpIfDp54SXLAixASAhN4+eHFiwcZMhTshbCByEAaAnpY0eKkjJMQW8p0ISgCh4kYl2PEaABCiWGCD6RoAVxGBoguJR4CmEHBhhIzn1XLFhgQADs=";
   var technoratiIcon = "data:image/gif;base64,R0lGODlhEAAQAPcAAAQCBDyyBKzelHzKTNzuzFy+JMTqtIzSbPz+/ES2DLzipOz25GTCPJzWfBUAAAAAAA8AgAAAAAAAEAAAgAAACAIA/AAAEgAAAAAAAAMA6QAAkAAAfLSYqMc+iBI7OwAAANEA/+UA/4EA/3wA/wAA7wAAAAEAAAAAAFYADQAA/wAAkAAAfLwA0MYAyRIAEgAAAGgAKAAAAAAAAAAAANwAAMcAABIAAAAAAAAA2OkAn5AAO3wAAEAAAAAAAJEAAHwAAP8AoP8AiP8AO/8AAD0YGACQkJE7O3wAAG2wmOfIyYESEnwAAAAAFgAAChUVkQAAfGAC+AMCAQCRAAB8AHhFGFcAkBgAOwAAAEh4AG8TABUVOwAAAAAAoAAAyQAVEgAAAH7QAABSAAAWAMAAAACImADIAAASkQAAfP94YP8BJP87O/8AAP/MbP/Kyv8SEv8AAAAAIQDpAACQkQB8fAAImAACCACROwB8AAD/PQD/ABX/kQD/fMEC8G8CngCRgAB8fOx7AMcBABKRAAB8AIe7AOsBAIGRAHx8ADMAB+MAAIEAAHwAAGAAANrOAFASAAAAAEjYAG/NgAESGQAAAGwAAAAAAAAAAAAAACjBAMdvABIAAAAAADQEAADJAAASAMAAAAidAPwrABKDAAB8AAAA+OkAnpAAgHwAfEAA/wAA/5EA/3wA//8A8P8Anv8AgP8AfD0AXgABAJEAAHwAANoBXvQsAICDAHx8AAAo5ADJ3BUSEgAAAADc/wAr/wCD/wB8/0gAAG8AABUAAAAAAAAYMAEAygAAEgAAAABMBgBknQCDTAB8AOcAEPQAyoAAEnwAABQsd8nKcBISTwAAAEiFRG9kyhWDEgB8AABETACNZABPgwAAfABgIgCYzABPEgAAAAAAoAAB/wAA/wAAfwAoxADJywASEgAAAAAAAAABAAAAAAAAAACgTABkZACDgwB8fAABAAAAAAAAAAAAAAAAwQAwbwAAAAAAAACo8ACIggA7GQAAAAD/gQD/RQD/SAD/ACH5BAEAAAAALAAAAAAQABAABwh3AAEIHEiwoMAAAQogWIhAAYOHDAwgAIAwgAKGBSpWHICgIsMBGjU2QMhg4YKQGjMGKIngJEqECTwuZPAywIGKF1uq1FiyokKGDWgmYCBgIU+GSJGGlJiUoYGQCxYqIECVQIOdHhVgrRhTI8iaXWuGTEBRrEYAAQEAOw==";
   var twitterIcon = "data:image/gif;base64,R0lGODlhEAAQAPcAAAQCBATa7ITq9MT2/ETm9OT6/CTi7KTy/GTm9ATi7Jzy/NT2/PT6/JTu9HTq9Bze7FTm9LTy/NT6/PT+/ATe7ITu9Dzi9Gzq9BTi7Mz2/Ezm9Oz6/Czi9Kzy/Gzm9Nz2/Pz6/Jzu9Hzq9Fzm9Lz2/Nz6/Pz+/Aze7Izu9Bzi7AAAkAAAfLwA0MYAyRIAEgAAAGgAGAAAAAAAAAAAANwAAMcAABIAAAAAAAAAAOkAAJAAAHwAAEAAAAAAAJEAAHwAAP8A2P8AAP8A+/8AAD1QUAAKCpH7+3wAAG2wmOfIyYESEnwAAAAAFgAAChUVkQAAfGACtgMCAACRAAB8AHhFUFcAChgA+wAAAEh4AG8TABUVOwAAAAAAoAAAyQAVEgAAAH7QAABSAAAWAMAAAACImADIAAASkQAAfP8AyP8APf8AO/8AAP/MbP/Kyv8SEv8AAAAAIQDpAACQkQB8fAAI2AACBwCROwB8AAD/PQD/ABX/kQD/fMEC8G8CngCRgAB8fOx7AMcBABKRAAB8AIe7AOsBAIGRAHx8ADMAB+MAAIEAAHwAAGAAANrOAFASAAAAAEjYAG/NgAESGQAAAGwAAAAAAAAAAAAAACjBAMdvABIAAAAAADQEAADJAAASAMAAAAidAPwrABKDAAB8AAAA+OkAnpAAgHwAfEAA/wAA/5EA/3wA//8A8P8Anv8AgP8AfD0AWwABAJEAAHwAANoBW/QsAICDAHx8AAAo5ADJ3BUSEgAAAADc/wAr/wCD/wB8/0gAAG8AABUAAAAAAAAYMAEAygAAEgAAAABMBgBknQCDTAB8AOcAEPQAyoAAEnwAABQsd8nKcBISTwAAAEiFRG9kyhWDEgB8AABETACNZABPgwAAfABgHwCYzABPEgAAAAAAowAB/wAA/wAAfwAoxADJywASEgAAAAAAAAABAAAAAAAAAACgTABkZACDgwB8fAABAAAAAAAAAAAAAAAAwQAwbwAAAAB8AAio8ACIggA7GQAAAAD/gQD/RQD/SAD/ACH5BAEAAAAALAAAAAAQABAABwi0AAEAMMGgIAOBCBMOZCBhQAYGJhQmNLGhQ4QQBSZIRGjiQ4MQCj6AYDASRESOBVCojJDBocMSBxF+EEBTgIibNwVolHlBhIOfQB14WMDxwwgPCJBeSIqgws6BCyBA0EBig9UNBWIKNJHBAgELA0yaGKvQxIIUHB4oGGvS5EQGHCgkeFDhgAIFB0qUrRCAAoUAgP8+KPB2RF+/iAOQUGiygQEKJ/wGsLBBoomRJRaU+CABosCAADs=";
   var designbumpIcon = "data:image/gif;base64,R0lGODlhEAAQAOfAAHYpRHopRHUxQm8zRoQuRJopPms5UnQ5T4Y2SqcvRKMyRrssQqwxRYw8T8QyR7c4Tbg4TZJHTY9NXsFAVGtfa3Bjcp9dWXNqdatfUnxsd6thW55mc4Rwe8hicshjcsVod8Vpd4t6g9dvftFxf9hwfmiVl3GUl7WGfHCYmXmZm7GLk3icnnGen7WMm76Mlu2HYuSJa3+kpOONZHinp8OSm9GPm+uOXceTndWQm9CYooatrs+ZpIGxsOGcauihao61teiia+iibJK1tYm7uY+7upK8u5O9u5bCwZTDwOK0kuq2dOy2cZjHxO25d67JyObAkqvMyp/V0bLT0eTIzObIzenPm9vSzvTUiNjb3N/a1t7b3dje3uHc3dre397e39zf39zf4eXe3d3g4uPf3d/i4+Hi4ubh3+Dj49/k5ePl5eTl5uTl5+Xl5ubl5uTm5+bn6Ojn4+fo6Ofo6ejo6ejp6fDn6Onp6enp6+rp6ebq7Ojq7Orr6urr6+rr7Ovr6uvr6+vr7e3t2uvs7Ovs7ezs7Ozs7evt7ezt7Ovt7+zt7ezt7u3t7O3t7e3t7uzu7u3u7e3u7u3u7+7u7e7u7+7v7+/w8O/w8e7x8O7x8e/x8ezz8/Hy8/Ly8vLy8/Pz8/Xz9PP09PT09PT09fX09Pb09PT19fX19vf19vb29/f39/f3+OD++/n39/H5+/j4+PX5+Pn49/j5+vn5+ff6+/n6+vP8+/v6+/j7+vv7+/r8+/v8+/b+/Pr///7+/v3//v///v///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////yH+EUNyZWF0ZWQgd2l0aCBHSU1QACH5BAEKAP8ALAAAAAAQABAAAAj+ANdMatRoUSJMeOxcSrQIUqNJbCgBm/gLGCsRJGAB6zURGCVIvXDh8vVphAMHI0j5soWrF6RIuFzlqtNhwYQJCzzUySVLF6RCsVDNooIDxAMIH2pMuZWKFqRBqkSd0rQqBwMGO3i9EhUqVSNFpTxJkhJFRQIFN3Zx6rTJ1NdRfKAgYXJkQwEatSpZsgSqESNITogUMVJEiAQXrSI9UpQJkCBFaLb8GBKiAYIWgeAg2hMJ0CBHhc7o4MGBQIATV6q40ZPI0CA/dL7EmJEBgAUlTZY8KTNoUKE7cbqsYFEhQo8gQIL4SPJGUSE5bbCYKEFBwAAMNmRYydJmUCNBc8AhpEBx4YABDS9gjMnzJ5GaQoX6kBHjRYsWLmHM4CF0KE1AADs=";

   var varHead = document.getElementsByTagName("head")[0];
   var varBody = document.getElementsByTagName("body")[0];
   var postingButton = document.createElement('div');
   var postingBar = document.createElement('div');

   varHead.appendChild(document.createElement('style')).innerHTML = ".gm_post_button\n{\n   position:fixed;\n   right:0px;\n   top:50%;\n   margin:-29px 0px 0px 0px;\n   width:18px;\n   z-index:99;\n   background-color:transparent;\n   text-align:center;\n   cursor:pointer;\n   padding: 0px 3px 0px 3px;\n   color:black;\n   font-size:12pt;\n   font-family: arial;\n}\n.gm_post_bar\n{\n   font-family:arial;\n   position:fixed;\n   right:0px;\n   top:50%;\n   margin-top:-215px;\n   width:4px;\n   z-index:98;\n   background-color: #ccccff;\n   text-align:left;\n   height:450px;\n   overflow:hidden;\n   padding:0px;\n   color:black;\n   font-size:12pt;\n}\n.gm_post_bar input\n{\n   font-family: arial;\n   font-size:11pt;\n   padding:0px;\n   margin:0px;\n}\n.gm_post_bar ul\n{\n   list-style:none;\n   padding:0px;\n   margin:0px;\n}\n.gm_post_bar ul li\n{\n   margin:8px;\n   padding:0px;\n   height:20px;\n   cursor:pointer;\n   overflow:hidden;\n   font-family: arial;\n   font-size:12pt;\n}";

   varHead.appendChild(document.createElement('script')).innerHTML = "var gm_twitter_window;\nvar gm_post_bar_hiding = true;\nvar gm_post_bar_width = 4;\nvar gm_post_bar_size_timer;\nfunction gm_post_bar_click()\n{\n   if(gm_post_bar_hiding)\n   {\n      gm_post_bar_hiding = false;\n      gm_post_bar_show();\n   }\n   else\n   {\n      gm_post_bar_hiding = true;\n      gm_post_bar_hide();\n   }\n}\nfunction gm_post_bar_hide()\n{\n   if(gm_post_bar_width > 4 && gm_post_bar_hiding)\n   {\n      gm_post_bar_width = gm_post_bar_width - 2;\n      clearTimeout(gm_post_bar_size_timer);\n      gm_post_bar_timer = setTimeout(\"document.getElementById('gm_post_bar').style.width=gm_post_bar_width+'px';gm_post_bar_hide();\",1);\n   }\n}\nfunction gm_post_bar_show()\n{\n   if(gm_post_bar_width < 200 && !gm_post_bar_hiding)\n   {\n      gm_post_bar_width = gm_post_bar_width + 2;\n      clearTimeout(gm_post_bar_size_timer);\n      gm_post_bar_timer = setTimeout(\"document.getElementById('gm_post_bar').style.width=gm_post_bar_width+'px';gm_post_bar_show();\",1);\n   }\n}\nfunction gm_post_bar_fb_click()\n{\n   gm_post_bar_post('http://www.facebook.com/sharer.php?u='+encodeURIComponent(location.href)+'&t='+encodeURIComponent(document.title),626,436);\n}\nfunction gm_post_bar_del_click()\n{\n   gm_post_bar_post('http://del.icio.us/post?url=' + encodeURIComponent(location.href) + '&title=' + encodeURIComponent(document.title),850,610);\n}\nfunction gm_post_bar_dig_click()\n{\n   gm_post_bar_post('http://digg.com/submit?phase=2&url=' + encodeURIComponent(location.href),'','');\n}\nfunction gm_post_bar_red_click()\n{\n   gm_post_bar_post('http://reddit.com/submit?url=' + encodeURIComponent(location.href) + '&title=' + encodeURIComponent(document.title),'','');\n}\nfunction gm_post_bar_tec_click()\n{\n   gm_post_bar_post('http://technorati.com/cosmos/search.html?url=' + encodeURIComponent(location.href),'','');\n}\nfunction gm_post_bar_des_click()\n{\n   gm_post_bar_post('http://www.designfloat.com/submit.php?url=' + encodeURIComponent(location.href) + '&Title=' + encodeURIComponent(document.title),'','');\n}\nfunction gm_post_bar_dii_click()\n{\n   gm_post_bar_post('http://www.diigo.com/post?url=' + encodeURIComponent(location.href) + '&title=' + encodeURIComponent(document.title),'','');\n}\nfunction gm_post_bar_stu_click()\n{\n   gm_post_bar_post('http://www.stumbleupon.com/submit?url=' + encodeURIComponent(location.href),'','');\n}\nfunction gm_post_bar_dzo_click()\n{\n   gm_post_bar_post(\"http://www.dzone.com/links/add.html?\" + \"t=\" + encodeURIComponent(document.title)+ \"&#038;u=\" + encodeURIComponent(location.href) + \"&#038;l=\" + 2,'','');\n}\nfunction gm_post_bar_twi_click()\n{\n   gm_twitter_window = window.open('about:blank','sharer','scrollbars=1,toolbar=0,status=0,width=,height=');\n}\nfunction gm_post_bar_new_click()\n{\n   gm_post_bar_post('http://www.newsvine.com/_tools/seed&save?u=' + encodeURIComponent(location.href) + '&h=' + encodeURIComponent(document.title),'','');\n}\nfunction gm_post_bar_moo_click()\n{\n   gm_post_bar_post('http://designmoo.com/submit?url=' + encodeURIComponent(location.href) + '&title=' + encodeURIComponent(document.title),'','');\n}\nfunction gm_post_bar_dbmp_click()\n{\n   gm_post_bar_post('http://designbump.com/submit?url=' + encodeURIComponent(location.href) + '&t=' + encodeURIComponent(document.title),'','');\n}\nfunction gm_post_bar_post(url,width,height)\n{\n   window.open(url,'sharer','scrollbars=1,toolbar=0,status=0,width=' + width + ',height=' + height);\n   return false;\n}\nfunction gm_post_bar_m_over(item)\n{\n   item.style.backgroundColor = \"#dedeff\";\n}\nfunction gm_post_bar_m_out(item)\n{\n   item.style.backgroundColor = \"#ccccff\";\n}\nfunction gm_post_bar_email(emailAddress)\n{\n   window.location = \"mailto:\" + emailAddress + \"?Subject=\" + encodeURIComponent(document.title) + \"&Body=\" + encodeURIComponent(location.href);\n   return false;\n}";

   postingButton.innerHTML = "<img src='" + postButton + "' />";
   postingButton.setAttribute("id","gm_post_button");
   postingButton.setAttribute("onclick","gm_post_bar_click();");
   postingButton.setAttribute("class","gm_post_button");

   postingBar.setAttribute("id","gm_post_bar");
   postingBar.setAttribute("class","gm_post_bar");
   postingBar.innerHTML = "      <ul>\n        <li onclick=\"return gm_post_bar_del_click();\" onmouseover=\"gm_post_bar_m_over(this);\" onmouseout=\"gm_post_bar_m_out(this);\"><img src=\"" + deliciousIcon + "\" alt=\"Del.icio.us\" border=\"0px\" /> Del.icio.us</li>\n         <li onclick=\"return gm_post_bar_dbmp_click();\" onmouseover=\"gm_post_bar_m_over(this);\" onmouseout=\"gm_post_bar_m_out(this);\"><img src=\"" + designbumpIcon + "\" alt=\"DesignBump\" border=\"0px\" /> DesignBump</li>\n         <li onclick=\"return gm_post_bar_des_click();\" onmouseover=\"gm_post_bar_m_over(this);\" onmouseout=\"gm_post_bar_m_out(this);\"><img src=\"" + designfloatIcon + "\" alt=\"DesignFloat\" border=\"0px\" /> DesignFloat</li>\n         <li onclick=\"return gm_post_bar_moo_click();\" onmouseover=\"gm_post_bar_m_over(this);\" onmouseout=\"gm_post_bar_m_out(this);\"><img src=\"" + designmooIcon + "\" alt=\"DesignMoo\" border=\"0px\" /> DesignMoo</li>\n         <li onclick=\"return gm_post_bar_dzo_click();\" onmouseover=\"gm_post_bar_m_over(this);\" onmouseout=\"gm_post_bar_m_out(this);\"><img src=\"" + dzoneIcon + "\" alt=\"DZone\" border=\"0px\" /> DZone</li>\n         <li onclick=\"return gm_post_bar_dig_click();\" onmouseover=\"gm_post_bar_m_over(this);\" onmouseout=\"gm_post_bar_m_out(this);\"><img src=\"" + diggIcon + "\" alt=\"Digg\" border=\"0px\" /> Digg</li>\n         <li onclick=\"return gm_post_bar_dii_click();\" onmouseover=\"gm_post_bar_m_over(this);\" onmouseout=\"gm_post_bar_m_out(this);\"><img src=\"" + diigoIcon + "\" alt=\"Diigo\" border=\"0px\" /> Diigo</li>\n         <li onclick=\"return gm_post_bar_fb_click();\" onmouseover=\"gm_post_bar_m_over(this);\" onmouseout=\"gm_post_bar_m_out(this);\"><img src=\"" + facebookIcon + "\" alt=\"Facebook\" /> Facebook</li>\n         <li onclick=\"return gm_post_bar_new_click();\" onmouseover=\"gm_post_bar_m_over(this);\" onmouseout=\"gm_post_bar_m_out(this);\"><img src=\"" + newsvineIcon + "\" alt=\"Newsvine\" border=\"0px\" /> Newsvine</li>\n         <li onclick=\"return gm_post_bar_red_click();\" onmouseover=\"gm_post_bar_m_over(this);\" onmouseout=\"gm_post_bar_m_out(this);\"><img src=\"" + redditIcon + "\" alt=\"reddit\" border=\"0px\" /> reddit</li>\n         <li onclick=\"return gm_post_bar_stu_click();\" onmouseover=\"gm_post_bar_m_over(this);\" onmouseout=\"gm_post_bar_m_out(this);\"><img src=\"" + stumbleIcon + "\" alt=\"StumbleUpon\" border=\"0px\" /> StumbleUpon</li>\n         <li onclick=\"return gm_post_bar_tec_click();\" onmouseover=\"gm_post_bar_m_over(this);\" onmouseout=\"gm_post_bar_m_out(this);\"><img src=\"" + technoratiIcon + "\" alt=\"Technorati\" border=\"0px\" /> Technorati</li>\n         <li onclick=\"gm_post_bar_twi_click()\" id=\"gm_post_bar_twitter_button\" onmouseover=\"gm_post_bar_m_over(this);\" onmouseout=\"gm_post_bar_m_out(this);\"><img src=\""+ twitterIcon + "\" alt=\"Twitter\" border=\"0px\" /> Twitter</li>\n         <li style=\"text-align:right;height:50px;\"><form><input type=\"text\" id=\"gm_post_bar_email_address\" value=\"Type Email Address Here\" onfocus=\"this.value='';\" size=\"19\" /><br /><input type=\"submit\" value=\"Email\" onclick=\"gm_post_bar_email(document.getElementById('gm_post_bar_email_address').value);\" /></form>\n               <li>by: <a href=\"http://designora.com\"> DesignOra.com</a></li>\n	 	</ul><div style=\"display:none;\" id=\"twitterpopper\"></div>";

   varBody.appendChild(postingButton);
   varBody.appendChild(postingBar);
   document.getElementById('gm_post_bar_twitter_button').addEventListener('click',function(e){ gm_post_bar_twit_trigger(); e.preventDefault(); },false);
}

CheckScriptForUpdate = {
 id: '67176', // Script id on Userscripts.org
 days: 1, // Days to wait between update checks
 
 name: /\/\/\s*@name\s+(.*)\s*\n/i.exec(scr_meta)[1],
 version: /\/\/\s*@version\s+(.*)\s*\n/i.exec(scr_meta)[1].replace(/\./g, ''),
 time: new Date().getTime(),
 call: function(response) {
    GM_xmlhttpRequest({
      method: 'GET',
	  url: 'https://userscripts.org/scripts/source/'+this.id+'.meta.js',
	  onload: function(xpr) {AnotherAutoUpdater.compare(xpr,response);}
      });
  },
 compare: function(xpr,response) {
    this.xversion=/\/\/\s*@version\s+(.*)\s*\n/i.exec(xpr.responseText);
    this.xname=/\/\/\s*@name\s+(.*)\s*\n/i.exec(xpr.responseText);
    if ( (this.xversion) && (this.xname[1] == this.name) ) {
      this.xversion = this.xversion[1].replace(/\./g, '');
      this.xname = this.xname[1];
    } else {
      if ( (xpr.responseText.match("the page you requested doesn't exist")) || (this.xname[1] != this.name) ) 
	GM_setValue('updated_'+this.id, 'off');
      return false;
    }
    if ( (+this.xversion > +this.version) && (confirm('A new version of the '+this.xname+' user script is available. Do you want to update?')) ) {
      GM_setValue('updated_'+this.id, this.time+'');
      top.location.href = 'https://userscripts.org/scripts/source/'+this.id+'.user.js';
    } else if ( (this.xversion) && (+this.xversion > +this.version) ) {
      if(confirm('Do you want to turn off auto updating for this script?')) {
	GM_setValue('updated_'+this.id, 'off');
	GM_registerMenuCommand("Auto Update "+this.name, function(){GM_setValue('updated_'+this.id, new Date().getTime()+''); AnotherAutoUpdater.call(true);});
	alert('Automatic updates can be re-enabled for this script from the User Script Commands submenu.');
      } else {
	GM_setValue('updated_'+this.id, this.time+'');
      }
    } else {
      if(response) alert('No updates available for '+this.name);
      GM_setValue('updated_'+this.id, this.time+'');
    }
  },
 check: function() {
    if (GM_getValue('updated_'+this.id, 0) == 0) GM_setValue('updated_'+this.id, this.time+'');
    if ( (GM_getValue('updated_'+this.id, 0) != 'off') && (+this.time > (+GM_getValue('updated_'+this.id, 0) + (1000*60*60*24*this.days))) ) {
      this.call();
    } else if (GM_getValue('updated_'+this.id, 0) == 'off') {
      GM_registerMenuCommand("Enable "+this.name+" updates", function(){GM_setValue('updated_'+this.id, new Date().getTime()+'');AnotherAutoUpdater.call(true);});
    } else {
      GM_registerMenuCommand("Check "+this.name+" for updates", function(){GM_setValue('updated_'+this.id, new Date().getTime()+'');AnotherAutoUpdater.call(true);});
    }
    }
};
if (self.location == top.location && typeof GM_xmlhttpRequest != 'undefined') AnotherAutoUpdater.check();