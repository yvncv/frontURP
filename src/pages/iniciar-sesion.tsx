import {ResponsivePage} from "../components/ResponsivePage";
import {Button, Form} from "react-bootstrap";
import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useLogin} from "../hooks/login/useLogin";
import {User} from "../types/User";
import {useState} from "react";
import {useRouter} from "next/router";
import Link from "next/link";

const loginSchema = yup.object({
    email: yup.string().required('El email es requerido').email('EL email tiene que tener el siguiente formato ejemplo@ejemplo.com'),
    password: yup.string().required('La constraseña es requerido').min(6, 'La contraseña tiene que tener como minimo 6 caracteres'),
}).required();

const IniciarSesion = (props: { user?: User }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<{ email: string; password: string; }>({
        resolver: yupResolver(loginSchema),
    });
    const [user, setUser] = useState<User | undefined>(props?.user);
    const router = useRouter();


    const { login } = useLogin();

    const handleOnSubmit = async ({ email, password }: { email: string; password: string; }) => {
        const response = await login(email, password);

        if (typeof response !== 'string') {
            setUser(response);

            if (response.role.id === 3) {
                await router.push('/');
            } else {
                await router.push('/');
            }
        } else {
            alert(response);
            return;
        }
    };

    return (
        <div className="iniciar-sesion-pg">
        <Form className="formulario-login-urp" onSubmit={handleSubmit(handleOnSubmit)}>
            <h1>Intranet - U R P</h1>
            <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" {...register("email")} />
                {errors.email && (
                    <Form.Text className="text-danger">
                        {errors.email.message}
                    </Form.Text>
                )}
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" {...register("password")} />
                {errors.password && (
                    <Form.Text className="text-danger">
                        {errors.password.message}
                    </Form.Text>
                )}
            </Form.Group>
            <Button variant="primary" type="submit" className="btn_loguin">
                Iniciar sesion
            </Button>
        </Form>
        <div
            className="waveWrappe r waveAnimation">
            <div className="waveWrapperInner bgTop">
                <div
                    className="wave waveTop"
                ></div>
            </div>
            <div className="waveWrapperInner bgMiddle">
                <div
                    className="wave waveMiddle"
                ></div>
            </div>
            <div className="waveWrapperInner bgBottom">
                <div
                    className="wave waveBottom "
                ></div>
            </div>
        </div>
    </div>
    );
}

export default IniciarSesion;
