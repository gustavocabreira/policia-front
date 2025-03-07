export enum NotificationType {
  SUCCESS,
  WARNING,
  DANGER,
}

export interface INotification {
  title: string,
  content: string,
  type: NotificationType
  id: number,
}