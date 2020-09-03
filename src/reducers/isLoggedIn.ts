const loggedInReducer = (state: boolean = false, action: { type: string }): boolean => {

    let loggedInStatus: boolean;

    switch (action.type) {
        case 'SIGN_IN':
            loggedInStatus = true;
            break;
        case 'SIGN_OUT':
            loggedInStatus = false;
            break;
        default:
            loggedInStatus = state;
            break;
    }

    return loggedInStatus!;
}

export default loggedInReducer;