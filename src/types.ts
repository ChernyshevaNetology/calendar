export interface Props {
  currentYear: string;
  currentDate: string;
  weekDay: string;
  genitiveMonth: string;
  nominativeMonth: string;
  final: DatesArray[];
}

export interface DatesArray {
  date: number;
  otherMonth: boolean;
}
