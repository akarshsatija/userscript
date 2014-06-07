// ==UserScript==
// @name Gold retriever
// @version 1 Rev. 1
// @description Gold/silver jobs retriever
// @author Niluje
// @grant none
// @include http://*.the-west.*/game.php*
// ==/UserScript==

//All jobs
var jobs0 = new Array(207,253,276,19891,795,11926,4957,5690,7262,3424,8026,11741,9638,16896,11076,9655,14566,8968,16674,11283,17032,19060,18133,5378,20369,5296,23511,15707,27763,11301,28418,19196,29603,9508,31606,175,36509,10365,37361,164,37813,20035,38590,8034,40513,3937,40699,19087,43712,6863,44906,11949,228,968,1644,15374,3144,12140,3376,4057,3784,7174,3961,19334,5411,17217,5965,5331,7463,6963,7883,18058,8166,855,8169,12510,9547,4039,11084,5624,11011,11663,12476,15982,14671,11162,15196,10089,15432,4571,16772,18424,17541,2694,17811,8069,18262,14924,19528,17477,20544,14076,21470,3602,23578,19258,24570,1774,24921,5258,25491,17366,26812,1979,29148,19019,29326,8935,30288,5861,30585,165,30830,10418,30901,16669,32588,15504,33647,5568,33854,1455,35621,16181,36422,13156,37699,2000,38639,6613,38650,17199,39276,11333,41710,18495,41824,4937,42181,14692,43077,17347,43703,8842,44525,10882,45388,5641,46251,231,184,7260,2232,11993,2414,15123,3005,17709,4199,6288,4767,3426,4988,15651,5795,633,7521,6101,9411,12743,10150,10690,10270,2071,10574,19729,10820,15870,12535,8604,12834,3878,13265,10964,13736,16204,15170,7946,16403,2812,16890,17728,18527,11672,19152,6205,19229,1954,20486,14591,21745,4069,22001,18380,24171,334,24405,17551,25919,3870,27567,17928,28991,14736,29405,5502,30252,11765,30725,1199,31409,8695,31648,15908,33149,4518,34503,14066,34864,7329,35701,2013,36116,16312,36442,5619,37548,11826,37838,18405,38656,259,40046,3658,41034,6045,41701,10623,41582,15565,43735,13641,44019,7862,46047,18549,46338,2126,190,17304,587,12344,1732,9875,2797,3065,4074,914,4281,13580,4990,16813,5574,7213,7328,7717,8000,17515,9317,14697,9721,6593,10208,313,11500,11437,11381,19181,12845,3490,13696,10475,14819,13715,15318,17970,16237,487,16834,7343,17449,15176,18071,9497,19036,5317,20489,122,21763,14261,22683,3784,22772,19326,24225,1259,24851,13992,26806,279,27082,13386,27256,3307,28597,5735,29124,16468,31389,13448,31989,19858,32232,6122,33445,16892,33689,12275,34101,20235,34356,1487,35565,4692,36432,7762,36927,12642,38587,9565,40602,543,41288,5790,41250,14701,41226,19997,43683,4514,44270,15973,44496,12996,44673,9365,166,18234,411,5011,474,11152,2117,1449,2394,7739,2801,19033,4113,11500,5225,760,7110,4568,7100,8993,7044,18045,10891,11032,11593,14619,11925,2133,11836,19122,12170,9402,14026,3329,15327,19184,16091,6758,16525,14850,17768,11252,18029,2123,18159,15505,19767,8244,21205,14663,21551,755,22686,16977,22719,20065,23397,6096,25740,960,27387,2408,28814,13254,29752,9928,29888,15564,29963,4468,30375,17844,31364,7771,31681,12492,35402,2514,35408,13940,35469,17209,36354,9182,38365,11686,38630,15781,39380,2467,39411,6480,41099,8015,41518,12772,41744,1766,43111,19250,43315,16234,43735,1764,44179,4957,44386,14318,45574,7850,163,18691,2969,1323,3175,5602,4243,10634,7076,11691,8648,7266,9432,18305,12966,1606,14353,4617,14353,10729,17642,17584,19211,7748,22682,5738,23663,17143,27157,14341,27765,1083,29944,16788,32380,4580,33684,10631,36016,18857,37414,6125,39045,3297,42256,7674,43100,11728,44683,2503,46011,16620,399,3073,797,18143,1947,11108,3226,12872,3813,5703,3796,16485,4652,9790,5146,3446,7561,18465,8202,10495,8700,1442,10758,16317,12248,5585,12061,13482,12557,7942,13939,8864,14314,566,14476,14850,17206,10730,18114,17958,18876,4491,19219,14214,19797,6998,22107,4560,22028,14636,22505,298,22802,18474,24771,19049,25487,4273,27472,15532,27711,526,28313,11003,28708,7314,30729,16128,31037,2234,32655,11239,32871,5330,33758,19400,34181,14514,35891,7022,37311,9573,37385,474,37765,3326,38991,18368,39294,11949,40224,16507,40482,3049,41056,11833,41325,7513,44165,6131,44169,17887,45902,14261,46181,4515,495,6585,577,15626,780,19815,2307,9254,3078,590,4681,2953,4823,11104,4786,13860,8594,2572,8648,10910,9594,13915,10452,9946,10739,5192,12228,2896,12510,16693,12430,19176,15274,9047,15426,10977,16141,4380,16554,13695,16900,16566,17892,699,17829,7094,19121,15330,20582,3982,22225,17269,23319,421,25217,3429,25237,15126,25212,20268,26665,15412,29001,6835,29293,11350,29703,2977,30738,9642,31064,694,31132,15162,32753,20295,33769,3110,34170,7515,34423,11202,34731,15986,37913,2738,38805,4674,38837,13793,39431,17586,40209,6422,41488,19608,42076,13567,43424,8050,44370,4150,44951,91,45278,16332,46162,11946,458,9846,1919,12475,2076,2711,2386,16576,3242,19781,3980,8586,4705,12766,5720,3309,6844,7009,6883,19469,7902,13852,10236,3737,11169,18217,11817,8192,12261,12623,12502,1428,13684,9996,14032,20252,14524,17800,15650,13965,16004,7896,17122,1617,17846,12895,18353,3577,20196,1480,20661,3643,23160,18884,23857,16862,24276,857,24398,13843,26797,7639,26728,12239,26821,18946,28954,618,30409,9091,30740,4832,31470,14032,32347,18756,33454,12721,34649,6955,36034,5960,36477,3793,37024,14335,37512,897,38229,19151,39472,15799,40805,10548,41539,1287,43020,6628,43268,13118,43293,16830,45105,16865,45488,2373,45849,6685,337,19342,1030,3548,1620,6566,1550,11447,4097,474,4442,9056,5659,13240,6393,20235,7461,16139,8482,6335,9845,8769,10086,3038,10730,269,11728,14154,11791,17944,12489,10775,14313,14062,15471,236,15580,6275,16891,3389,16834,8858,17735,16868,18082,12061,18140,19610,20513,1770,20854,16782,23220,13680,23346,1217,23711,18025,23841,4319,27330,9659,27286,19862,27801,1524,28283,3242,28595,12597,28733,14079,29138,16975,29922,6299,32880,19104,33484,872,34076,8729,35281,17760,35801,10903,37114,13263,37204,4564,37392,8536,40105,528,40177,12262,40535,15925,41914,5589,44043,16836,44299,10481,45990,2897,45833,5942,522,744,1516,4171,1802,14549,1941,17199,2204,6939,4471,12112,4989,7540,5671,19375,7056,2003,8622,8980,9932,16136,10527,12360,10941,2953,12133,19961,12406,5136,12841,13409,13780,1708,14699,7441,15570,11759,16813,15447,17293,4169,17435,8549,18275,14017,18568,18572,21107,1147,21179,5270,21510,17356,22752,14588,23491,18419,26212,5321,26660,533,28404,16312,28696,9547,29908,10424,29976,19434,30610,7342,31167,14525,32479,1648,33726,210,34474,5836,34995,14214,35090,19164,36189,8306,38122,16279,38265,10666,39107,2044,40292,7463,40667,13009,41044,3784,44403,16349,44677,5332,44609,19990,45815,1290,46153,12869,580,9133,833,2868,1656,14145,1614,16584,5707,4843,5821,10796,6259,8185,6341,15661,7720,2256,7853,20045,8586,14554,9075,8073,11415,837,11696,15666,12213,11506,12909,6295,14237,13572,14838,17573,15132,1821,15805,8443,16832,20072,18274,4227,18575,7363,18808,14776,20108,17948,22070,3861,22376,18740,22636,1680,25631,5389,25669,13977,27205,11516,28480,1044,28580,17092,29871,8492,30128,5307,30714,3808,31527,13091,32020,18332,35116,4045,35277,7865,36138,14573,36899,11347,37022,16203,37362,19270,37472,1353,37413,9051,41340,13947,41722,9256,42720,12222,43107,4414,43330,15764,43638,17956,43856,233,46034,7300,704,13331,1209,5139,1051,17738,1426,1753,2988,8302,4069,18864,4879,1369,4924,11645,6942,18756,7434,1553,7900,9660,8824,13931,11141,17811,11710,5777,12478,11057,12841,873,13618,15570,14119,2283,14282,8042,15802,18092,17180,9737,17881,5102,19231,12516,19232,16473,20780,4345,21854,1958,22292,13888,22636,16152,24071,20236,24991,6337,26788,6266,26849,18012,28430,15155,30919,5765,31034,12392,31205,18841,31611,2425,32026,8554,33721,14424,35720,9558,37316,2584,37315,15551,37297,19805,37514,6738,39419,230,39300,13181,40401,17415,42136,2517,42135,11594,42776,9203,43454,5169,43559,14844,45270,3604,45077,15472,717,14114,1297,7522,3881,2450,5202,16294,6799,701,7067,14046,8923,6977,12673,18537,14678,2908,15559,16122,15971,12417,16949,5583,21576,16128,25625,1476,27076,8726,27972,12514,27975,18640,28789,1873,35131,14909,35515,6283,36193,2261,39478,12738,41871,8046,42920,2871,44861,15029,46080,19267,764,16227,1009,8742,3168,167,5550,13888,9125,486,10154,16916,10267,5503,10457,11800,14568,10287,15543,5643,16185,17787,19124,2398,21596,16852,22515,2382,27709,6241,30973,11377,31686,1811,31577,20328,35288,19897,35639,8888,36840,1034,37783,12532,40756,1759,42646,8118,43793,10954,44091,19837,730,18585,2109,573,2342,11489,2838,6721,3932,9467,3917,14973,4075,18476,5897,1333,8884,12176,9557,5626,9585,19376,10244,2826,11131,16565,11504,12675,11980,9950,12610,198,13270,19462,13617,7806,14735,10802,15114,1234,16303,5379,16273,13445,17470,19223,18328,2868,20354,5894,20516,18244,21655,2585,23435,14253,23938,3509,25676,18681,27125,852,27114,4040,27343,8118,29980,11264,30253,17066,30600,20008,31061,6386,31911,15181,34355,19784,34577,10769,34959,770,35218,15746,36517,4229,38320,5874,38188,17673,39113,8037,39499,12309,42046,3170,42648,111,42725,6099,44334,17374,44821,11375,45840,8961,45856,14980,789,7135,1436,10929,1921,15805,2749,4009,3029,19523,3841,1123,4881,6821,5589,14607,8488,347,8537,10077,8710,7619,9845,3476,9991,19753,10375,13415,10410,17375,12686,12250,13775,5472,14741,12109,16326,2192,16269,17156,17989,16133,18672,8446,18865,13185,19282,2855,20228,15312,21106,18233,23346,2642,23511,19843,23617,80,24775,4651,26987,5425,27088,15709,28847,10962,30069,2454,29956,18189,30987,5418,31247,15622,31991,1097,33904,16378,35069,8566,35235,13137,35380,1472,36690,17907,36880,6817,37238,14842,38450,2109,40610,5410,41701,3428,42318,15099,42360,19047,43104,8633,44245,11998,45355,4885,45412,18944,970,10838,3198,7712,4152,17781,5325,4340,7927,15785,9646,10545,11868,1633,11817,7492,14680,18656,15113,9455,17443,13658,17941,1517,21327,2849,25134,17168,27236,12949,28605,8745,28784,17924,30093,924,34133,6522,37181,17848,38240,12869,38925,911,40916,18231,42298,9501,44831,2786,45560,11932,969,12881,2417,912,4518,17268,5128,5220,7981,18996,9039,3221,11024,7718,11355,13897,14970,15206,15501,3257,17713,7594,18067,10582,24641,18529,25238,2899,28496,7988,29006,18537,30922,13447,32295,700,35948,3016,35920,18283,36599,13706,37597,7323,40312,11410,42419,829,43607,18409,44098,8386,783,15436,1829,215,1902,5768,2582,12722,4596,2600,4926,20039,5342,6270,5553,12305,7630,15139,8567,1269,8659,13243,8788,5443,9557,7662,11022,3174,11620,15484,11651,18822,14585,8307,14413,12983,14511,16737,15289,10490,16328,3866,18616,6705,18784,507,19065,15805,20288,2144,22384,15616,22872,18018,23683,4908,24404,19508,25295,667,26801,11058,26868,14754,27746,6926,28340,2466,29780,1428,30380,16308,32453,16755,32752,8046,33667,11354,34247,2086,36211,17559,36883,3038,37677,13434,38280,5406,38840,19475,39458,9311,40894,6957,41966,16411,42326,4227,43741,12634,44419,17873,45403,7327,46063,3335,46067,15650,1067,210,1254,13960,3191,9676,5103,18100,7289,9529,9341,1698,10023,17949,12217,10381,13542,14450,15655,17022,17235,1119,18588,9100,21030,1925,24268,14326,28440,18488,29628,213,32211,5670,32185,10801,34158,10419,34290,18201,36244,7428,37052,2221,40222,4737,43283,18271,44894,13453,46055,8389,1085,816,2606,7345,4207,19885,4357,14072,7387,10731,8546,18182,10386,7564,11429,2724,14600,9633,15946,14459,16049,19377,17725,3362,24868,4041,24979,15990,27633,17080,28967,7861,30889,11726,31435,4709,34223,13560,36357,1603,37984,16774,38475,7200,41490,8601,42356,12918,42488,16569,45523,1333,1052,6052,2548,17076,3377,13195,3994,3720,4024,7741,4815,1121,5157,15120,5759,11447,6803,5352,7757,400,8429,18530,8577,12443,9216,9098,10566,2419,11608,11882,12468,17791,13537,6837,13838,18628,15227,11476,16151,900,16911,14166,17346,4644,18137,17433,19151,9405,20138,13688,20352,2771,21629,19299,23245,5382,24764,16640,25359,2235,27559,13858,28859,3860,29149,19597,29618,1863,30099,7964,31585,17200,31786,11050,32836,6047,33879,4784,33802,15207,34276,18856,37330,10898,38017,7620,38353,1287,38869,9041,39184,16918,40282,14547,42014,1011,42427,17247,43255,9455,44088,2962,44478,19169,45019,6529,44945,13033,1168,18787,3294,1537,3436,6282,6181,14262,6951,8441,7910,1328,8569,11840,11252,16186,15059,740,15842,15560,16038,9522,19234,10557,23687,1789,25777,17826,29405,1000,29422,8459,29729,15076,31611,17798,34142,9832,35991,15462,36467,12150,39041,4045,41194,16700,41328,545,42823,7112,46040,10491,1106,20200,1493,7007,2045,13441,3304,2669,3798,15450,5144,18600,5961,2573,5991,5842,7190,15628,9330,8366,9490,1058,9686,18881,11204,6197,11223,8264,12066,10480,12975,15496,14461,15811,15359,4168,15281,12701,15949,11160,17106,7934,17635,18874,18671,9994,18726,1301,20659,937,21045,6360,21293,15772,23032,4643,24084,18992,24935,14751,27530,19359,27867,13130,28318,627,28473,6370,29489,11677,30274,1894,31911,16274,32483,6556,33438,7860,34224,17595,34734,200,34831,9118,35807,13085,38903,3535,38855,11837,38862,17855,40446,13818,41543,4467,41572,6152,42635,18385,44072,17677,44937,1728,45422,217,45514,9667,45941,11264,1621,2319,1897,18366,2400,8675,3206,11020,10150,8018,10875,14822,10763,20164,11078,1671,13535,8440,15123,16596,15971,1416,16296,10496,20465,3201,21556,14968,28404,11485,29792,3715,30541,8320,30793,17798,36436,2758,36626,6346,37011,18610,38276,15024,40262,18675,42948,14016,43828,1042,45110,8144,1898,8345,2315,2126,3452,17313,5039,12471,9717,12484,10479,1507,10323,7056,11637,18525,13708,17880,14466,1296,17227,12323,19116,5882,21884,17760,22162,2934,28143,4225,28004,17532,28320,14430,31410,9702,35246,6934,36504,19784,37996,987,37980,14227,41038,15225,41607,2298,42423,8775,42749,11010,2696,18221,3416,8980,3633,1983,5014,13036,7576,5470,8075,19407,10075,15129,11659,4413,13784,11127,15798,7389,16778,16148,17101,455,22878,4162,23192,15284,29004,15305,31192,19489,31449,4086,32141,9035,35036,3166,35267,18712,35894,12347,37369,7910,42433,14091,43447,3806,44342,7462,45204,19302);

