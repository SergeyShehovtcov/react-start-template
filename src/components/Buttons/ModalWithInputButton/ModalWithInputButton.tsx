import React, { FC, ReactElement, useState, ChangeEvent, } from "react";
import { Modal } from "../../Modal";

/**
 * Нужно создать дополнительный компонент в сторибук. В нем будет кнопка, при нажатии на которую будет открываться модальное окно,
 * а также чуть выше кнопки - текстовый инпут. Текст из этого инпута должен отображаться в модальном окне.
 */
export const ModalWithInputButton: FC = (): ReactElement => {
    const [input, setInput] = useState<string>("");
    const [visible, setVisible] = useState<boolean>(false);

    const handlerChangeInput = (e: ChangeEvent<HTMLInputElement>): void => {
       setInput(e.target.value);
    };
    
    const handlerModalWindow = (visible: boolean): void => {
        setVisible(visible);
    };

    return (
        <>
            <input onChange={(e) => handlerChangeInput(e)} value={input}></input><br /><br />
            <button onClick={() => handlerModalWindow(true)}>Кнопка</button>
            <Modal visible={visible} onCloseModalWindow={handlerModalWindow} children={input}/>
        </>
    );
};