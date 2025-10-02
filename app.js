// KMRL Digital Twin Application
class KMRLDigitalTwin {
    constructor() {
        this.stations = [
            {"id": 1, "name": "Aluva", "malayalam": "ആലുവ", "position": {"x": 50, "y": 100}, "type": "terminal", "platform": "side", "operational": true},
            {"id": 2, "name": "Pulinchodu", "malayalam": "പুളിഞ്ചോട്", "position": {"x": 80, "y": 120}, "type": "regular", "platform": "side", "operational": true},
            {"id": 3, "name": "Companypady", "malayalam": "കമ്പനി പടി", "position": {"x": 110, "y": 140}, "type": "regular", "platform": "side", "operational": true},
            {"id": 4, "name": "Ambattukavu", "malayalam": "അമ്പാട്ടുകാവ്", "position": {"x": 140, "y": 160}, "type": "regular", "platform": "side", "operational": true},
            {"id": 5, "name": "Muttom", "malayalam": "മുട്ടം", "position": {"x": 170, "y": 180}, "type": "depot", "platform": "side", "operational": true},
            {"id": 6, "name": "Kalamassery", "malayalam": "കളമശ്ശേരി", "position": {"x": 200, "y": 200}, "type": "interchange", "platform": "side", "operational": true},
            {"id": 7, "name": "Cochin University", "malayalam": "കൊച്ചിൻ സർവ്വകലാശാല", "position": {"x": 230, "y": 220}, "type": "regular", "platform": "side", "operational": true},
            {"id": 8, "name": "Pathadipalam", "malayalam": "പത്തടിപ്പാലം", "position": {"x": 260, "y": 240}, "type": "regular", "platform": "side", "operational": true},
            {"id": 9, "name": "Edappally", "malayalam": "ഇടപ്പള്ളി", "position": {"x": 290, "y": 260}, "type": "regular", "platform": "side", "operational": true},
            {"id": 10, "name": "Changampuzha Park", "malayalam": "ചങ്ങമ്പുഴ പാർക്ക്", "position": {"x": 320, "y": 280}, "type": "regular", "platform": "side", "operational": true},
            {"id": 11, "name": "Palarivattom", "malayalam": "പാലരിവട്ടം", "position": {"x": 350, "y": 300}, "type": "regular", "platform": "side", "operational": true},
            {"id": 12, "name": "JLN Stadium", "malayalam": "ജെ.എൽ.എൻ സ്റ്റേഡിയം", "position": {"x": 380, "y": 320}, "type": "regular", "platform": "side", "operational": true},
            {"id": 13, "name": "Kaloor", "malayalam": "കലൂർ", "position": {"x": 410, "y": 340}, "type": "regular", "platform": "side", "operational": true},
            {"id": 14, "name": "Town Hall", "malayalam": "ടൗൺ ഹാൾ", "position": {"x": 440, "y": 360}, "type": "regular", "platform": "side", "operational": true},
            {"id": 15, "name": "MG Road", "malayalam": "എം.ജി റോഡ്", "position": {"x": 470, "y": 380}, "type": "central", "platform": "side", "operational": true},
            {"id": 16, "name": "Maharajas College", "malayalam": "മഹാരാജാസ് കോളേജ്", "position": {"x": 500, "y": 400}, "type": "regular", "platform": "side", "operational": true},
            {"id": 17, "name": "Ernakulam South", "malayalam": "എറണാകുളം സൗത്ത്", "position": {"x": 530, "y": 420}, "type": "regular", "platform": "side", "operational": true},
            {"id": 18, "name": "Kadavanthra", "malayalam": "കടവന്ത്ര", "position": {"x": 560, "y": 440}, "type": "regular", "platform": "side", "operational": true},
            {"id": 19, "name": "Elamkulam", "malayalam": "ഇലംകുളം", "position": {"x": 590, "y": 460}, "type": "regular", "platform": "side", "operational": true},
            {"id": 20, "name": "Vyttila", "malayalam": "വൈറ്റില", "position": {"x": 620, "y": 480}, "type": "interchange", "platform": "side", "operational": true},
            {"id": 21, "name": "Thykoodam", "malayalam": "തൈക്കൂടം", "position": {"x": 650, "y": 500}, "type": "regular", "platform": "side", "operational": true},
            {"id": 22, "name": "Petta", "malayalam": "പേട്ട", "position": {"x": 680, "y": 520}, "type": "regular", "platform": "side", "operational": true},
            {"id": 23, "name": "Vadakkekotta", "malayalam": "വടക്കേക്കോട്ട", "position": {"x": 710, "y": 540}, "type": "regular", "platform": "side", "operational": true},
            {"id": 24, "name": "SN Junction", "malayalam": "എസ്.എൻ ജംഗ്ഷൻ", "position": {"x": 740, "y": 560}, "type": "regular", "platform": "side", "operational": true},
            {"id": 25, "name": "Tripunithura Terminal", "malayalam": "തൃപ്പൂണിത്തുറ ടെർമിനൽ", "position": {"x": 770, "y": 580}, "type": "terminal", "platform": "side", "operational": true}
        ];

        this.trains = [
            {"id": "T001", "name": "KRISHNA", "malayalam": "കൃഷ്ണ", "currentStation": 5, "speed": 65, "passengers": 420, "status": "running", "direction": "south"},
            {"id": "T002", "name": "TAPTI", "malayalam": "തപ്തി", "currentStation": 12, "speed": 72, "passengers": 380, "status": "running", "direction": "north"},
            {"id": "T003", "name": "NILA", "malayalam": "നിള", "currentStation": 18, "speed": 58, "passengers": 450, "status": "running", "direction": "south"},
            {"id": "T004", "name": "SARAYU", "malayalam": "സരയു", "currentStation": 3, "speed": 0, "passengers": 150, "status": "stopped", "direction": "south"},
            {"id": "T005", "name": "ARUTH", "malayalam": "അരുത്", "currentStation": 20, "speed": 68, "passengers": 390, "status": "running", "direction": "north"},
            {"id": "T006", "name": "VAIGAI", "malayalam": "വൈഗൈ", "currentStation": 8, "speed": 75, "passengers": 320, "status": "running", "direction": "south"},
            {"id": "T007", "name": "JHANAVI", "malayalam": "ജാഹ്നവി", "currentStation": 15, "speed": 62, "passengers": 410, "status": "running", "direction": "north"},
            {"id": "T008", "name": "DHWANIL", "malayalam": "ധ്വനിൽ", "currentStation": 22, "speed": 70, "passengers": 360, "status": "running", "direction": "south"},
            {"id": "T009", "name": "BHAVANI", "malayalam": "ഭവാനി", "currentStation": 6, "speed": 0, "passengers": 200, "status": "maintenance", "direction": "north"},
            {"id": "T010", "name": "PADMA", "malayalam": "പത്മ", "currentStation": 11, "speed": 64, "passengers": 430, "status": "running", "direction": "south"},
            {"id": "T011", "name": "MANDAKINI", "malayalam": "മന്ദാകിനി", "currentStation": 17, "speed": 73, "passengers": 350, "status": "running", "direction": "north"},
            {"id": "T012", "name": "YAMUNA", "malayalam": "യമുന", "currentStation": 24, "speed": 55, "passengers": 480, "status": "running", "direction": "south"},
            {"id": "T013", "name": "PERIYAR", "malayalam": "പെരിയാർ", "currentStation": 1, "speed": 0, "passengers": 120, "status": "boarding", "direction": "south"},
            {"id": "T014", "name": "KABANI", "malayalam": "കബനി", "currentStation": 14, "speed": 69, "passengers": 400, "status": "running", "direction": "north"},
            {"id": "T015", "name": "VAAYU", "malayalam": "വായു", "currentStation": 9, "speed": 71, "passengers": 340, "status": "running", "direction": "south"},
            {"id": "T016", "name": "KAVERI", "malayalam": "കാവേരി", "currentStation": 19, "speed": 66, "passengers": 370, "status": "running", "direction": "north"},
            {"id": "T017", "name": "SHIRIYA", "malayalam": "ശിരിയ", "currentStation": 7, "speed": 74, "passengers": 310, "status": "running", "direction": "south"},
            {"id": "T018", "name": "PAMPA", "malayalam": "പമ്പ", "currentStation": 13, "speed": 60, "passengers": 440, "status": "running", "direction": "north"},
            {"id": "T019", "name": "NARMADA", "malayalam": "നർമദ", "currentStation": 21, "speed": 67, "passengers": 385, "status": "running", "direction": "south"},
            {"id": "T020", "name": "MAHE", "malayalam": "മാഹി", "currentStation": 25, "speed": 0, "passengers": 90, "status": "boarding", "direction": "north"}
        ];

        this.isSimulationRunning = true;
        this.simulationSpeed = 1;
        this.charts = {};
        this.trainClickHandlers = new Map(); // Store click handlers for proper cleanup
        
        this.init();
    }

