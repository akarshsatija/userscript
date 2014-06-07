// ==UserScript==
// @name			Gamla Travian Smilies
// @description		Ger tillbaka de gamla smilies för det svenska travianforumet
// @include			http://forum.travian.se/*
// @homepage		http://jacce.dyndns.org/smilies/
// @copyright		Jacob
// @version			1.0
// @license			GPL 3.0 http://www.gnu.org/licenses/gpl-3.0.html
// ==/UserScript==

var smilies_amount = 11; // Number of smilies to replace
var smilies = new Array (); // The different file names for the smilies
smilies[0] = 'redface';
smilies[1] = 'smile';
smilies[2] = 'eek';
smilies[3] = 'wink';
smilies[4] = 'biggrin';
smilies[5] = 'confused';
smilies[6] = 'mad';
smilies[7] = 'rolleyes';
smilies[8] = 'cool';
smilies[9] = 'tongue';
smilies[10] = 'frown';

var replace = new Array (); // Base64 image files
replace[0] = 'data:image/gif;base64,R0lGODlhEAAQAPfEAAAAAP/T///P///M///B///Y/9vd6//G///A/+qO4UkvR71zvP/S/453f3lDh1woV6tnc3pdgigcKeJ/jX5dgI9TnItSmrRfa9nU4YBLi3ZFZdjV4/+////E/8N3qrBspsd8xioZIf+8//uUpUoiLP/R/8FykntVfrpofNDQ3mpQZKFqc9aJrNLT3007S9+j3pV8hWxVbaqatGNDVbOwvf+28/uYzP+d0cKtuX9hiP+bs9nY5VAjVsl4u3BeY/+6/3dAh/+w9L25x1YsU6OUrrlxt69jb7lvfFs9XsmvutLQ4JxQXKqgrIlYYv+q//+ctqdYZXw+XeSFk/iu+P+csT8aPaZdf+CJrW00O83L3EgfSuKayFIzS/+c2duBjnpefeeLocd6z39hfhEMEmAsbfaV3CIXIfOU4rpxvL1yvv/K/7KDjdvc6v/J+GY/bL90rfWVtsFrd8JndVwpULmrtj0wPf+by8V4xv/I/9HS3/+f//aPo+Gc42lASc3K2f+a/DkjKNTJ1tnZ5791oOeU0cGJsxkSGsVzqw4JDFM9U6hhpf+jvPCRrf+14cV3zmIzSZZalVozXdx4h/2awNzd64R9hjowO6+Djv/C/6tldohKW3FBZsWaxf/a/87N2bCuuMZ2kEA0QvqY2dvY5cWPxtN/1Fo5VYR8h/qasP/d/xoSGYJGjP+3/9OAteSKq/iw+P/D/6xouWk4b//O/3VJd9rb6Ml7zxELDxELEO2QxNqEq//Z/+SY5tva5+as3/+86VgpL2JAY3I3eLBrjOHk8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAMQALAAAAAAQABAAAAj/AIkJFLiDDowGTPIMXEis1wooKECZsBJlRguGgS7sYTTJjo1crQ7NETJwlBwqfRBtqRGE0C0uPR6kEHhkBCAXDDohEDGAgykJiiIRwyAJQp0CYr6UEEDhxA8FtIRlSTIBVRsVACyl2hUKQDAnd1YRWSNl0S9fnAoEmCWAFC89pSpEuOTlSSMBAdTgOUAAE6s/tizkwBFHB4tCAQYc6EAAFogFjoDI2LAEjCsAiV68msIHCQA0scgoIdbECBxdIXCpMjTGTJEwDtwIrIUl05UbXUSVOZMgTQYeggZ6AqZp2CAPbz5AkqXFD0MDPkg80rBpSJUYlBgONPCp0ikabBgGAQQAOw==';
replace[1] = 'data:image/gif;base64,R0lGODlhEAAQAPe+AP//rAAAAP//sP//p///kv//r///pv//tf//rf//q///f+jUc///lsCqMv//rsm4cNi/N/b4fbOxpyEjHP//dNvc5Nze6mNYF9ze60lKMU5ONpCPhP//i8+8a3JnQdXW3K+rn/TdVP//qf/1kNPAdH1zR//9cdze7P/0k/3oaf//suvUgVZZOqWfd0dHMP/rWMLEYGRkP4l8Qf3mWYh6HJGLaw4MEba2t52YdM+8ddTV4I2GZqKSNfnid42PTfHgcnBxOo2AP3xtN//tiNnZf+3XhHJlF2JWJrWkW/DZZq6eXnBzSObbgVhOH9LS2P//cMCtSHlwQcK/rs+7Tv/+a8q2QcWySP//oJKEUdrb4ca5cd7ekd3GWl9hNLmlL/z7kQYGDG5hJ9HS1///g/jgT///l///pP//qv//seHNgP//isy0Ndzd5///laaXX5SUXLGhWdTV3///cv/0id3e5f//pX54XW9kOta+RYF2QP//dmteK31uNf//hPr7mXBkL//7fG9xSMLCxd3ddJOSYMzIq9PU3f/yYoB8XP/ye97e4///jreoU8G1dP//gLSwpdDR1s+8Z///ev//ebSlWaOVXX5xRdvc5vbeVpeITv//tMWyWJGCTbq6u5COg9nX0O7Yet3f6/nfYNfCdd/GQ9PUhXtuKd3d3f//mTQ2I7qpbdTNqpKCLuPLWHJlJe3Ycf//uOfQff/1hd/KZ8m2WTIzIiYlHunPQJ+TR+LhmJiKVvjvgFBQMoqCTeHk8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAL4ALAAAAAAQABAAAAj/AH0JFFhBSgscEuIMXOiLDqMGeFpxgcIqig6Gn9aEMDFJEqBEPTa5EjRQEYRDCiIQWNlml6xIYQwJnPJCgY8ALgaI0BCg1xw4d3ydukVlEa8AYBCgsREgA6pRfJysIvOEw5c3WzQdyEXID4NYmUBomUFBzZUCAhAUOAALQJkVbnY0wqRnEBEDBs4ASCCgFJMilWoUIiUHhi0AZuoMSKBiAok0nB5l8SKqT5cYAxwIAMDCAwpVQj74wlUlxRggqZYEqmVpRA4sJQSyoWEliaMflJCAGvJA155LA8UY4UFr1qsFHZTkOQKJ4QlEF0wFkfGniZ1QDAdiuLHBUycLDAMCADs=';
replace[2] = 'data:image/gif;base64,R0lGODlhEAAQAPe6AP///wAAANX//8///8vLzAACEuTk5evs9gcKDxkZHf99AAQIDTJFSDJHSgESPWV/vWeoxSU4OypGSr28xQcPFLCwt7y8xDwwMAoTGPLy/L29xuXl5nKv/7jCz0xMU+BYB/Pz/evr9ejq9AMGCC9TVP9+ALv//9fa4zRGSUFv6lRKTrf//wAWLcnJynOxz+X//1xwmTNXWOn//z88O4HF/4/c//Hu7LfB06X//3snAKX7/8DAwExCRZCRkOzs9miEygYGCaW2w5Dd/33G+tLS03N1dThgblmM/32Nnm6z0Yva+ydFa0s8OzRMT42hrixVwnRpa8nDw56s0I+ZtHt7fXrB/zVNUYeFh4eaqLi4wVR/0XqMoDo2Ndvb5R9BigIGCOTe4BISEz9ephoaHgARJgUHDi1DR5zv/7e2vyJGmQ8PFBsZGrq7w6z//7y8vfr4+GZ3gCMhHtf//0JCR6P6/3ihpOPj5A0NDbPF0Sk5PryzssnHyt///1CEp22s0tre7lGA83lwcn/B/1dOQhA4fGGU/16Mt0+MomOivObo89DKyzxZYdXY5tDP0hQ/Wu7r6uHk7wAXNwICBfv39t7e6Orm5+VbBStQXjYkHpSUm0Nt4jNfbz8/Q66ur8S6uliAj5LA1cTR3SwhK2KfulJSWQUHDIiuwHoyCQAUH32rrwIBBYPH7z9ry6enp3CYmrS+ywYGCHUxCX2kp7e3wDYrKpqaoxg1Qm2l240tAA8RFPX1/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAALoALAAAAAAQABAAQAj/AHXpokSKE5tQTrB0mDDHQxeBppQY+aLKjBwZLwZIkDRiyZEHtVoBSJALQKU8EcAAGKMGQKdMukRs8mMoAIJTsRYE0AIoTSJdIGABGArgAiIItIgCAJIhyBqlKlzV4aE0zhRIh1adWWElgNcAi+jQKPTkj0BdIeA4wmTpgyhCMA6c1aXhjhsiM1ANqUKGS6MdYWbpslAEwAY7ADyRiKEHgAEDAKhkQXMFAIEWABQ1aBLF8h4APSqAssXk0ZtAFAQIwABlko1BDn7gSaKjjQk+shigSDUAhxBBKaTo+jSqhosAZQoUKBXgFgdNYs6euNSHBa4SCnJEYuWF0dyzPl4hBtlyQ+7cgAA7';
replace[3] = 'data:image/gif;base64,R0lGODlhEAAQAPfDAL3//5Hf/9v//9P//8L//8b//7r//9vd6wAAAG2m/5ns/8T//6jh493//9rd69z//8X//8f//ypNjk1ycNfc6pnr/16PoJ7z/0Ju4YPAvZjq/wsLEa///3vD6LX//9Xa6FxsdHrG6Kyxu6Dz/3Gv6ovU/6P6/5Lm/6H4/9H//xk2cTxbYUp04kJbe0NlbztYWEdmZojQ/3q7/0Jy5IDD/8r//1aJ9E9/9lOB9mF6tHS054nT1Gui/8P//3uDkXu+xXWKl1qJ7GiTlcrP4rL//y9ES5Db/3qQntHU4IXK9yEwMs7T5s7S4Z+ptnu8/1yU05Xf3pzu/2KV/zhQUdHa6Znq/2mh3WmuzKH2/0RmfGGUt1x0sB4+hjdevGCmw3a0/6y+zjproX7B/33B/3i3/7v//3OTlZmnzXSSliVNjdbc6rHz8sv//7z//5Hd/6f//5Db9SJGnKX+/2Kfu1WSrTNXfZXk/2ul/2ScvoDD+YGmuShNWcrP3CxVwtPZ51h+jlRojSFAU0+Non29/63//5Ld/8jT4Z3z/2Gb8DRhcKnR0Y/b/2iWqNve7ITI8UFmpWu01NL//yxWvBgiI6+0woGqu7b//090cR4lJ9n//zdITNfa6o3Q0FB2iH7G51qct0Rrobi9zVV1d3yEjsjO39DT4D5q43Ks/0l7m2ymvjJOkIXL/47AwmGSuMj//zRFR7f//5Hc/9jc6pKhxz1ccHKt1K3E1am4xD9epGamzyJJlSM1NaP4+oTO8J7Z2sz//6v//4LF5B4nKOHk8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAMMALAAAAAAQABAAAAj/AIcJFPjh1hEgTUoNXDiMAiM6uXSQeBKmBRKGhj51CKBBgZ1FqxClCTVQjZcAct4QscSBEJxCd3QxEZjqhIUMmdaISjEFQadYNlQNowIJBSdMijSZabABQZERpyQNsRXiEAFWr9AIGMBACK8KMmbMqtTrAqwBDwT8KlDDlQcFg3Bs0eMJCxRfbBYU6AGgzY5gYm7kAHMlyg9hkQgAMFAGwKRaZEyd8SPIEbAVMCBEWGDgBS0jUvosGfZnTgwTLnZdmqAki5sEGHAJlJUID40qSbS0ylOCB4s4mwby2YPKypcxThIE6cKFFMMDIALVAfVIggpAjRgOPCBilA9KDhgGAQQAOw==';
replace[4] = 'data:image/gif;base64,R0lGODlhEAAQAPe6AP///4eHiHd3eQAGAAFtCCB4LBYyGgA+AAA5AA1cGiQlKGWIbSaHK2OJbSB3K+fP5BtvJdbb5hZvJFJSVUyyTzmDRgA0AEX/RRwpIEP/RzTGN9Xe5RtFHD//SRc9HRdDHgBPANfg51r/bxw1Iyl9MkgxSSlpLDp+QFv/bRSIFJDQmDmyRqiRqUn/VxlwIT7/SUFGREr/WN3e3ktMT9Xh5SK8NBuvINTh40//YNfY2M7e3BnYGFRVVxWjKdTV1b3UzDz5Skb7UJnVokH5VDu5Sh7EH+TN4sbb1C3yLC3QMTP/M1RUWFvCXs7Pz4qzlubX5s7j3aO6rQVlE52bnkH/SHJqc1b/b0aOU1f/YXCpd4CBgkP/XApKFwJ2EdjN2srV2dXc5AAHAE3/aHd3etba5SyDMwAnAFj/ZwBrCebP5TXENKnHs0qzTWD/bTr0U9/X4SZ2MVn/b1j/caaNpBNxFR93Jcjb2Rt2KAAdAC6sMFH/a26iddHe4SyrOr/LzC/WP4C0kOPM4j40QPDb7xpLHBTHE+7V7yTEL9jg59LZ4Y2Ljjz/PSdpL9jf6BlwJNng6SEiJBUvGSgcKiiCNHhzepqypZu1p1hZWxOxERodHS3KMQmHDzlDO0QtRGZPZnNcct3J3zTaSkc9SEfyT0//VRYzG1lbXSUbKBR1IiOFLBl2H9vQ2pCRkUL/UcLXziv/KRNtFhsoHt3X3Uj/Sh0fIRdxJU7/XRW+EiaOMz39SuHk8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAALoALAAAAAAQABAAAAj2AHUJFNhoTZY9UcgMXKjrERtMRZJosrHpRASGR24hyUClw4tcQA4R8DOQRqFFGhgEidGiVao+f9AkEqhGSZ5SZSLZwmFgkgdcNSDo0rHjAqFRbUisIAJHzpAPobp8EfJqFiksZ1DEEWFFj5gtbno4YUIHlqo6Lhw5KFBLwh1UCbhcoSDIEItOaQJ98mTkQYk5g0RVUMEBgA8eAACw0pLYVBMAIwBBOQBKxozEAQQknpDjCR47ulJwerME85jEl2TBkCLwBohTVTBrBkBJEgI+A11ZyOQFwBRFAFbRMvODISITA2IpgIQhDKMQDAeCqbSggaUNDAMCADs=';
replace[5] = 'data:image/gif;base64,R0lGODlhEAAVAPfmALD//7j//+Xl75Lh/wAAALb///Pz/TY2O93//7f//+rq9Jzx/9ra5O/v+O/v+b++xqr//53y/9P//+bq9c3//8v//+/w+n2+/5fq/6f//9z//3GZm52dpZTl/8C/xzs7QTg4Po7a/6L4/6P6/4C2t1OD+evr9ab9//Hx+vLy/Eh9kDs7QHi+/4O1uHu8/0N6kEVwv2mg/3/O8ytTu37P8Vh1w5qaotD//7+/yDc3O9///7y8xeD//6SpsXu4uFaP96iosHWy/3u6vovV/5iYn1WE0ni46Y+5zpmkvYq1yc3P2REYGcnP3zdnfIfO/4PJ/9vb5F5zo2Cd/GCT/9f//2qbne3s9mRwe3Cq1WCZwazo6SVGVMHx8mal11OIwliIz4nCwsL//+zt+GGjwDto4GWAxXe1tYzW/3/C/4bY/4yvv3vD5cb//5DGyorY+CgqKzdbp16P/Lm5wbu7xL3//zE9QqT8/0VFSbzL14rU9kFTV3qpvkVFSsf//7z//36//3e1/6b+/9L//2ig0rr//5Xl//T0/pycpBEVG8T//+7v+K3//3/N8Jrv/3upvvLx+0+K3193sylOmonS3/Dv+ZOTmh48e56nr7rz9Hyju4nS/4/c/3i2+2mmwVFwpmNxiIbK/6ivvkZdYWSg2TRiz9n//zxUVpXk/3y7/5zJy93d5nm6/53w/6y42cnL0zZihfHx+4/a/5mZoa7//5bk/4fCwpbr/3a1/7T//zA9QkRESCpRs7TM3dT//2ey2UxMUGu42SVMpkRUZ2WZoIiIj0FRVcj//06D9CkyN5LFx9b//3CIxqX8/ygyN1+U/z09P1qK/qKxvabs7NnZ4t7g8EVVbGGVl05+tc7//7v//53x/1J/5sr//2uBi5Sjx3m74mWGsuXl7tbg6/Dw+pam0YLG//X1/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAOYALAAAAAAQABUAQAj/AM2Zg7JClwABOe4ICHeAjyqB5gx0kmEnWwAAi2ZBiCUFDixzFlR8GxCIUIAEBQBAGLAK2i4xEIE8EOhhprlDOCAmcXMiQSIqvShwq2AMgDYnzspANNegxxVh1T6FUrR06QcGAg9gNQdiWlVz4jJl6TLKCzgmSycAW0AnGYFiCEqJIiBEhAtS1NSsiQBgg546yJrlMmXtFJoSywR2azKI04U/qILE2BYsylJiDhQ844DCxC9Z4xS8qbqDiMA5lQTKsfHVyiNzhpS4MsCUUtUUe3ylsdUIQwgWkDw5gHiERgZcLbT0CSPNDKshPyKZ48WIWQA2qbhIuIGpDYAIoI6RSHOUZ0QBQQh46NCgDJufBU+m1MAzhtakJVVIgKnlYxgiLICQ0Yo50bxghCabdFDIAGeUc0scM3iz1CVbvHLNF0XAIIklSEAUEAA7';
replace[6] = 'data:image/gif;base64,R0lGODlhEAAQAPfNAAAAAA0KDxkRFUYoKQsLDw0MD+F+dRwREhUPEnMXHd+ActNVPc/L1utZYId5fv9vXelZYdvc6nIvNP9tXdvd6yERFP9zd/9zVmw9NioZGdHO29TT3/9uYv9xVNLS3oIvK/9xdtFPOdpUSnA/Odva528TFDAXG2MiJp0wIf+Ph9ZSXP5jUP9ubv9qUPpaPNnY5f+Jdf9vUdrW49hIL7Wut3dVUtxVTsNWRopWXM7I1P+Gar+lqK6coV8PFOl2YtNRWP+Gdf9pX9lUWMVtYrxcWP+Ug8pOQslcX9zR2tNiYP1gYJIrM3s6NVIKCLCSm/+hlcJqWv9jVdJZS3RMT647P9OjoTYeIfGDcwMGCudBIGcUBMBwZbRUVtvGzMhOTv9lYv97W+V9aP91Wd9RQg4NEf97fKmMlpZsav93bv+RcvtTNRAOEf+HiZ05Qv9kY/+FgIovKv+gjv9nXrcwF8VYRv+aeVUNEOtZW/9eQP9mXJgxO/+jk5Q8Q4AcCOWCdsM3G6I7RP94YNdTTv94a6o/QYonM+5xZf+RheGAdPaDd9PO2v+emuNtbs9qWZdDNcqjpJ9xbP93b7E6KFUSBetGJf9rcIYwK48kGnkjKXEWH6tBRcG4wp84Q97Z5NdxXO9bYthFLv9cPms4OHA5O2QZG/+Mhv92d4VQVtzd693W4chNWP+Cb/+Yf0sKDP+fkoh4fXMgFch0ZrBFS8/K1j8mIhkSFUYqJ69XTrEuFtJLNtve6/9yb+VTQP+JhbGstf9nTMRMPBMPEv+rkv9/Zv+KbOJHKv+QgMA9L8txbP90VdnU3/+FZ8pOUuHk8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAM0ALAAAAAAQABAAAAj/AJsJFChjB6QzPDwMXNisE50/oHiNOXaJyQaGXXBJEhPowQQOcuA02TQwVZYFGQ74gAHEUAUThEpoEBgiFJg6UMhcSbSGyBs3VE40Q0IpxjJPGGwp8DNAVBIWQhLMqqImWRpaALDEcUUAgJUyDZaYGYLnArEwI2LteYJsFCMLnwCd2uKiwzBWwoogMlBqEZtKEDjheFSshY5GCAIIqFUg2BEQKgo5UTbn1w0At4wdStGLCwBZqjIpauZoBjApqwahibTLFDM+eiQIJNEn14ooeYJ8UXLnR5seLwYy0ILCiAgbgrxowmQnB0NdNSbBsvSBVKspqBgOpODLwSsaERgGAQQAOw==';
replace[7] = 'data:image/gif;base64,R0lGODlhEAAQAPe6AAAAAP///8b//+vr9a3//8P//7T//8X//9f//3Cr/4jR/4CWoqP5/2GGiBk2cZ7x/4SsvYXL/Wuj/1yJiVCNoleeus///yU1QZjW1URsojBcw6T//32++l52sorT/1mI7InR/0Jx5RgjKWq42XGuxsD//4F+f9vd6Xesw5ru/9ve7pjp/3yPm1iGiOHl75COjWacnd/g6Udwk1lcXYWpu9ba6Z+s0EZ0iVdRVbPF0pfIypmmyyhNWVdqjnKv/3Gt+Gmg/5COjpfo/9TX5uXn84OLlri6wrK/yaixu0l04mms7Wmh3YWLlIK5vCZRkqn//87Cw2N7t9/l8Hyrqz9dpNfZ4ytNjp3P0Yjc9oTO8DdVmXxucM3FxmJjY2lbWFR+lgQFBh8sNyxMWgYGCJnS1ND//+Tn8VqMjGFwc+fp8ytVwV9udjRhcHrG6ZPBwyM8XqX8/4TI8B4+hnqysWGTmoR3dna360p7m+fq9Ttu0yFAU1+d+Fl/j7q+yUd69lFqdhYdHqD3/xsJCZfn/x4qQHa/6dz//3S7vihVqVSF+2GUxUNu5DVIaaH5/3GwuNH//5zw/0Jnpl1XW32//2+7211rcGqvzB8vNlV+mLTL2jNYftTf7GS0005gZXe2/3/H50mCvE9KTJLe/4jS/1hrbqX9/yIwT2Ogu/bz816U/+Dh6+Tf4CJGm7r//y1FQzdeu+zs9X23tnKx7Sg6PMTI2E5vl2ScvmSryFiHzuTo8/X1/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAALoALAAAAAAQABAAQAj+AHUJFGjmyAIWSGIMFEjjUwoCAhA8ElBAwIEDs0yliqKLxAgTqACEqoRmFZggL/JoEZiGjS0OICAxeLBCgYQkrIgM3FRBTJgvTxrJIPTGCS2BmdoQOLOFiyQ3OnBAqXNjVIgdLijEEWJgAqApGOa4GqMogRoVAwes0aMpQyQrDnoMWCgQD4pbhezIUgKqlqqFuTj98QIAAIxYggozQnRClxRKWGYEmEyq0+QAXfZoqAEhS6ASTRpcMYSATItDGyYl6pDDkig4BlpZKENRgCMAuPzY0MXnVIRBpehcEnEBkwdPi6gMrMLjzpIfPhIA+fBKzhC6AmEZYVKkz9yFAQEAOw==';
replace[8] = 'data:image/gif;base64,R0lGODlhEAAQAPemAP///wAAAOH//+b//9ze7Pf//6TO/8v+/8///+7//9r//22N94iQnKSlrkVKTdre7GRlaIuaptP//5G/z9TV1qXN/9fc6df///j//6zX/5K5/Nre65S81LLo98f7/2doa9X//9nc7C46XML6/5vK4Hmb/7Hc/217nISuumqGv/D//3yYobK3wl5606epq22Q8aez12mKuUFDRU9rcElLTlRqcrW7yL/w/67Z/7/3/3eZssHS4M3R4pm+8H+e0qrBztHW6H2OxUFTfqLS4nKNkEFSYWCAh7nq/LHe/6qzv194gauytKK7ucz7/6HK8Nrg7tHZ5mB2uFh2wFl1lpvC/wYEBxwdIrDe/w4OEk5qpqOkr9fb69zf7eX//0NcnvH//0hZV7Xm/9jd6n2e/rvs/6fR+ICSyJ7H/190j2Rma4m0xHeVqjVERT5MTtb7+6TQ+KrR07vx/cLc3JKirODm9Eljs5GuvM7T377D0wIBBTxTiPX//3OR9sn7/5+gog4OE0JLT1V02WR+l9LW4rGws2uIuTlDRGyM97zJ1nJ+hLbBzYmQkrXo+F9fY6Ov0vz//z5BRrLf/9LW6Nve7DM9R6zF00ZdaneZ/Pr//09opajW9MX6/4y15Yyv/5W/0dLV46jc7IiQmh8nKiEiJ1FlaNL//+Hk8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAKYALAAAAAAQABAAAAjwAE0JFChG0ZwISQYNXGjqgR01JDS94RQDzSeGUCZ0OFAKBIJNYTRkwTOQDigBmACoVJngwhUpW0xpqaHEkAMaMiCkgQSoDSUhIho8GQEngNEAjT4cDeDjBZAdOdwEyIMlgB8XAf5UCVDmkqNKcQosMmpF5SijRPqMCfKDkQIAFAitBLBEjgAkJcwgGnJgwNyVAkQZOATDAoojErqowFBgz6MvYASdCSTJ1ApPZBAoEDAgARM2a0wsiCJwgxEOkW54aEKqiJMMfOqEGHhnho4eFQxQwdGphRceDAkksjSlUIpMek5wYTiQAItQDGxMYhgQADs=';
replace[9] = 'data:image/gif;base64,R0lGODlhEAAQAPerAP/////f///n///A/+zr9WR9hLQBAP/3/zxAQ//4/+rp8+Hg6uLh6f/u/5hty+rn8XJdc//s///w//y9/+EZArCgsP/l/97a6Ojl76+C5NScq//c/+vl7//W/2RDev/R/9uep7OE5HBqc8S/yf/l9vq8/9zY5uys1OTm5P/L1+Di4WJiY2ZoaY+RkN3a47yvzKWSl3NRgFk8Z25Ki0lMUPz9/HlteO6x/9eg/+ew5//f7ZCFk3dQfaaBh/9wZv/8/45jZ6Bzzv8KAOW//9aj8ppvyezo8tCPmciMkt+bo8WT9tOrtJ92y9CTvOajuMzByNifxsGQxv/g/8Ktw5Nskf/g+Y1olYFtiv8MAOvp8peOl//5/+Xo5ZtrjpePlunn84BYpvr7+mdkbPO1//j4+I6Kj/C0/8C8xP/E1mVFT7yzu+zs9YuBjnpfdLaoxd6krEFBRf/P4LiJ1ve+/0AzP4Jzd//y/+ujrPaxu/3o+v/CzmZNZuzC//Gx0q+usK6Ynubo5ZF5p+On6cvH0z5AQ4FYq2R9godhp/98jtGa8f6////a/39hmPCrtHNNheIdCM2ps/y64+Lf7f/G59fFznZRVHB1dYBbc+bI5UlOUd/d6ezs9v95i//O/29RhKx8jqx+tpd/rLQAAP9nX//F0K+wsOPW5NWe9+Xc5eLK1MOWnfX1/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAKsALAAAAAAQABAAQAjuAFcJFPjgyR8YahgMFAiJVAM4K8gAmAggDAs6JTKEWvVGRwVLgPzUAFCKiw1QiTwJVABEQ6QPixBx6jTnFJMZXwaiShLHzhYBAQR0EMRjkMBUeiRQXArgR4AJQdxgQILGwsRHogxQAHBggJJCkgYSqJPmEhUrMWRc2bRQYBZVR5z0OdGkS5sFC43cITFFRJmJOyBEMeNI0yoOeBKIUcEUgKk9isBcWJIiD4rGEzGNCRGIUqMqAFoQomGoQCYEbKTccPBiVQ8QkzYA8CEEy6gIA3AUYTTQRaVPUHLwGUJEziEPJtoKXHPGi5YRBNoGBAA7';
replace[10] = 'data:image/gif;base64,R0lGODlhEAAQAPfIAAAAANm4/4Jv/35q/+LA/6aN/6KK/4Vx/9+9/4Vw/7KY/7uf/1RIrnVg9s6u/4Ju/0Y4u62S/zkxSDozS9ze7R8dN5R+/496/494/2NT/7ue/xQTHJiB/9Gw/2tjlRMSGYFu/5V//8Kl/cKl/4SCpy8ir3Rj/5R9/4lz/11M2HBm4Gxb/4Bt9nBb+KOL5OPB/0M7XbKW/1xN/1ZI27GX/1lI/52E/1RG31JC/ycjPObD/9na75+H/3tp//HM/5J9/25b+9fY7Ni3/2hav0c3rdW1/wkKDrue4dTT8dfY8dPV5WNP5ox39sCi/6iO/3hq3T4v0Dcp3aaMzry82bSt7peB/+vG/2pi3rOt5TgxTp+I/zwvkoF7uu7J/z8yy0w98pB4/0Ex95CD4tDR7Y960od/wWxW7KKJ/6uR/0c6zrKyx4t2/86v/4l1qrOY/8ut/9ze7GVU/zMmx7Wa/6aO4Ni2/w8QGnFgshMSHYaDpW5eoK6T/+PA/6GI5Dcqi0U7V1VJcqCG/8+w/6qRylBF3YVu/3Zj9lJB3trb7cvK7vzW/4dy+Hpk+XBfmVtOcrec4eC+/3Ng/z82VUw6/0U8adXW7Miq/wsNEEU8Vi4pQ83N4hcWH8qt/5yF/9LU5bug/5iC/7Ct2KiP+Hxo/6Cc6NjZ7puX48zN6ric5rSzzgwMEn1n/3lh/qqR/6akysvL5xYVH6SJ/1RIsNvd7Yp1/9ze7od0r52F9qmP+p2G/492/62T/7CV/9DR6DozZYtw/8Sl/1ZH/z4u3AwME9q4/46C5qOL1mRcteHk8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAEAAMgALAAAAAAQABAAAAj/AJEJFBgkVBkurjwNXIhsxxMzjBI8AHJIlhKGiVoE0uKkVYFcFwpBmTIwCasIlIzQAdakzyVfKIT1EsgiVg5ML3S8sUSsA4wKkdIgQ/LrjgQRf9rwQWBLEq4sDCadoqJLVIAJAAAQIJA1k4ZFNUwVO8HLASpHg3x0kQLIBQ0Mca6IAYPmEyRFAY48EmSFkwFaGVRgWXVmhLENqjbBGvaBTAEQOEhVWmJBAZ5GdYQUYaPHThUTYcYgG9IA1K0Fc9zE2LWHyYBghAQiImLoBwcbPDqFWDNARpRSAzVtSdFDwAEBo1Z8kfOKIQUPfiDMuOGlxLFaDAfCUZOHRKpZDAMCADs=';

var images = document.getElementsByTagName('img');
for (var i = 0; i < images.length; i++)
{
	for (var j = 0; j < smilies_amount; j++)
	{
		if (images[i].getAttribute('src') == 'images/smilies/' + smilies[j] + '.png')
		{
			images[i].setAttribute('src', replace[j]);
			break;
		}
	}
}