//Chasser des dindons, Chasser des castors, Chasser des coyotes, Chasser des bisons :
var jobs1 = new Array(337,19342,1030,3548,1620,6566,1550,11447,4097,474,4442,9056,5659,13240,6393,20235,7461,16139,8482,6335,9845,8769,10086,3038,10730,269,11728,14154,11791,17944,12489,10775,14313,14062,15471,236,15580,6275,16891,3389,16834,8858,17735,16868,18082,12061,18140,19610,20513,1770,20854,16782,23220,13680,23346,1217,23711,18025,23841,4319,27330,9659,27286,19862,27801,1524,28283,3242,28595,12597,28733,14079,29138,16975,29922,6299,32880,19104,33484,872,34076,8729,35281,17760,35801,10903,37114,13263,37204,4564,37392,8536,40105,528,40177,12262,40535,15925,41914,5589,44043,16836,44299,10481,45990,2897,45833,5942);

//Chasser des loups, Chasser des grizzlys, Chasser des serpents à sonnette, Chasser des pumas :
var jobs2 = new Array(970,10838,3198,7712,4152,17781,5325,4340,7927,15785,9646,10545,11868,1633,11817,7492,14680,18656,15113,9455,17443,13658,17941,1517,21327,2849,25134,17168,27236,12949,28605,8745,28784,17924,30093,924,34133,6522,37181,17848,38240,12869,38925,911,40916,18231,42298,9501,44831,2786,45560,11932);

