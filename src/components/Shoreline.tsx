const Shoreline = () => {
  return (
    <svg
      viewBox="0 0 1000 1000"
      style={{
        position: "absolute",
        top: -85,
        left: -10,
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <defs>
        <filter id="filter" height="2" width="2">
          <feTurbulence
            baseFrequency="0.1"
            numOctaves="1"
            type="fractalNoise"
          />
          <feDisplacementMap
            scale="20"
            xChannelSelector="R"
            in="SourceGraphic"
          />
        </filter>
      </defs>
      {/* Wave details */}
      {/* <path
        d="M 80 265 L 160 225 M 885 600 L 885 700 M 100 720 L 170 770"
        stroke="#FFFFFF"
        strokeWidth="3"
        fill="none"
        filter="url(#filter)"
      /> */}

      {/* Harbor markers */}
      <path
        d="M 180 120 L 190 140 M 240 75 L 265 85 M 530 70 L 505 90 M 565 85 L 570 120
           M 790 245 L 830 220 M 860 250 L 860 290 M 950 455 L 970 465 M 950 540 L 970 530
           M 860 700 L 855 730 M 790 740 L 820 750 M 565 865 L 560 890 M 490 910 L 520 925
           M 280 910 L 255 930 M 190 860 L 185 890 M 70 680 L 100 700 M 70 620 L 100 600
           M 70 360 L 90 370 M 70 300 L 95 285"
        stroke="#5C4033"
        strokeWidth="5"
        fill="none"
      />
      {/* Main shoreline path */}
      <path
        d="M 375 120 Q 385 125 395 120 
        L 470 80 Q 480 75 490 80 
        L 565 115 Q 575 120 585 115 
        L 660 75 Q 670 70 680 75 
        L 770 140 Q 780 145 780 160
        L 780 220 Q 780 235 790 240
        L 870 295 Q 880 300 880 320
        L 880 380 Q 880 390 890 400
        L 945 440 Q 955 450 955 460
        L 955 530 Q 955 550 945 556
        L 880 590 Q 870 600 870 615
        L 870 680 Q 870 700 850 712
        L 785 745 Q 770 755 770 775
        L 775 840 Q 777 860 765 865
        L 680 912 Q 665 925 650 912
        L 590 870 Q 575 860 560 870
        L 500 912 Q 475 925 455 912
        L 390 870 Q 380 860 370 870
        L 315 912 Q 290 925 275 912
        L 190 860 Q 180 855 180 840
        L 180 780 Q 180 760 165 752
        L 100 705 Q 90 700 90 690
        L 90 615 Q 92 597 80 590
        L 20 557 Q 5 550 5 530
        L 5 450 Q 5 440 15 435
        L 80 390 Q 92 385 92 370
        L 92 290 Q 92 270 105 267
        L 160 240 Q 180 230 180 208
        L 180 160 Q 180 150 190 140
        L 270 80 Q 280 70 295 80
        Z"
        fill="#C4A484"
        stroke="#5C4033"
        strokeWidth="5"
        filter="url(#filter)"
      />

      {/*  */}
      {/* <path
        d="M 780 220 Q 780 235 790 240  "
        stroke="#0000FF"
        strokeWidth="5"
        fill="none"
      /> */}
    </svg>
  );
};

export default Shoreline;
