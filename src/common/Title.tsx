import React from 'react';

export interface ITitleProps {
  title?: string;
  name?: string;
}

const Title = ({ title, name }: ITitleProps) => (
  <>
    <div>{title}</div>
    <div>{name}</div>
  </>
)

export default Title;