//Pêcher à la ligne, Rectifier une rivière, Détruire le barrage, Pêcher, Pêcher au harpon :
var jobs3 = new Array(1106,20200,1493,7007,2045,13441,3304,2669,3798,15450,5144,18600,5961,2573,5991,5842,7190,15628,9330,8366,9490,1058,9686,18881,11204,6197,11223,8264,12066,10480,12975,15496,14461,15811,15359,4168,15281,12701,15949,11160,17106,7934,17635,18874,18671,9994,18726,1301,20659,937,21045,6360,21293,15772,23032,4643,24084,18992,24935,14751,27530,19359,27867,13130,28318,627,28473,6370,29489,11677,30274,1894,31911,16274,32483,6556,33438,7860,34224,17595,34734,200,34831,9118,35807,13085,38903,3535,38855,11837,38862,17855,40446,13818,41543,4467,41572,6152,42635,18385,44072,17677,44937,1728,45422,217,45514,9667,45941,11264);

//Faire flotter du bois, Construire un pont, Ramasser des fleurs de lotus, Attraper des crabes, Transport en eau vive :
var jobs4 = new Array(1067,210,1254,13960,3191,9676,5103,18100,7289,9529,9341,1698,10023,17949,12217,10381,13542,14450,15655,17022,17235,1119,18588,9100,21030,1925,24268,14326,28440,18488,29628,213,32211,5670,32185,10801,34158,10419,34290,18201,36244,7428,37052,2221,40222,4737,43283,18271,44894,13453,46055,8389);

