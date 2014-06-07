//G. Trapani mods:
// Set ads=1 to turn on ads 
// Set defaultFont = "Arial" so this is Windows-friendly
// Changed all image references to data:image urls

// ==UserScript==
// @name           Gmail Super Clean
// @description    Cleans up Gmail. Adds Shine & Gloss.
// @author         Ganesh Rao
// @include        http://mail.google.com/*
// @include        https://mail.google.com/*
// @include        http://*.mail.google.com/*
// @include        https://*.mail.google.com/*
// ==/UserScript==

//************************preferences begins here **********************************
//defaults
var customLogoURL = ''; 
var showCustomLogo = 1;	//gmail will use its default logo when this is set to false
var showAds = 1;
var showBookmarks = 1;
var defaultFont = 'Arial';

//set by script

if (!GM_xmlhttpRequest) {
    alert('Please upgrade to the latest version of Greasemonkey.');
    return;
} else {
	showCustomLogo = Number(GM_getValue('showCustomLogo', showCustomLogo));
	showAds = Number(GM_getValue('showAds', showAds));
	showBookmarks = Number(GM_getValue('showBookmarks', showBookmarks));
	customLogoURL = GM_getValue('customLogoURL', customLogoURL );
	if ( customLogoURL == '') {
		customLogoURL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAA7CAYAAAA+XsUpAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAB5lSURBVHja7F0LfBxVuf/OPPeRzWaTpk1CUtq0lNJUKaRCSwWrBKEg8rCpAhdBvQRQUfFB8Yp2uT+9UkUUxQcRBVHg0qBcHgVKI0YuUMCG13UDlDStbZq0TZPNax+zM3POPWd3Jpmd7GYnaZqENmd/329n5sycmTnz/c/3/b9z5gwihMBMOrYTQuh9fw9HSo+FGfWYSROJtSzLI/Q5y/K0SzMAmUkTAQiUYdm6bgcEsWzD0xksMwCZSYcDDlM4iyDLP7IBxAQGNsS+PO2Aws0855k0DlAwveGNBlakIlGRqbioeAzxXvnj/cFFZ1xdSpfzTKnd8M9LjXy3cYxklMEbgnK4ZzMAmUnvG3BIBijcl9+258sXrd92EV32Uck/89/uXuHKn3PjirU/+QVd97Ntn/mvXd8rKKv6/Qdqbqw0AONlYClf8vF8AyyCUTY3XYCCDpf9X3zax0AiKshYAwmrtCmg/1REYMt6cp2n/wK1ojynA89TETBwVHiRLot0WdKpYEBUaEFU6DVJJFX9VhFsbY1RjfTo5Fk0LEICC1QkSGgSxKkoTFRXcjmuyklRkv9mHvsX6T+9Yp1PioY50AmyWHvTC9CAnQ3ovQFHBanQ/egjjurpuM+XVSKkB9p/d6B52mm+sygWstS61XIkLcBVPw3fK7n9q3v3v1PfEFxSf9UdPfWSp+BUduCBtm0/Q4jjZs8//Sts3djn5xVLz3evvvq+b2E9sfuB9eW3pyo2KWZFYxtfyc76Z6JY7/tUS6WGyjnvUxJuBYZ4xY/2f2ff288+13TvZ3dK7gKXIPtWMh0tLF1c9/V7es8p8OfP98gMfADLjl9xQ1xDPFPzOFX/Qc+CT3/65md78ypWX4M4IRAbOPioYU0SVBRDwELip4yTjBkgK1avrZSwVivpajX9D0iph26mNkOajf8GKuEZbLyvk+nuiIYwV0gWXb5PLDjtiq+XV63Z3rv/7VcoEmQ3tfx51OEqyvPND+SxnVIAETjEa0asSqN2odct+qVTz76pLwoQiRPqTYjHG65Z/EOX3Da3dNFHZj2+ceXfDUui2Qj+9ATI0poraygg1lNAVBuK32gAweoyBCCVz6SOynoqC44FLSpad/Z66nIFuh9+/uajkHeYlsNlkGs3xpjjmBfsKVw+98RVy2dTlnFcIQKPlAKGwKcXJFuWfbSU2fkIYtReHOwjsK/Ls/Cib2//av7sE84U5bxF0b6Ou+hur1osiennTnqEKydA5p93TYByjLvFlKW4+eWmR86xcxBLChvAYbLRAMzRD461a6ppO3sbW5512YqGQw+93HyUgGPIrbrku/93EcH6rINt29pfeuj6XVjXOOb3F9F2//hiBH43A0ZKd3WcklHNEi3dS1FTMYsyeI+U7/ct+0JnL0UBJhDp7eg2Il1Wy6FNhbs1KkAqzr+umu6wybASC1577qGxukvHinvVZrnX8FEEDt60HJQrzPXPOen7BaVLYdGqa5IKPrsAYO4slHSrWFK08Z3M60qBTKLKtrebQP/B1h7DUmXqN0GTCZKsACm94EsBAxyN726579oZVzx76n7k6TB1sZazZWo92o4ScJjWIxnK3fvWk28u+djXhlr/UuoblFGXSuQJKOrEnJi5aTw9a2zxqs9cfnvP9QjxlLGQnsdvq/7UQNdOaw/81AMEDMux65nfzoDDCUg2/XVCgGGEXGssnK7BWK4xXFfIsF6TwXI32/a1l1dprFca5YRtIEnr6/jHo9/qWPTh6w7xomtWUT51JSmHYFGriQKHmfKp3Zg/t3zlPmpJGLGP9u27n4LDDBDokw2SjAApvvCGOiFFtBfMqP6kp0qbIpup2gYQ6zoLhtxsAUWdofBtxrIZTQwY6/XGeVjo+dps3OMT65vP8fhLL8Wa6hJk7xLqZnnzXAQCXgRYp5ZDPzIVwEh8gZfAoQGAPW8+9rQBUmv/CJoswp7NgrAK37j3qd9MhT9tRsJM395Jy1xtCQg0Hub5ra1x4xSCZCzJHk2stwAhYONHgVHuz9pbLuwLPb1rydnfuAghLkmYWWTK70npZXwCLIdLYkBAsD9MMvKS3v5I94HW53uN6Jm1E3HSyPoIgBR98qs1XKoS64/wudcbD6zeopjrM7gLZkSsMQOQ6gyxK1S90aKGxwCKOqNFtacG4/yjRqYoB6kDpFZOQJjXbBTWG+d20kCEczQ0NVn2DY9Gzl9/8pae45Ze+Af/nMXXs0wWwuXRxLhVyxdwUFmCIDwIsLoKwaYXtWTY13oh+XneorM+9+DTmqoe1NXYW30H3r5jy8/Oeh6Ge9mPeMo0FospSUPn5l9OhvUIWFyCrYYyLLC0ZAsMxdxq7GO1GOa2jZA+cnSdkb/ToiCQg2vdbZxnua2s5cY+Wx2UFXB4PifJBGUdHF6o3OQijRapH4WcIxv/EF/841UPq2rsEIdI0oIkNGo9EocnFUUIfJRr3P83DZ74hwbv7sOwYhE3Yj9Ez8lTAU6YDbw49x+PfC0Ew8NdJmUcoZDFXamHyUmVhhKwPoRzMliJNsMStBn7mGRyk7GcyUo0GLLVUPzlOa6h3lCicBbXZZ1RzqYp4GSNRh01Z3lOVgu40VavJgepHaOrmLQgJ3/iB8eXV33iMre/7AJekGexXkGMx2c9inwIugdSHhEbftJ2QId/7knlVcxCUBpIUQoW6t3RMWwYWBCAgVLTsdby97tu6ml/jVgAYoKaTAVAJitUWW0hio05lLjG4paFM5BLe1pnWJG6HIB3ojwMiNsdlDVRdWK2/pWW87UZddCcwRUMG9fWaLFk9Zb7q7XkBUZxF5Mu1vK1d5VXnn71s5R7+JKIoa04oj8NpyJLY021q0Ro3qnDSeUcbHlDhz1dqUJYJOz0RTzc/WyCAgfBVy8Q4c7NGKLKsM6zpb72V7e9ufmWf8HwaN9JG+nL2fhH8uF0PfGLxkkESEOGiE2mZLocZsTGiXvRkIHTjNdVaZhAFyoX4W6zNAxWy9hsAc062zEmIW+zHddsHFtpWQeLyzUCINsf+fLBvW/+5WqMscJacVMS6thF4BD8818YrjhLhE0vaNBKLYSZV/NBAZ6kLhZb7h0kyWEnn/yQkHa8TtmGv/y0My/5z87fnXXN42dB+otZk85BpmJoSP0YFAcsPrVTF6V2gq6zbZIAAhb3KBunGK2Owg6Al4uDoG1/+mzoX689/E0d69TDIZBgYV3Nuaw6iYePL+NBFAi07tfh4RdUOKWSS9unP0bgOMpH2DLrdNy5H8Njr6pp+zDOw6wW78o/dfYJZ993wXd2fBEm8X2RiRjuXplDCcOjgKAtV3Qog8I3jrE1Nq+x7X0EkPEAaqJS0opInoDgm7N4KRtvxcZHYUIca+PlZ0lwsBfDe50EPvcxEV5+V4O/vJyAW2pd8MYuxkFSLtajxrbVS3k4QK3Hg88nkqN77cm0YIOHWu/Y8uNl9ZNZsRMBkMAobkxlBpNvV7ojmdomECDTOdVPIDjQ6Vf88aSSk877FS+4FrGNzII4TQtKOOgMY9j6RorNd/Rg+NFVbnjhbQ1+/YwC150rw60Px5J5fREC37ovmrNMjDV84J0t3912/2cetVznpCQuU4tbfOENY2kpm40IVCapfx8qmxkM2GqIOaxh6zS5tiOVhpQuUHHa2QjJc1nUaqzygbkC7KegYMsXnyZBzckCXP/rKPRHCXTS7W/u0uFaChKPhJL5TspkTMY35wMrPIHjRUh/iWtyAdL9+J1hS/TkWEoBAxRsFOkmGB7GUW8B+3R4z+NIunhDY5yeue3Eu3Y8/9NLE9Hw68zFMuWSFSLM9iOwbrPLG7s0OGeZCN+82EW5hwb3P6fAQAwP5f95mwL7qYW57jw5ue9oZVnFXVBx4Udv2HbP4rO/XQxTPBar2WipGo4RcFQboGgzIkONcGyn5PDyli0b2rp3v/TtD13+QAPHi8lwb2unDl9cI8P3Hky5RSfPF+Cqj6ZehWJEnIGhtVODkgIZ/vA3hVqL4fHvC0p5WDZPSALkzy8p42vNRXdVxalXXvjOX39451RyEKYgdceIMlQartNGSO9omy6u3mjRq0qLpbfm18LwmCvrKN0am8W0j+BNG04+Z/Eazym19/wUOMGHjQkRXm9T4YPzeLh0pUQ5hQpnLBbglgciMEiJ9dozKLe43APfpet3PRWD9Zd64A/PxZN5Cyk4vC6UXB9PwloiFg3veui9ptt/te+thnYYw2QOE81BwLAclaUXfOlYAMl6GB7rNd2uyzpEpDlLYMTMtw/WbDSeo/UZ3m0psyFLI5i0HoG5K/hla+/5JS96T7L2gzB55EUFVp0kwqdWynDfX+PUfSLJ7Q10+wstKpx7igTvdejwtXsGYU4BR0k7n1xn+9rLciqx3va3m35++i8oOJgLbJ3tZNJJOuMhbUYlrj8GAFI3DcFRDaP3Z5jXbe9ErLNYk2yRrlzh4GSrXDRvlRjv79yciPW+YOcCjE/c+9cYnHeqlMYtmDS8GIcPLxGH9mPrTJjlcco1MvKPwvmnrrr2b5+C4eHuZMoAYiQ2jKOy4vzrjmaQ1Fgjdw6J/GRdV6PD/UyphvQ+H3OKofEEW/TW538S/vvPl/9+6w/nfeGV+y+pUZXIXuZmmfLaTjWp+OdSkFi3YwMY9m0TIb6SD35zWe29lZA+kndKXCw21MQcJHjb/POuOVb4yFSGWMHGNwIO9mnMIJWQPuvMWPp+rBxEN1prtXTp2gpKjivsrfrDL8RgDQUIe2/D3FZSgGAwRg7LWthFU2OdSqRrazS8+2ecIOsWgEzKcPesHYWdm3+5kVoQVuF3n3ju1YF3t9y38ShT+GabS5PL7ZmshqLRYRQxU+dnrc1lHKvVMydIMKaPhMScxZ+8gWRQxYEIgd9tjcEv6vzw1PYU+T6hTIDfPRsFMkGqSwhWXn/oiiu725oYMR+kEoFJfBdkNBcrmfY+9ZtrjQq/bWnNlVtP/dhlR1P/SNgh16o0CO5k9YOYM6TUQvo8Y3Y+UWPZXmvjIgEY37sk1llEtOor/rIIEC9hXQ1nat1fa03Ae/s06OzRk//f/+8B6KDLE2U9AJB8wtnBj0NqxsUETMHUPzmHmux65rc3UwvSaCjJzhWr1zZKWGuUdLWx8cXNzVkUqtp4gLUwvftTbobh90bs75YEjOu/zVDIjcbyZAxbsU7GYCXsG20gCdisjTmsJ9M7PRtzrNutiNb8wKWv0X+moMmZ2c/8ylt3yL7S1dad73k2kuQdzLU6EslTuPBi+nenYdHGNF/vpACEJepesQe2gFoQk/wlX3I6f+W5ybfpszxgJstheo+BMofJsI7CHhg5a0ibEbBosFidIwoQ2yTMuch6OMs+Y5q4LsPk1WluFhXmQ/GCt/hku2+zr2fiZ26I9+19VlMGd0ueogLEC9ri83+S/85T3+idCgsyNLv7GL9Th9Ysv7gQhOhyl55AIlHBRXQix6Pb60Nv9aBJijBMXApyJ6ztXK5gdI5KONDZLO+Y2xp+MrCd5mE49pJ1VsXktD8nrrl9adkpn31uMk4eOfTuva/Wn3m7wTlYt33MAGrWPpAjNbv7GAAS5KpqQ4KrLS4IgibkkYQoE10UNJHz0HtwCQnsHUCq6tU1IR7XeUVRi8rL9WBTk26/oSCt/MI1IPpigLzFoK5rgJzN0KZa4CNVIA4UAunpATUYzE3U6D5CX3656O/368ENIZU+dnstouq6OqEvIrv1gZhblQUBJzhOkWTMK1jTVBzrySuKQxVtuZqauPLiU8R2aNehoUFNu6cgVaZX1ojz5sTQ7kixSvPT74fmL+wGURuYR/N303xw0uyaLwZlcymsM5BYozrmNnKYZDZtbqzT6l64SPQUX5IYPNDa39G8s2jhOVdL3tkrjoRSJiJdT7z086qvGMCIZeAfkwYQBy4WQVW160Rlz3su137dK/p4WYoRUedpYl/+0DF7tR4ULBBR1rFICEYSVnmXmOhTupQbV5bH/NvalaD1YdXS8+4vye/1aEK43UVNZ3s8h8VB7StB8saggDrDWglAn1Fpoz7gg1BFrwIKuyQ9Erx1dV8QmrQ0K7hmjbQvFvPLSM+PyoRHHNZ0ARFe1RDmRV7gcF5x5GCEe8kzoLqP46ODA/lzOTGyp7a23wqCqlCt0J23P3+wH4Ryvr23PeWSkOH8Kprfna9Jg0J5pJzmj3q/1g/UmMpvApIzWlGWzC+lIDMka2n1OQufSFjKNVtg8xyjRYSGuAhbebX+w4/Rvy1gTF698stvXTyRStnduvVW76wTT5Lzyz7CS3nHGZZDgZFT/UyjyauDQa7siWtdqEfwubxCnoZE3o00DWQSjyl6wiu6EiKOEIXWdwEFuoDzkCbovDvBsxkkJV6Je0TZJ3evWdgDT7cOjVArHKQGC2uiqGpizNfuaHaKWTpwCRkkggDtL3Q21FlzxXhBlWWBE5SOjoG0Y6rrqoWDAwU+kUv4EojXRF3qHYgUKEgeJER1I5mPSDGOc+s85xaFODUrXoLEhJvazFjqmQ2n0OAgmuV3ibQQUeXdI+5HKVGQGNFEpNNbdqlcjlZbMJTQVHxT6dm6y+ADyHB9zH4Bcy51yVjGxr7suF5j3W0oXcIAl8eyTnJEtUw+YtYhRkiIQnIoiD4YPbTjMarcawFx8jiZl/rOE196VFP6HmD3t+Si35YalmNKiLkzgFBwzHlpp5vzewtigsctxBK6SHC/wHMxtzehcpyub27arNtrc11tLVfW0kJNiuKKybgAKQlB6FXMVySHblDjgEgah/O9zm46lg9EGwQsaECAd3ZzcpwjcZ6yCVUkZWU+kq6I1SLn6ndjUVb9EbV3rhaJNDxeb7Fytdw8b1Wku6/LizHx8CDIBBMUHUAaNN4/8poTccJJ1PDkeTPeDydQU6zSfDdPcrhVsvGvWFp/YmwXDWUxW38FhmcaFAwxt3PG/iiDZbGu56p/q88/ZFUw0dqivbt+sHPrfzzW0/Zc4oyvvnOi4CpIziCDtfhBjpdoM8YN6xfBihVAB1v+8q3AvI9cLHqKVmE90U7B0Wfec8tj17ydgXNMCacVslqO5g4XT0Q/4pAsYBIFXRzwi3tjTRk4hbX5Y65HA72xGxYuRD5EjQsvCGAj7T17gBTkcZg2ylg55OjmSSACpDsGmEOAS1RnleWmyshjRE1aHCe7mYY5AYKOsChyIqeAGnGf0BltCDal8wJ6H7uhAUNdne7rEoHjaQssS/R2YiNJYl4e4SgHIxrBXPjQiPuR98uk389hSVcwFLhHu19TyVWL8ttbc1PhVYuyD7U7Nl4y2ly2TurQuo+1LP3luz74fbB8gi0R6X6elwuW64nIP9975sZvzl1102WeooVXsQPV6KH/PRh65L6y5dfciRCfpyn9r77zxBfZlKJPLLvymbPdgflnGIR83J9gm0yAoIWvdIuDIHspBxddSIkUBvz921b5lXeDv3dM+opkmShiNwYOZzyGkzhMRNo2x5yVx7pS2ZSwMSr7HF4D5mScUCM6IiLxWbbXLqlFnQeinCL4sCseVZqCTdn98Pp6zV97YzSKFY+oJQTscmV4WC3AaYUY6+xDjJmKCQGnl2Ae013anV16FoXGNgItQvpkCyqkf/AGZQAYwNgngCYZrIg1FCxEDr27WfDMqnjzTxfcEutpxYnBg3cu/XTDeeyA95696abuHU/1inlz/r148UX3xXv3PEg39zMgvPHH81gI/UGLO2UfSjKl0dCRAKGuRQ9Fh4dXJU0Wo2SONrDt3juU5DR3Y0gdVJHK4gL7YieSutOPLXUB4T1RXaV8/oDsrAIC/UDiXtCpr6PLRc6O6Y+IRAJBF8Clh5YUDx9DH4kr4ME0U/cW+nPF1Ul7W0TzlVGfWAOXK55hZqiAi0TDbPIPhA555RFlhQJAynVBj+cR5BaE0c5lKhxv4RLZiLOVF8g2q4Eg/Vsa1k8awGEonv0TBOa18G//z+e3G31GyYnd+tpfjsTCbUEt3tdDwZGcJu7dJ65/XvYd9+l923/zGgwPG7EKmQ5Ww+7zpntJgyUC+4qWgjmdE4oiu++9d8zgGOrwYdPxiTwuzKAUiQgikQTChW5nFcHCu8y9SijOWz1v/gGCQcBRVz9J954acBjiKtFEra8T87W0URi1pMow5vmExiPKmlzekQ+vmVZclCfIJWE44M7MQWIcdfd4LPgcAcTqbllnEsQW94tA+iznCSMfWcpKWNw0zlImskSGxgMQE4hm9MzsTIwbxJ/J4Gu//8iDbz34yS0GGJiTO0jXn6OA6TFIuMmzVBtIpk0fGmfjHmjOLFkguopUSYp3DNCLHyc4ynzNhEgChngU98jprWqnD0i/i6MeEMIlec4qo6SEWh0OME9B0tnpsAL3sifJY0bWbQNe6PGlKod0St8J/zptFCDHJACcQsm+xtzFDD6Sz0c4TwwjjXKMvD0jr20HEEEVWJOD5f2tJIcCmgAwQ7miJUplKqdiiXBxxrIJEKt7lbAoccySb80bb7KDxQSk9Uu1Jmhixr9iA4VmASqebuAYCZAm6ir3cVwMubVeESnQtOGwxhEQl4hBFDK2UihG6bPC4ZYWZ2Wx/QYoOATkvNXT5rswLyV0HWRcVVWVVvHNZWV6TM9T+pJx5x554Zo1EgtOZAQKPZbP8+Ool9fbB0synp9XXJhT5azXJvr6saAPOrl2bGmV1SyhTmxRxoSF0Nu3JyxuUMRQUtWWBxMIEqtl0SzgtK7beca0A0V2DjLQgbBbRgJHb6SrSGUd7eMtOFQMpLhFIJ48HXfw6cR2Cc1r6ULEHeMw4yNOyistpS5TJ2Cq0GTJEmfHFPXIpNcf0bt7YmR2XtAeqcO+YDCxo7kZPPnzWD3I5aEQ114b1KGLPrjiEAETVLThgGLamiTC1EIsGnnu4mKCoItwUgyDNwOJp/fbM4CILnF4d8Bx9EjPwj9yEWzdYXlHIpHD5DjTLqVbEGPwtEtQNFh9mK0LdWlmu1wYBmXM3C1bFnVLRNYngJm75aS4RdSt6iumFoQpicPxwWyufJ0X8KwyMeO9NAWDeofLpUAhKB6d0+OKT5ilROU50qBcDuXSvCaQoGm3BMV9oj7Ic5ySh1OlZrAQ8QHMJ9wYdvgy3o8YoPfr5zGUjVtx8AS1+jNpnBYEQbgM8XkHccegrENwA0mOmsqdUBCCKAQhZB3ZHkiCr5P15+KRHguQ/C0cEWZRxR1wdqHsq/KlAuBIPpBOerwTkAQ6XIQ2m3gANOLP1uI1NOithHL5des0aHNz83weXivuQzgeQQmfHxW7PBxR+pCeJyA0SLlUW4BkcsG4UDsR4z56rxluiF4vF+IIAwm1RnAYABltTNa4XZUjNY7p6LIgRiWJLIwZK9IduleIRYBCVSHBO69L9M6bNyzl5RR8pdAncSTUZHtwFHdCgQtLAxJm7paTC10SAiJRF0vY5bwFZb3nGrjwvCVevGHDKOdhgQg2tqq5Xt29GhLtVX6lwxVWWJCiq2t2/FDJ6fEweBOi3quDryxDOUFwDRZgqWgAM3cr0ylcJfR+ExKG4nFbEKuLZQcID5M4HeexCRBWvW0dRBooS/nfDlNVQxUJuNpIxNuFI15vUuZR8fv9OsTjml9eqDZkcAt69rSSf43hQltoKzzQTX35IiCjKnua4jRRj6YbQ0sIOx7NT7lJUhhgmoJaUurrqHWJaO4Er2esmyCQ1ooKLLAQb1XDyHx6vX7FnwrxVjm99owKn2m72ceBYPQZz9EMiA6Lg9C68+0g3uIQBlvEZ7RWjbpXpL65WasKhYYELLIhw9CUDXSdkfNC91CfgLMHdwK1JPTv1ltz758yiKupeDEc9ks2rG7KSNGApENDlrop20H8FQdx9sObkyAZAziQjSNytu32iJt1mzUvG4BmADPmKBZ1D0JdVdgZ9UiPVgSzKGC2ohg5L61oxS07Ur5cjieFQiFAjLvIpUBCjWl+dxavCWDTpmLS0gI4yCxO8DBrqngJaaYCzetIlrAdae4C9qJrxvymJUBWsx7F4OjD+jMosb0xs/aMaxmUHWVpBO2NEWfjNjMpRxSL+eGGexU8oidNPqEmwIEwJDnIrcHcrdmmTcnwrh4IAK6tdQbbFI9vwhPTTtLSqlqyKxKzuln4R8pHBNIUyj0oE0YfbpHNGmIY2a+AbOAY6/irmWRGMNKiGIRMiuklqShAUoJB4Mgo5xzaJ/UNF8T+c33PheWzYxzcC3KE6VS95Nhn1LJy5WeyJNYvuvI2KyFY9hNsjZ25jYeRH70c4aZN5DxWR5uM9530mXRkDSyytfz2UK7dxbSHeRGMHJho33fo5aeZMK9TDjKTppVxPwx3yD40nthAATOu1gxA3s/AsCswyfGfyQrlOn7GZXCQ/l+AAQBA8msXRzn/NAAAAABJRU5ErkJggg==';
	}

	defaultFont = GM_getValue('defaultFont', defaultFont);
	GM_registerMenuCommand((showCustomLogo ? 'Hide' : 'Show') + ' Custom Logo', switchLogo);
	GM_registerMenuCommand((showAds ? 'Hide' : 'Show') + ' Advertisements', switchAds);
	GM_registerMenuCommand((showBookmarks ? 'Hide' : 'Show') + ' Bookmarks', switchBookmarks);
	GM_registerMenuCommand('Change Font (currently: '+defaultFont+')', changeDefaultFont);
	if( showCustomLogo ) { GM_registerMenuCommand('Change Custom Logo URL', getCustomURL); }
	GM_registerMenuCommand('Post GSkin Bug', postBug);
}
function changeDefaultFont() {
	defaultFont = prompt('Enter Font-Family Name ex. Arial, Verdana, Tahoma etc', defaultFont);
	GM_setValue('defaultFont', defaultFont );
	window.location.href = window.location.href; //refresh page
}
function postBug() {
	emailTo = 'artrulesmyworld@gmail.com';
	emailCC = 'rao.art@gmail.com';
	emailSubject = 'GSkin Bug';
	emailBody = '';
	mailLink = "https://mail.google.com/mail?view=cm&tf=0" + 
		(emailTo ? ("&to=" + emailTo) : "") + 
		(emailCC ? ("&cc=" + emailCC) : "") +
		(emailSubject ? ("&su=" + emailSubject) : "") +
		(emailBody ? ("&body=" + emailBody) : "");
	window.open(mailLink);
}
function switchBookmarks(){
	GM_setValue('showBookmarks', showBookmarks ? 0 : 1 );
	window.location.href = window.location.href; //refresh page
}
function switchLogo(){
	GM_setValue('showCustomLogo', showCustomLogo ? 0 : 1 );
	window.location.href = window.location.href; //refresh page
}
function switchAds(){
	GM_setValue('showAds', showAds ? 0 : 1 );
	window.location.href = window.location.href; //refresh page
}
function getCustomURL() {
	url = prompt('Custom Logo Image URL',customLogoURL);
	GM_setValue('customLogoURL', url);
	window.location.href = window.location.href; //refresh page
}
//************************preferences ends here ************************************

