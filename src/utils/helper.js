import {message, notification, Select} from 'antd';
import audio from '../assets/aud/alert.mp3';
import moment from "moment";
import React from "react";
import _ from 'lodash';
import {object} from "prop-types";

message.config({
    duration: 2,
    maxCount: 1,
});

const uuid = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    // return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    return s4() + s4() + '-' + s4();
};
const toast = (type, text) => {
    if(text){
        if(type === 'success'){
            message.success(text);
        } else if(type === 'warning'){
            message.warning(text);
        } else if(type === 'info'){
            message.warning(text);
        } else if(type === 'error') {
            message.error(text);
        }
    }
};

const aud = new Audio(audio);

const openNotification = (title, description, type) => {
  if(type === 'info'){
      notification.info({
          message: title,
          description: description
      });
  } else{
      notification.open({
          message: title,
          description: description,
          onClick: () => {
              console.log('Notification Clicked!');
          },
      });
  }
};

const renderOptions = (options, title = 'title', key = 'value') => {
    if (options) {
        return options.map((option, index) => (
            <Select.Option key={index} value={option[key]}>{option[title]}</Select.Option>
        ))
    }
    return null;
}

const getWeeksInYear = () => {
    let count = moment().weeksInYear();
    return Array.apply(null, new Array(count)).map((e, i) => ({ _id: (i+1) }));
};

const getObjectValues = (object, key) => {
    if(object && Object.keys(object).length && object[key]){
        return object[key];
    } else {
        return  {};
    }
};

const checkValueInObject = (object, key) => {
    return (object && object[key]) ? object[key] : '';
};

const MappedElement = ({data, renderElement}) => {
    if(data){
        return data.map((obj, index, array) => renderElement(obj, index, array))
    }
    return null
};

const classAgainstValue = (value) => {
    if(value){
        switch (value.toLowerCase()) {
            case 'pending':
            case 'subject':
                return '';
            case 'grade':
                return '';
            case 'curriculum':
                return 'purple';
            case 'not submitted':
                return '';
            case 'crossed deadline':
                return '';
        }
    }
    return ''
};

// Accepts the array and key
const groupBy = (array, key) => {
    return _.mapValues(_.groupBy(array, key), clist => clist.map(car => _.omit(car, key)));
};

export {
    uuid,
    toast,
    openNotification,
    aud,
    getWeeksInYear,
    renderOptions,
    getObjectValues,
    checkValueInObject,
    MappedElement,
    groupBy
}
