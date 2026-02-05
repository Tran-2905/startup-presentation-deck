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
  CompetitorsCriteria = 9,
  CompetitiveAnalysis = 10,
  BuyerPersonas = 11,
  DataValidation = 12,
  PainPoints = 13,
  MarketPainsIntro = 14,
  MarketSolutions = 15,
  Goodbye = 16
}