var header = document.getElementsByTagName('head');
var node = document.createElement('style');
node.type = 'text/css';
node.innerHTML = 'div div,div table,div td,span,input,button,select,option{font-family:'+defaultFont+' !important;font-size:12px !important}.p{margin-top:5px;color:#aaa;font-weight:400}.q{color:#888 !important}.ct{color:#369}.ct:hover{color:#FFF}a,a:link,a:active,a:visited,span.lk,.lk,.lkw,.l,.setl,span.lk#prf_g{text-decoration:none !important;color:#369 !important}a:hover,span.lk:hover,div.cs:hover,span.lkw:hover,.l:hover,.setl:hover,span.lk#prf_g:hover{color:red !important;text-decoration:none !important}#ds_trash{color:#c00;background:transparent url(data:image/gif;base64,R0lGODlhDQANAOeGAGNk/Tw9Pbm5ufj4+PD5/4iIiLHT7JmamgEB/2VlZXCIns2rajg4/ezs7ODz/ycn/dfo9W+U9M3NzW1rV+yZjfvPf7OziE1JPbTE0Ec5JUlJ/Ftb+kJDQ3V4e0tjl+rq8oijt7OzsxcX/iJUkiA6cKysrHp6+5MWCHBw/NHR0dTU1JKv73+YqyYmJd7e3lpaWszMmZSvx4aG/+Hh4cff8ZGRfNzc89jY2FNTRlRU/cDAwJKS96KioqfI4tisBAQzl/P0/9vb/7a2tsUhC/jNC6O90glI1TpCSO/e3pJ1BPb29u94Z+Pj8qnMlxkZGdPT81R39LOOAghcDOvr/8zM86Sje9LS/6Oj/412S8TE9EzMU+bm5t3w/IuL/6Oj9rOz9eTk/wAAAG+fQPz8/L2eZlplbMjY44uL97u79Jqa9sXFxbu7/6qq//LOytHj7/r6+lSKNaqPXJub/zJu7qur9ZOT/w2YFMvL/8LC//n5/8C/kLOz/+74/4OD+Nfmz9ra2mJfTXBfP8LWroaFaPHz3J89Ov///0xbbUZT9/TJe7aSje/v71BSVAVN6/jo5jI0Na7Q6j4//O/v8mOC8Z+HWOG7dGBvenZ2X3+b8ZCQkK56dvv7/4qVncPU36e1vm5ubn2JlIZua8jIln+AgDExLvz78iAhI/Ly8u7v/zAw/f7+/SgrLJWJeR8g/pi9he7Eee3x9tzc3JunsUpLS+Xs+NTf6efn8vf8/6C+7cvh8tPDuRkdIA4O/pCPbhEREsjIyF9TPzx5KS0tLf7+/goKC/3+//Pz8+f1/5GMZ/7+/wM+wX7Xgs7f695FMLfM9OPj425ZCB5b3urq6fHx8fn5+fr6+U5e9oFRSv39/fricrBgVfnui+e7tzpop+rRasC4qqS+9FR5rKe6p8mnpf308rK3wtzPnefo55m9+LScPfz2Vr3N2S68Nv36+ffuseTW0tvZ1yAdHJuMhv7++cLP4PbdWqenp9PMzNfSzd7k7c3ev3abgVM3VDq9QfP387GelywAAAAADQANAAAISwANCSxAsGABgQgNHUy4UKHBhwYTShwIseLAZCGmhZCWaUtDhcMybuz4sUBIjRw9MsQmMmVJQy1JMlQVUyVCk9imNZB27lnJigsDAgA7) right no-repeat !important;padding-right:20px !important}span.lk#ds_spam{color:#999}.an td b.lk{color:Red !important}span.lk#refresh{text-decoration:none;font-style:normal}#nb_0{font-size:12px}#nb_0 table td.s{padding-top:2px;padding-bottom:2px;font-size:12px;color:#148;font-weight:700}input,button,textarea,select{padding:3px !important}' + (showCustomLogo ? 'div.h#ds_inbox{background:url('+customLogoURL+') no-repeat top left !important;width:200px !important;height:59px !important}' : '') + 'table.tlc tr.ur{color:#000 !important;background:#fff url(data:image/gif;base64,R0lGODlhAQA8ANUAAMvi/vT5/9zr/tPm/sri/uHu/+Pv/+fy/8nh/vz9/+Xw/+rz/9Xo/tTn/vj7/83j/vL4/9rq/tHl/vf6/97t//7///3+/+71//X5/+v0/8bf/u/2//r8/8/k/tjp/sjg/v///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAABADwAAAYnQM+gQ/hoPgjAoyNpMDwRAaVgUBwWmcsGEsBMHJyEpQIqm8/o9DkIADs=) repeat-x top !important}table.tlc tr.ur td{border:none !important;border-bottom:1px solid #eee !important}table.tlc tr.rr td{background-color:transparent !important;border:none !important;border-bottom:1px solid #eee !important;line-height:1em;height:15px}.rr,.ur{color:#000 !important;background-color:transparent !important}div#nav{margin-top:5px;width:180px !important}#tamu{color:#000;height:24px;line-height:1.5em;font-weight:700;border:1px solid red !important}span:hover,.mxh{text-decoration:none !important}.urlc,.gr,.ct,.cs,.mxh{color:#148;text-decoration:none}.urlc:hover,.gr:hover,.mxh:hover,.cs:hover,span.l:hover,span.setl:hover{color:red !important;text-decoration:none}div.tbc,div.fs,div.tbcs,div.thc,div#co{background:transparent !important;border:none !important}div#co{margin-left:180px !important;padding-top:20px !important;padding-bottom:20px !important}div.tbc,div.fs,div.tbcs{margin-left:20px !important;margin-right:20px !important}#fi table,table .ctb,.ctb,.cbotn,.ctopn,.stln,cb,#compose_form .cbn2 .stln,.strn,.ctln,.ctrn,.cbtln,.cbtrn,.cbln,.cbrn,.cbrn2,.cbln2,td.cbrn,td.cbrn2,.rct,table .rct tbody tr td,.mb{background-color:transparent !important;background-image:none !important;padding:0 !important}#fi{background-color:#fff;padding:5px !important}#msgs,#fic{width:90% !important;padding:0 !important}form#compose_form,.cg table{background:transparent !important;padding:4px 0 0 !important}.msg{background:transparent url(data:image/gif;base64,R0lGODlhAQA8AMQAAPf6//P4//b6//z9//n8//H3/+71//v9//X5/+z1//j7//r8//D3/+31//L4//7//+z0//3+//T5/+/2/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAABADwAAAUfoMNMTQJBjTGtTOEEUowIgKIQy3IMUf88lKBwSCwSQwA7) repeat-x top !important;border:1px solid #eee !important;width:100% !important;padding:0 5px 2px !important}.cbln2 div table{background:transparent !important;width:100%}.msg .msg{border:none !important;width:auto !important;padding:0 !important}div.ma{border:none !important;background-color:transparent !important}div.mb{padding-top:10px !important;background-image:none !important}.msg div,.msg td{background-image:none !important}tr.mht td{visibility:hidden !important}.tbb{background-color:#eee !important;border:1px solid #ccc !important}.ob{background-color:#fff !important;border:1px solid #eee !important}.hb{background-color:#ccc !important;border:1px solid #aaa !important}iframe.ef{border:1px solid #aaa !important;background:#fff !important;margin:0 !important;padding:0 !important}iframe.ef>body{background:#fff !important;margin:0 !important}img.thi,img.pc{border:1px solid #eee !important;padding:5px}body{background:#fff url(data:image/gif;base64,R0lGODlhAQA8AMQAAPf6//P4//b6//z9//n8//H3/+71//v9//X5/+z1//j7//r8//D3/+31//L4//7//+z0//3+//T5/+/2/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAABADwAAAUfoMNMTQJBjTGtTOEEUowIgKIQy3IMUf88lKBwSCwSQwA7) no-repeat top left !important;/*border-bottom:2px solid #e2efff !important;*/padding-bottom:20px !important;margin:20px !important}#hc_compose{background:transparent}.nm,td.nm{background-color:#FFE4B5 !important;border:0 !important}.nb{background:transparent url(data:image/gif;base64,R0lGODlhAQA8ANUAAMvi/vT5/9zr/tPm/sri/uHu/+Pv/+fy/8nh/vz9/+Xw/+rz/9Xo/tTn/vj7/83j/vL4/9rq/tHl/vf6/97t//7///3+/+71//X5/+v0/8bf/u/2//r8/8/k/tjp/sjg/v///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAABADwAAAYnQM+gQ/hoPgjAoyNpMDwRAaVgUBwWmcsGEsBMHJyEpQIqm8/o9DkIADs=) repeat-x top !important;border:1px solid #eee}div#pop{background:#fff url(data:image/gif;base64,R0lGODlhAQBkANUAAOLv/+r0//n8//D3/9zs/93s/+z0//v9//T5/9zr/tvr/t/t/9rq/tjp/vP4//r8/+rz//L4//f6/+Tw/9nq/u71//b6//X5/+jy/97t/+31/+Du//P5/+nz/+Pv/+v0/+fy/+Xw/+Xx//H3/+bx//z9/+/2//j7/+Hu//7///3+/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAABAGQAAAZPwEaDQmEwFIpEgkAoFDKZxWKDqqIAAM9kEhKRviAMpgOBBAIfg0FTqZjeg8EoEnE4OAjE5WKxSCQngScCAg8PBwcliiqMjCmPKSuSk5SSQQA7) repeat-x !important;border:1px solid #eee !important}div#pop table,div#pop table td{background-color:transparent !important;border:none !important}div.bz_mestri_over{background-color:#ccc !important}form#s.s{margin-right:20px !important}div.mxf,div.mxs{background-color:#e2efff !important}div#mt2{background:#fff url(data:image/gif;base64,R0lGODlhAQBkANUAAOLv/+r0//n8//D3/9zs/93s/+z0//v9//T5/9zr/tvr/t/t/9rq/tjp/vP4//r8/+rz//L4//f6/+Tw/9nq/u71//b6//X5/+jy/97t/+31/+Du//P5/+nz/+Pv/+v0/+fy/+Xw/+Xx//H3/+bx//z9/+/2//j7/+Hu//7///3+/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAABAGQAAAZPwEaDQmEwFIpEgkAoFDKZxWKDqqIAAM9kEhKRviAMpgOBBAIfg0FTqZjeg8EoEnE4OAjE5WKxSCQngScCAg8PBwcliiqMjCmPKSuSk5SSQQA7) repeat-x !important;border:1px solid #e2efff !important;border-top:none !important;margin-bottom:10px !important}div#lo{background-color:#ccc !important;text-transform:uppercase !important}.ctfd{border:1px solid #eee !important}.clc td{background-color:transparent !important;border-bottom:1px solid #eee !important}.pr{background:#fff url(data:image/gif;base64,R0lGODlhAQBkANUAAOLv/+r0//n8//D3/9zs/93s/+z0//v9//T5/9zr/tvr/t/t/9rq/tjp/vP4//r8/+rz//L4//f6/+Tw/9nq/u71//b6//X5/+jy/97t/+31/+Du//P5/+nz/+Pv/+v0/+fy/+Xw/+Xx//H3/+bx//z9/+/2//j7/+Hu//7///3+/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAABAGQAAAZPwEaDQmEwFIpEgkAoFDKZxWKDqqIAAM9kEhKRviAMpgOBBAIfg0FTqZjeg8EoEnE4OAjE5WKxSCQngScCAg8PBwcliiqMjCmPKSuSk5SSQQA7) repeat-x !important}.pe td.pr{border-bottom:1px solid #000 !important}div#g,div#g div,div#a,div#a div,div#l,div#l div,div#c,div#c div,div#f,div#f div,div#u,div#d,div#d div{background-color:#fff !important;border:1px solid #e2efff !important;border-top:none !important}div#u table.pct{background-color:#fff !important;border:none !important}.psm{background-color:#fff !important;border:1px solid #e2efff !important;border-bottom:none !important}form#compose_form{margin-left:80px !important;padding:5px !important}.msg form#compose_form{margin-left:0 !important;width:98% !important}form#compose_form .ctb{width:75% !important}div.dvm{background:#fff !important;border:1px solid #eee}span.spo:hover{background-color:#eee !important;color:#000 !important}div#co,form#compose_form{background:#fff url(data:image/gif;base64,R0lGODlhAQBkANUAAOLv/+r0//n8//D3/9zs/93s/+z0//v9//T5/9zr/tvr/t/t/9rq/tjp/vP4//r8/+rz//L4//f6/+Tw/9nq/u71//b6//X5/+jy/97t/+31/+Du//P5/+nz/+Pv/+v0/+fy/+Xw/+Xx//H3/+bx//z9/+/2//j7/+Hu//7///3+/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAABAGQAAAZPwEaDQmEwFIpEgkAoFDKZxWKDqqIAAM9kEhKRviAMpgOBBAIfg0FTqZjeg8EoEnE4OAjE5WKxSCQngScCAg8PBwcliiqMjCmPKSuSk5SSQQA7) repeat-x !important;border:1px solid #e2efff !important}.an,.an td,.cbln2 div table td,.cg td,.cg div,.cg,div.cd,div.cdc,td.cdr,table.nc,div#nvq,div#nb_2,div#nav,div.s,div#aca,div#bzmesmnu,table#nt_2,div#mt2 div,div#mt2 table,div#mt2 div table tbody tr td,div#mt1,div#mt2,div.mxf,div#mt2 div,div.mxs,form#as_f,div#co,div#co div,div#co table td,div.clfd,.clc,.pr div,.pr td,.pum,div.ci,div.smb,td.ci,span.spo{background-color:transparent !important}div.nl,.cg{background:transparent !important}#nb_0 img,'+ (showCustomLogo ? 'div.h#ds_inbox img,' : '') + '#rc{display:none}table.tlc tr.ur:hover,table.tlc tr.rr:hover,.bz_pma:hover,div.bz_rr:hover,div#bzstatmenutri,.tbo{background-color:#eee !important}div#ft,#il,input.iv,/*hide the compose mail input box*/b .rnd,b .rnd1,b .rnd2,/*hide rounded corners*/div#nvl > table,div#nvq > table,div#nvi > table,div#tcb > table,div#tct > table,div#nds .rnd,div#nds .rnd2,div#nb_1 img,div#nb_2 td .s h img,.ctopn,.ctrn,.ctln,,#mm table,#rh .rhh,td.s img,.bz_meca,b .rnd,b .rnd1l,b .rnd2l,.rnd1r,.rnd2r{display:none !important}.ctb,.msg form#compose_form .ctb{width:100% !important}div.s,div.clfd,.pcl,.pfs,.pf,.pch,.pfs div{border:none !important}form#compose_form table,form#compose_form table div{padding:2px !important}b.rnd1l,b.rnd2l,b.rnd1,b.rnd2,.bookmarks,.rhh,#rp{display:none !important}#fb,#ra{'+(showAds ? '': 'display:none !important')+'}#fbm{background:transparent !important}#bzmesmnu{background:#fff !important}.msg{width:100% !important;margin:0 !important}#fi{width:100% !important}#fic{width:90% !important;margin:0 !important}#rh{float:right !important;width:100px !important}.mhc{width:98% !important;overflow:auto}.bookmarks{background:transparent !important;font-size:11px !important;display:'+(showBookmarks ? 'block' : 'none')+ '!important}div#bzmesmnu,.bz_pm{background-color:#fff!important}';
if(header)header[0].appendChild(node);