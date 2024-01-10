import React, { FC, ReactElement, useState } from "react";
import { useForm, SubmitHandler, SubmitErrorHandler} from "react-hook-form";
import cn from "classnames";
import "./RegisterForm.scss";

interface RegisterForm {
    name: string;
    email: string;
    phone: string;
    password: string;
}

function formatPhoneNumber(value: string) {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 3) {
        return `${phoneNumber.slice(0, 3)}`;
    }
    if (phoneNumberLength < 6) {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    if (phoneNumberLength < 8) {
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3,6)}-${phoneNumber.slice(6, 8)}-${phoneNumber.slice(8, 10)}`;
} 

/**
 * Компонент RegisterForm. Это форма <b>"Регистрации"</b> на сайте. Пока вы не проходили отправку данных на сервер, поэтому в
 * формах должна быть только валидация и вывод данных в консоль с одновременной очисткой формы.
 * Форма должна быть выполнена в сторибук и прямо там должна быть возможность изменять данные в форме, 
 * также должна работать валидация формы для пустых и некорректных данных. Некорректным может быть ввод <i>email/пароля</i> в форме 
 *  <b>"Регистрации"</b>
 */
export const RegisterForm: FC = (): ReactElement => {    
    const { register, handleSubmit, formState: { errors }, reset } = useForm<RegisterForm>({
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            password: "",
        }
    });

    const [inputPhone, setInputPhone] = useState("");

    const submit: SubmitHandler<RegisterForm> = data => {
        console.log("Валидные данные из формы регистрации, выведены в консоль: ", data);
        reset({
            name: "",
            email: "",
            phone: "",
            password: "",
        });
        setInputPhone("");
    };

    const error: SubmitErrorHandler<RegisterForm> = data => {
        console.log("error: data", data);
    };

    const isEmail = (email: string) => {
        return /^(([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9-]+(\.[a-z0-9-]+)*\.[a-z]{2,6})?$/.test(email);
    };

    const isPhone = (phone: string) => {
        return /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/.test(phone);
    }

    const inputPhoneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formattedPhoneNumber = formatPhoneNumber(e.target.value);
        setInputPhone(formattedPhoneNumber);
    };

    return (
        <div className="page-register bg-white p-3">
            <h1 className="section-title h3"><span>Registration</span></h1>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <form onSubmit={handleSubmit(submit, error)}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label required">Name</label>
                            <input 
                                type="text"
                                placeholder="Your name"
                                className={cn("form-control", {"invalid-input": errors.name || false})}
                                {...register("name", {required: true})}
                            />
                            <div className={cn("invalid-feedback", {show: errors.name || false})}>
                                Name is required
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label required">Email</label>
                            <input
                                type="email"
                                placeholder="some@some.some"
                                className={cn("form-control", {"invalid-input": errors.email || false})}
                                {...register("email", {required: true, validate: isEmail})}
                            />
                            <div className={cn("invalid-feedback", {show: errors.email || false})}>
                                Please, privide a valide email
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label required">Phone</label>
                            <input
                                value={inputPhone}
                                type="tel"
                                placeholder="(___)___-__-__"
                                className={cn("form-control", {"invalid-input": errors.phone || false})}
                                {...register("phone", {required: true, validate: isPhone, onChange(event) {
                                    inputPhoneHandler(event);
                                },})}
                            />
                            <div className={cn("invalid-feedback", {show: errors.phone || false})}>
                                Phone is required
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label required">Password</label>
                            <input
                                type="password"
                                placeholder="Your password"
                                className={cn("form-control", {"invalid-input": errors.password})}
                                {...register("password", {required: true})}
                            />
                            <div className={cn("invalid-feedback", {show: errors.password || false})}>
                                Password is required
                            </div>
                        </div>
                        <div className="mb-3">
                            <button 
                                type="submit"
                                className="btn btn-warning"
                            >Registration</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};