import { Col, Row, Form, Button, Checkbox, Input } from 'antd';
import CustomInput from '../../components/Antd/Input';
import { login } from './service/service.login';
import { useNavigate } from 'react-router-dom';

type LoginFormValues = {
    username: string;
    password: string;
    remember: boolean;
}
const LoginPage = () => {
    const navigate = useNavigate();
    
    const onFinish = async (values: LoginFormValues) => {
        try {
            const response = await login(values.username, values.password)
            if (response.status === 200) {
                navigate('/home');
                localStorage.setItem('token', response.data.access_token);
            }
            
        } catch (error) {
            console.log(error);
            navigate('/error');
        }
    };



    return (
        <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
            <Col span={8}>
                <Form
                    name="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <h1 style={{ textAlign: 'center' }}>Login</h1>
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Por favor, ingresa tu nombre de usuario'
                            }, 
                             {
                                type: 'email',
                                message: 'Por favor, ingresa un correo electrónico válido'
                            }
                        ]}
                    >
                        <CustomInput placeholder="Ingrese su mail" />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Por favor, ingresa tu contraseña'
                            },
                        ]}
                    >
                        <Input.Password placeholder="Contraseña" />
                    </Form.Item>

                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Recordarme</Checkbox>
                        </Form.Item>

                        <a href="/forgot-password" style={{ float: 'right' }}>
                            ¿Olvidaste tu contraseña?
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
                            Iniciar sesión
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
};

export default LoginPage;
