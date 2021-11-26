export const selectedUser = (state) => {
    const {
        user: { userSelected },
        message: { messages }
    } = state;

    if(userSelected != null) {
        return messages[userSelected.id]
    }
    return []
}