//Extraire des pierres, Rechercher des gemmes, Extraire du charbon, Extraire du fer :
var jobs5 = new Array(190,17304,587,12344,1732,9875,2797,3065,4074,914,4281,13580,4990,16813,5574,7213,7328,7717,8000,17515,9317,14697,9721,6593,10208,313,11500,11437,11381,19181,12845,3490,13696,10475,14819,13715,15318,17970,16237,487,16834,7343,17449,15176,18071,9497,19036,5317,20489,122,21763,14261,22683,3784,22772,19326,24225,1259,24851,13992,26806,279,27082,13386,27256,3307,28597,5735,29124,16468,31389,13448,31989,19858,32232,6122,33445,16892,33689,12275,34101,20235,34356,1487,35565,4692,36432,7762,36927,12642,38587,9565,40602,543,41288,5790,41250,14701,41226,19997,43683,4514,44270,15973,44496,12996,44673,9365);

//Orpailler, Extraire de l'argent, Rechercher des gemmes rares, Extraire du soufre, Extraire du salpêtre, Extraire du plomb :
var jobs6 = new Array(207,253,276,19891,795,11926,4957,5690,7262,3424,8026,11741,9638,16896,11076,9655,14566,8968,16674,11283,17032,19060,18133,5378,20369,5296,23511,15707,27763,11301,28418,19196,29603,9508,31606,175,36509,10365,37361,164,37813,20035,38590,8034,40513,3937,40699,19087,43712,6863,44906,11949);

