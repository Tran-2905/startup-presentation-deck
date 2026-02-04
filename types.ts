export interface SlideProps {
  active: boolean;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  secondaryValue?: number;
}

export enum SlideIndex {
  Title = 0,
  Market = 1,
  Porters = 2,
  Analysis = 3,
  Experts = 4,
  KeyLearnings = 5,
  DetailedCompetitive = 6,
  ActionableFramework = 7,
  StrategicAnalysis = 8,
  BuyerPersonas = 9,
  DataValidation = 10,
  PainPoints = 11,
  MarketPains = 12,
  Goodbye = 13
}