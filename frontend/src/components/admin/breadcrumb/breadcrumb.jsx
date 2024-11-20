import React from 'react'
import './breadcrumb.css'
import Link from 'next/link'
const Breadcrumb = (props) => {
  return (
    <div >
      <ul className="breadcrumb">
        <Link href='/admin'>
          <li className="breadcrumb__item breadcrumb__item-firstChild">
            <span className="breadcrumb__inner">
              <span className="breadcrumb__title">Home</span>
            </span>
          </li>
        </Link>
        {props.middletitle1 ? (
          <Link href={`${props.middletitle1 ? (props.middletitle1_url) : ('')}`}><li className="breadcrumb__item">
            <span className="breadcrumb__inner">
              <span className="breadcrumb__title">{props.middletitle1}</span>
            </span>
          </li></Link>
        ) : ('')}
        {props.middletitle2 ? (
          <Link href={`${props.middletitle1 ? (props.middletitle2_url) : ('')}`}><li className="breadcrumb__item">
            <span className="breadcrumb__inner">
              <span className="breadcrumb__title">{props.middletitle2}</span>
            </span>
          </li></Link>
        ) : ('')}
        {props.middletitle3 ? (
          <Link href={`${props.middletitle1 ? (props.middletitle3_url) : ('')}`}><li className="breadcrumb__item">
            <span className="breadcrumb__inner">
              <span className="breadcrumb__title">{props.middletitle3}</span>
            </span>
          </li></Link>
        ) : ('')}
        {props.title ? (
          <Link href=''><li className="breadcrumb__item active">
            <span className="breadcrumb__inner">
              <span className="breadcrumb__title">{props.title}</span>
            </span>
          </li></Link>
        ) : ('')}
        {props.content ? (props.content) : ('')}
      </ul>
    </div >
  )
}

export default Breadcrumb