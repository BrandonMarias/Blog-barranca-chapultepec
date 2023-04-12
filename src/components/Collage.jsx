import React from 'react'
import { Imagen } from './Imagen'

export const Collage = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col col-sm-4">
                <Imagen number={13} extencion="jpeg" />
            </div>
            <div className="col col-sm-4">
                <Imagen number={12} extencion="jpeg" />
            </div>
            <div className="col col-sm-4">
                <Imagen number={11} extencion="jpeg" />
            </div>
        </div>
        <div className="row">
            <div className="col col-sm-4">
                <Imagen number={7} extencion="jpeg" />
            </div>
            <div className="col col-sm-4">
                <Imagen number={9} extencion="jpeg" />
            </div>
            <div className="col col-sm-4">
                <Imagen number={10} extencion="jpeg" />
            </div>
        </div>
    </div>
  )
}