//Faire fuir les oiseaux du champ, Cueillir du tabac, Cueillir du coton, Récolter du blé, Collecter des épices :
var jobs7 = new Array(783,15436,1829,215,1902,5768,2582,12722,4596,2600,4926,20039,5342,6270,5553,12305,7630,15139,8567,1269,8659,13243,8788,5443,9557,7662,11022,3174,11620,15484,11651,18822,14585,8307,14413,12983,14511,16737,15289,10490,16328,3866,18616,6705,18784,507,19065,15805,20288,2144,22384,15616,22872,18018,23683,4908,24404,19508,25295,667,26801,11058,26868,14754,27746,6926,28340,2466,29780,1428,30380,16308,32453,16755,32752,8046,33667,11354,34247,2086,36211,17559,36883,3038,37677,13434,38280,5406,38840,19475,39458,9311,40894,6957,41966,16411,42326,4227,43741,12634,44419,17873,45403,7327,46063,3335,46067,15650);

//Récolter de la canne à sucre, Faucher de l'herbe, Récolter du maïs, Cueillir des haricots, Cueillir des myrtilles :
var jobs8 = new Array(1168,18787,3294,1537,3436,6282,6181,14262,6951,8441,7910,1328,8569,11840,11252,16186,15059,740,15842,15560,16038,9522,19234,10557,23687,1789,25777,17826,29405,1000,29422,8459,29729,15076,31611,17798,34142,9832,35991,15462,36467,12150,39041,4045,41194,16700,41328,545,42823,7112,46040,10491);

//Cueillir des agaves, Cueillir des tomates, Cueillir des oranges, Récolter des pommes de terre, Récolter des potirons :
var jobs9 = new Array(228,968,1644,15374,3144,12140,3376,4057,3784,7174,3961,19334,5411,17217,5965,5331,7463,6963,7883,18058,8166,855,8169,12510,9547,4039,11084,5624,11011,11663,12476,15982,14671,11162,15196,10089,15432,4571,16772,18424,17541,2694,17811,8069,18262,14924,19528,17477,20544,14076,21470,3602,23578,19258,24570,1774,24921,5258,25491,17366,26812,1979,29148,19019,29326,8935,30288,5861,30585,165,30830,10418,30901,16669,32588,15504,33647,5568,33854,1455,35621,16181,36422,13156,37699,2000,38639,6613,38650,17199,39276,11333,41710,18495,41824,4937,42181,14692,43077,17347,43703,8842,44525,10882,45388,5641,46251,231);

