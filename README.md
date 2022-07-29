# 1 Create Store file
# 2 Create Reducers / Actions
# 3 Create Saga
# 4 How to pass param with saga to request function

# 4.1 Создать два action 
export const GET_MESSAGE = "GET_MESSAGE";
export const SET_MESSAGE = "SET_MESSAGE";

export const getMessage = (payload: number) => {
    return {
        type: GET_MESSAGE,
        payload: payload
    }
}

export const setMessage = (payload: string) => {
    return {
        type: SET_MESSAGE,
        payload: payload
    }
}

# 4.2 Создать редьюсер
const initialState = {
    message: ''
}

const messageReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_MESSAGE:
            return { ...state }
        case SET_MESSAGE:
            return { ...state, message: action.payload }
        default:
            return { ...state }
    }
}

# 4.3 Подвязать redux в компонент
  const message = useSelector((store: any) => store.message.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessage(1)) // передача параметра в action далее попадает в saga
  }, [dispatch]);

  # 4.4 Работа с сагой
  function* sendMessageSaga(action: any) { // когда запускается функция
    try {        
        const { data } = yield call(axios.get, 'https://jsonplaceholder.typicode.com/todos/' + action.payload) 
        // action.payload содержит данные переданные из компонента в action, используется как параметр для вызова запроса
        yield put(setMessage(data)); // сохраняем данные в стор из запроса
    } catch (error: any) {
        console.error(error.message)
    }
}

function* messageSaga() {
    yield all([takeLatest(GET_MESSAGE, sendMessageSaga)]) // подвязываемся на action (GET_MESSAGE) и запускаем нашу функцию
}
