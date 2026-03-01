export interface Project {
	slug: string;
	title: string;
	period: string;
	shortGist: string;
	fullDescription: string;
	technologies: string[];
	githubUrl?: string;
	details?: {
		overview?: string;
		keyFeatures?: string[];
	};
}

export const projects: Project[] = [
	{
		slug: 'embedded-webcam-pcb',
		title: 'Embedded Webcam PCB Design',
		period: 'Jan 2026 – Present',
		shortGist: 'Designed a compact 2-layer embedded webcam PCB in KiCad with custom schematic symbols, camera interface circuitry, multi-rail power regulation, and manufacturing-ready Gerber files.',
		fullDescription: `A compact 2-layer embedded webcam PCB designed in KiCad as part of an Electrical Engineering project at Northwestern University.

The board was designed from scratch, including developing schematics and performing full board routing to produce a manufacturable design that meets strict mechanical and layout constraints.

Custom schematic symbols and PCB footprints were created from datasheets, integrating camera interface circuitry, multi-rail power regulation, programming headers, and debug interfaces to ensure electrical compatibility.

Manufacturing-ready Gerber files were generated and ERC/DRC checks were validated to ensure fabrication compliance and assembly accuracy.`,
		technologies: [
			'KiCad',
			'PCB Design',
			'Embedded C',
			'Camera Interface',
			'Power Regulation',
			'Schematic Design',
			'Gerber Files',
			'ERC/DRC'
		],
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
			]
		}
	},
	{
		slug: 'diy-bop-it',
		title: 'DIY "Bop It!"',
		period: 'Sep 2025 - Dec 2025',
		shortGist: 'Programmed Micro:bit in embedded C to create a real-time sensor-based game using rotary encoder, flex sensor, button, microphone, and IMU via GPIO and I²C interfaces.',
		fullDescription: `A real-time sensor-based game implementation on the Micro:bit microcontroller, recreating the classic "Bop It!" game mechanics. The project involved programming the Micro:bit in embedded C to run a game loop that responds to various sensor inputs in real-time.

The game uses multiple sensors connected via GPIO and I²C: a rotary encoder for twisting actions, a flex sensor for bending, a button for pressing, a microphone for sound detection, and an IMU (Inertial Measurement Unit) for motion detection. The game loop must process these inputs with low latency while managing tight memory and timing constraints.

The implementation required synchronized audio playback alongside latency-critical input validation, ensuring the game responds accurately to user actions within the required time windows. This project demonstrated skills in embedded systems programming, real-time systems design, and hardware-software integration.`,
		technologies: [
			'Embedded C',
			'Micro:bit',
			'GPIO',
			'I²C',
			'Real-time Systems',
			'Sensor Integration',
			'Rotary Encoder',
			'IMU',
			'Microcontroller Programming'
		],
		githubUrl: 'https://github.com/nu-ce346-student/f25-final-project-bop-it',
		details: {
			overview: `This project was completed as part of CE346 Embedded Systems course at Northwestern University. The goal was to create an interactive game that demonstrates real-time sensor processing and hardware integration.`,
			keyFeatures: [
				'Real-time game loop with multiple sensor inputs',
				'Integration of 5+ different sensor types (rotary encoder, flex sensor, button, microphone, IMU)',
				'Synchronized audio playback with game actions',
				'Low-latency input validation under memory and timing constraints',
				'GPIO and I²C communication protocols'
			]
		}
	},
	{
		slug: 'notiphones',
		title: 'Embedded Systems Design Lead - Notiphones',
		period: 'Jan 2025 - May 2025',
		shortGist: 'Designed and programmed ESP32-S3-based wearable haptic headphone module with sub-1s vibration feedback triggered by wake-word detection via BLE communication.',
		fullDescription: `Led the embedded systems design for a wearable haptic headphone module that provides vibration feedback when a wake-word is detected. The system uses an ESP32-S3 microcontroller to deliver sub-1 second latency vibration feedback, creating a seamless user experience for hearing-impaired users or those who prefer haptic notifications.

The project involved designing and fabricating a custom PCB with PWM-driven vibration motor control, RGB LED indicators for visual feedback, USB-C power management circuit, and BLE (Bluetooth Low Energy) communication for receiving wake-word detection signals from the ML model running on a companion device.

I developed low-level drivers for PWM motor control to achieve precise vibration patterns, RGB LED control for status indication, USB-C power delivery, and BLE communication stack. The system required careful bring-up and debugging of cross-team integration between the ML wake-word detection model and the hardware interfaces, ensuring reliable real-time response.

As the design lead, I also led schematic reviews, coordinated with the mechanical team for enclosure design, and managed system integration testing.`,
		technologies: [
			'Embedded C',
			'ESP32-S3',
			'PCB Design',
			'BLE',
			'PWM',
			'USB-C',
			'Hardware Design',
			'Oscilloscope',
			'System Integration'
		],
		details: {
			overview: `This project was completed as part of Team 15's Notiphones project at Purdue University. The goal was to create a wearable device that provides haptic feedback when wake-words are detected, improving accessibility for hearing-impaired users.`,
			keyFeatures: [
				'Sub-1 second latency vibration feedback',
				'ESP32-S3 microcontroller for processing and communication',
				'Custom PCB design with PWM motor control, RGB LEDs, and USB-C power',
				'BLE communication for receiving wake-word detection signals',
				'Integration with ML wake-word detection model',
				'Real-time response system'
			]
		}
	},
	{
		slug: 'socet-project',
		title: 'SoCET Project - System-on-Chip Design',
		period: 'Sep 2024 - Jan 2025',
		shortGist: 'Designed compact 2-layer M.2 daughter board for Caravel eFabless SoC with power regulation, clock generation, memory, and USB-UART interfaces. Validated SPI, UART, and I²S protocols.',
		fullDescription: `Designed and developed a System-on-Chip (SoC) daughter board for the Caravel eFabless SoC platform. The project involved creating a compact 2-layer M.2 form factor board that integrates all necessary components for SoC bring-up and development.

The board design included power regulation circuits to provide stable voltage rails for the SoC, clock generation circuitry, memory interfaces, and USB-UART communication for debugging and programming. The design required careful attention to signal integrity, power distribution, and thermal management.

I wrote SystemVerilog modules for RISC-V SoC functionality, implementing various IP blocks and validating their operation. The validation process involved extensive testing using ERC (Electrical Rule Check) analysis, signal direction analysis, and hardware bring-up testing.

The project validated multiple communication protocols including SPI (Serial Peripheral Interface), UART (Universal Asynchronous Receiver-Transmitter), and I²S (Inter-IC Sound) interfaces, ensuring proper functionality of the SoC and its peripherals.`,
		technologies: [
			'SystemVerilog',
			'RISC-V',
			'PCB Design',
			'KiCAD',
			'SoC',
			'SPI',
			'UART',
			'I²S',
			'Hardware Validation',
			'Caravel',
			'eFabless'
		],
		details: {
			overview: `This project was completed as part of the SoCET (System-on-Chip Engineering Team) at Purdue University. The goal was to design and validate a daughter board for the Caravel eFabless SoC platform.`,
			keyFeatures: [
				'Compact 2-layer M.2 form factor board design',
				'Power regulation and distribution for SoC',
				'Clock generation and distribution',
				'Memory interfaces',
				'USB-UART for programming and debugging',
				'SystemVerilog modules for RISC-V SoC functionality',
				'Protocol validation: SPI, UART, I²S'
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