//Cueillir des baies, Abattre des arbres, Défricher la forêt, Planter des arbres, Récolter de l'indigo :
var jobs10 = new Array(730,18585,2109,573,2342,11489,2838,6721,3932,9467,3917,14973,4075,18476,5897,1333,8884,12176,9557,5626,9585,19376,10244,2826,11131,16565,11504,12675,11980,9950,12610,198,13270,19462,13617,7806,14735,10802,15114,1234,16303,5379,16273,13445,17470,19223,18328,2868,20354,5894,20516,18244,21655,2585,23435,14253,23938,3509,25676,18681,27125,852,27114,4040,27343,8118,29980,11264,30253,17066,30600,20008,31061,6386,31911,15181,34355,19784,34577,10769,34959,770,35218,15746,36517,4229,38320,5874,38188,17673,39113,8037,39499,12309,42046,3170,42648,111,42725,6099,44334,17374,44821,11375,45840,8961,45856,14980);

//Dresser des chevaux, Attraper des chevaux, Ferrer des chevaux, Mener les chevaux :
var jobs11 = new Array(1085,816,2606,7345,4207,19885,4357,14072,7387,10731,8546,18182,10386,7564,11429,2724,14600,9633,15946,14459,16049,19377,17725,3362,24868,4041,24979,15990,27633,17080,28967,7861,30889,11726,31435,4709,34223,13560,36357,1603,37984,16774,38475,7200,41490,8601,42356,12918,42488,16569,45523,1333);

//Garder des cochons, Garder des moutons, Herbager le bétail, Marquer des bovins, Elever des agneaux :
var jobs12 = new Array(399,3073,797,18143,1947,11108,3226,12872,3813,5703,3796,16485,4652,9790,5146,3446,7561,18465,8202,10495,8700,1442,10758,16317,12248,5585,12061,13482,12557,7942,13939,8864,14314,566,14476,14850,17206,10730,18114,17958,18876,4491,19219,14214,19797,6998,22107,4560,22028,14636,22505,298,22802,18474,24771,19049,25487,4273,27472,15532,27711,526,28313,11003,28708,7314,30729,16128,31037,2234,32655,11239,32871,5330,33758,19400,34181,14514,35891,7022,37311,9573,37385,474,37765,3326,38991,18368,39294,11949,40224,16507,40482,3049,41056,11833,41325,7513,44165,6131,44169,17887,45902,14261,46181,4515);

//Réparer des clôtures, Installer une haie de barbelés, Nettoyer une étable, Nourrir les animaux :
var jobs13 = new Array(789,7135,1436,10929,1921,15805,2749,4009,3029,19523,3841,1123,4881,6821,5589,14607,8488,347,8537,10077,8710,7619,9845,3476,9991,19753,10375,13415,10410,17375,12686,12250,13775,5472,14741,12109,16326,2192,16269,17156,17989,16133,18672,8446,18865,13185,19282,2855,20228,15312,21106,18233,23346,2642,23511,19843,23617,80,24775,4651,26987,5425,27088,15709,28847,10962,30069,2454,29956,18189,30987,5418,31247,15622,31991,1097,33904,16378,35069,8566,35235,13137,35380,1472,36690,17907,36880,6817,37238,14842,38450,2109,40610,5410,41701,3428,42318,15099,42360,19047,43104,8633,44245,11998,45355,4885,45412,18944);

//Moudre du blé, Corroyer, Scier du bois, Imprimer des journaux :
var jobs14 = new Array(969,12881,2417,912,4518,17268,5128,5220,7981,18996,9039,3221,11024,7718,11355,13897,14970,15206,15501,3257,17713,7594,18067,10582,24641,18529,25238,2899,28496,7988,29006,18537,30922,13447,32295,700,35948,3016,35920,18283,36599,13706,37597,7323,40312,11410,42419,829,43607,18409,44098,8386);

//Voler des chevaux, Détrousser les passants, Cambrioler :
var jobs15 = new Array(704,13331,1209,5139,1051,17738,1426,1753,2988,8302,4069,18864,4879,1369,4924,11645,6942,18756,7434,1553,7900,9660,8824,13931,11141,17811,11710,5777,12478,11057,12841,873,13618,15570,14119,2283,14282,8042,15802,18092,17180,9737,17881,5102,19231,12516,19232,16473,20780,4345,21854,1958,22292,13888,22636,16152,24071,20236,24991,6337,26788,6266,26849,18012,28430,15155,30919,5765,31034,12392,31205,18841,31611,2425,32026,8554,33721,14424,35720,9558,37316,2584,37315,15551,37297,19805,37514,6738,39419,230,39300,13181,40401,17415,42136,2517,42135,11594,42776,9203,43454,5169,43559,14844,45270,3604,45077,15472);

//Tendre une embuscade, Attaquer une diligence, Braquer une banque, Attaquer un train :
var jobs16 = new Array(2696,18221,3416,8980,3633,1983,5014,13036,7576,5470,8075,19407,10075,15129,11659,4413,13784,11127,15798,7389,16778,16148,17101,455,22878,4162,23192,15284,29004,15305,31192,19489,31449,4086,32141,9035,35036,3166,35267,18712,35894,12347,37369,7910,42433,14091,43447,3806,44342,7462,45204,19302);

