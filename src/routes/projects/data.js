export const projects = [
    {
        "slug": "esm-motor-calibration",
        "title": "Joint Motor Calibration",
        "thumb": "esm_thumb.png",
        "location": "Intuitive",
        "tags": ["sw"],
        "years": "2022 - 2023",
        "summary": "Upgraded functional test software to meet new test and calibration requirements for DaVinci SP joint modules. Made a number of architectural improvements to the shared function testing library. ",
        "content": ""
    },
    {
        "slug": "psm-backdrive-friction",
        "title": "Patient Manipulator Backdrive Friction",
        "thumb": "psm_thumb.png",
        "location": "Intuitive",
        "tags": ["sw"],
        "years": "2022",
        "summary": "Completed production ready proof-of-concept integrating linear actuator and force sensor to measure manipulator backdrive friction.",
        "content": ""
    },
    {
        "slug": "belt-tension",
        "title": "Belt Tension Validation",
        "thumb": "psm_thumb.png",
        "location": "Intuitive",
        "tags": ["sw"],
        "years": "2021",
        "summary": "Developed automation suite for cyclical loading of drive belt to validate assembly performance and screen for premature failure on tension test stand. Wrote interface library for test stand serial communication.",
        "content": ""
    },
    {
        "slug": "flex-joint-test",
        "title": "Flex Joint Test Automation",
        "thumb": "flex_thumb.png",
        "location": "Intuitive",
        "tags": ["mech", "sw"],
        "years": "2018 - 2021",
        "summary": "Led team of 3 to develop test fixture for DaVinci Xi Flex joint to replace manual processes to burnish and test brake friction, measure bearing friction in loaded state, confirm encoder range of motion.",
        "content": ""
    },
    {
        "slug": "motor-stator-test",
        "title": "Motor Stator Test Fixture",
        "thumb": "stator_thumb.png",
        "location": "Intuitive",
        "tags": ["mech"],
        "years": "2020 - 2023",
        "summary": "Redesigned mechanical assembly of slotless motor stator tester for more precise mechanical alignment improve ease of assembly and servicing, and reduce GR&R and tester to tester measurement variance.",
        "content": ""
    },
    {
        "slug": "set-up-joint-brake-test",
        "title": "Set-up Joint Brake Test Fixture",
        "thumb": "suj_brake_thumb.png",
        "location": "Intuitive",
        "tags": ["mech", "sw"],
        "years": "2019 - 2021",
        "summary": "Took NPI tester prototype and ironed out issues with brake installation and alignment. Prepared design and documentation to implement tester at supplier facility. Wrote test software and GUI in Matlab",
        "content": ""
    },
    {
        "slug": "manufacturing-aids",
        "title": "Manufacturing Aids and Improvements",
        "thumb": "",
        "location": "Intuitive",
        "tags": [],
        "years": "2016-2022",
        "summary": "<ul><li>Rolling cart for hands free installation of heavy arm at head height</li><li>Mechanical tweaks and preventative maintenance plan for pneumatic test fixture to mitigate mitigate common failure modes</li><li>Streamlined IQOQPQ and GR&R test plans</li><li>Many mechanical aids for part fixturing or ergonomic improvement of assembly tasks</li></ul>",
        "content": ""
    },
    {
        "slug": "rotary-3d-printer",
        "title": "Rotary 3D Printer",
        "thumb": "printer02.jpg",
        "location": "Univ. of the Pacific",
        "tags": ["mech"],
        "years": "2016",
        "summary": "3D printer to print on a cylindrical surface.",
        "content": "<section><p>Group: Jordan Briggs, Austin Jarvis, Stefan Soezeri, Jonathan Wagenet</p></section><section><h2>Purpose</h2><ul>Develop 3D printer to which prints on a cylindrical surface (an \u201cadditive lathe\u201d) to produce stronger cylindrical structures and apply mechanical engineering knowledge to a capstone project.</ul></section><section><h2>Objectives</h2><ul><li>Replace traditional cartesian y-axis with rotation spindle on 3D printer.</li><li>Build frame and motion system from scratch.</li><li>Use RepRap electronics and software to handle printer control.</li></ul></section><section class=\"image\"><img src=\"/images/projects/printer01.jpg\" style=\"height:500px;\"/><p>All packaging assembled together (left). Solidworks model of electronics support (right).</p></section><section><h2>Development Process</h2><ul><li>Evaluate existing 3D printer designs for ideas on how to implement motion.</li><li>Consider print material choices and their impact on ease of implementation and printing.</li><li>Select control motors based on anticipated loading, and verify usability from loading analysis.</li><li>Design printer in CAD, and prepare drawings for manufacturing and assembly.</li><li>Manufacture components and assemble printer. Iterate component designs with 3D printing.</li><li>Calibrate and test electronic control system.</li></ul></section><section><h2>Design Choices</h2><ul><li>Timing belt driven x-axis</li><li>Lead screw driven z-axis</li><li>Adjustable spindle support to level print bed</li><li>T-Slot frame</li><li>3D printed components</li><li>PLA Printing</li><li>Use RepRap Arduino control and Cura for slicing</li></ul></section><section class=\"image\"><img src=\"/images/projects/printer03.jpg\" style=\"height:175px;\"/><img src=\"/images/projects/printer04.jpg\" style=\"height:175px;\"/><p>Hexagonal test pattern printed on cylinder. </p></section><section><h2>Contributions</h2><ul>For this project I was in charge of designing and implementing the spindle axis and the extruder. The spindle is driven by a stepper motor and is supported by an adjustable print support to level the surface. Delrin is the selected print surface because of its good maintainability and thermal stability. The extruder is based ona filament feeder and hot end from the 3D printing community. I also designed an adjustable screw which mounts on the x-axis rails which facilitates precise calibration of the z-axis homing position. Many parts were conceptually designed to be made from aluminum, but I redesigned them to be quickly made and tested with 3D printing. Additional parts like wiring clips and t-slot nuts were also made cheaply with PLA.Following assembling the mechanical structure, I took charge in testing and calibrating the electronics, and setting up the controller software. 3D models and drawing is SolidWorks.</ul></section><section><h2>Issues and Improvements</h2><ul><li>Current design wraps cartesian models around surface. Tailored software may provide better results.</li><li>Current print cylinder is too heavy for driving motor, causing vibration and print imperfections.</li><li>No easy way to remove prints from the cylinder intact. Need to design surface to easily release print.</li><li>Add a y-axis back to the system for 4 axis printing and look into possible benefits of printing on a flat surface using additional axes.</li></ul></section>"
    },
    {
        "slug": "autonomous-robot",
        "title": "2-Wheeled Autonomous Robot",
        "thumb": "autorobot01.jpg",
        "location": "Univ. of the Pacific",
        "tags": ["mech", "sw"],
        "years": "2016",
        "summary": "Implementation of robotics hardware and algorithms.",
        "content": "<section><p>Group: William Tredennick, Jonathan Wagenet</p></section><section><h2>Purpose</h2><ul>Implement positioning, sensors, obstacle avoidance, path planning from theory to complete a challenge course with an autonomous robot.</ul></section><section><h2>Challenges</h2><ul><li>Develop robotic system from the ground up with little programming knowledge as mechanical engineers.</li><li>Communicate motion and sensor data from low level system to high level computational system.</li><li>Traverse challenge course by combining modules for autonomy.</li></ul></section><section class=\"image\"><img src=\"/images/projects/autorobot01.jpg\"/><p>The robot. Mechanical front bumper switches. <br/>Three proximity sensors. Seeeduino on top, Raspberry Pi below.</p></section><section><h2>Test Drive</h2><ul><li>Used MatLab to test algorithms before implementing on robot.</li><li>Implemented positioning, obstacle avoidance, and feature extraction in simulation.</li><li>Partial success implementing Enhanced Kalman Filter and path planning.</li></ul></section><section><h2>Design Details</h2><ul><li>AVR microcontroller directly controls motors and collects data from sensors</li><li>Raspberry Pi receives data, and handles positioning and decision making</li><li>Implemented communication protocol to send sensor data and receive motor instructions</li><li>\u00bbKinematic model to estimate position from wheel encoders</li><li>Bug-style basic obstacle avoidance</li><li>Attempted implementation of Kalman filter for localization</li><li>Low level I/O control written in C. High level control written in Python.</li></ul></section><section><table><tr><th colspan=\"2\" style=\"text-align:center;border-top:1px solid #333;\">Seeeduino</th><td style=\"border-right:1px solid #333;border-left:1px solid #333;\"></td><th colspan=\"2\" style=\"text-align:center;border-top:1px solid #333;\">Raspberry Pi</th></tr><tr><th>Movement Output</th><th>Measurement</th><td style=\"border-right:1px solid #333;border-left:1px solid #333;\"></td><th>Decision Output</th><th>Computation</th></tr><tr><td>Motor Voltage</td><td>Bump Sensors</td><td style=\"border-right:1px solid #333;border-left:1px solid #333;\"></td><td>Wheel Speed</td><td>Position Update</td></tr><tr><td>Motor PWM</td><td>IR Sensors</td><th style=\"text-align:center;border-bottom:none;border-right:1px solid #333;border-left:1px solid #333;\">Data Transfer</th><td>Wheel Direction</td><td>Target Orientation</td></tr><tr><td></td><td>Ultrasonic Sensor</td><td style=\"text-align:center;border-right:1px solid #333;border-left:1px solid #333;\">\u21cc</td><td>Timing Delay</td><td>Target Distance</td></tr><tr><td></td><td>Wheel Encoders</td><td style=\"border-right:1px solid #333;border-left:1px solid #333;\"></td><td></td><td>Obstacle Avoidance</td></tr><tr><td style=\"border-bottom:1px solid #333;\"></td><td style=\"border-bottom:1px solid #333;\"></td><td style=\"border-right:1px solid #333;border-left:1px solid #333;\"></td><td style=\"border-bottom:1px solid #333;\"></td><td style=\"border-bottom:1px solid #333;\">Color Input</td></tr></table></section><section><h2>Mechanical Bumper</h2><ul>Designed and 3D printed a mechanical bumper to reliably trigger left and right microswitches.\t\t\t\t<li>Snug sleeve to mount switches without fasteners or glue.</li><li>Two bumper guides for each bumper. Center guide travels when triggered head on and locks as a fulcrum when pressed at extreme angles.</li><li>Bumper can reliably trigger the bump switch up to an angle of 45 degrees.</li></ul></section><section class=\"image\"><img src=\"/images/projects/autorobot02.jpg\"/><p>3D printed robot bumper with good angle coverage and reliable triggering.</p></section><section><h2>Contributions</h2><ul>I took charge writing most of the control code for the bot, as I have a better understanding of C and Python.In particular, I contributed the high level decision making and communication on the Raspberry Pi. Pythonwas selected because it is easy to write and debug. I also designed the bumper and mounts for the proximity sensors and electronics to keep the robot organized.\t\t\t\t</ul></section><section><h2>Limitations</h2><ul>On a time crunch, we were unable to implement Kalman filter localization on the robot, which would help improve position estimation. We also avoided more complex algorithms like SLAM and more intensive mapping due to our limited programming experience.\t\t\t\t</ul></section><section><h2>Outcomes</h2><ul><li>Learned how to read docs and set up port registers, ADC, hardware interrupts, and PWM.</li><li>Worked with partner to develop and write control software for robot.</li><li>Mixed success completing challenge course: unable to implement localization on robot and position from wheel encoders proved too inaccurate.</li></ul></section>"
    },
    {
        "slug": "solder-compositions",
        "title": "Comparison of Lead and Lead-free Solder Compositions",
        "thumb": "solder-comp.jpg",
        "location": "Univ. of the Pacific",
        "tags": ["mech"],
        "years": "2015",
        "summary": "Evaluation of differences between lead and lead-free solders, including phase diagram construction, microstructure analysis, and shear testing. ",
        "content": "<section><p>Group: Jordan Briggs, Stefan Soezeri, Jonathan Wagenet</p></section><section><h2>Purpose</h2><ul>Lead solders are increasingly regulated, suitable alternative solders should be explored. Basic solder alloying and testing within the scope of a lab project.</ul></section><section><h2>Objectives</h2><ul><li>Prepare a collection of Lead-Tin and Bismuth-Tin solder compositions</li><li>Prepare phase diagrams for the two binary systems</li><li>Perform microstructure analysis, shear testing, and wettability testing</li></ul></section><section class=\"image\"><img src=\"/images/projects/pbphasesuper.jpg\" style=\"height:300px;\"/><img src=\"/images/projects/biphasesuper.jpg\" style=\"height:300px;\"/><p>Constructed phase diagrams with experimental data in red over published phase diagrams for each binary tin alloy.</p></section><section><h2>Procedure</h2><ul><li>Prepared 5 different sample compositions of each the lead and bismuth solders.</li><li>Used thermocouples and measurement software to take solder temperatures as they cooled.</li><li>Polished 2 samples and inspected under a microscope to analyze structure.</li></ul></section><section class=\"image\"><img src=\"/images/projects/solder-comp.jpg\"/><img src=\"/images/projects/solder01.jpg\"/><p>Microstructure samples before polishing (left). Freshly mixed solder composition sample (right).</p></section><section><h2>Results</h2><ul><li>Composition preparation and phase diagram construction were successful. Able to mimic published data to a reasonable degree.</li><li>Successful microstructure analysis under microscope, but no real conclusions.</li><li>Shear and wettability tests were inconclusive.</li></ul></section><section><h2>Lessons and Challenges</h2><ul><li>Melting solder compositions was  more difficult than anticipated, so a new method was needed.</li><li>Better planning for test repeatability should be used, either with the equipment or methodology.</li><li>In a repeated experiment, shear and wettability testing should be conducted with multiple trials on a single composition from each system rather than from multiple compositions for a larger sample size. </li></ul></section><section class=\"image\"><img src=\"/images/projects/solder02.jpg\"/><img src=\"/images/projects/solder03.jpg\"/><img src=\"/images/projects/solder04.jpg\" style=\"padding-top:20px;\"/><p>Sheared solder sample (top left). Wettability test samples (top right). \t\t\t\t\tMicrostructure under a microscope of a near eutectic BiSn sample (bottom).</p></section>"
    },
    {
        "slug": "sensor-packaging",
        "title": "Sensor Packaging",
        "thumb": "sensor-packaging.jpg",
        "location": "Univ. of the Pacific",
        "tags": ["mech"],
        "years": "2015",
        "summary": "Design a water tight enclosure for battery powered sensor nodes.",
        "content": "<section><h2>Purpose</h2><ul>Learn about UAV, sensor, and microcontroller technology, and 3D printing and its use for low cost custom enclosures for electronics.</ul></section><section><h2>Requirements</h2><ul><li>Hands on experience with a desktop 3D printer.</li><li>Make packaging for sensor electronics, including antenna, batteries, and logic boards.</li><li>Enclose in water resistant, but not submersible container.</li><li>Use reliable waterproofing options to stay within time frame and cost.</li></ul></section><section><h2>Design Process</h2><ul><li>Made initial enclosure idea drawings in Solidworks that would be 3D printed, but opted for a commercially produced water-tight container for reliability.</li><li>Designed a 3D printed structure to hold logic boards and batteries.</li><li>Modified enclosure to support external antenna.</li><li>Tested enclosure to determine reasonable weight to remain buoyant in standing water and to assess long term water-tightness even with modifications.</li></ul></section><section class=\"image\"><img src=\"/images/projects/sensor03.jpg\"/><img src=\"/images/projects/sensor04.jpg\"/><p>All final packaging elements disassembled (left). 3D printed support for electronics with components assembled (right).</p></section><section><h2>Design Iteration for Support Structure</h2><ul>Initial design features:\t\t\t\t<li>Snug shelving for batteries</li><li>Standoffs and mount holes for logic board; tabs were later used to remove an additional hardware requirement.</li><li>Allowance for logic board geometry</li><li>Longitudinal walls to reduce flexing of base</li></ul></section><section class=\"image\"><img src=\"/images/projects/sensor07a.jpg\" style=\"height:150px;\"/><img src=\"/images/projects/sensor07b.jpg\" style=\"height:150px;\"/><img src=\"/images/projects/sensor07d.jpg\" style=\"height:150px;\"/><img src=\"/images/projects/sensor07c.jpg\" style=\"height:150px;\"/><p>Left to right: First printed model with necessary adjustments noted. Partial model to get determine geometry around the logic board. Partial model to test battery fit. Printed models to check battery fit with minor adjustments</p></section><section><ul>Original design needed modification after first print:\t\t\t\t<li>General changes to account for 3D printing tolerance</li><li>Fix geometry conflicts with the logic board</li><li>Change in tab configuration and adjust shelf size for snug fit of the logic board and batteries.</li></ul></section><section><p>To test changes, model sections were used to reduce material waste and reduce printing time between changes.</p></section><section><p>Example: Batteries were inconsistent in size, so a precise fit couldn't be achieved. Trial and error was necessary with  shelf dimensions to achieve snug fit for most batteries.</p></section><section class=\"image\"><img src=\"/images/projects/sensor05.jpg\"/><img src=\"/images/projects/sensor06.jpg\"/><p>All packaging assembled together (left). Solidworks model of electronics support (right).</p></section>"
    },
    {
        "slug": "hvac-measurement",
        "title": "HVAC System Air Temperature Measurement",
        "thumb": "heat-map.jpg",
        "location": "Univ. of the Pacific",
        "tags": ["mech", "sw"],
        "years": "2015",
        "summary": "Temperature mapping of HVAC airflow in a system using a thermocouple array. Data evaluated for error and visualised with MatLab.",
        "content": "<section><p>Group: Jordan Briggs, Sean Snyder, Jonathan Wagenet</p></section><section><h2>Purpose</h2><ul>Use instrumentation methods\tto evaluate sensor variation and test air circulation in a room.</ul></section><section><h2>Requirements</h2><ul><li>Create test plan for evaluating sensors and taking temperature measurements.</li><li>Run control test for thermocouples.</li><li>Evaluate thermocouple measurements for impact of error and noise.</li><li>Take long temperature measurements under changing system conditions.</li></ul></section><section class=\"image\"><img src=\"/images/projects/heat01.png\" style=\"height:400px;\"/><p>Floor plan of tested room, including positions of doors, air vents (hashed boxes), and thermocouple locations (circles).</p></section><section><h2>Procedures</h2><ul><li>Arrange thermocouples in room for varied measurement.</li><li>Take hour long measurement of room while thermostat is heating up.</li><li>Take ten minute measurement with room open to breezeway along left doors.</li><li>Take control test with thermocouples at constant temperature.</li></ul></section><section class=\"image\"><img src=\"/images/projects/heat.gif\" style=\"width:700px;height:auto;\"/><p>Heatmap of heating test. Room is closed to outside environment with thermostat set to high heat.</p></section><section><h2>Results</h2><ul>The control test measurements are used to evaluate data accuracy:\t\t\t\t<li>About 0.1\u00b0C of bias error is observed from the thermocouples compared to control.</li><li>Measurement noise adds up to a standard deviation of about 0.1\u00b0C.</li></ul><ul>Animated heat-maps of the thermal data are prepared in MatLab:\t\t\t\t<li>Approximations of temperature gradients in rooms are interpolated/extrapolated from the eight thermocouple measurements.</li><li>Each time segment is layered in an animation for both datasets.</li></ul></section><section class=\"image\"><img src=\"/images/projects/breeze.gif\" style=\"width:700px;height:auto;\"/><p>Heat map of cooling test. Room is open to breezeway between doors on left side with thermostat off.</p></section><section><h2>Caveats</h2><ul><li>Bias error estimation for the sensors is limited by the accuracy of the control thermometer.</li><li>Extrapolated data around edges of room are likely very inaccurate, and are left for the visualization.</li><li>More sensors or better placed sensors would yield a better set of data.</li></ul></section>"
    },
    {
        "slug": "bidding-website",
        "title": "Cut the Chi Bidding Website",
        "thumb": "cutthechi.jpg",
        "location": "Univ. of the Pacific",
        "tags": ["sw"],
        "years": "2014",
        "summary": "Auction website developed in Ruby on Rails for a philanthropy event. ",
        "content": "<h2>Purpose</h2><ul>New chapter philanthropy added for the fall semester that would be greatly enhanced with a website for online bidding.</ul></section><section><h2>Requirements</h2><ul><li>Registration and Login system for identification and contact of bidders.</li><li>Candidate directory with photos, names, descriptions, and option to bid.</li><li>Bidding functionality for users to bid on candidates, with reasonable constraints.</li><li>Presentable and usable web interface.</li></ul></section><section><h2>Reach Goals</h2><ul><li>Email user verification and outbid notifications</li><li>Administration tools to manage users, candidates, bids</li></ul></section><section class=\"image\"><img src=\"/images/projects/cutthechi.jpg\" style=\"height:auto;\"/><p>Cut the Chi homepage.</p></section><section><h2>Development Process</h2><ul><li>Choose and learn Ruby on Rails as web framework and database controller.</li><li>Use an established Rails tutorial to gain an understanding of the language and develop user system.</li><li>Use learned skills to deviate from tutorial and develop bidding functions.</li><li>Expand basic functionality to add action constraints and meet requirements.</li><li>Display necessary info to user on web page.</li><li>Style website for presentability.</li></ul></section><section><h2>Post Launch</h2><ul><li>All requirements were functionally present. Due to time constraints, a set of administrative tools was only partially completed and the email system was not implemented.</li><li>Learned a lot about the web development process  for a production website with a database and deadline</li><li>Realized I need to work on organizing work better ahead of time and set micro-deadlines.</li></ul></section><section>Code on Github: <a href=\"https://github.com/jwagenet/cutthechi-rails\">github.com/jwagenet/cutthechi-rails</a></section>"
    },
    {
        "slug": "additional-projects",
        "title": "Additional Projects",
        "thumb": "",
        "location": "Univ. of the Pacific",
        "tags": [],
        "years": "2012 - 2016",
        "summary": "<ul><li>4 Wheeled Robot Platform</li><li>GPS Tracker and GPX Output</li><li>Pressurized Tank Water Jet</li><li>Extensive 3D Printing Designs and Experience</li></ul>",
        "content": ""
    }
]