    init() {
        this.setupTabNavigation();
        this.updateTime();
        this.setupRouteMap();
        this.initializeCharts();
        this.updateTrainInfo();
        this.setupControllers();
        this.startSimulation();
        this.updateOperationsPanel();
        
        // Update every 2 seconds
        setInterval(() => this.updateAll(), 2000);
    }

    setupTabNavigation() {
        const tabButtons = document.querySelectorAll('.tab-button');
        const tabPanes = document.querySelectorAll('.tab-pane');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetTab = button.dataset.tab;
                
                // Update active states
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabPanes.forEach(pane => pane.classList.remove('active'));
                
                button.classList.add('active');
                document.getElementById(targetTab).classList.add('active');
            });
        });
    }

    updateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-IN', { 
            timeZone: 'Asia/Kolkata',
            hour12: false 
        });
        document.getElementById('current-time').textContent = timeString;
        
        setTimeout(() => this.updateTime(), 1000);
    }

    setupRouteMap() {
        const svg = document.getElementById('route-svg');
        
        // Clear existing content
        svg.innerHTML = `
            <defs>
                <linearGradient id="trackGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style="stop-color:#1d4ed8"/>
                    <stop offset="100%" style="stop-color:#059669"/>
                </linearGradient>
            </defs>
        `;
        
        // Draw track line
        const pathData = this.stations.map((station, index) => {
            const command = index === 0 ? 'M' : 'L';
            return `${command} ${station.position.x} ${station.position.y}`;
        }).join(' ');

        const trackLine = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        trackLine.setAttribute('d', pathData);
        trackLine.setAttribute('class', 'track-line');
        svg.appendChild(trackLine);

        // Add stations
        this.stations.forEach(station => {
            const stationGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            stationGroup.setAttribute('class', 'station');
            stationGroup.setAttribute('data-station-id', station.id);

            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', station.position.x);
            circle.setAttribute('cy', station.position.y);
            circle.setAttribute('r', station.type === 'terminal' ? 12 : station.type === 'interchange' ? 10 : 8);
            circle.setAttribute('class', 'station-circle');
            
            if (station.type === 'terminal') {
                circle.setAttribute('fill', '#dc2626');
            } else if (station.type === 'interchange') {
                circle.setAttribute('fill', '#059669');
            } else if (station.type === 'depot') {
                circle.setAttribute('fill', '#d97706');
            }

            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', station.position.x);
            text.setAttribute('y', station.position.y - 20);
            text.setAttribute('class', 'station-text');
            text.textContent = station.name;

            stationGroup.appendChild(circle);
            stationGroup.appendChild(text);
            svg.appendChild(stationGroup);
        });

        // Add trains
        this.updateTrainPositions();
    }

    updateTrainPositions() {
        const svg = document.getElementById('route-svg');
        
        // Remove existing train markers and clear handlers
        const existingTrains = svg.querySelectorAll('.train-marker');
        existingTrains.forEach(trainElement => {
            const trainId = trainElement.getAttribute('data-train-id');
            if (this.trainClickHandlers.has(trainId)) {
                trainElement.removeEventListener('click', this.trainClickHandlers.get(trainId));
                this.trainClickHandlers.delete(trainId);
            }
            trainElement.remove();
        });

        // Add current train positions with proper event handlers
        this.trains.forEach(train => {
            if (train.status === 'maintenance') return;
            
            const station = this.stations.find(s => s.id === train.currentStation);
            if (!station) return;

            const trainGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            trainGroup.setAttribute('class', 'train-marker');
            trainGroup.setAttribute('data-train-id', train.id);
            trainGroup.style.cursor = 'pointer';

            const trainRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
            trainRect.setAttribute('x', station.position.x - 8);
            trainRect.setAttribute('y', station.position.y - 4);
            trainRect.setAttribute('width', 16);
            trainRect.setAttribute('height', 8);
            trainRect.setAttribute('fill', train.status === 'running' ? '#1d4ed8' : '#dc2626');
            trainRect.setAttribute('rx', 2);

            const trainText = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            trainText.setAttribute('x', station.position.x);
            trainText.setAttribute('y', station.position.y + 20);
            trainText.setAttribute('class', 'station-text');
            trainText.setAttribute('font-size', '9');
            trainText.textContent = train.name;

            trainGroup.appendChild(trainRect);
            trainGroup.appendChild(trainText);
            
            // Create and store click handler
            const clickHandler = (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.showTrainDetails(train);
            };
            
            this.trainClickHandlers.set(train.id, clickHandler);
            trainGroup.addEventListener('click', clickHandler);
            
            svg.appendChild(trainGroup);
        });
    }

    showTrainDetails(train) {
        const modal = document.getElementById('train-modal');
        const modalTitle = document.getElementById('modal-train-name');
        const modalBody = document.getElementById('modal-train-details');
        
        const station = this.stations.find(s => s.id === train.currentStation);
        
        modalTitle.textContent = `${train.name} (${train.malayalam})`;
        modalBody.innerHTML = `
            <div class="detail-row">
                <span class="detail-label">Train ID:</span>
                <span class="detail-value">${train.id}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Current Station:</span>
                <span class="detail-value">${station ? station.name : 'Unknown'}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Speed:</span>
                <span class="detail-value">${train.speed} km/h</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Passengers:</span>
                <span class="detail-value">${train.passengers}/500</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Status:</span>
                <span class="detail-value status--${train.status === 'running' ? 'success' : train.status === 'stopped' ? 'warning' : 'info'}">${train.status.toUpperCase()}</span>
            </div>
            <div class="detail-row">
                <span class="detail-label">Direction:</span>
                <span class="detail-value">${train.direction === 'south' ? 'Aluva → Tripunithura' : 'Tripunithura → Aluva'}</span>
            </div>
        `;
        
        modal.classList.remove('hidden');
    }

    setupControllers() {
        // Modal close functionality
        const modalClose = document.querySelector('.modal-close');
        const modal = document.getElementById('train-modal');
        
        modalClose.addEventListener('click', () => {
            modal.classList.add('hidden');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.add('hidden');
            }
        });

        // Simulation controls
        const playPauseBtn = document.getElementById('play-pause-btn');
        const resetBtn = document.getElementById('reset-simulation');
        const speedSlider = document.getElementById('speed-slider');
        const speedDisplay = document.getElementById('speed-display');

        playPauseBtn.addEventListener('click', () => {
            this.isSimulationRunning = !this.isSimulationRunning;
            playPauseBtn.textContent = this.isSimulationRunning ? '⏸️ Pause Simulation' : '▶️ Resume Simulation';
        });

        resetBtn.addEventListener('click', () => {
            this.resetSimulation();
        });

        speedSlider.addEventListener('input', (e) => {
            this.simulationSpeed = parseFloat(e.target.value);
            speedDisplay.textContent = `${this.simulationSpeed}x`;
        });
    }

    initializeCharts() {
        // Train Distribution Chart
        const trainDistCtx = document.getElementById('train-distribution-chart').getContext('2d');
        this.charts.trainDistribution = new Chart(trainDistCtx, {
            type: 'pie',
            data: {
                labels: ['Running', 'Stopped', 'Boarding', 'Maintenance'],
                datasets: [{
                    data: [16, 1, 2, 1],
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });

        // Energy Overview Chart
        const energyOverviewCtx = document.getElementById('energy-overview-chart').getContext('2d');
        this.charts.energyOverview = new Chart(energyOverviewCtx, {
            type: 'doughnut',
            data: {
                labels: ['Solar Power', 'Grid Power', 'Available'],
                datasets: [{
                    data: [11, 5.5, 3.5],
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });

        // Passenger Flow Chart
        const passengerFlowCtx = document.getElementById('passenger-flow-chart').getContext('2d');
        this.charts.passengerFlow = new Chart(passengerFlowCtx, {
            type: 'line',
            data: {
                labels: ['06:00', '09:00', '12:00', '15:00', '18:00', '21:00'],
                datasets: [{
                    label: 'Passenger Count',
                    data: [15000, 45000, 25000, 30000, 55000, 20000],
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Station Utilization Chart
        const stationUtilizationCtx = document.getElementById('station-utilization-chart').getContext('2d');
        this.charts.stationUtilization = new Chart(stationUtilizationCtx, {
            type: 'bar',
            data: {
                labels: ['Aluva', 'MG Road', 'Vyttila', 'Tripunithura', 'Kalamassery'],
                datasets: [{
                    label: 'Daily Passengers',
                    data: [12000, 18000, 15000, 8000, 14000],
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        // Train Performance Chart
        const trainPerformanceCtx = document.getElementById('train-performance-chart').getContext('2d');
        this.charts.trainPerformance = new Chart(trainPerformanceCtx, {
            type: 'radar',
            data: {
                labels: ['Speed', 'Punctuality', 'Capacity', 'Energy Efficiency', 'Reliability'],
                datasets: [{
                    label: 'Performance Metrics',
                    data: [85, 99, 78, 92, 96],
                    backgroundColor: 'rgba(31, 184, 205, 0.2)',
                    borderColor: '#1FB8CD',
                    pointBackgroundColor: '#1FB8CD'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 100
                    }
                }
            }
        });

        // Revenue Chart
        const revenueCtx = document.getElementById('revenue-chart').getContext('2d');
        this.charts.revenue = new Chart(revenueCtx, {
            type: 'pie',
            data: {
                labels: ['Regular Tickets', 'Smart Cards', 'Monthly Pass', 'Tourist Packages'],
                datasets: [{
                    data: [45, 35, 15, 5],
                    backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });

        // Energy Mix Chart
        const energyMixCtx = document.getElementById('energy-mix-chart').getContext('2d');
        this.charts.energyMix = new Chart(energyMixCtx, {
            type: 'doughnut',
            data: {
                labels: ['Solar Power (55%)', 'Grid Power (45%)'],
                datasets: [{
                    data: [55, 45],
                    backgroundColor: ['#1FB8CD', '#FFC185']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                }
            }
        });

        // Energy Consumption Chart
        const energyConsumptionCtx = document.getElementById('energy-consumption-chart').getContext('2d');
        this.charts.energyConsumption = new Chart(energyConsumptionCtx, {
            type: 'line',
            data: {
                labels: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00'],
                datasets: [{
                    label: 'Energy Consumption (MW)',
                    data: [8, 6, 18, 14, 20, 16],
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 25
                    }
                }
            }
        });
    }

    updateTrainInfo() {
        const trainList = document.getElementById('train-list');
        if (!trainList) return;

        trainList.innerHTML = '';
        
        this.trains.forEach(train => {
            const station = this.stations.find(s => s.id === train.currentStation);
            const trainItem = document.createElement('div');
            trainItem.className = 'train-item';
            trainItem.innerHTML = `
                <div>
                    <div class="train-name">${train.name}</div>
                    <div class="train-details">${station ? station.name : 'Unknown'} • ${train.speed} km/h • ${train.passengers} passengers</div>
                </div>
                <div class="status status--${train.status === 'running' ? 'success' : train.status === 'stopped' ? 'warning' : 'info'}">${train.status}</div>
            `;
            
            trainItem.addEventListener('click', () => this.showTrainDetails(train));
            trainList.appendChild(trainItem);
        });
    }

    updateOperationsPanel() {
        const fleetStatus = document.getElementById('fleet-status');
        if (!fleetStatus) return;

        fleetStatus.innerHTML = '';
        
        this.trains.forEach(train => {
            const fleetItem = document.createElement('div');
            fleetItem.className = 'fleet-item';
            fleetItem.innerHTML = `
                <div class="fleet-name">${train.name}</div>
                <div class="fleet-status status--${train.status === 'running' ? 'success' : train.status === 'stopped' ? 'warning' : 'info'}">${train.status}</div>
            `;
            
            fleetItem.addEventListener('click', () => this.showTrainDetails(train));
            fleetStatus.appendChild(fleetItem);
        });
    }

    startSimulation() {
        setInterval(() => {
            if (this.isSimulationRunning) {
                this.simulateTrainMovement();
            }
        }, 3000 / this.simulationSpeed);
    }

    simulateTrainMovement() {
        this.trains.forEach(train => {
            if (train.status === 'running') {
                // Move trains along the route
                if (train.direction === 'south') {
                    if (train.currentStation < 25) {
                        train.currentStation++;
                    } else {
                        train.direction = 'north';
                    }
                } else {
                    if (train.currentStation > 1) {
                        train.currentStation--;
                    } else {
                        train.direction = 'south';
                    }
                }
                
                // Random speed variation
                train.speed = Math.max(45, Math.min(80, train.speed + (Math.random() - 0.5) * 10));
                
                // Random passenger changes
                const change = Math.floor((Math.random() - 0.5) * 50);
                train.passengers = Math.max(50, Math.min(500, train.passengers + change));
            }
        });

        this.updateTrainPositions();
        this.updateTrainInfo();
        this.updateActiveTrainCount();
    }

    updateActiveTrainCount() {
        const activeTrains = this.trains.filter(t => t.status === 'running').length;
        const activeTrainsElements = document.querySelectorAll('#active-trains, #ops-active-trains');
        activeTrainsElements.forEach(el => {
            if (el) el.textContent = activeTrains;
        });
    }

    resetSimulation() {
        // Reset train positions to original state
        this.trains.forEach((train, index) => {
            train.currentStation = (index % 25) + 1;
            train.speed = Math.floor(Math.random() * 35) + 45;
            train.passengers = Math.floor(Math.random() * 350) + 150;
            if (train.id !== 'T009') {
                train.status = 'running';
            }
        });
        
        this.updateTrainPositions();
        this.updateTrainInfo();
        this.updateOperationsPanel();
    }

    updateAll() {
        this.updateTime();
        if (this.isSimulationRunning) {
            // Simulate minor data changes
            this.simulateDataChanges();
        }
    }

    simulateDataChanges() {
        // Update some chart data periodically for realism
        if (Math.random() < 0.3) { // 30% chance to update
            if (this.charts.energyOverview) {
                this.charts.energyOverview.data.datasets[0].data = [
                    11 + (Math.random() - 0.5) * 2,
                    5.5 + (Math.random() - 0.5) * 1,
                    3.5 + (Math.random() - 0.5) * 0.5
                ];
                this.charts.energyOverview.update('none');
            }
        }
    }

    generateRandomData() {
        return Array.from({length: 6}, () => Math.floor(Math.random() * 50000) + 10000);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new KMRLDigitalTwin();
});