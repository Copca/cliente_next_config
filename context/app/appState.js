import { useReducer } from 'react';

// import clienteAxios from '../../config/axios';

import appContext from './appContext';
import appReducer from './appReducer';

import { MOSTRAR_ALERTA } from '../../types';

const AppState = props => {
	const initialState = {
		mensaje_archivo: null
	};

	// Dispatch para ejecutar las acciones
	const [state, dispatch] = useReducer(appReducer, initialState);

	/**
	 * Serie de funciónes para el CRUD
	 */

	const mostrarAlerta = mensaje => {
		dispatch({
			type: MOSTRAR_ALERTA,
			payload: mensaje
		});

		setTimeout(() => {
			dispatch({
				type: LIMPIAR_ALERTA
			});
		}, 3000);
	};

	return (
		<appContext.Provider
			value={{
				mensaje_archivo: state.mensaje_archivo,
				mostrarAlerta
			}}
		>
			{props.children}
		</appContext.Provider>
	);
};

export default AppState;
