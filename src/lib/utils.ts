import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function highlightPrePaid(text?: string) {
  if (!text) return text;
  return text.replace(/(pre-?paid)/gi, '<span class="text-theme-pink font-bold">$1</span>');
}

export function calculateActivityDuration(timeStr?: string) {
  if (!timeStr || !timeStr.includes('-')) return '';
  const [start, end] = timeStr.split('-').map(t => t.trim());
  if (!start || !end) return '';
  const [sh, sm] = start.split(':').map(Number);
  const [eh, em] = end.split(':').map(Number);
  let mins = (eh * 60 + em) - (sh * 60 + sm);
  if (mins < 0) mins += 24 * 60;
  const hrs = Math.floor(mins / 60);
  const m = mins % 60;
  if (hrs > 0 && m > 0) return `${hrs}h ${m}m`;
  if (hrs > 0) return `${hrs}h`;
  return `${m}m`;
}

export function calculateDayDuration(activities: any[]) {
  let totalMins = 0;
  activities.forEach(act => {
      if (act.time && act.time.includes('-')) {
          const [start, end] = act.time.split('-').map(t => t.trim());
          if (start && end) {
              const [sh, sm] = start.split(':').map(Number);
              const [eh, em] = end.split(':').map(Number);
              let mins = (eh * 60 + em) - (sh * 60 + sm);
              if (mins < 0) mins += 24 * 60;
              totalMins += mins;
          }
      }
  });
  const hrs = Math.floor(totalMins / 60);
  const mins = totalMins % 60;
  return hrs > 0 ? (mins > 0 ? `${hrs}h ${mins}m` : `${hrs}h`) : `${mins}m`;
}

export function getDayOfWeek(dateStr: string) {
    const [d, m, y] = dateStr.split('/');
    const dateObj = new Date(parseInt(y), parseInt(m) - 1, parseInt(d));
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekdays[dateObj.getDay()];
}
