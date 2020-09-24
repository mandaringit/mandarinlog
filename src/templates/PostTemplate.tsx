import React from 'react';
import { ITemplateProps } from '../interface';

type IPostTemplateProps = ITemplateProps<{
  html: string;
  title: string;
  date: string;
}>;

const PostTemplate: React.FC<IPostTemplateProps> = (props) => {
  const { title, date, html } = props.pageContext;
  return (
    <>
      <h2>{title}</h2>
      <h4>{date}</h4>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
};

export default PostTemplate;
