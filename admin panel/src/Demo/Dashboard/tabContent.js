import React from 'react'
import {Row, Col, Card, Table, Tabs, Tab} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';
function tabContent() {
  return (
    <>
    <Aux>
    <div className="media friendlist-box align-items-center justify-content-center m-b-20">
        <div className="m-r-10 photo-table">
            <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width: '40px'}} src={avatar1} alt="activity-user"/></a>
        </div>
        <div className="media-body">
            <h6 className="m-0 d-inline">Silje Larsen</h6>
            <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-up f-22 m-r-10 text-c-green"/>3784</span>
        </div>
    </div>
    <div className="media friendlist-box align-items-center justify-content-center m-b-20">
        <div className="m-r-10 photo-table">
            <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></a>
        </div>
        <div className="media-body">
            <h6 className="m-0 d-inline">Julie Vad</h6>
            <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-up f-22 m-r-10 text-c-green"/>3544</span>
        </div>
    </div>
    <div className="media friendlist-box align-items-center justify-content-center m-b-20">
        <div className="m-r-10 photo-table">
            <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width: '40px'}} src={avatar3} alt="activity-user"/></a>
        </div>
        <div className="media-body">
            <h6 className="m-0 d-inline">Storm Hanse</h6>
            <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-down f-22 m-r-10 text-c-red"/>2739</span>
        </div>
    </div>
    <div className="media friendlist-box align-items-center justify-content-center m-b-20">
        <div className="m-r-10 photo-table">
            <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width: '40px'}} src={avatar1} alt="activity-user"/></a>
        </div>
        <div className="media-body">
            <h6 className="m-0 d-inline">Frida Thomse</h6>
            <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-down f-22 m-r-10 text-c-red"/>1032</span>
        </div>
    </div>
    <div className="media friendlist-box align-items-center justify-content-center m-b-20">
        <div className="m-r-10 photo-table">
            <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width: '40px'}} src={avatar2} alt="activity-user"/></a>
        </div>
        <div className="media-body">
            <h6 className="m-0 d-inline">Silje Larsen</h6>
            <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-up f-22 m-r-10 text-c-green"/>8750</span>
        </div>
    </div>
    <div className="media friendlist-box align-items-center justify-content-center">
        <div className="m-r-10 photo-table">
            <a href={DEMO.BLANK_LINK}><img className="rounded-circle" style={{width: '40px'}} src={avatar3} alt="activity-user"/></a>
        </div>
        <div className="media-body">
            <h6 className="m-0 d-inline">Storm Hanse</h6>
            <span className="float-right d-flex  align-items-center"><i className="fa fa-caret-down f-22 m-r-10 text-c-red"/>8750</span>
        </div>
    </div>
</Aux></>
  )
}

export default tabContent;