//Réparer une voiture à bâche, Transporter des munitions, Poney-Express, Faire de la contrebande, Transporter de l'alcool :
var jobs17 = new Array(1898,8345,2315,2126,3452,17313,5039,12471,9717,12484,10479,1507,10323,7056,11637,18525,13708,17880,14466,1296,17227,12323,19116,5882,21884,17760,22162,2934,28143,4225,28004,17532,28320,14430,31410,9702,35246,6934,36504,19784,37996,987,37980,14227,41038,15225,41607,2298,42423,8775,42749,11010);

//Traquer des bandits, Chasseur de primes, Démanteler une bande, Libérer les esclaves :
var jobs18 = new Array(1621,2319,1897,18366,2400,8675,3206,11020,10150,8018,10875,14822,10763,20164,11078,1671,13535,8440,15123,16596,15971,1416,16296,10496,20465,3201,21556,14968,28404,11485,29792,3715,30541,8320,30793,17798,36436,2758,36626,6346,37011,18610,38276,15024,40262,18675,42948,14016,43828,1042,45110,8144);

//Servir dans l'armée, Travailler comme mercenaire, Négocier la paix, Travailler comme shérif, Travailler comme marshal :
var jobs19 = new Array(522,744,1516,4171,1802,14549,1941,17199,2204,6939,4471,12112,4989,7540,5671,19375,7056,2003,8622,8980,9932,16136,10527,12360,10941,2953,12133,19961,12406,5136,12841,13409,13780,1708,14699,7441,15570,11759,16813,15447,17293,4169,17435,8549,18275,14017,18568,18572,21107,1147,21179,5270,21510,17356,22752,14588,23491,18419,26212,5321,26660,533,28404,16312,28696,9547,29908,10424,29976,19434,30610,7342,31167,14525,32479,1648,33726,210,34474,5836,34995,14214,35090,19164,36189,8306,38122,16279,38265,10666,39107,2044,40292,7463,40667,13009,41044,3784,44403,16349,44677,5332,44609,19990,45815,1290,46153,12869);

//Garder le fort, Escoter une diligence, Protéger le convoi de colons, Surveiller une prison, Transférer des prisonniers :
var jobs20 = new Array(184,7260,2232,11993,2414,15123,3005,17709,4199,6288,4767,3426,4988,15651,5795,633,7521,6101,9411,12743,10150,10690,10270,2071,10574,19729,10820,15870,12535,8604,12834,3878,13265,10964,13736,16204,15170,7946,16403,2812,16890,17728,18527,11672,19152,6205,19229,1954,20486,14591,21745,4069,22001,18380,24171,334,24405,17551,25919,3870,27567,17928,28991,14736,29405,5502,30252,11765,30725,1199,31409,8695,31648,15908,33149,4518,34503,14066,34864,7329,35701,2013,36116,16312,36442,5619,37548,11826,37838,18405,38656,259,40046,3658,41034,6045,41701,10623,41582,15565,43735,13641,44019,7862,46047,18549,46338,2126);

//Travailler comme charlatan, Traverser le pays en tant que joueur, Organiser un rodéo, Escroc au mariage, Faire son show chez Buffalo Bill :
var jobs21 = new Array(764,16227,1009,8742,3168,167,5550,13888,9125,486,10154,16916,10267,5503,10457,11800,14568,10287,15543,5643,16185,17787,19124,2398,21596,16852,22515,2382,27709,6241,30973,11377,31686,1811,31577,20328,35288,19897,35639,8888,36840,1034,37783,12532,40756,1759,42646,8118,43793,10954,44091,19837);

//Creuser des tombes, Piller des cadavres, Extraire du pétrole, Course au trésor :
var jobs22 = new Array(458,9846,1919,12475,2076,2711,2386,16576,3242,19781,3980,8586,4705,12766,5720,3309,6844,7009,6883,19469,7902,13852,10236,3737,11169,18217,11817,8192,12261,12623,12502,1428,13684,9996,14032,20252,14524,17800,15650,13965,16004,7896,17122,1617,17846,12895,18353,3577,20196,1480,20661,3643,23160,18884,23857,16862,24276,857,24398,13843,26797,7639,26728,12239,26821,18946,28954,618,30409,9091,30740,4832,31470,14032,32347,18756,33454,12721,34649,6955,36034,5960,36477,3793,37024,14335,37512,897,38229,19151,39472,15799,40805,10548,41539,1287,43020,6628,43268,13118,43293,16830,45105,16865,45488,2373,45849,6685);

//Marchander, Marchander avec des Indiens, Vendre des fusils aux Indiens, Travailler comme marchand ambulant :
var jobs23 = new Array(166,18234,411,5011,474,11152,2117,1449,2394,7739,2801,19033,4113,11500,5225,760,7110,4568,7100,8993,7044,18045,10891,11032,11593,14619,11925,2133,11836,19122,12170,9402,14026,3329,15327,19184,16091,6758,16525,14850,17768,11252,18029,2123,18159,15505,19767,8244,21205,14663,21551,755,22686,16977,22719,20065,23397,6096,25740,960,27387,2408,28814,13254,29752,9928,29888,15564,29963,4468,30375,17844,31364,7771,31681,12492,35402,2514,35408,13940,35469,17209,36354,9182,38365,11686,38630,15781,39380,2467,39411,6480,41099,8015,41518,12772,41744,1766,43111,19250,43315,16234,43735,1764,44179,4957,44386,14318,45574,7850);

