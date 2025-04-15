

feather.replace();

  const servers = [
    { key: "192.168.1.251", elementId: "sip-mc1" },
    { key: "192.168.1.252", elementId: "sip-mc2" },
    { key: "192.168.1.241", elementId: "tcibox-mc1" },
    { key: "192.168.1.242", elementId: "tcibox-mc2" },
    { key: "192.168.1.37", elementId: "pecumaster-mc1" },
    { key: "192.168.1.38", elementId: "pecumaster-mc2" },
    { key: "192.168.1.31", elementId: "pecuclient-mc1" },
    { key: "192.168.1.32", elementId: "pecuclient-m1" },
    { key: "192.168.1.33", elementId: "pecuclient-t1" },
    { key: "192.168.1.34", elementId: "pecuclient-t2" },
    { key: "192.168.1.35", elementId: "pecuclient-m2" },
    { key: "192.168.1.36", elementId: "pecuclient-mc2" },
    { key: "192.168.1.21", elementId: "amplifier-mc1" },
    { key: "192.168.1.22", elementId: "amplifier-m1" },
    { key: "192.168.1.23", elementId: "amplifier-t1" },
    { key: "192.168.1.24", elementId: "amplifier-t2" },
    { key: "192.168.1.25", elementId: "amplifier-m2" },
    { key: "192.168.1.26", elementId: "amplifier-mc2" },
    { key: "192.168.1.81", elementId: "lcd-81" },
    { key: "192.168.1.82", elementId: "lcd-82" },
    { key: "192.168.1.83", elementId: "lcd-83" },
    { key: "192.168.1.84", elementId: "lcd-84" },
    { key: "192.168.1.85", elementId: "lcd-85" },
    { key: "192.168.1.86", elementId: "lcd-86" },
    { key: "192.168.1.87", elementId: "lcd-87" },
    { key: "192.168.1.88", elementId: "lcd-88" },
    { key: "192.168.1.89", elementId: "lcd-89" },
    { key: "192.168.1.90", elementId: "lcd-90" },
    { key: "192.168.1.91", elementId: "lcd-91" },
    { key: "192.168.1.92", elementId: "lcd-92" },
    { key: "192.168.1.101", elementId: "cctv-101" },
    { key: "192.168.1.102", elementId: "cctv-102" },
    { key: "192.168.1.103", elementId: "cctv-103" },
    { key: "192.168.1.104", elementId: "cctv-104" },
    { key: "192.168.1.105", elementId: "cctv-105" },
    { key: "192.168.1.106", elementId: "cctv-106" },
    { key: "192.168.1.107", elementId: "cctv-107" },
    { key: "192.168.1.108", elementId: "cctv-108" },
    { key: "192.168.1.109", elementId: "cctv-109" },
    { key: "192.168.1.110", elementId: "cctv-110" },
    { key: "192.168.1.111", elementId: "cctv-111" },
    { key: "192.168.1.112", elementId: "cctv-112" },
    { key: "192.168.1.151", elementId: "cctv-151" },
    { key: "192.168.1.156", elementId: "cctv-156" },
    { key: "192.168.1.51", elementId: "rtx-51" },
    { key: "192.168.1.52", elementId: "rtx-52" },
    { key: "192.168.1.53", elementId: "rtx-53" },
    { key: "192.168.1.54", elementId: "rtx-54" },
    { key: "192.168.1.55", elementId: "rtx-55" },
    { key: "192.168.1.56", elementId: "rtx-56" },
    { key: "192.168.1.57", elementId: "rtx-57" },
    { key: "192.168.1.58", elementId: "rtx-58" },
    { key: "192.168.1.59", elementId: "rtx-59" },
    { key: "192.168.1.60", elementId: "rtx-60" },
    { key: "192.168.1.61", elementId: "rtx-61" },
    { key: "192.168.1.62", elementId: "rtx-62" },
    { key: "192.168.1.63", elementId: "rtx-63" },
    { key: "192.168.1.64", elementId: "rtx-64" },
    { key: "192.168.1.65", elementId: "rtx-65" },
    { key: "192.168.1.66", elementId: "rtx-66" },
    { key: "192.168.1.67", elementId: "rtx-67" },
    { key: "192.168.1.68", elementId: "rtx-68" },
    { key: "192.168.1.69", elementId: "rtx-69" },
    { key: "192.168.1.70", elementId: "rtx-70" },
    { key: "192.168.1.71", elementId: "rtx-71" },
    { key: "192.168.1.72", elementId: "rtx-72" },
    { key: "192.168.1.73", elementId: "rtx-73" },
    { key: "192.168.1.74", elementId: "rtx-74" },
    { key: "192.168.1.11", elementId: "cpu-11" },
    { key: "192.168.1.12", elementId: "cpu-12" },
    { key: "192.168.1.13", elementId: "hmi-13" },
    { key: "192.168.1.14", elementId: "hmi-14" },
    { key: "192.168.1.15", elementId: "nvr-15" },
    { key: "192.168.1.16", elementId: "nvr-16" },
    { key: "192.168.1.17", elementId: "digio-17" },
    { key: "192.168.1.18", elementId: "digio-18" },
  ];

  const options = {
    clean: true,
    connectTimeout: 4000,
    username: 'pids_monitoring', // username EMQX
    password: 'J@debx132', // password EMQX
    reconnectPeriod: 1000,
  };

  const connectUrl = 'wss://g99a0d52.ala.us-east-1.emqxsl.com:8084/mqtt'; //WSS URL EMQX

  const client = mqtt.connect(connectUrl, options);

  client.on('connect', () => {
    console.log('Connected to EMQX Cloud');
    client.subscribe('rits/monitoring', (err) => {
      if (err) console.error('Subscribe error:', err);
    });
  });

  client.on('message', (topic, message) => {
    const payload = message.toString();
    console.log('MQTT message received:', payload);
  
    servers.forEach(({ key, elementId }) => {
      const statusElement = document.getElementById(elementId);
  
      if (!statusElement) {
        console.warn(`Element with id "${elementId}" not found in HTML.`);
        return;
      }
  
      // Cek apakah payload mengandung IP server
      if (payload.includes(key)) {
        // Deteksi apakah reply atau timeout
        if (payload.includes('Reply from')) {
          statusElement.textContent = "Online";
          statusElement.classList.remove("text-gray-400", "text-red-500");
          statusElement.classList.add("text-green-500");
        } 
        
        else if (payload.includes('offline')) {
          statusElement.textContent = "Offline";
          statusElement.classList.remove("text-gray-400", "text-green-500");
          statusElement.classList.add("text-red-500");
        }
      }
    });
  });
  