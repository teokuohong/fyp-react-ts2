const counterReducer = (state: number = 0, action: { type: string }): number => {

    let result: number;

    switch (action.type) {
        case 'INCREMENT':
            result = state + 1;
            break;
        case 'DECREMENT':
            result = state - 1;
            break;
        default:
            result = state;
            break;
    }

    return result!;
}

export default counterReducer;