//Jalonner le territoire, Creuser un puits, Explorer, Eteindre le feu, Ramasser des plumes d'aigle :
var jobs24 = new Array(163,18691,2969,1323,3175,5602,4243,10634,7076,11691,8648,7266,9432,18305,12966,1606,14353,4617,14353,10729,17642,17584,19211,7748,22682,5738,23663,17143,27157,14341,27765,1083,29944,16788,32380,4580,33684,10631,36016,18857,37414,6125,39045,3297,42256,7674,43100,11728,44683,2503,46011,16620);

//Poser des rails, Construire une ligne d'arrosage, Monter des poteaux télégraphiques, Construire une station, Construire des éoliennes :
var jobs25 = new Array(1052,6052,2548,17076,3377,13195,3994,3720,4024,7741,4815,1121,5157,15120,5759,11447,6803,5352,7757,400,8429,18530,8577,12443,9216,9098,10566,2419,11608,11882,12468,17791,13537,6837,13838,18628,15227,11476,16151,900,16911,14166,17346,4644,18137,17433,19151,9405,20138,13688,20352,2771,21629,19299,23245,5382,24764,16640,25359,2235,27559,13858,28859,3860,29149,19597,29618,1863,30099,7964,31585,17200,31786,11050,32836,6047,33879,4784,33802,15207,34276,18856,37330,10898,38017,7620,38353,1287,38869,9041,39184,16918,40282,14547,42014,1011,42427,17247,43255,9455,44088,2962,44478,19169,45019,6529,44945,13033);

//Construire un manoir, Construire un ranch, Construire une mission, Construire un casino, Construire des palissades :
var jobs26 = new Array(717,14114,1297,7522,3881,2450,5202,16294,6799,701,7067,14046,8923,6977,12673,18537,14678,2908,15559,16122,15971,12417,16949,5583,21576,16128,25625,1476,27076,8726,27972,12514,27975,18640,28789,1873,35131,14909,35515,6283,36193,2261,39478,12738,41871,8046,42920,2871,44861,15029,46080,19267);

//Poser des affiches, Vendre des journaux, Nettoyer des chaussures, Fixer des éperons, Moudre du café :
var jobs27 = new Array(580,9133,833,2868,1656,14145,1614,16584,5707,4843,5821,10796,6259,8185,6341,15661,7720,2256,7853,20045,8586,14554,9075,8073,11415,837,11696,15666,12213,11506,12909,6295,14237,13572,14838,17573,15132,1821,15805,8443,16832,20072,18274,4227,18575,7363,18808,14776,20108,17948,22070,3861,22376,18740,22636,1680,25631,5389,25669,13977,27205,11516,28480,1044,28580,17092,29871,8492,30128,5307,30714,3808,31527,13091,32020,18332,35116,4045,35277,7865,36138,14573,36899,11347,37022,16203,37362,19270,37472,1353,37413,9051,41340,13947,41722,9256,42720,12222,43107,4414,43330,15764,43638,17956,43856,233,46034,7300);

//Fabriquer des cercueils, Evangéliser, Diriger un bateau à aubes, Faire la classe :
var jobs28 = new Array(495,6585,577,15626,780,19815,2307,9254,3078,590,4681,2953,4823,11104,4786,13860,8594,2572,8648,10910,9594,13915,10452,9946,10739,5192,12228,2896,12510,16693,12430,19176,15274,9047,15426,10977,16141,4380,16554,13695,16900,16566,17892,699,17829,7094,19121,15330,20582,3982,22225,17269,23319,421,25217,3429,25237,15126,25212,20268,26665,15412,29001,6835,29293,11350,29703,2977,30738,9642,31064,694,31132,15162,32753,20295,33769,3110,34170,7515,34423,11202,34731,15986,37913,2738,38805,4674,38837,13793,39431,17586,40209,6422,41488,19608,42076,13567,43424,8050,44370,4150,44951,91,45278,16332,46162,11946);

var jobs = jobs17;
var ljobs = jobs.length;
var i = 0;
var intermin = 500;
var nbcheck = 2;

var interval = setInterval(function(){
	var x = jobs[i];
	var y = jobs[(i+1)];
	var cnt = 0;
	
	Map.center(x,y);
	
	var timer = setInterval(function(){
		if(typeof(Map.JobHandler.Featured[x+'-'+y]) == 'object'){
			$(".posx-"+x+".posy-"+y+".jobgroup").click();
			window.clearInterval(timer);
		}else{
			if(cnt >= nbcheck){
				window.clearInterval(timer);
			}else{
				cnt++;
			}
		}
	}, intermin);
	
	i = i+2;
	if(i >= ljobs){
		clearInterval(interval);
	}
}, intermin*nbcheck);