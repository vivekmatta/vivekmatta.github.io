export interface ProjectImage {
	src: string;
	alt: string;
	caption?: string;
	width: number;
	height: number;
	cropToContent?: boolean | 'center' | 'bottom' | 'square' | 'landscape';
}

export interface ProjectDocument {
	title: string;
	description: string;
	href: string;
}

export interface Project {
	slug: string;
	title: string;
	period: string;
	shortGist: string;
	fullDescription: string;
	technologies: string[];
	githubUrl?: string;
	featuredImage?: ProjectImage;
	imageGallery?: ProjectImage[];
	documents?: ProjectDocument[];
	details?: {
		overview?: string;
		challenges?: string[];
		results?: string[];
		keyFeatures?: string[];
	};
}

export const projects: Project[] = [
	{
		slug: 'adaptive-iot-wellness-platform',
		title: 'Adaptive IoT Wellness Platform',
		period: 'Jan 2026 - Present',
		shortGist: 'Built a native iOS research prototype that syncs real wearable health data over Bluetooth and converts it into uncertainty-aware, action-oriented AI wellness coaching.',
		fullDescription: `Developed WatchProbe, a native iOS companion app for an ES02/Veepoo-compatible wearable, as part of research with Professor David Zaretsky at Northwestern University. The project explores how low-cost IoT sensors and AI can turn passive wellness measurements into practical daily actions.

I integrated the manufacturer BLE SDK to scan for the wearable, establish and verify connections, restore the preferred device, read battery state, and serialize health-data sync operations. The app stores timestamped research snapshots locally as JSON and loads recent records for longitudinal analysis.

I designed a coach-first SwiftUI experience organized around Coach, Plan, Progress, and Profile views. Instead of leading with raw sensor dashboards, the interface explains available context and generates realistic actions across hydration, movement, stress management, sleep, and recovery.

The AI layer sends a compact health context to Firebase AI Logic or a local Gemini proxy and requests structured summaries, category scores, correlations, warnings, and suggested actions. Analyses are cached using a SHA-256 fingerprint and refreshed only when the synced context or coach settings change.

An earlier research prototype used Python, Flask, sentence-transformer embeddings, and FAISS to retrieve context from PDF, text, and Word documents for a RAG chatbot. That work informed the AI pipeline before the project shifted to a native iOS architecture required by the wearable SDK. The current prototype has demonstrated physical watch discovery, verified BLE connection, multi-day local sync, AI-backed explanations, and reminder-ready action plans. Wellness measurements are presented as non-diagnostic signals with explicit uncertainty and data-quality guidance.`,
		technologies: [
			'Swift',
			'SwiftUI',
			'iOS',
			'Bluetooth LE',
			'IoT',
			'Gemini',
			'Firebase AI Logic',
			'Node.js',
			'Python',
			'FAISS',
			'RAG',
			'JSON',
		],
		featuredImage: {
			src: '/projects/watchprobe/es02-wearable.jpg',
			alt: 'Screenless ES02 wearable used to collect wellness data for the WatchProbe research prototype',
			caption: 'The ES02 wearable used for physical-device Bluetooth and health-data sync testing.',
			width: 1350,
			height: 1800,
		},
		imageGallery: [
			{
				src: '/projects/watchprobe/coach-screen.png',
				alt: 'WatchProbe Coach screen with an AI-generated wellness message and prioritized daily actions',
				caption: 'Coach view: AI guidance and a focused daily checklist.',
				width: 1320,
				height: 2868,
			},
			{
				src: '/projects/watchprobe/plan-screen.png',
				alt: 'WatchProbe Plan screen with wellness actions grouped into categories including Fuel and Move',
				caption: 'Plan view: actionable recommendations organized by wellness category.',
				width: 1320,
				height: 2868,
			},
		],
		details: {
			overview: `This ongoing graduate research project investigates an adaptive IoT platform for proactive wellness under Professor David Zaretsky in Northwestern University's Department of Electrical and Computer Engineering. My work spans wearable integration, mobile development, research data collection, and uncertainty-aware AI coaching.`,
			keyFeatures: [
				'Native iOS integration with a physical ES02 wearable through the Veepoo BLE SDK',
				'Reliable scan, connection, password-verification, reconnection, and serialized sync workflow',
				'Timestamped local JSON snapshots for multi-day research data inspection',
				'Coach-first SwiftUI interface with Coach, Plan, Progress, and Profile views',
				'Structured AI analysis through Firebase AI Logic or a local Gemini proxy',
				'Context-hash caching that avoids regenerating unchanged AI analyses',
				'Action plans and local reminders across fuel, movement, mind, and recovery',
				'Early RAG prototype using document parsing, sentence transformers, and FAISS',
			],
			challenges: [
				'Integrating a device-only manufacturer SDK with limited documentation',
				'Serializing BLE data commands to avoid unstable concurrent watch operations',
				'Normalizing partial, delayed, or unsupported consumer-wearable measurements',
				'Communicating uncertainty without overwhelming users with raw sensor data',
				'Securing AI credentials while testing a phone-to-local-development proxy',
			],
			results: [
				'Verified discovery, connection, password state, and battery reads on a physical ES02 wearable',
				'Synced real multi-day watch records into persistent local research snapshots',
				'Generated structured explanations, warnings, scores, and daily actions from synced context',
				'Delivered an end-to-end prototype spanning wearable sensing, iOS persistence, AI analysis, and user action',
			]
		}
	},
	{
		slug: 'smart-mirror',
		title: 'Smart Mirror',
		period: 'Mar 2026 - Jun 2026',
		shortGist: 'Co-designed an ESP32-based smart mirror platform with voice interaction, presence sensing, addressable lighting, AI integration, and a custom mixed-signal PCB.',
		fullDescription: `Co-developed an interactive smart mirror for Northwestern University's EE 327 Electronic System Design 2 course with Luke de Souza. The system was designed as a hands-free home information hub that places digital content behind a two-way mirror and combines voice interaction, presence-aware activation, connected data, lighting, and AI-generated responses.

After evaluating a Raspberry Pi architecture, we moved the design to an ESP32 because its built-in Wi-Fi met the system's cloud-connectivity needs without requiring on-device AI. We integrated a PIR motion sensor, microphone, speaker with a Class-D amplifier, WS2812B addressable LEDs, and a display interface, then designed a custom KiCad schematic and two-layer PCB to consolidate the electronics.

The board provides 5 V input and regulated 3.3 V power, ESP32 programming and debug access, I²S audio connections, PIR and LED headers, status indicators, reset and input controls, and decoupling around the major subsystems. During bring-up, we traced degraded speaker output to shared power and ground paths with the higher-current LEDs, highlighting the importance of power-domain planning and grounding in mixed-signal hardware.

At the documented integration milestone, the LED strip, PIR sensor, microphone, speaker, Wi-Fi, and AI path had been implemented, while display software, physical mounting, and user testing remained in progress.`,
		technologies: [
			'ESP32',
			'KiCad',
			'PCB Design',
			'Embedded Systems',
			'Wi-Fi',
			'I²S Audio',
			'PIR Sensor',
			'WS2812B LEDs',
			'Class-D Amplifier',
			'Power Regulation',
			'AI Integration',
			'User Research',
		],
		featuredImage: {
			src: '/projects/smart-mirror/smart-mirror-pcb-layout.png',
			alt: 'KiCad PCB layout for the Smart Mirror showing the ESP32, amplifier, microphone, PIR sensor, LED and debug headers, power regulation, and routed copper layers',
			caption: 'Custom two-layer Smart Mirror PCB integrating the ESP32, audio, sensing, lighting, power, and programming interfaces.',
			width: 1482,
			height: 1130,
		},
		imageGallery: [
			{
				src: '/projects/smart-mirror/smart-mirror-schematic.png',
				alt: 'KiCad schematic for the Smart Mirror with ESP32 connections, I2S microphone and amplifier headers, PIR and LED interfaces, status LEDs, controls, and 3.3 volt regulator',
				caption: 'System schematic covering power, ESP32 I/O, audio, sensing, lighting, status, and debug connections.',
				width: 1898,
				height: 1308,
				cropToContent: 'landscape',
			},
		],
		details: {
			overview: `This two-person EE 327 project explored a practical, voice-first smart-home interface behind a two-way mirror. Our design process combined component selection, user interviews, embedded integration, PCB design, and iterative architecture changes.`,
			keyFeatures: [
				'ESP32 central controller with Wi-Fi connectivity for cloud APIs and AI services',
				'PIR-based presence sensing for automatic activation',
				'I²S microphone and Class-D-amplified speaker interfaces for voice interaction',
				'WS2812B addressable LED interface and three status indicators',
				'Custom KiCad schematic and routed two-layer PCB with programming and debug headers',
				'5 V input, regulated 3.3 V rail, reset controls, and local decoupling',
				'User interviews used to prioritize simple, glanceable information and motion-triggered operation',
			],
			challenges: [
				'Revising the original Raspberry Pi concept around an ESP32-based architecture',
				'Adding a Class-D amplifier after the speaker required more drive than the initial design provided',
				'Diagnosing power and ground coupling between noise-sensitive audio circuitry and high-current LEDs',
				'Balancing display information density with an uncluttered mirror experience',
				'Coordinating display software, PCB completion, and mechanical integration within the course schedule',
			],
			results: [
				'Implemented and integrated the LED, PIR, microphone, speaker, Wi-Fi, and AI subsystems',
				'Completed a custom system schematic and routed PCB for the ESP32-based architecture',
				'Identified mixed-signal power integrity as the source of speaker interference during bring-up',
				'Collected user feedback that shaped motion activation, information hierarchy, and customization goals',
				'Documented remaining display, mounting, and user-testing work without overstating prototype completion',
			]
		}
	},
	{
		slug: 'plug-in-solar-optimization',
		title: 'Plug-In Solar Optimization',
		period: 'Mar 2026 - Jun 2026',
		shortGist: 'Co-built a portable solar-and-battery prototype with wireless ESP32 telemetry, production forecasting, and hourly cost-optimized discharge scheduling.',
		fullDescription: `Co-developed a small-scale plug-in solar research prototype with Ian Lundeen and Luke de Souza for Northwestern University's COMP_ENG 395 Computing & Sustainability course. The project explored how portable photovoltaic generation and battery storage could lower the barrier to residential solar for renters and other users who cannot install a traditional rooftop system.

The hardware combines a 2 W, 6 V solar panel; a Sunny Buddy solar charger; a 3.7 V, 2000 mAh Li-Po battery; two INA219 voltage and current monitors; and an ESP32. One sensor measures panel production while the second tracks the battery. The ESP32 reads the hardware telemetry and sends it wirelessly to the software platform, and a custom 3D-printed case makes the breakout-board prototype easier to move while leaving the panel free for angle and placement experiments.

The software layer stores weather, production, and electricity-price data in Supabase. Open-Meteo supplies cloud cover and shortwave-radiation forecasts, while ComEd's pricing feed provides energy-cost data. A regression model forecasts hourly solar production from measured output and weather conditions, then a linear-programming scheduler selects battery-discharge times that maximize the value of stored energy while respecting charge, capacity, and hourly-discharge constraints.

The completed prototype charged its battery from solar energy, monitored panel and battery voltage in real time, transmitted readings wirelessly, and displayed system state, forecasts, decision inputs, and discharge recommendations in a web dashboard. We gathered production data with the portable system positioned by a window and adjusted panel placement to find useful light conditions. Tests showed the schedule shifting with weather and price conditions, including discharge recommendations near higher-value morning and evening periods on sunny days.`,
		technologies: [
			'ESP32',
			'Solar Energy',
			'Li-Po Battery',
			'INA219',
			'Supabase',
			'Open-Meteo API',
			'ComEd API',
			'Regression',
			'Linear Programming',
			'IoT',
			'Data Visualization',
			'3D Printing',
		],
		featuredImage: {
			src: '/projects/plug-in-solar/plug-in-solar-poster.jpg',
			alt: 'Northwestern Engineering poster for the Plug-In Solar Optimization project showing the prototype, system architecture, forecasting workflow, dashboard results, challenges, and conclusions',
			caption: 'Final project poster summarizing the integrated hardware, forecasting pipeline, discharge scheduler, and dashboard results.',
			width: 3600,
			height: 2700,
		},
		imageGallery: [
			{
				src: '/projects/plug-in-solar/plug-in-solar-prototype.png',
				alt: 'Completed Plug-In Solar prototype with labeled solar panel, Li-Po battery, voltage monitors, Sunny Buddy charger, and ESP32 mounted in a green case',
				caption: 'Portable hardware prototype with dual telemetry paths for solar production and battery state.',
				width: 1440,
				height: 810,
				cropToContent: 'landscape',
			},
			{
				src: '/projects/plug-in-solar/plug-in-solar-dashboard.png',
				alt: 'Plug-In Solar web dashboard showing live voltage readings, battery level, a discharge recommendation, optimizer inputs, and regression-model status',
				caption: 'Dashboard combining live telemetry with an explainable, cost-optimized discharge recommendation.',
				width: 1440,
				height: 810,
				cropToContent: 'landscape',
			},
			{
				src: '/projects/plug-in-solar/plug-in-solar-windowsill-test.jpeg',
				alt: 'Plug-In Solar prototype positioned beside a window with its solar panel, green 3D-printed base, ESP32, sensor boards, battery charger, and wiring visible',
				caption: 'Windowsill test setup used to collect real production data and evaluate panel placement under available sunlight.',
				width: 768,
				height: 1024,
				cropToContent: 'center',
			},
		],
		details: {
			overview: `This three-person sustainability project combined physical energy harvesting, IoT telemetry, cloud data, forecasting, optimization, and a web interface. The result was a portable test platform for studying how battery storage can improve the economics of small residential solar systems.`,
			keyFeatures: [
				'2 W, 6 V photovoltaic panel charging a removable 3.7 V, 2000 mAh Li-Po battery',
				'Sunny Buddy charging stage and dual INA219 voltage/current monitoring',
				'ESP32-based wireless telemetry for panel production and battery state',
				'Supabase storage for measured production, weather, and energy-cost data',
				'Open-Meteo cloud-cover and shortwave-radiation forecasts for Evanston',
				'ComEd electricity-pricing integration with hourly price aggregation',
				'Regression-based hourly solar-production forecast',
				'Linear-programming scheduler constrained by battery capacity and discharge limits',
				'Web dashboard explaining telemetry, forecasts, and discharge decisions',
			],
			challenges: [
				'Generating useful energy from a small panel under variable indoor and outdoor light',
				'Modifying a nonstandard solar-panel connector for safe prototype integration',
				'Calibrating two sensing paths for panel production and battery state',
				'Combining wireless ESP32 measurements with multiple external APIs',
				'Finding panel placement and angle that produced meaningful test data',
				'Determining an economically optimal discharge time from changing forecasts',
			],
			results: [
				'Built a functional solar charging and Li-Po battery-storage prototype',
				'Monitored panel and battery voltage in real time and transmitted measurements wirelessly',
				'Integrated measured production with Open-Meteo weather and ComEd price data',
				'Generated hourly production forecasts and cost-optimized discharge schedules',
				'Visualized system telemetry, model status, decision inputs, and recommendations in a web dashboard',
				'Packaged the electronics in a portable 3D-printed enclosure and collected production data during windowsill placement tests',
			]
		}
	},
	{
		slug: 'portable-piano',
		title: 'Portable Piano',
		period: 'Jan 2026 - Mar 2026',
		shortGist: 'Co-developed a projection-based virtual instrument that tracks fingertips in 3D and turns any flat surface into a responsive piano, xylophone, or DJ pad.',
		fullDescription: `Co-developed a portable, projection-based musical instrument with Welldone Matanga and Justin Ansell for Northwestern University's CE 347 Microprocessor System Projects course. The system projects an interactive interface onto a flat surface and lets a player trigger sounds by tapping the projected controls—without physical keys or a touchscreen.

The final architecture combines a Leap Motion Controller, a LattePanda Mu single-board computer, and a compact projector with an integrated speaker. A compiled C++ program reads 3D fingertip coordinates from the Leap Motion SDK and streams them as JSON to a Python application. The software calibrates the sensor's horizontal and depth coordinates to the projected interface, uses a 15 mm tap threshold and per-key debounce timing to reject accidental triggers, and keeps the interaction responsive.

Players can switch among three complete instruments: a one-octave piano spanning C4 through B4, a colorful xylophone, and a 3×3 DJ sample board. Pygame renders the projected interface at 30 frames per second and manages stereo audio, including synthesized tonal notes with ADSR envelopes and pre-cached samples for low-latency playback.

We packaged the projector, computer, and tracking sensor in a custom 3D-printed frame, then iteratively tuned sensor placement and coordinate mapping so the physical tap region aligned with the projected controls. The finished prototype demonstrated real-time multi-finger tracking, mode selection, audible feedback, and portable operation, with all interaction data processed locally on the device.`,
		technologies: [
			'Python',
			'C++',
			'Pygame',
			'Leap Motion',
			'LattePanda Mu',
			'Gesture Tracking',
			'Real-Time Systems',
			'Audio Synthesis',
			'JSON',
			'USB',
			'HDMI',
			'3D Printing',
		],
		featuredImage: {
			src: '/projects/portable-piano/portable-piano-full-system.jpeg',
			alt: 'Completed Portable Piano system projecting a colorful xylophone interface onto a table from its custom black enclosure',
			caption: 'The completed portable instrument projecting its touch-free xylophone interface onto a tabletop.',
			width: 768,
			height: 1024,
			cropToContent: 'center',
		},
		imageGallery: [
			{
				src: '/projects/portable-piano/portable-piano-enclosure-front.jpeg',
				alt: 'Front view of the assembled black 3D-printed Portable Piano enclosure with projector and Leap Motion sensor',
				caption: 'Front view of the custom 3D-printed frame that aligns the projector and Leap Motion sensor.',
				width: 768,
				height: 1024,
				cropToContent: 'center',
			},
			{
				src: '/projects/portable-piano/portable-piano-enclosure-angle.jpeg',
				alt: 'Angled view of the assembled Portable Piano enclosure and integrated electronics',
				caption: 'The finished enclosure packages the projection, sensing, and computing hardware into one movable unit.',
				width: 768,
				height: 1024,
				cropToContent: 'center',
			},
			{
				src: '/projects/portable-piano/portable-piano-xylophone-wide.jpeg',
				alt: 'Portable Piano system projecting its eight-note rainbow xylophone interface onto a table',
				caption: 'Full xylophone-mode setup during integrated testing.',
				width: 768,
				height: 1024,
				cropToContent: 'center',
			},
			{
				src: '/projects/portable-piano/portable-piano-xylophone-close.jpeg',
				alt: 'Close view of the projected rainbow xylophone controls and tracking hardware',
				caption: 'The xylophone interface maps eight projected bars to individual notes.',
				width: 768,
				height: 1024,
				cropToContent: 'center',
			},
			{
				src: '/projects/portable-piano/portable-piano-dj-mode.jpeg',
				alt: 'Portable Piano system projecting its DJ sample-pad interface onto a table',
				caption: 'DJ mode expands the prototype beyond tonal instruments with a 3×3 sample board.',
				width: 768,
				height: 1024,
				cropToContent: 'center',
			},
			{
				src: '/projects/portable-piano/portable-piano-dj-board.jpeg',
				alt: 'Close view of the projected DJ board with nine labeled sample pads and a hand-tracking graphic',
				caption: 'Close-up of the projected DJ pad and live hand-tracking feedback.',
				width: 768,
				height: 1024,
				cropToContent: 'center',
			},
			{
				src: '/projects/portable-piano/portable-piano-home-interaction.jpeg',
				alt: 'A user selecting an instrument from the projected Portable Piano home screen',
				caption: 'Touch-free menu interaction during a user demonstration.',
				width: 768,
				height: 1024,
				cropToContent: 'center',
			},
			{
				src: '/projects/portable-piano/portable-piano-menu-demo.jpeg',
				alt: 'A user holding a hand above the projected Portable Piano instrument-selection menu',
				caption: 'The projected menu lets players switch instruments without a separate display or controller.',
				width: 768,
				height: 1024,
				cropToContent: 'center',
			},
			{
				src: '/projects/portable-piano/portable-piano-gesture-demo.jpeg',
				alt: 'Side view of a user moving a hand over the projected instrument menu while fingertip tracking is displayed',
				caption: 'Live fingertip visualization helped the team validate projected control alignment.',
				width: 665,
				height: 1182,
			},
		],
		details: {
			overview: `This three-person CE 347 project combined 3D hand tracking, cross-language software, real-time graphics and audio, and mechanical prototyping. The goal was to create a portable musical experience that could transform an ordinary flat surface into several playable instruments.`,
			keyFeatures: [
				'Leap Motion 3D fingertip tracking with locally processed interaction data',
				'C++ sensor bridge streaming structured JSON coordinates to Python',
				'Calibrated horizontal and depth mapping from physical space to projected controls',
				'15 mm tap detection threshold with 80 ms per-key debounce',
				'Three playable modes: one-octave piano, xylophone, and 3×3 DJ sample board',
				'Pygame interface rendered at 30 FPS with stereo sound output',
				'ADSR-based tonal synthesis and pre-cached samples for responsive playback',
				'Custom 3D-printed frame aligning the projector, computer, and tracking sensor',
			],
			challenges: [
				'Installing and connecting the Leap Motion SDK across the C++ and Python components',
				'Mapping 3D sensor coordinates accurately onto a 2D projected interface',
				'Reducing false taps and repeated notes without making the instrument feel sluggish',
				'Keeping graphics, tracking, and audio responsive on the embedded computer',
				'Maintaining alignment while integrating the electronics into a portable enclosure',
			],
			results: [
				'Delivered a functional, hardware-integrated projection instrument',
				'Demonstrated real-time fingertip tracking, tap detection, visual feedback, and sound generation',
				'Implemented and tested piano, xylophone, and DJ performance modes',
				'Reduced perceived audio latency through pre-generated notes and pre-cached samples',
				'Completed a portable 3D-printed assembly and calibrated it for tabletop demonstrations',
			]
		}
	},
	{
		slug: 'embedded-pcb-webcam',
		title: 'Embedded PCB Webcam',
		period: 'Jan 2026 - Mar 2026',
		shortGist: 'Co-developed a Wi-Fi webcam that captures JPEG images with an OV2640, transfers them through a SAM4S8B and ESP32, and displays them in a browser.',
		fullDescription: `Co-developed an embedded Wi-Fi webcam with Luke de Souza for Northwestern University's CE 326 Electronic System Design course. The project combined a SAM4S8B microcontroller, OV2640 camera module, ESP32-WROOM-32E Wi-Fi module, custom PCB work, embedded C firmware, a browser viewer, and a 3D-printed camera enclosure.

I initially focused on firmware development and then worked across both software and hardware as integration progressed. The firmware was written in C with the Atmel Software Framework and initializes the system clock, GPIO, SPI, UART, Wi-Fi interface, and camera. The OV2640 captures JPEG images, the SAM4S8B transfers image data to the ESP32 over SPI while UART carries commands, and the ESP32 hosts a lightweight web server so a user can view captures from a browser without installing additional software.

The electrical design used KiCad to connect the processor, camera, Wi-Fi module, programming and debug headers, and three regulated power domains: 3.3 V, 2.8 V, and 1.2 V. Early component analysis estimated a $25.09 one-unit core system cost, falling to $19.57 per unit at a quantity of 5,000, and evaluated active, standby, and duty-cycled operation from a 500 mAh battery.

Board bring-up required extensive continuity testing and rework. We removed solder bridges that were blocking camera signals, traced a nonresponsive ESP32 to a Wi-Fi reset pin bridged to ground, and restored programming and terminal output. We also discovered that our manufactured PCB revision omitted the camera-pin connections; after documenting the layout failure, we used a reference PCB provided by the instructor to complete system integration. The final setup successfully captured an image, transferred it through the embedded pipeline, and displayed it in the web interface. A custom 3D-printed enclosure stabilized and protected the camera module for demonstration.`,
		technologies: [
			'Embedded C',
			'SAM4S8B',
			'ESP32',
			'OV2640',
			'KiCad',
			'PCB Design',
			'Atmel Software Framework',
			'SPI',
			'UART',
			'Wi-Fi',
			'Web Server',
			'Hardware Debugging',
			'3D Printing',
		],
		featuredImage: {
			src: '/projects/embedded-pcb-webcam/webcam-enclosure-front.jpeg',
			alt: 'Completed embedded webcam camera module mounted inside a red 3D-printed enclosure',
			caption: 'The OV2640 camera packaged in a custom 3D-printed enclosure for stable positioning and protection.',
			width: 768,
			height: 1024,
			cropToContent: 'bottom',
		},
		imageGallery: [
			{
				src: '/projects/embedded-pcb-webcam/webcam-enclosure-rear.jpeg',
				alt: 'Rear view of the red embedded webcam enclosure showing its cable opening and mounting hardware',
				caption: 'Rear enclosure view showing the cable opening and mechanically secured camera assembly.',
				width: 768,
				height: 1024,
				cropToContent: 'center',
			},
			{
				src: '/projects/embedded-pcb-webcam/custom-pcb.jpeg',
				alt: 'Compact blue custom webcam PCB populated with an ESP32 module, buttons, connectors, and power input',
				caption: 'Populated PCB hardware integrating the ESP32 Wi-Fi module, controls, and power interface.',
				width: 768,
				height: 1024,
				cropToContent: 'center',
			},
			{
				src: '/projects/embedded-pcb-webcam/integrated-prototype.jpeg',
				alt: 'Integrated embedded webcam prototype with purple PCB, ESP32 module, breadboard circuitry, and jumper wiring',
				caption: 'Integrated bench setup used for firmware, communication, and connectivity testing.',
				width: 768,
				height: 1024,
				cropToContent: 'center',
			},
			{
				src: '/projects/embedded-pcb-webcam/hardware-bringup.jpeg',
				alt: 'SAM4S8B development board and breadboard circuitry connected with jumper wires during webcam hardware bring-up',
				caption: 'Hardware bring-up setup used to isolate camera, power, and communication faults.',
				width: 768,
				height: 1024,
				cropToContent: 'center',
			},
			{
				src: '/projects/embedded-pcb-webcam/browser-camera-test.jpeg',
				alt: 'Webcam test setup displaying a newly captured image in a browser above the connected development hardware',
				caption: 'End-to-end test: a camera capture displayed through the browser interface.',
				width: 360,
				height: 640,
			},
		],
		details: {
			overview: `This two-person CE 326 project covered the complete embedded-system workflow: component and power analysis, schematic and PCB design, board assembly, C firmware, wired and wireless communication, browser delivery, mechanical packaging, and hands-on hardware debugging.`,
			keyFeatures: [
				'OV2640 JPEG image capture controlled by a SAM4S8B microcontroller',
				'SPI image transfer and UART command communication with an ESP32-WROOM-32E',
				'ESP32-hosted web server for viewing camera output in a standard browser',
				'Embedded C firmware built with the Atmel Software Framework',
				'KiCad electrical design with programming, debugging, and external-module connections',
				'3.3 V, 2.8 V, and 1.2 V regulated power domains derived from a 5 V input',
				'One-unit and volume cost analysis plus 500 mAh battery-life estimates',
				'Custom 3D-printed camera enclosure for alignment and protection',
			],
			challenges: [
				'Diagnosing camera initialization failures caused by solder bridges on processor pins',
				'Discovering that the manufactured PCB revision omitted the camera-pin routes',
				'Tracing a nonresponsive ESP32 to a Wi-Fi reset signal shorted to ground',
				'Coordinating camera data, SPI transfers, UART commands, and Wi-Fi delivery',
				'Scheduling firmware early enough to leave sufficient time for hardware-software debugging',
			],
			results: [
				'Captured and displayed camera images through the completed embedded and browser pipeline',
				'Restored camera operation by locating and removing multiple solder bridges',
				'Recovered ESP32 terminal output, programming, and Wi-Fi firmware operation after reset-line rework',
				'Completed system testing with an instructor-provided reference PCB after documenting the custom-board routing error',
				'Built a protective enclosure and demonstrated a functional end-to-end webcam prototype',
			]
		}
	},
	{
		slug: 'gesture-controlled-info-hub',
		title: 'Gesture-Controlled Info Hub',
		period: 'Sep 2025 - Dec 2025',
		shortGist: 'Built a real-time gesture recognition system using an IMU and Edge Impulse, collecting fixed-rate accelerometer data (AX/AY) via touch-triggered windows and classifying four gestures (W, S, Q, J) on-device.',
		fullDescription: `A gesture-controlled embedded "info hub" that uses inertial sensing and on-device machine learning to trigger contextual information displays. The system allows a user to perform simple hand gestures to retrieve weather, stock prices, quotes, and jokes, all rendered on an OLED screen in real time.

The device uses an IMU to capture fixed-rate accelerometer data (AX/AY) during short, touch-triggered recording windows. Each gesture is recorded over a deterministic time window, converted into a feature vector, and classified on-device using a model trained and deployed with Edge Impulse.

Four gestures were trained and mapped to system actions: W (Weather), S (Stock price), Q (Quote), and J (Joke). A capacitive touch pin is used to explicitly gate recording, ensuring clean data collection and preventing accidental triggers.

After establishing Wi-Fi connectivity, the system prefetches and caches network data (weather and stock prices) to avoid repeated API calls during runtime. Quotes and jokes are fetched live on demand. Results are rendered on a 128×64 OLED display, with output persisting until the next user interaction, creating a clear and intuitive user experience.`,
		technologies: [
			'Embedded C',
			'C++',
			'ESP32',
			'Edge Impulse',
			'IMU',
			'Wi-Fi',
			'OLED Display',
			'I²C',
			'Real-Time Systems'
		],
		githubUrl: 'https://github.com/Anishka-Singh/Gesture-Controlled-Info-Hub',
		details: {
			overview: 'A gesture-controlled embedded "info hub" that uses inertial sensing and on-device machine learning to trigger contextual information displays. The project runs entirely on an ESP32 microcontroller and combines sensor data acquisition, real-time inference, network communication, and UI rendering within a tightly constrained embedded environment.',
			keyFeatures: [
				'Real-time gesture recognition using IMU data and on-device ML inference',
				'Touch-gated data capture for reliable gesture segmentation',
				'Four gesture-driven modes: weather, stocks, quotes, jokes',
				'Wi-Fi HTTP integration with REST APIs and JSON parsing',
				'Prefetching and caching of network data to reduce latency',
				'Persistent OLED UI updated only on user interaction',
				'Modular, event-driven embedded architecture'
			],
			challenges: [
				'Ensuring deterministic sensor sampling under real-time constraints',
				'Balancing ML inference latency with network operations on a microcontroller',
				'Designing a clean UI flow within a limited OLED resolution',
				'Managing multiple subsystems (IMU, touch, Wi-Fi, display) on shared I²C resources'
			],
			results: [
				'Reliable real-time gesture classification with low false triggers',
				'Responsive, intuitive interaction loop driven entirely by gestures',
				'Stable integration of ML inference, networking, and display rendering on constrained hardware',
				'Fully self-contained embedded system demonstrating end-to-end ML deployment on the edge'
			]
		}
	},
	{
		slug: 'smart-home-kws',
		title: 'Smart-Home Audio Keyword-Spotting',
		period: 'Sep 2025 - Dec 2025',
		shortGist: 'Built an embedded keyword-spotting system on Raspberry Pi Zero 2 W that recognizes voice commands to control RGB LEDs and LCD display using LSTM/CNN models trained on MFCC features.',
		fullDescription: `An embedded keyword-spotting system that controls peripherals based on voice commands. This project implements a multi-class audio classification system on a Raspberry Pi Zero 2 W microcontroller, creating a prototype smart-home device capable of recognizing voice commands and executing them with peripheral components.

The system recognizes 9 classes: "Red", "Green", "Blue", "White", "Off" (for RGB LED control), "Time" and "Temperature" (for LCD display), plus "Noise" and "Unknown Command" for robustness. The color keywords control an RGB LED, while "Time" and "Temperature" display current information on an LCD screen using an RTC chip and temperature sensor.

The project involved a complete machine learning pipeline: recording audio data from multiple speakers, chopping utterances, applying data augmentation (low-pass filters, high-pass filters, band-pass filters, pitch-shifting, noise addition, dynamic compression), extracting Mel-Frequency Cepstral Coefficients (MFCCs) for feature extraction, training CNN/LSTM models in PyTorch/TensorFlow, and compressing the model for deployment on the Raspberry Pi.

The inference system captures 5-second audio buffers, trims to optimal length (~1.8s), extracts MFCCs, and feeds them to the model for real-time classification. The system achieved high accuracy (99.79% validation, ~98.5% test) with the CNN model.`,
		technologies: [
			'Python',
			'PyTorch',
			'TensorFlow',
			'Raspberry Pi',
			'Embedded Systems',
			'Machine Learning',
			'Audio Processing',
			'MFCC',
			'CNN',
			'LSTM',
			'GPIO',
			'I²C',
			'librosa'
		],
		githubUrl: 'https://github.com/Eclo19/smart-home-kws',
		details: {
			overview: `This project was developed as part of a Machine Learning course (EE 475) at Northwestern University. The goal was to create an embedded keyword-spotting system that could recognize voice commands and control hardware peripherals in real-time.`,
			keyFeatures: [
				'Real-time audio keyword recognition on Raspberry Pi Zero 2 W',
				'9-class classification: RGB colors (Red, Green, Blue, White, Off), LCD commands (Time, Temperature), and noise/unknown',
				'Hardware integration: RGB LED control, LCD display, RTC for time, temperature sensor',
				'Complete ML pipeline: data collection, augmentation, feature extraction (MFCCs), model training, and deployment',
				'Data augmentation techniques: LP/HP/BP filters, pitch-shifting, noise addition, dynamic compression',
				'High accuracy: 99.79% validation accuracy, ~98.5% test accuracy with CNN model',
				'Real-time inference with 5s buffer capture, trimmed to ~1.8s for optimal model input'
			],
			challenges: [
				'Optimizing model size for embedded deployment on Raspberry Pi Zero 2 W',
				'Handling real-time audio processing with latency constraints',
				'Managing data collection and augmentation across multiple speakers',
				'Integrating hardware peripherals (LED, LCD, sensors) with the ML inference pipeline',
				'Balancing model accuracy with computational efficiency for edge deployment'
			],
			results: [
				'Successfully deployed CNN model achieving 99.79% validation accuracy',
				'Real-time keyword recognition with sub-second latency',
				'Robust system handling noise and unknown commands',
				'Complete end-to-end pipeline from data collection to hardware control'
			]
		}
	},
	{
		slug: 'diy-bop-it',
		title: 'DIY "Bop It!"',
		period: 'Sep 2025 - Dec 2025',
		shortGist: 'Co-developed a handheld Micro:bit game that combines four physical actions, spoken commands, adaptive timing, and a custom 3D-printed enclosure.',
		fullDescription: `Co-developed a portable, sensor-driven take on the classic Bop It game for Northwestern University's CE346 Embedded Systems course. The finished device packages a Micro:bit, speaker, arcade button, flex sensor, rotary encoder, and microphone inside a custom 3D-printed enclosure designed to be held and played as a single unit.

The game issues a randomized spoken command and opens a timed input window for one of four actions: press the arcade button for “Bop it,” bend the flex sensor for “Bend it,” turn the Qwiic Twist rotary encoder for “Twist it,” or use the Micro:bit's built-in microphone for “Shout it.” Correct responses advance the score, while a missed or incorrect action ends the run. The command cadence increases as the player progresses to create an adaptive difficulty curve.

Justin Ansell and I shared responsibility for hardware configuration, embedded software, enclosure assembly, and testing. We validated each input independently before integrating the main game loop, then worked through audio-memory limits, command-to-input synchronization, reliable sensor thresholds, and mechanically secure component mounting.`,
		technologies: [
			'Embedded C',
			'Micro:bit',
			'GPIO',
			'I²C',
			'Real-Time Systems',
			'Sensor Integration',
			'Rotary Encoder',
			'Flex Sensor',
			'Audio Playback',
			'3D Printing',
		],
		featuredImage: {
			src: '/projects/bop-it/bop-it-front.jpeg',
			alt: 'Front view of the completed blue DIY Bop It game with a large arcade button, flex sensor, rotary control, and 3D-printed enclosure',
			caption: 'Completed handheld game with its four physical input areas integrated into a custom 3D-printed body.',
			width: 1024,
			height: 768,
		},
		imageGallery: [
			{
				src: '/projects/bop-it/bop-it-angle.jpeg',
				alt: 'Angled view of the blue DIY Bop It enclosure showing the arcade button, flexible arm, handles, and speaker ventilation',
				caption: 'Angled enclosure view showing the portable form factor, controls, and speaker ventilation.',
				width: 480,
				height: 360,
				cropToContent: 'landscape',
			},
		],
		githubUrl: 'https://github.com/nu-ce346-student/f25-final-project-bop-it',
		details: {
			overview: `Built with Justin Ansell for Northwestern's CE346 Embedded Systems course, this project turns four different sensing methods into a cohesive handheld game. It combines timed embedded control, audio feedback, physical interaction, and enclosure design in one playable prototype.`,
			keyFeatures: [
				'Four-command interaction model: Bop, Bend, Twist, and Shout',
				'Arcade button, flex sensor, Qwiic Twist rotary encoder, and built-in Micro:bit microphone',
				'STEMMA speaker for spoken commands and gameplay feedback',
				'Timed input windows, score tracking, and progressively faster command cadence',
				'Custom 3D-printed handheld enclosure with integrated controls and speaker ventilation',
				'GPIO and I²C interfaces coordinated through an embedded game loop',
			],
			challenges: [
				"Fitting command and transition audio within the Micro:bit's available memory",
				'Synchronizing speaker playback with the start and end of each input window',
				'Tuning distinct validation logic and thresholds for four different input types',
				'Mounting the flex sensor and wiring so repeated gameplay would not damage components',
				'Packaging the electronics into a portable enclosure without obstructing interaction',
			],
			results: [
				'Produced a complete handheld prototype with all planned controls integrated into the enclosure',
				'Connected spoken commands, timed response validation, scoring, and increasing difficulty into one gameplay loop',
				'Completed the hardware, embedded software, assembly, and testing as a two-person collaboration',
			]
		}
	},
	{
		slug: 'notiphones',
		title: 'Notiphones Haptic Response Module',
		period: 'Jan 2025 - May 2025',
		shortGist: 'Led the haptic response subsystem for smart headphones, integrating 500 Hz PWM motor control, acknowledgment input, status LEDs, power circuitry, and PCB layout around an ESP32-S3.',
		fullDescription: `Led the design and implementation of the Response Module for Notiphones, a Purdue senior-design project that helps headphone users remain aware of their surroundings. The system was designed to recognize a user's name and deliver a discreet haptic alert without interrupting audio playback.

I owned the subsystem schematic, component selection, embedded control logic, and integration of the vibration motor, acknowledgment button, and visual status indicators. The motor was driven by a 500 Hz PWM signal so its strength could be adjusted from the companion app while remaining noticeable and comfortable. A timed cutoff prevented indefinite operation, and either the physical acknowledgment button or an app command could stop the alert immediately.

I designed power, battery, and status indication behavior; created the response-subsystem schematic; contributed to the routed system PCB; and wrote embedded C control logic and interrupt handlers for the ESP32-S3. Testing used an oscilloscope and multimeter to verify PWM behavior, current draw, alert timing, button response, and safe vibration intensity.

During cross-subsystem integration, manual vibration requests, acknowledgment events, and vibration-strength updates traveled between the Flutter app and ESP32-S3 over BLE. Team measurements recorded 0.34-second manual vibration requests, 0.19-second acknowledgment messages, and 0.54-second strength adjustments.

The response hardware, app control, and BLE communication paths were operational in the final prototype. The personalized CNN-LSTM wake-word model could be trained and transferred, but it was not executed end-to-end on the ESP32-S3 because required TensorFlow Lite modules were still missing. The final system was therefore a functional haptic and communications prototype with remaining work in on-device ML deployment and fully integrated battery validation.`,
		technologies: [
			'Embedded C',
			'ESP32-S3',
			'PWM',
			'PCB Design',
			'Schematic Design',
			'KiCad',
			'Bluetooth LE',
			'GPIO',
			'Interrupts',
			'LiPo Battery',
			'Hardware Design',
			'Oscilloscope',
			'System Integration',
		],
		featuredImage: {
			src: '/projects/notiphones/notiphones-pcb-layout.png',
			alt: 'KiCad PCB layout for the Notiphones prototype, showing the ESP32-S3, routed power and signal traces, response controls, motor connection, and antenna keepout',
			caption: 'Routed Notiphones system PCB integrating the ESP32-S3, response controls, power circuitry, and motor interface.',
			width: 1224,
			height: 1584,
			cropToContent: true,
		},
		documents: [
			{
				title: 'Notiphones PCB Layout',
				description: 'Full-resolution PDF of the routed KiCad PCB design.',
				href: '/projects/notiphones/notiphones-pcb-layout.pdf',
			},
		],
		details: {
			overview: `Completed by Purdue ECE Senior Design Team 15, Notiphones paired an ESP32-S3, microphone, personalized wake-word model, Flutter app, and headphone-mounted response hardware. I led the Response Module and supported final PCB and cross-subsystem integration.`,
			keyFeatures: [
				'500 Hz PWM vibration control with app-adjustable intensity',
				'Physical and app-based acknowledgment that immediately stops active alerts',
				'Power, battery-level, and alert-state LED indication',
				'Rechargeable 3.7 V LiPo power architecture',
				'Custom schematic and routed PCB contribution in KiCad',
				'ESP32-S3 embedded C control logic with GPIO and interrupt handling',
				'BLE integration for remote triggering, acknowledgment, and strength control',
			],
			challenges: [
				'Balancing perceptible haptic feedback with comfort and power consumption',
				'Debouncing acknowledgment input and coordinating timed alert state transitions',
				'Routing a compact mixed-signal PCB around the ESP32-S3 antenna keepout',
				'Integrating independently developed response, BLE, app, and ML subsystems',
				'Completing on-device TensorFlow Lite support for the wake-word model',
				'Validating battery performance in the fully integrated final assembly',
			],
			results: [
				'Demonstrated reliable motor activation, timed cutoff, and immediate acknowledgment stop',
				'Verified stable 500 Hz PWM control and status-indicator behavior',
				'Met sub-second integrated control-message targets: 0.34 s trigger, 0.19 s acknowledgment, and 0.54 s strength update',
				'Completed and reviewed the system PCB layout for continued hardware development',
				'Validated the response hardware, BLE control, and app interaction while documenting remaining ML and battery work',
			]
		}
	},
	{
		slug: 'socet-project',
		title: 'Caravel eFabless SoC Daughter Board',
		period: 'Sep 2024 - May 2025',
		shortGist: 'Designed an M.2 daughter-board schematic for Caravel eFabless chiplet integration, combining power regulation, clock generation, flash memory, and USB-UART interfaces.',
		fullDescription: `Designed and developed a daughter-board schematic for integrating the Caravel eFabless chiplet within Purdue's SoCET (System-on-Chip Engineering Team). The modular M.2 interface combines power delivery and communication in a compact, standardized form factor.

I owned the M.2 connector interface and collaborated with Seokjae Kim on the remaining system integration. The design incorporated TLV761 voltage regulators for 1.8 V and 3.3 V rails, a 10 MHz DSC6001 MEMS oscillator, W25Q32JV flash memory, and an FT232H USB-to-UART bridge with TXS0101 level shifting for the Caravel 1.8 V UART lines.

We reviewed component datasheets, divided subsystem ownership, and refined the integrated schematic through design reviews with project leads. Electrical Rule Check issues involving power flags and floating inputs were resolved, and pin direction, voltage-domain separation, and signal connectivity were verified.

The final schematic completed interface-level matching for Caravel's SPI, UART, and I²S subsystems. The project concluded before PCB layout and fabrication, leaving a reviewed schematic ready to support future layout, prototyping, and hardware testing.`,
		technologies: [
			'Schematic Design',
			'KiCAD',
			'M.2',
			'Caravel',
			'SPI',
			'UART',
			'I²S',
			'Power Regulation',
			'USB',
			'ERC',
			'eFabless',
		],
		featuredImage: {
			src: '/projects/socet-conference-poster.png',
			alt: 'Spring 2025 Purdue VIP conference poster for the Caravel eFabless daughter-board project, showing the project overview, methods, results, conclusion, and key circuit schematics',
			caption: 'Presented with Seokjae Kim at the Purdue VIP Spring 2025 Conference.',
			width: 3456,
			height: 2304,
		},
		details: {
			overview: `Completed as part of Purdue University's VIP SoCET team, this project focused on a modular daughter-board schematic for Caravel eFabless chiplet integration. I was responsible for the M.2 connector interface and shared responsibility for integrating the remaining subsystems.`,
			keyFeatures: [
				'Standardized M.2 connector interface for communication and power delivery',
				'TLV761 regulation for 1.8 V and 3.3 V power domains',
				'10 MHz DSC6001 MEMS clock source',
				'W25Q32JV flash-memory integration',
				'FT232H USB-to-UART bridge with TXS0101 level shifting',
				'Interface-level matching for SPI, UART, and I²S subsystems',
			],
			challenges: [
				'Integrating independently owned subsystems into one coherent schematic',
				'Separating and translating 1.8 V and 3.3 V signal domains',
				'Resolving ERC power-flag and floating-input issues',
				'Verifying pin direction and signal connectivity across Caravel interfaces',
			],
			results: [
				'Integrated all planned components into the final schematic',
				'Passed Electrical Rule Check after resolving power and input issues',
				'Verified voltage-domain separation, pin direction, and signal connectivity',
				'Produced a reviewed foundation for future PCB layout and testing',
			]
		}
	},
	{
		slug: 'x15-power-conversion',
		title: 'X15 Power Conversion Board',
		period: 'Sep 2022 - Feb 2023',
		shortGist: 'Designed a stacked power-conversion PCB for Purdue IEEE ROV, converting a nominal 12 V input into regulated 5.2 V/3 A and 3.3 V/1 A rails.',
		fullDescription: `Designed the X15 Power Conversion Board for the Purdue IEEE Remotely Operated Vehicle team. The board stacks above the X15 Power Distribution Board, known as Brickstribution, and converts its nominal 12 V supply into the regulated rails required by the vehicle's Raspberry Pi shield and microcontrollers.

The power architecture uses an LM2679SX-ADJ/NOPB buck converter to generate 5.2 V at up to 3 A, followed by an AZ1117CR-3.3TRG1 linear regulator that supplies 3.3 V at up to 1 A. I used the component datasheets to calculate the feedback and current-limit networks, select supporting capacitors and a Schottky diode, and document the design in the bill of materials.

I replaced unavailable X14-generation components with parts that were in stock, affordable, well documented, and practical for hand assembly. The LM2679's seven-pin TO-263 package reduced external-component complexity and made the converter more approachable to solder than several alternatives considered during research.

Mechanical and electrical integration required coordinating connector locations with the Power Distribution Board designer so both stacked boards aligned correctly. I reduced the board outline, preserved clearance for distribution-board connectors, routed high-current power paths, added ground vias and test points, and incorporated indicators for the 12 V, 5.2 V, and 3.3 V rails.

The project produced a reviewed schematic, calculated component network, bill of materials, and routed PCB revision. The documentation also records design-for-manufacturing improvements for a future revision, including larger test points and labels, increased spacing around small buck-converter components, additional power and ground breakouts, and further board-size reduction.`,
		technologies: [
			'PCB Design',
			'Autodesk EAGLE',
			'Power Electronics',
			'DC-DC Conversion',
			'Buck Converter',
			'Linear Regulator',
			'Datasheet Analysis',
			'BOM',
			'Design for Manufacturing',
			'ROV',
		],
		githubUrl: 'https://github.com/purduerov/X15-Conversion',
		featuredImage: {
			src: '/projects/power-conversion/x15-pcb-preview.png',
			alt: 'Routed X15 power conversion PCB showing the buck converter, linear regulator, output connectors, test points, ground vias, and stacked-board outline',
			caption: 'Routed X15 power-conversion PCB for the Purdue IEEE ROV electrical stack.',
			width: 1192,
			height: 1684,
			cropToContent: 'square',
		},
		documents: [
			{
				title: 'X15 PCB Design',
				description: 'Full PDF containing the routed board and detailed PCB views.',
				href: '/projects/power-conversion/x15-pcb-design.pdf',
			},
			{
				title: 'Power Conversion Slides',
				description: 'Design presentation covering requirements, calculations, schematics, layout, and remaining work.',
				href: '/projects/power-conversion/x15-power-conversion-slides.pdf',
			},
		],
		details: {
			overview: `As a member of the Purdue IEEE ROV electrical team, I owned the X15 power-conversion board revision and collaborated with the Power Distribution Board team to integrate it into the vehicle's stacked electrical architecture.`,
			keyFeatures: [
				'Nominal 12 V input from the X15 Power Distribution Board',
				'LM2679 adjustable buck stage producing 5.2 V at up to 3 A',
				'AZ1117 linear-regulator stage producing 3.3 V at up to 1 A',
				'Stacked-board connector alignment and mechanical-clearance coordination',
				'High-current routing with ground vias and accessible rail test points',
				'Visual indicators for the 12 V, 5.2 V, and 3.3 V rails',
				'Component selection driven by availability, cost, solderability, and datasheet guidance',
			],
			challenges: [
				'Replacing out-of-stock components from the previous X14 design',
				'Aligning stacked connectors while reducing the board outline',
				'Routing compact high-current power paths around mechanical constraints',
				'Balancing component density with hand-soldering and test access',
				'Improving labels, test-point size, and power breakout access for future revisions',
			],
			results: [
				'Completed the converter schematic and datasheet-based feedback calculations',
				'Selected and documented the buck converter, regulator, protection, and filtering components',
				'Delivered a routed PCB revision aligned with the X15 Power Distribution Board',
				'Added test points, ground vias, rail indicators, and board-review feedback across iterative revisions',
				'Produced design documentation and a public repository for manufacturing handoff and future improvement',
			]
		}
	}
];

export function getProjectBySlug(slug: string): Project | undefined {
	return projects.find((project) => project.slug === slug);
}

export function getAllProjectSlugs(): string[] {
	return projects.map((project) => project.slug);
}
