export default function formatDate(date: string | Date, displayTime: boolean | null): string {
  if (!date) return '';

  const defaultOptions: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  };

  const options: Intl.DateTimeFormatOptions = displayTime
    ? { ...defaultOptions, hour: '2-digit', minute: '2-digit' }
    : defaultOptions;

  return new Date(date).toLocaleString('pt-BR', options);
}