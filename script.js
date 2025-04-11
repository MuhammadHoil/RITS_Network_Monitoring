feather.replace();

async function fetchStatuses() {
  try {
    const response = await fetch("http://localhost:1880/status/monitoring"); //fetch http in di node-red
    const data = await response.json();

    const servers = [
      { key: "sip-mc1", elementId: "sip-mc1" },
      { key: "sip-mc2", elementId: "sip-mc2" },
      { key: "tci-box-mc1", elementId: "tcibox-mc1" },
      { key: "tci-box-mc2", elementId: "tcibox-mc2" },
      { key: "pecu-master-mc1", elementId: "pecumaster-mc1" },
      { key: "pecu-master-mc2", elementId: "pecumaster-mc2" },
      { key: "pecu-client-mc1", elementId: "pecuclient-mc1" },
      { key: "pecu-client-m1", elementId: "pecuclient-m1" },
      { key: "pecu-client-t1", elementId: "pecuclient-t1" },
      { key: "pecu-client-t2", elementId: "pecuclient-t2" },
      { key: "pecu-client-m2", elementId: "pecuclient-m2" },
      { key: "pecu-client-mc2", elementId: "pecuclient-mc2" },
      { key: "amplifier-mc1", elementId: "amplifier-mc1" },
      { key: "amplifier-m1", elementId: "amplifier-m1" },
      { key: "amplifier-t1", elementId: "amplifier-t1" },
      { key: "amplifier-t2", elementId: "amplifier-t2" },
      { key: "amplifier-m2", elementId: "amplifier-m2" },
      { key: "amplifier-mc2", elementId: "amplifier-mc2" },
      { key: "lcd-81", elementId: "lcd-81" },
      { key: "lcd-82", elementId: "lcd-82" },
      { key: "lcd-83", elementId: "lcd-83" },
      { key: "lcd-84", elementId: "lcd-84" },
      { key: "lcd-85", elementId: "lcd-85" },
      { key: "lcd-86", elementId: "lcd-86" },
      { key: "lcd-87", elementId: "lcd-87" },
      { key: "lcd-88", elementId: "lcd-88" },
      { key: "lcd-89", elementId: "lcd-89" },
      { key: "lcd-90", elementId: "lcd-90" },
      { key: "lcd-91", elementId: "lcd-91" },
      { key: "lcd-92", elementId: "lcd-92" },
      { key: "cctv-101", elementId: "cctv-101" },
      { key: "cctv-102", elementId: "cctv-102" },
      { key: "cctv-103", elementId: "cctv-103" },
      { key: "cctv-104", elementId: "cctv-104" },
      { key: "cctv-105", elementId: "cctv-105" },
      { key: "cctv-106", elementId: "cctv-106" },
      { key: "cctv-107", elementId: "cctv-107" },
      { key: "cctv-108", elementId: "cctv-108" },
      { key: "cctv-109", elementId: "cctv-109" },
      { key: "cctv-110", elementId: "cctv-110" },
      { key: "cctv-111", elementId: "cctv-111" },
      { key: "cctv-112", elementId: "cctv-112" },
      { key: "cctv-151", elementId: "cctv-151" },
      { key: "cctv-156", elementId: "cctv-156" },
      { key: "rtx-51", elementId: "rtx-51" },
      { key: "rtx-52", elementId: "rtx-52" },
      { key: "rtx-53", elementId: "rtx-53" },
      { key: "rtx-54", elementId: "rtx-54" },
      { key: "rtx-55", elementId: "rtx-55" },
      { key: "rtx-56", elementId: "rtx-56" },
      { key: "rtx-57", elementId: "rtx-57" },
      { key: "rtx-58", elementId: "rtx-58" },
      { key: "rtx-59", elementId: "rtx-59" },
      { key: "rtx-60", elementId: "rtx-60" },
      { key: "rtx-61", elementId: "rtx-61" },
      { key: "rtx-62", elementId: "rtx-62" },
      { key: "rtx-63", elementId: "rtx-63" },
      { key: "rtx-64", elementId: "rtx-64" },
      { key: "rtx-65", elementId: "rtx-65" },
      { key: "rtx-66", elementId: "rtx-66" },
      { key: "rtx-67", elementId: "rtx-67" },
      { key: "rtx-68", elementId: "rtx-68" },
      { key: "rtx-69", elementId: "rtx-69" },
      { key: "rtx-70", elementId: "rtx-70" },
      { key: "rtx-71", elementId: "rtx-71" },
      { key: "rtx-72", elementId: "rtx-72" },
      { key: "rtx-73", elementId: "rtx-73" },
      { key: "rtx-74", elementId: "rtx-74" },
    ];

    servers.forEach(({ key, elementId }) => {
      const statusElement = document.getElementById(elementId);
      if (statusElement && data[key]) {
        if (data[key].status === "online") {
          statusElement.textContent = "Online";
          statusElement.classList.remove("text-gray-400", "text-red-500");
          statusElement.classList.add("text-green-500");
        } else {
          statusElement.textContent = "Offline";
          statusElement.classList.remove("text-gray-400", "text-green-500");
          statusElement.classList.add("text-red-500");
        }
      }
    });
  } catch (error) {
    console.error("Error fetching statuses:", error);
  }
}

// Update status setiap 10 detik
setInterval(fetchStatuses, 50000);
fetchStatuses(); // Panggil pertama kali saat halaman dimuat
