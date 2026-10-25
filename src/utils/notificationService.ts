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
