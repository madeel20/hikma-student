import React from "react";
import {Dropdown, Menu} from "antd";
import { FiSearch } from 'react-icons/fi';

function SelectCategoriesFilter({categories, click}){
    function renderCategoriesMenu(array){
        return (
            <Menu className="categories-dropdown">
                {array ? array.map((menu, index) => {
                    return (
                        <Menu.SubMenu title={menu.title} key={index}>
                            <div className="submenu-input">
                                <FiSearch />
                                <input type="text" placeholder="Search"/>
                            </div>
                            {menu.children ? menu.children.map((menuItem, i) =>
                                <Menu.Item key={i}>{menuItem.title}</Menu.Item>) : null}
                        </Menu.SubMenu>
                    )
                }) : null}
            </Menu>
        )
    }
    return(
        <div className="select-categories-filter">
            <Dropdown
                overlayClassName="categories-sub-dropdown"
                trigger={['click']}
                disabled={!(categories)}
                overlay={renderCategoriesMenu(categories)}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    + Add Categories
                </a>
            </Dropdown>
        </div>
    )
}

export default SelectCategoriesFilter;
