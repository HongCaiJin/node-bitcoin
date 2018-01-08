import React, { Component } from 'react'
import styled from 'styled-components'
import styles from '/const/styles'
import { createInputFile } from '/api/browser'
import Input from '/components/styled/Input'
import Div from '/components/styled/Div'
import IconSearch from 'react-icons/lib/md/search'
import IconClose from 'react-icons/lib/md/close'

export default function(props) {
    return (
        <Container value={props.value || ''}>
            <div className="icon">
                <IconSearch size={24} color={styles.color.front5} />
            </div>
            <div className="input">
                <Input {...props} />
            </div>
            <div className="delete" onClick={props.onClear}>
                <IconClose size={24} color="black" />
            </div>
            <Div clear="both" />
        </Container>
    )
}

const Container = styled.div`
    position: relative;

    & .icon {
        float: left;
        text-align: center;
        width: 40px;
        height: 31px;
        background-image: linear-gradient(#fff, ${styles.color.background1});
        border: 1px solid
            ${props =>
                props.invalid ? styles.color.error : styles.color.background5};
        font-weight: bold;
        font-size: 12px;
        display: inline-block;
        line-height: 20px;
        border-radius: 5px 0 0 5px;
        border-right: 0;
        padding-top: 6px;
    }
    & .input {
        float: left;
        width: calc(100% - 42px);
    }
    & .delete {
        display: ${props => (props.value.length > 0 ? 'block' : 'none')};
        position: absolute;
        width: 40px;
        height: 31px;
        right: 0;
        text-align: center;
        padding-top: 7px;
        opacity: 0.3;
    }
    & .delete:hover {
        opacity: 1;
    }
`
