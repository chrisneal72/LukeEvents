let mongoose = require("mongoose");
let db = require("../models");
mongoose.connect("mongodb://localhost/lukeevents", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let pageSeed = [
  {
    template: "Style1",
    title: "Airman and Family Readiness",
    topImage: "images/aafr.jpg",
    mainImage: "",
    mapImage: "",
    facebook: "Facebook.com/LukeAFRC",
    bodyCopy: "<b>The Airman & Family Readiness</b> Center has a plethora of services available to you and your family.<br /><br /><b>Employment</b><br /><b>Employment Resource Center</b> · An employment resource Center is available on a daily basis for computer job search, Federal job application assistance, and Internet job searching and resume preparation.<br /><b>Resume Writing Workshops</b> · We have several Certified Professional Resume Writers on staff who are available to review your resume on a walk-in basis.<br /><br /><b>Family</b><br /><b>Air Force Aid Society</b> ·The mission of the Air Force Aid Society is to provide assistance to service members and their dependents in time of need.<br><b>Exceptional Family</b> Member Program · The Exceptional Family Member Program-Family Support (EFMP-FS) has been established to work in conjunction with EFMP-Medical and EFMP-Assignments to ensure families with special needs know all of their options and benefits.<br /><b>Heart Link Spouse Orientation</b> · This program is open to new and seasoned spouses to provide the opportunity to learn all about Air Force life and connect with other military spouses!<br /><b>Layette Program</b> ·  A layette of baby items is provided within 30 days of birth to all E-5 and below active duty military members of all branches. Activated Reservists with orders of 30 days or longer are entitled to a layette.<br /><b>Military Family Life Consultant</b> ·  MFLCs provide anonymous and confidential assistance to military members and their families in problem solving issues resulting from deployment, reunions, reintegration, and/or other times of change.<br /><br /><b>Finance</b><br /><b>Personal Financial Readiness</b> · Provides information, education, and one-on-one financial counseling to assist members and families maintain financial readiness from basic spend planning to long-term investing.<br /><br /><b>Relocation</b><br /><b>Loan Closet</b> ·  The Loan Closet has everything needed to set up a home while awaiting household goods delivered free of charge. Length of loan varies, depending on PCS or TDY status. Two-week guest loans are available to military, retired military, and Luke civilian employees.<br /><b>Relocation Assistance</b> ·  Relocation assistance is available to eliminate the stress associated with frequent moves by providing move assistance planning, inbound and outbound relocation services and on-going relocation workshops.<br /><b>Smooth Move</b> · Hear from experts from TriCare, Traffic Management Office (TMO), Housing, Finance, and the Airman and Family Readiness Center on how to have a stress-free relocation.<br /><br /><b>Separation/Retirement</b><br /><b>AMVETS</b> · A representative from AMVETS is available each week to assist you with the Department of Veteran’s Affairs.<br /><b>Transition Assistance</b> · The Transition Assistance Program (TAP) was established to meet the needs of separating service members during their period of transition into civilian life (12 months of separation or 24 months of retirement) by offering job search assistance and related services.<br />",
    facInfo: [
      {
        title: "Airman & Family Readiness Center",
        lines: [{ line: "623-856-6550" }, { line: "Bldg. 1113" }]
      },
      {
        title: "Monday – Friday",
        lines: [
          { line: "7:30am-4:30pm" },
          { line: "Closed every third Thursday" }
        ]
      }
    ]
  },
  {
    template: "Style1",
    title: "Hensman Dining Facility",
    topImage: "images/DFAC-800.jpg",
    mainImage: "",
    mapImage: "images/DFAC-Map.jpg",
    facebook: "Facebook.com/LukeDFAC",
    bodyCopy: "<b>The Dining Facility</b> offers a variety of nutritional entrées for all enlisted personnel assigned and TDY to Luke Air Force Base.<br /><br /><b>Pure Bar Salad Bar</b><br />In addition to traditional salad ingredients, a rotating daily selection of whole grains, plant-based protein items and other flavorful, healthy, and satisfying items are offered.<br /><br /><b>Specialty Kitchen Hot Line</b><br />A myriad of different components is available for Airman to select and combine as they see fit, curated combinations of items will be available to create a green, healthy, and satisfying meal.<br />",
    facInfo: [
      {
        title: "Hensman Dining Facility",
        lines: [{ line: "623-856-6396" }, { line: "Bldg. 545" }]
      },
      {
        title: "Monday – Friday",
        lines: [
          { line: "Breakfast ·  6-8am" },
          { line: "Lunch ·  11am-1pm" },
          { line: "Dinner · 4-6pm" }
        ]
      },
      {
        title: "Weekends & Holidays",
        lines: [{ line: "Brunch · 7am-1pm" }, { line: "Supper · 4-6pm" }]
      }
    ]
  },
  {
    template: "Style1",
    title: "T-Bolt Cafe",
    topImage: "",
    mainImage: "images/TBoltCafe-sq.jpg",
    mapImage: "images/Club56Map.jpg",
    facebook: "Facebook.com/Hensman-Dining-Facility-Flight-Kitchen",
    bodyCopy: "<b>The T-Bolt Cafe</b> is your go to spot for that quick meal!<br /><br /><b>Do you have a quick turn coming up?</b><br />Order your box lunch and have it waiting for you to pick up. A quick and easy meal to give you more time to get everything done.<br /><br /><b>Working the late shift?</b><br />Get that midnight meal to power you through the night. Quick and easy giving you more time.<br />",
    facInfo: [
      {
        title: "T-Bolt Café Flight Kitchen",
        lines: [{ line: "623-856-6420" }, { line: "Bldg. 954" }]
      },
      {
        title: "Monday – Friday",
        lines: [{ line: "Lunch · 11am-1pm" }, { line: "Dinner · 5-7pm" }]
      },
      {
        title: "Midnight Meal",
        lines: [{ line: "Sunday – Thursday" }, { line: "11: 30pm - 1am" }]
      }
    ],
    addInfo: {
      title: "Place your order!",
      info: [
        {
          type: "listLink",
          title: "Download the order form here for your box lunch",
          path: "https://www.lukeevents.com/wp-content/uploads/2019/10/T-Bolt-Cafe-Box-Meal-Request-Form.docx"
        }
      ]
    }
  },
  {
    template: "Style1",
    title: "The Blitz Lounge",
    topImage: "images/129A1280-800px.jpg",
    mainImage: "",
    mapImage: "images/Club56Map.jpg",
    facebook: "Facebook.com/LukeCommunity",
    bodyCopy: "<b>The Blitz Lounge</b> is the spot for food or a get together. Wether you are celebrating a bithday or another special day. Reserve one of our great venues for a great event!<br /><br /><b>Looking for a fun location?</b><br />We have the room to match your Event! We the Airmen's Patio for a breath of fresh air, the Theater for that stunning visual presentation, or our spacious Multipurpose room.<br /><br /><b>How about decorations?</b><br />Our Balloony Tunes store is conveniently located to decorate your event with great prices.<br />",
    facInfo: [
      {
        title: "The Blitz Lounge",
        lines: [{ line: "623-856-7152" }, { line: "Bldg. 700" }]
      },
      {
        title: "Monday – Friday",
        lines: [{ line: "Breakfast" }, { line: "6:30-9am" }]
      }
    ],
    addInfo: {
      title: "Reserve Your Room Today",
      info: [
        {
          type: "listLink",
          title: "Airmen’s Patio",
          path: "https://lukeevents.com/wp-content/uploads/2016/12/AM_patio_form.pdf"
        },
        {
          type: "listLink",
          title: "Multipurpose Room",
          path: "https://lukeevents.com/wp-content/uploads/2016/12/CC_MPR_reservation_form.pdf"
        },
        {
          type: "listLink",
          title: "Theater Forms",
          path: "https://www.lukeevents.com/wp-content/uploads/2019/10/Theater-Reservation-Request-2.pdf"
        },
        {
          type: "listLink",
          title: "Theater checklist",
          path: "https://www.lukeevents.com/wp-content/uploads/2019/08/Luke-AFB-Theatre-Checklist-as-of-Jan-2019.pdf"
        },
        {
          type: "listLink",
          title: "Balloony Tunes Pricing",
          path: "https://www.lukeevents.com/wp-content/uploads/2019/09/Balloon_prices_poster.pdf"
        }
      ]
    }
  },
  {
    template: "Style1",
    title: "The Grill Snack Bar",
    topImage: "",
    mainImage: "images/TheGrill-sq.jpg",
    mapImage: "images/TheGrillMap.jpg",
    facebook: "Facebook.com/LukeGolfCourse",
    bodyCopy: "<b>The T-Bolt Cafe</b> is the place to go, pre-game, post-game we are here for you. On your way to the 19th hole? Grab a delicious bite to eat from us on your way.<br /><br /><b>Got an early Tee Time?</b><br />Check out the breakfast menu. Get fueled up before hitting the links. Breafast sandwhich, burrito? How about some biscuits and gravy!?<br /><br /><b>Playing a mid day round?</b><br />Check out the what is coming off the grill to put a smile on your face. A great assorment of beverages for you to chose from as well. Need something light? we got you covered, grab a crisp salad.<br />",
    facInfo: [
      {
        title: "Falcon Dunes Grill",
        lines: [
          { line: "623-856-0004" },
          { line: "15100 W. Northern Avenue" },
          { line: "Waddell, Arizona, 85355" }
        ]
      },
      {
        title: "Summer Hours:",
        lines: [
          { line: "Sunday-Friday" },
          { line: "5:30am – 1:30pm" },
          { line: "Saturday" },
          { line: "5:30am-3pm" }
        ]
      }
    ],
    addInfo: {
      title: "Check out this MENU!",
      info: [
        {
          type: "listLink",
          title: "Download the menu here",
          path: "https://lukeevents.com/wp-content/uploads/2016/05/To-go-Menu-5-26-16.pdf"
        }
      ]
    }
  },
  {
    template: "Style1",
    title: "Youth Programs",
    topImage: "",
    mainImage: "images/ycp.jpg",
    mapImage: "",
    facebook: "facebook.com/lukeyouthprograms",
    bodyCopy: "<b>Mission Statement:</b><br />To assist DoD military and civilian personnel in balancing the competing demands of the accomplishment of the DoD mission and family life, by managing and delivering a system of quality, available, and affordable programs and services for eligible children and youths, ages birth through 18 years of age.<br /><br />Key Air Force Programs -These programs can be found at Youth Programs throughout the Air Force.<br /><br />Our programs are designed to encourage Club members to realize a wide variety of positive outcomes, a strategy for developing the “whole child.” Youth Programs focuses on helping children and teens achieve in our three priority outcome areas of Academic Success, Good Character and Citizenship, and Healthy Lifestyles.<br /><br />We offers tested, proven and nationally recognized programs in five Core Program Areas that closely align with the developmental needs of all young people:<br /><br /><b>The Arts</b><ul><li>Education & Career Development</li> <li>Health & Life Skills</li><li>Character & Leadership Development</li><li>Sports, Fitness & Recreation</li></ul><b>Eligibility</b><br />Preteens, 9 to 12 years old and teens 13 to 18 years old who are family member dependents of Active Duty, Civilian DoD Personnel, Retirees or are otherwise eligible to use Services Facilities.<br /><br />Youth who wish to participate in our programs, must meet the following criteria:<ul><li>Register at the Youth Programs Bldg. 1143</li><li>Valid Military ID Card.</li><li>Youth Programs application must be submitted (AF Form 88).</li><li>Current immunization record/flu shot.</li><li>Annual Membership fee of $42.00</li></ul><b>Thank you for your interest in the Luke AFB Youth Programs. We look forward to seeing you soon.</b>",
    facInfo: [
      {
        title: "Youth Programs",
        lines: [{ line: "Bldg. 1143" }, { line: "623-856-7470" }]
      },
      {
        title: "Administration",
        lines: [{ line: "Monday-Friday" }, { line: "6am-5:30pm" }]
      },
      {
        title: "Summer Hours",
        lines: [
          { line: "Mon-Fri" },
          { line: "Youth and Teen Programs- 8:00am – 4:00pm" },
          { line: "School-Age Care- 7:00-4:00pm" }
        ]
      },
      {
        title: "School Year Hours",
        lines: [
          { line: "Mon-Fri" },
          { line: "Youth and Teen Programs- 7:00am – 4:00pm" },
          { line: "School Age Care- 7:00am-4:00pm" }
        ]
      }
    ],
    addInfo: {
      title: "Youth Links",
      info: [
        {
          type: "listLink",
          title: "Request Child Care",
          path: "https://militarychildcare.cnic.navy.mil/mcc-consumer/home/viewhome.action"
        },
        {
          type: "listLink",
          title: "Request a Youth Sponsor",
          path: "https://www.lukeevents.com/request_form/"
        },
        {
          type: "listLink",
          title: "YP Downloads",
          path: "https://www.lukeevents.com/yp_downloads/"
        }
      ]
    }
  },
  {
    template: "Style1",
    title: "Arts & Crafts",
    topImage: "",
    mainImage: "images/ac.png",
    mapImage: "",
    facebook: "Facebook.com/LukeArtsCrafts",
    bodyCopy: "<b>The Arts & Crafts Center</b> houses the frame, engraving, and wood shop. Each shop is staffed with experienced personnel and maintains quality equipment, tools, and supplies. Looking for the perfect going away gift? Stop by the retail shop for custom gifts.",
    facInfo: [
      {
        title: "Arts & Crafts",
        lines: [{ line: "Bldg. 247" }, { line: "623-856-6502" }]
      },
      {
        title: "Engraving",
        lines: [
          { line: "623-856-2797" },
          { line: "Monday-Friday" },
          { line: "9am-4pm" }
        ]
      },
      {
        title: "Frame Shop",
        lines: [
          { line: "623-856-2798" },
          { line: "Monday-Friday" },
          { line: "9am-5 pm" }
        ]
      },
      {
        title: "Wood Shop",
        lines: [
          { line: "623-856-6566" },
          { line: "Friday – Sunday" },
          { line: "9am-4pm" }
        ]
      }
    ]
  },
  {
    template: "Style1",
    title: "Bryant Fitness Center",
    topImage: "images/bfc.png",
    mainImage: "",
    mapImage: "",
    facebook: "Facebook.com/lukefitnesscenter/",
    bodyCopy: "<b>The Bryant Fitness Center</b> is here to help you meet your fitness goals! On top of the sports and special events, the Bryant Fitness Center offers state of the art fitness and cardio equipment. <br /><br /><b>Cardio rooms</b> offer a multitude of options including treadmills, upright and recumbent bikes, stair steppers and elliptical machines. <br /><br /><b>Free weight rooms</b> give patrons plenty of choices for their daily strength workouts.<br /><b>Monthly 5K’s</b> test your cardio and give you a chance to run against the best. Please note, monthly 5K’s are held in various location to be announced every month.<br />",
    facInfo: [
      {
        title: "Fitness Center",
        lines: [
          { line: "Bldg.820" },
          { line: "623-856-6241" },
          { line: "Mon.- Fri. • 5am-9pm" },
          { line: "Sat. & Sun. • 8am-6pm" },
          { line: "Holidays & Down Days • 9am-6pm" }
        ]
      },
      {
        title: "Warrior PT Center",
        lines: [
          { line: "Bldg. 80820" },
          { line: "623-856-2291" },
          { line: "Mon. – Fri. 5am-9pm" },
          { line: "Sat. & Sun.  8am-6pm" },
          { line: "Holidays & Down Days  9am-6pm" },
          { line: "Effective Immediately" },
          { line: "PT Tent Closed until July 7, 2020" }
        ]
      },
      {
        title: "Fitness Center Annex",
        lines: [
          { line: "Bldg. 1137" },
          { line: "623-856-8299" },
          { line: "Mon. – Fri. 6am-6pm" },
          { line: "Weekends, Holidays & Down Days Closed" }
        ]
      },
      {
        title: "Smoothie Bar",
        lines: [
          { line: "Bldg. 820" },
          { line: "Mon.-Fri. 6am-6pm" },
          { line: "TEMPORARILY CLOSED" }
        ]
      }
    ]
  },
  {
    template: "Style1",
    title: "Child Development Center",
    topImage: "",
    mainImage: "images/cdc.png",
    mapImage: "",
    facebook: "Facebook.com/lukechilddevelopment",
    bodyCopy: "Whether your child is six weeks old or five years of age, the Child Development Center (CDC) provides a National Association for the Education of Young Children accredited program to assist you.<br /><br /><b>Reservations are accepted</b> on a space-available, drop-in basis. Your child may stay for a few hours or an entire day. The center also has an active sublet program for parents seeking temporary care.<br /><br /><b>The CDC’s activity centers</b> include reading, manipulative play, music, painting, water play, and sand tables. Weather permitting, children may play outside on playground equipment. The Center also provides breakfast, lunch, and afternoon snack.",
    facInfo: [
      {
        title: "Child Development Center",
        lines: [{ line: "623-856-6338" }, { line: "Bldg. 1119" }]
      },
      {
        title: "Monday – Friday",
        lines: [{ line: "7am-4pm" }]
      }
    ]
  },
  {
    template: "Style1",
    title: "Family Child Care Center",
    topImage: "",
    mainImage: "images/fccc.png",
    mapImage: "",
    facebook: "Facebook.com/LukeFCC",
    bodyCopy: "<b>Family Child Care (FCC)</b> programs consist of licensed providers conducting in-home care for children 2 weeks to 12 years of age. Family Child Care is an alternative to center-based programs; giving children more of a home-like, small group setting which enables individualized care for the children in the FCC homes. FCC Providers are available for daily, night, weekend and unusual hours of care for children.<br /><br />Parents can expect high standards of care from this home-based program due to the prerequisites that must be met prior to becoming a licensed FCC provider. Providers are required to complete an extensive training and orientation program along with stringent background checks, they must maintain AF training requirements and are monitored monthly in order to maintain their license with the Family Child Care program.<br /><br /><b>For more information about the programs offered by Family Child Care such as: PCS Care, Deployment Care, Returning Home Care and AF Subsidy Care, please contact the Luke AFB Family Child Care Office.</b><br /><br /><b>FINDING A CHILD CARE PROVIDER</b><br />Thank you for your interest in Luke AFB’s Family Child Care program. Our FCC<br />",
    facInfo: [
      {
        title: "Family Child Care Center",
        lines: [{ line: "623-856-2684" }, { line: "Bldg. 1140" }]
      },
      {
        title: "Monday-Friday",
        lines: [{ line: "9am-5pm" }]
      }
    ]
  },
  {
    template: "Style1",
    title: "Club Five Six",
    topImage: "",
    mainImage: "images/Club56-sq.jpg",
    mapImage: "images/Club56Map.jpg",
    facebook: "Facebook.com/ClubFiveSix",
    bodyCopy: "<b>Club Five Six</b> is your go to spot for dining, entertainment, and special events on Luke Air Force Base!<br /><br /><b>Want to have fun?</b><br />Club Five Six hosts theme parties, satellite-broadcast sporting events, live bands, DJs, bingo nights, karaoke nights, and more. Check the calendar for this months events!<br /><br /><b>Planning an event?</b><br />Club Five Six is your place for great special event planning.  Rooms available at the club include the main lounge, Barcelona room, large ballroom (with a 375 person capacity) and outdoor patio spaces.<br />",
    facInfo: [
      {
        title: "Club Five Six",
        lines: [{ line: "623-856-6446" }, { line: "Bldg. 161" }]
      },
      {
        title: "Cashier",
        lines: [{ line: "Monday – Friday" }, { line: "8:30am-1pm" }]
      },
      {
        title: "Lunch",
        lines: [{ line: "Monday – Friday" }, { line: "11am-1:30pm" }]
      },
      {
        title: "Harlow’s Lounge",
        lines: [{ line: "Wednesday" }, { line: "4-8pm" }]
      },
      {
        title: "Wingman Wednesday",
        lines: [{ line: "4:30pm-8pm" }]
      }
    ],
    addInfo: {
      title: "CLUB MEMBER REWARDS",
      button: {
        title: "SIGN UP HERE",
        path: "https://www.memberplanet.com/account/usaf"
      },
      info: [
        {
          type: "ulList",
          title: "Club Five Six",
          path: "",
          lines: [
            { line: "$2 off lunch and dinner" },
            { line: "$2 off unit functions" },
            { line: "10% off catering" },
            { line: "$10 off B-Day meal" },
            { line: "Member event pricing" }
          ]
        },
        {
          type: "ulList",
          title: "Falcon Dunes",
          lines: [
            { line: "10% off green fees" },
            { line: "10% off cart rental" }
          ]
        },
        {
          type: "ulList",
          title: "Fort Tuthill",
          path: "",
          lines: [{ line: "$5 off lodging" }, { line: "$2 off RV sites" }]
        },
        {
          type: "ulList",
          title: "Auto Hobby",
          path: "",
          lines: [{ line: "10% off stall fees" }]
        },
        {
          type: "ulList",
          title: "Outdoor Recreation",
          path: "",
          lines: [{ line: "10% off rentals" }]
        },
        {
          type: "ulList",
          title: "Information, Tickets, and Travel",
          path: "",
          lines: [{ line: "2% off Disney Military Salute Tickets" }]
        }
      ]
    },
    addImages: [
      {
        smPath: "images/TBoltCafe-sq-sm.jpg",
        lgPath: "images/TBoltCafe-sq.jpg",
        altText: ""
      }
    ]
  }
];

db.Page.deleteMany({})
  .then(() => db.Page.collection.insertMany(pageSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
