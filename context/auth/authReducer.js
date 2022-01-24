import {
	AUTH_REGISTRO_EXITOSO,
	AUTH_REGISTRO_ERROR,
	AUTH_LOGIN_EXITO,
	AUTH_LOGIN_ERROR,
	AUTH_AUTENTICADO_EXITO,
	AUTH_AUTENTICADO_ERROR,
	AUTH_CERRAR_SESION
} from '../../types';

const authReducer = (state, action) => {
	switch (action.type) {
		case AUTH_REGISTRO_EXITOSO:
		case AUTH_LOGIN_EXITO:
			localStorage.setItem('token', action.payload);
			return {
				...state,
				autenticado: true,
				cargando: false
			};

		case AUTH_AUTENTICADO_EXITO:
			return {
				...state,
				token: localStorage.getItem('token'),
				usuario: action.payload,
				autenticado: true,
				cargando: false
			};

		case AUTH_REGISTRO_ERROR:
		case AUTH_AUTENTICADO_ERROR:
		case AUTH_LOGIN_ERROR:
		case AUTH_CERRAR_SESION:
			localStorage.removeItem('token');
			return {
				...state,
				token: null,
				autenticado: null,
				usuario: null,
				cargando: false
			};

		default:
			return state;
	}
};

export default authReducer;
