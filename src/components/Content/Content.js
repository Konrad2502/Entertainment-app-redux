import React from 'react';
import './Content.scss';

export default function Content(props) {
  return (
    <div className='content'>{props.children}</div>
  )
}
