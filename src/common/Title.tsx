import React from 'react';

export interface ITitleProps {
  title?: string;
  name?: string;
}

const TitleWrapper = ({ children, testId }: any) => (
  <div data-test-id={testId}>
    {children}
  </div>
);

const Title = ({ title, name }: ITitleProps) => (
  <TitleWrapper testId={title}>
    <b>{title}</b>
    <span>{name}</span>
  </TitleWrapper>
)

export default Title;