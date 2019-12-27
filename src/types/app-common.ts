import { ReactNode } from 'react';
import { RouteProps } from 'react-router-dom';
import { ReferenceInfo } from 'components/References';

export interface RouteInfo extends LinkInfo, OmitFrom<RouteProps, 'path'> {
  childRoutes?: RouteInfo[];
}

export interface LinkInfo {
  name: string;
  path: string;
}

export interface QuestionInfo {
  question: ReactNode;
  answer: ReactNode;
  references?: ReferenceInfo[];
  todos?: string[];
}

export interface ValueTargetEvent<TValue = string> {
  target: { value: TValue };
}
