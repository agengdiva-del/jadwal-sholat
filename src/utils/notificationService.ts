/**
 * Native Notification & Vibration Trigger for Prayer Times
 */

export async function requestNotificationPermission(): Promise<boolean> {
  if (typeof window === 'undefined' || !('Notification' in window)) {
    return false;
  }

  if (Notification.permission === 'granted') {
    return true;
  }

  if (Notification.permission !== 'denied') {
    const perm = await Notification.requestPermission();
    return perm === 'granted';
  }

  return false;
}

export function sendPrayerNotification(prayerName: string, timeStr: string, locationName: string) {
  if (typeof window === 'undefined' || !('Notification' in window)) {
    return;
  }

  if (Notification.permission === 'granted') {
    try {
      const title = `Waktu ${prayerName} Telah Tiba (${timeStr})`;
      const options: NotificationOptions = {
        body: `Saatnya menunaikan ibadah Sholat ${prayerName} untuk wilayah ${locationName}. Mari dirikan sholat tepat waktu.`,
        icon: '/pwa-192x192.png',
        badge: '/pwa-192x192.png',
        tag: `prayer-${prayerName}-${Date.now()}`,
        requireInteraction: false,
        silent: false,
      };

      if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
        navigator.serviceWorker.ready.then((reg) => {
          reg.showNotification(title, options);
        });
      } else {
        new Notification(title, options);
      }
    } catch (e) {
      console.warn('Could not dispatch notification:', e);
    }
  }
}

/**
 * Dispatch early reminder 7 minutes before prayer
 */
export function sendEarlyPrayerNotification(prayerName: string, timeStr: string, minutesLeft: number = 7) {
  if (typeof window === 'undefined' || !('Notification' in window)) {
    return;
  }

  if (Notification.permission === 'granted') {
    try {
      const title = `⏳ ${minutesLeft} Menit Menuju Waktu ${prayerName} (${timeStr})`;
      const options: NotificationOptions = {
        body: `Waktu sholat ${prayerName} akan masuk dalam ${minutesLeft} menit lagi. Mari bersiap berwudhu dan merapikan urusan.`,
        icon: '/pwa-192x192.png',
        badge: '/pwa-192x192.png',
        tag: `early-prayer-${prayerName}-${Date.now()}`,
        requireInteraction: false,
        silent: false,
      };

      if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
        navigator.serviceWorker.ready.then((reg) => {
          reg.showNotification(title, options);
        });
      } else {
        new Notification(title, options);
      }
    } catch (e) {
      console.warn('Could not dispatch early prayer notification:', e);
    }
  }
}

/**
 * Dispatch early reminder 1 day before major Islamic event / holy day
 */
export function sendEarlyEventNotification(eventTitle: string, eventVirtue: string) {
  if (typeof window === 'undefined' || !('Notification' in window)) {
    return;
  }

  if (Notification.permission === 'granted') {
    try {
      const title = `🌙 Besok: ${eventTitle}`;
      const options: NotificationOptions = {
        body: `Peringatan hari besar besok: ${eventVirtue.slice(0, 120)}... Siapkan niat dan amalan terbaik Anda.`,
        icon: '/pwa-192x192.png',
        badge: '/pwa-192x192.png',
        tag: `early-event-${eventTitle}-${Date.now()}`,
        requireInteraction: false,
        silent: false,
      };

      if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
        navigator.serviceWorker.ready.then((reg) => {
          reg.showNotification(title, options);
        });
      } else {
        new Notification(title, options);
      }
    } catch (e) {
      console.warn('Could not dispatch event notification:', e);
    }
  }
}

