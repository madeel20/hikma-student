import React, { useState } from 'react';
import {CCardWrapper, CNav, CModal, CTags} from "../../uiComponents";
import {getWeeksInYear, renderOptions} from "../../utils/helper";
import {connect} from "react-redux";
import {lessons} from "./data";
import { AiOutlinePlus } from 'react-icons/ai';
import {Button, DatePicker, Form, Input, Select} from "antd";
import {selectOptions} from "../myProfile/data";

function LessonTag({className = '', onClick, name, week}) {
    return(
        <div className={`lesson-tag ${className}`} onClick={onClick}>
            <span>{name}</span>
            <span>{week}</span>
        </div>
    )
}

const CForm = () => {

    const onFinish = values => {
        console.log('values', values)
    };

    return (
        <Form name="add-lesson"
              className="add-lesson-form-container h-100 d-flex flex-column"
              initialValues={{}}
              onFinish={onFinish}>

            <div className="add-lesson-form h-100">
                <div className="add-lesson-form-left">

                    <h6>Lesson Plan Details</h6>

                    <Form.Item name="subject">
                        <Select defaultValue="" className="c-select">
                            <Select.Option value="">Subject</Select.Option>
                            {renderOptions(selectOptions)}
                        </Select>
                    </Form.Item>
                    <Form.Item name="curriculum">
                        <Select defaultValue="" className="c-select">
                            <Select.Option value="">Curriculum</Select.Option>
                            {renderOptions(selectOptions)}
                        </Select>
                    </Form.Item>
                    <Form.Item name="grade">
                        <Select defaultValue="" className="c-select">
                            <Select.Option value="">Grade</Select.Option>
                            {renderOptions(selectOptions)}
                        </Select>
                    </Form.Item>
                    <div className="two-form-item">
                        <div className="two-form-item-left">
                            <Form.Item name="workExperienceFrom" className="c-data">
                                <DatePicker />
                            </Form.Item>
                        </div>
                        <div className="two-form-item-right">
                            <Form.Item name="workExperienceTo" className="c-data">
                                <DatePicker />
                            </Form.Item>
                        </div>
                    </div>
                    <Form.Item name="week">
                        <Select defaultValue="" className="c-select">
                            <Select.Option value="">Week</Select.Option>
                            {renderOptions(selectOptions)}
                        </Select>
                    </Form.Item>

                </div>
                <div className="add-lesson-form-right d-flex flex-column ">
                    <h4>Lesson Plan</h4>
                    <div className="flex-1">
                        <Form.Item name="q1" className="c-input">
                            <Input placeholder="Topic/Chapter" />
                        </Form.Item>
                        <Form.Item name="q2" className="c-input">
                            <Input placeholder="No. of Periods aka no. of weeks" />
                        </Form.Item>
                        <Form.Item name="q3" className="c-input">
                            <Input placeholder="Assignment from text book (page or reference) " />
                        </Form.Item>
                    </div>
                    <Form.Item className="mb-0">
                        <Button htmlType="submit" className="c-button c-button-primary button-with-loading" block>
                            Submit
                        </Button>
                    </Form.Item>
                </div>
            </div>
        </Form>
    );
};

function LessonPlan(props) {

    const {lessonsData} = props;
    const [detailModalIsOpen, setDetailModal] = useState(false);
    const [addModal, setAddModal] = useState(false);
    const [lessonDetail, setLessonDetail] = useState({});

    const renderLessonTag = (array) => {
        if(array && array.length){
            return array.map((obj, i) => <LessonTag key={i}
                                                    name={obj.name}
                                                    onClick={() => toggleDetailModal(!detailModalIsOpen, obj)}
                                                    week={obj.week} /> )
        }
        return null;
    };

    const renderWeeksView = (array) => {
        if(array && array.length){
            return <ul className="lessons-list m-0 p-0">
                {array.map((obj, i) => {
                    return (
                        <li key={i} className="lessons-list-item d-flex flex-row">
                            <span className="lessons-list-item-title">{`Week ${obj._id}`}</span>
                            <div className="lessons-list-item-lessons flex-1">
                                {renderLessonTag(obj.data)}
                            </div>
                        </li>
                    )
                })}
            </ul>
        }
        return null;
    };

    const toggleDetailModal = (isOpen, data) => {
        setDetailModal(isOpen);
        setLessonDetail(isOpen ? data : {});
    };

    return (
        <div className="lesson-plan w-100 d-flex flex-column">

            <CNav />

            <h3 className="page-title"> Lesson Plan </h3>

            <CCardWrapper className="c-card-wrapper w-100 p-0 flex-1">
                <div className="weeks-view">
                    {renderWeeksView(lessonsData)}
                </div>
            </CCardWrapper>

            <CModal
                show={detailModalIsOpen}
                className="right-side"
                onHide={() => toggleDetailModal(false)}
            >
                <div className="lesson-detail-view">
                    <h4>{lessonDetail && lessonDetail.week ? lessonDetail.week : ''}</h4>
                    <CTags data={lessonDetail.tags}/>
                    <ul>
                        <li>
                            <span>Topic/Chapter</span>
                            <span>
                              {lessonDetail && lessonDetail.q1 ? lessonDetail.q1 : ''}
                          </span>
                        </li>
                        <li>
                            <span>No. of Periods aka no. of weeks</span>
                            <span>
                              {lessonDetail && lessonDetail.q2 ? lessonDetail.q2 : ''}
                          </span>
                        </li>
                        <li>
                            <span>Assignment from text book (page or reference)</span>
                            <span>
                              {lessonDetail && lessonDetail.q3 ? lessonDetail.q3 : ''}
                          </span>
                        </li>
                    </ul>
                </div>
            </CModal>

            <CModal
                show={addModal}
                className="right-side lg"
                onHide={() => setAddModal(false)}
            >
               <div className="add-lesson h-100">
                   <CForm />
               </div>
            </CModal>

            <button className="c-fab-button"  onClick={() => setAddModal(!addModal)}>
                <AiOutlinePlus />
            </button>

        </div>
    );
}
const mapDispatchToState = () => {
    let weeks = getWeeksInYear();
    weeks = weeks.map(w => {
        w.data = w.data ? w.data : [];
        w.data = lessons.filter(l => l.id === w._id);
        return w;
    });
    return {
        lessonsData: weeks,
    }
};
const mapDispatchToProps = {};
export default connect(mapDispatchToState, mapDispatchToProps)(LessonPlan);
